// document.querySelectorAll('li_dropdown > a').forEach(e => {
//     e.addEventListener('click', (event) => event.preventDefault())
// })

// document.querySelectorAll('menu_dropdown > a').forEach(e => {
//     e.addEventListener('click', (event) => event.preventDefault())
// })

document.querySelector('#mb_menu_toggle').addEventListener('click',() => document.querySelector('#header3').classList.add('active'))
document.querySelector('#mb_menu_close').addEventListener('click',() => document.querySelector('#header3').classList.remove('active'))