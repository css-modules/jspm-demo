import styles from './main.css!'

document.querySelector('main#outlet').innerHTML = `
  <div class="${styles.lol}">JSPM and CSS Modules = &lt;3</div>
`

console.log("The order of fetching is unimportant, but the order of instantiation should have been:")
console.log("src/a.css")
console.log("src/backgrounds.css")
console.log("src/a.css")
console.log("src/main.css")
