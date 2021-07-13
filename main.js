// import { example } from './data.js';
import champions from './data/lol/lol.js';
import {showFilterRols , showFilterByDifficulty , searchLol } from  './data.js';

const dataLolArray = Object.values(champions.data);
const menuItems = document.querySelector('.menuItems');
const mainContainer = document.querySelector('#mainContainer');
// menu Hamburguesa
addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.buttonMenu')
    if(buttonMenu) {
        buttonMenu.addEventListener('click',() => {
          menuItems.classList.toggle('show');
        })
    }
});

//hide responsive menu
const removeMenuLOl = () => menuItems.classList.remove('show');

//show slider and banner
const mainSliderLol = document.querySelector(".mainSliderLol");
const bannerLol = document.querySelector(".bannerLol")
function showSliderLol() {
    const sliderLolLogo = `<img src="images/fondobaner.jpg">`;
    const bannerLolText = `<p>There are more than 130 champions, it will not take long <br> to find your favorite. </p>`;
    mainSliderLol.innerHTML = sliderLolLogo;
    bannerLol.innerHTML = bannerLolText;
}
showSliderLol();

//reload the page
const reload = document.querySelector('.mainLogo');
reload.addEventListener('click', reloadPage);
function reloadPage(){
    location.reload();
}


// show all champions- landing page
const mainCardsLol = document.getElementById("mainCardsLol");
 function showChampions (dataLolArray)  {
     dataLolArray.forEach((e) => {
        
        const boxCardsLol = document.createElement("section");
        const showCardsLol = document.createElement("section");
        const faceCardsLol = document.createElement("section");
        const backOfCardsLol = document.createElement("section");
        const buttonInformation = document.createElement("button")
        boxCardsLol.setAttribute("class", "boxCardsLol");
        showCardsLol.setAttribute("class","showCardsLol");
        faceCardsLol.setAttribute("class","faceCardsLol");
        backOfCardsLol.setAttribute("class","backOfCardsLol");
        buttonInformation.setAttribute("class","buttonInformation");
        buttonInformation.setAttribute("id", e.id);
        buttonInformation.textContent="More";
        const nameChampion = 
        ` 
        <img src="${e.splash}">
        <p class="nameLol"> ${e.name}</p>
        `; 
        const  infoChampions = `
        <table class= "infoChampions">
            <tr>
                <th colspan="2">INFORMATION </th>
            </tr>
            <tr>
                <th>Attack</th>
                <td>${e.info.attack}</td>
            </tr>
            <tr>
                <th>Defense</th>
                <td>${e.info.defense}</td>
            </tr>
            <tr>
                <th>Magic</th>
                <td>${e.info.magic}</td>
            </tr>
            <tr>
                <th>Difficulty</th>
                <td>${e.info.difficulty}</td>
            </tr>
        </table>
        
        `;
        // const <button class="buttonInformation"> More</button>
        faceCardsLol.innerHTML = nameChampion;
        backOfCardsLol.innerHTML = infoChampions;
        mainCardsLol.appendChild(boxCardsLol);
        boxCardsLol.appendChild(showCardsLol); 
        showCardsLol.appendChild(faceCardsLol);
        showCardsLol.appendChild(backOfCardsLol);
        backOfCardsLol.appendChild(buttonInformation);       

    });
};
showChampions(dataLolArray);

//show the champions/ menu-all
const allChampion = document.querySelector('.allChampion');
allChampion.addEventListener('click', (e) => {
    e.preventDefault();
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    mainCardsLol.innerHTML="";
    
    removeMenuLOl();
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

//filterByRole
const assassinRols = document.querySelector('.assassinRols');
const fighterRols = document.querySelector('.fighterRols');
const mageRols = document.querySelector('.mageRols');
const marksmanRols = document.querySelector('.marksmanRols');
const supportRols = document.querySelector('.supportRols');
const tankRols = document.querySelector('.tankRols');
const sectionElementRol = document.querySelector(".sectionElementRol")
const filterByAssassin = ()=>{
    const roles = "Assassin";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Assassin") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/assessin_icon.png">
        <p>ASSESSINS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
};
assassinRols.addEventListener('click', (e) => {
    e.preventDefault();
    filterByAssassin();
    
    
});
fighterRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Fighter";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Fighter") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/Fighter_icon.png">
        <p> FIGHTERS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
mageRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Mage";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Mage") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/mage_icon.png">
        <p> MAGES</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
marksmanRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Marksman";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Marksman") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/marksman_icon.png">
        <p>MARKSMEN</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
supportRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Support";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Support") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/support_icon.png">
        <p>SUPPORTS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
});
tankRols.addEventListener('click', (e) => {
    e.preventDefault();
    const roles = "Tank";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Tank") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        const nameRol = 
        ` 
        <img src="./images/tank_icon.png">
        <p>TANKS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        const tanksRole = showChampions(filtroRols);
        
    }
});

//filterByDifficulty
const lowDifficulty = document.querySelector(".lowDifficulty");
const moderateDifficulty = document.querySelector(".moderateDifficulty");
const highDifficulty = document.querySelector(".highDifficulty");

lowDifficulty.addEventListener("click",(e)=>{
    e.preventDefault();
    const rangeDifficulty = 3;
    mainCardsLol.innerHTML ="";
    const getLowDifficulty =  dataLolArray.filter((e)=>( e.info.difficulty <= rangeDifficulty));
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    const showLowDifficulty = showFilterByDifficulty(getLowDifficulty);
    showChampions(showLowDifficulty);

});
moderateDifficulty.addEventListener("click",(e)=>{
    e.preventDefault();
    const rangeDifficulty = 3;
    const rangeDifficulty2 = 6;
    mainCardsLol.innerHTML ="";
    const getLowDifficulty =  dataLolArray.filter((e)=>( (e.info.difficulty > rangeDifficulty) && (e.info.difficulty <= rangeDifficulty2)));
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    const showLowDifficulty = showFilterByDifficulty(getLowDifficulty);
    showChampions(showLowDifficulty);
});
highDifficulty.addEventListener("click",(e)=>{
    const rangeDifficulty = 6;
    mainCardsLol.innerHTML ="";
    const getLowDifficulty =  dataLolArray.filter((e)=>( (e.info.difficulty > rangeDifficulty)));
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    const showLowDifficulty = showFilterByDifficulty(getLowDifficulty);
    showChampions(showLowDifficulty);
    
});

//search champions
const searchChampions = document.querySelector("#searchChampions");

const searchLolChampions = searchChampions.addEventListener("keyup", (e)=>{
    e.preventDefault();
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    const searchString = e.target.value;
    console.log(searchString);
    const searchChampionsLol = searchLol(dataLolArray,searchString);
    // console.log(filterLol);
    showChampions(searchChampionsLol);
});



   

    
    
    

//show all information about the champions
document.body.addEventListener('click', (e) =>{
    e.preventDefault();

    if(e.target.classList == 'buttonInformation'){
        // mainContainer.innerHTML="";
        const idLol= e.target.id;
        const findChampion = dataLolArray.find((champion)=>champion.id === idLol);
        console.log(findChampion);
        // const championsInformation = document.createElement('section');
        // const boxNameChampions = document.createElement('section');
        // championsInformation.setAttribute("class","championsInformation");
        // boxNameChampions.setAttribute("class","boxNameChampions");
        //modal
        const divMyChampionModal = document.createElement('div');
        const divModalChampionContent = document.createElement('div');
        const divHeaderModal = document.createElement('div');
        const spanCloseModal = document.createElement('span');
        divMyChampionModal.setAttribute("id","myChampionModal");
        divMyChampionModal.setAttribute("class","modalChampion");
        divModalChampionContent.setAttribute("class","modalChampionContent");
        // mainContainer.setAttribute("class","modalChampion");
        divHeaderModal.setAttribute("class","headerModal");
        spanCloseModal.setAttribute("class","closeModal");
        spanCloseModal.textContent= "x";
        const moreInformationChampion = `
        
                <div class="bodyModal">
                    <img widht="200px" height="100px" src="${findChampion.splash}">
                    <p>${findChampion.title}</p>
                    <h1>${findChampion.name}</h1>
                </div>
           `;
           divModalChampionContent.innerHTML=moreInformationChampion;
        mainContainer.appendChild(divMyChampionModal);
        divMyChampionModal.appendChild(divModalChampionContent);
        divModalChampionContent.appendChild(divHeaderModal);
        divHeaderModal.appendChild(spanCloseModal);
        
        
        

        // mainContainer.appendChild(championsInformation);
        // championsInformation.appendChild(boxNameChampions);
        const myChampionModal = document.querySelector("#myChampionModal");
const buttonInformation = document.querySelector(".buttonInformation");
const closeModal = document.querySelector(".closeModal");

buttonInformation.addEventListener('click', function openModal(){
    // myChampionModal.style.display="block";
    myChampionModal.style.display="block"
    console.log("hola");
});

closeModal.addEventListener('click',function closeModal(){
    myChampionModal.style.display="none";
});

window.addEventListener('click', function outsideClick(e){
    if(e.target == myChampionModal){
        myChampionModal.style.display ="none";
    }
});

    }
    

})
// modalChampion



// document.body.addEventListener( 'click', function ( event ) {
//     if( event.target.id == 'btnSubmit' ) {
//       someFunc();
//     };
//   } );

