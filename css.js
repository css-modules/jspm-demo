import Core from 'css-modules-loader-core'
import path from 'path'

class CSSLoader {
  constructor(plugins) {
    this.fetch = this.fetch.bind(this)
    if (plugins) Core.plugins = plugins
  }

  fetch( load, fetch ) {
    // Use the default Load to fetch the source
    return fetch( load ).then( source => {
      // Pass this to the CSS Modules core to be translated
      // triggerImport is how dependencies are resolved
      return Core.load( source, load.metadata.pluginArgument, "A", this.triggerImport )
    } ).then( ( { injectableSource, exportTokens } ) => {
      // Once our dependencies are resolved, inject ourselves
      this.createElement( injectableSource )
      // And return out exported variables
      return `module.exports = ${JSON.stringify( exportTokens )}`
    } )
  }

// Uses a <link> with a Blob URL if that API is available, since that
// has a preferable debugging experience. Falls back to a simple <style>
// tag if not.
  createElement(source) {
    let head = document.getElementsByTagName( 'head' )[0],
      cssElement

    if ( !window.Blob || !window.URL || !URL.createObjectURL || navigator.userAgent.match( /phantomjs/i ) ) {
      cssElement = document.createElement( 'style' )
      cssElement.innerHTML = source
    } else {
      let blob = new Blob( [source], { type: 'text/css' } ),
        url = URL.createObjectURL( blob )

      cssElement = document.createElement( 'link' )
      cssElement.setAttribute( 'href', url )
      cssElement.setAttribute( 'rel', 'stylesheet' )
    }
    head.appendChild( cssElement )
  }

// Figure out the path that System will need to find the right file,
// and trigger the import (which will instantiate this loader once more)
  triggerImport( _newPath, relativeTo, trace ) {
    let newPath = _newPath.replace( /^["']|["']$/g, "" ),
      rootRelativePath = "." + path.resolve( path.dirname( relativeTo ), newPath )
    return System.import( `${rootRelativePath}!${__moduleName}` )
  }
}

export default new CSSLoader([
  Core.extractImports,
  Core.scope
])
