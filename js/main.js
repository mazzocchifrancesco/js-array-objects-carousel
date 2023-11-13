// variabili
containerSchede=document.getElementById("caroselloImg");
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let imgHtml = "";

// inserimento immagini

// possibilità di rimozione funzione, o portarla esterna o inserire arrow function

images.forEach(function(element, index, array) {

    // creazione scheda
    const scheda= document.createElement("div")
    scheda.classList.add("scheda");
    scheda.id="scheda"+[index]
    // creazione immagine
    const img = document.createElement("img");
    img.src="./"+element.image;
    // creazione titolo
    const title = document.createElement("p");
    title.innerText=element.title;
    // creazione testo
    const testo = document.createElement("p");
    testo.innerText=element.text;
    // inserisci in scheda
    scheda.append(img, title, testo);
    // inserisci in container
    containerSchede.appendChild(scheda);

console.log(element.image);
    
});

// display prima img
let idNumber=0;
let idTemp="scheda"+idNumber;
let currentScheda=document.getElementById(idTemp);
currentScheda.classList.add("active");

// bottoni
const prevBtn = document.getElementById("prev");

prevBtn.addEventListener("click", function() {

    if (idNumber < images.length - 1) {
    currentScheda.classList.remove("active");
    idNumber++;
    idTemp="scheda"+idNumber;
    currentScheda=document.getElementById(idTemp);
    currentScheda.classList.add("active");
    }

    else if (idNumber == images.length - 1) {
        currentScheda.classList.remove("active");
        idNumber=0;
        idTemp="scheda"+idNumber;
        currentScheda=document.getElementById(idTemp);
        currentScheda.classList.add("active");
    }
});

const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", function () {
    if (idNumber > 0) {
        currentScheda.classList.remove("active");
        idNumber--;
        idTemp="scheda"+idNumber;
        currentScheda=document.getElementById(idTemp);
        currentScheda.classList.add("active");
    }
    else if (idNumber == 0) {
        currentScheda.classList.remove("active");
        idNumber=images.length-1;
        idTemp="scheda"+idNumber;
        currentScheda=document.getElementById(idTemp);
        currentScheda.classList.add("active");
    }
});