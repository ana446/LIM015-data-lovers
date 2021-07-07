// import { example } from './data.js';
import champions from './data/lol/lol.js';
import {showFilterRols} from  './data.js';

const dataLolArray = Object.values(champions.data);
// menu Hamburguesa
addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.buttonMenu')
    if(buttonMenu) {
        buttonMenu.addEventListener('click',() => {
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show');
        })
    }
});

//mostrar el slider y banner
const mainSliderLol = document.querySelector(".mainSliderLol");
const bannerLol = document.querySelector(".bannerLol")
function showSliderLol() {
    const sliderLolLogo = `<img src="images/fondobaner.jpg"  alt="">`;
    const bannerLolText = `<p>Hay más de 130 campeones, no tardarás en encontrar <br>a tu preferido. </p>`;
    mainSliderLol.innerHTML = sliderLolLogo;
    bannerLol.innerHTML = bannerLolText;
}
showSliderLol();

// mostrar todos los campeones al inicio
 function showChampions (dataLolArray)  {
    
    dataLolArray.forEach((e) => {
        const mainCardsLol = document.getElementById("mainCardsLol");
        const divElement = document.createElement("section");
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

showChampions(dataLolArray);
// mostrar todos los campeones-menu todos
const allChampion = document.querySelector('.allChampion');
allChampion.addEventListener('click', (e) => {
    e.preventDefault();
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    const nameRol = 
    ` 
    <img src="./images/assessin_icon.png">
    <img src="./images/Fighter_icon.png">
    <img src="./images/mage_icon.png">
    <img src="./images/marksman_icon.png">
    <img src="./images/support_icon.png">
    <img src="./images/tank_icon.png">
    `; 
    sectionElementRol.innerHTML = nameRol;
    showChampions(dataLolArray);
})

//filtrar por roles
const assassinRols = document.querySelector('.assassinRols');
const fighterRols = document.querySelector('.fighterRols');
const mageRols = document.querySelector('.mageRols');
const marksmanRols = document.querySelector('.marksmanRols');
const supportRols = document.querySelector('.supportRols');
const tankRols = document.querySelector('.tankRols');
const sectionElementRol = document.querySelector(".sectionElementRol")
assassinRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Assassin";
    mainCardsLol.innerHTML="";
    
    if (roles === "Assassin") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/assessin_icon.png">
        <p>ASESINOS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
        
        
    }
});
fighterRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Fighter";
    mainCardsLol.innerHTML="";
    if (roles === "Fighter") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/Fighter_icon.png">
        <p> LUCHADORES</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
mageRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Mage";
    mainCardsLol.innerHTML="";
    if (roles === "Mage") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/mage_icon.png">
        <p> MAGOS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
marksmanRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Marksman";
    mainCardsLol.innerHTML="";
    if (roles === "Marksman") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/marksman_icon.png">
        <p>TIRADORES</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
supportRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Support";
    mainCardsLol.innerHTML="";
    if (roles === "Support") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/support_icon.png">
        <p>APOYOS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
tankRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Tank";
    mainCardsLol.innerHTML="";
    if (roles === "Tank") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/tank_icon.png">
        <p>TANQUES</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});


    




