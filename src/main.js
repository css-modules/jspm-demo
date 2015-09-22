import styles from './main.css!'
console.log(styles)

import colors from 'colors.css'
console.log(colors)

document.querySelector('main#outlet').innerHTML = `
  <div class="${styles.lol}">JSPM and CSS Modules = &lt;3</div>
`

export let __hotReload = true
