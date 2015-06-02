import Core from 'css-modules-loader-core'


export const fetch = ( load, fetch ) => {
  return fetch( load ).then( source => {
    return Core.load( source, load.metadata.pluginArgument, "a" )
  } ).then( ( { injectableSource, exportTokens } ) => {
    console.log(injectableSource)
    console.log(exportTokens)
    return ""
  })
}
