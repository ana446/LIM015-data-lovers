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


<<<<<<< HEAD
console.log(example, data);









=======

//console.log(example, data);
>>>>>>> fe0f27055d3b2306b1235ac64dc60f416cb54e89
