import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.buttonMenu')
    if(buttonMenu) {
        buttonMenu.addEventListener('click',() => {
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show');
        })
    }
})



//console.log(example, data);
