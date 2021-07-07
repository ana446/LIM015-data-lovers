// import { example } from './data.js';
import champions from './data/lol/lol.js';
const dataLolArray = Object.values(champions.data);
addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.buttonMenu')
    if(buttonMenu) {
        buttonMenu.addEventListener('click',() => {
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show');
        })
    }
});

// mostrar todos los campeones
 function showChampions(){
    
    dataLolArray.forEach((e) => {
        const mainCardsLol = document.getElementById("mainCardsLol");
        const divElement = document.createElement("div");
        divElement.setAttribute("class","showCardsLol");
        const nameChampion = 
        ` 
        <img src="${e.splash}">
        <p> ${e.name}</p>
        `; 
         divElement.innerHTML = nameChampion;
         mainCardsLol.appendChild(divElement);        

});
};

showChampions();


