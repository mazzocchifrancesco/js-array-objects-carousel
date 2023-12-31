// variabili
const containerSchede = document.getElementById("caroselloImg");
const thumbnails = document.getElementById("thumbnails");
let autoInterval;
let revertInterval;
let fixTimer=0;


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

// inserimento immagini

// possibilità di rimozione funzione, o portarla esterna o inserire arrow function

images.forEach(function (element, index, array) {

    // creazione scheda
    const scheda = document.createElement("div")
    scheda.classList.add("scheda");
    scheda.id = "scheda" + index
    // creazione immagine
    const img = document.createElement("img");
    img.src = "./" + element.image;
    // creazione titolo
    const title = document.createElement("p");
    title.innerText = element.title;
    // creazione testo
    const testo = document.createElement("p");
    testo.innerText = element.text;
    // contenitore testo
    const textBox = document.createElement("div");
    textBox.append(title, testo);
    // inserisci in scheda
    scheda.append(img, textBox);
    // inserisci in container
    containerSchede.appendChild(scheda);

    // inserisci img in thumbnails
    const imgThumb = document.createElement("img");
    imgThumb.src = img.src;
    imgThumb.id = "img" + index;
    thumbnails.appendChild(imgThumb);

    // thumbnails cliccabili
    imgThumb.addEventListener("click", () => {
        clearActive();
        scheda.classList.add('active');
        imgThumb.classList.add('selected');
    })
});

// display prima scheda
let idTemp = 0;
let currentScheda = document.getElementById("scheda"+idTemp);
currentScheda.classList.add("active");

// display prima thumb
let currentPic = document.getElementById("img"+idTemp);
currentPic.classList.add("selected");


// bottoni
const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", indietro);

const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", avanti);


// autoplay start
const play = document.getElementById("autoplay");
play.addEventListener("click", autoTimer);
// autoplay stop
const stop = document.getElementById("stop");
stop.addEventListener("click", stopInterval);
// autoplay revert
const revert = document.getElementById("revert");
revert.addEventListener("click", revertTimer);


// FUNZIONI ////////////////////////////////////////////////////////////////////

function indietro () {
    currentScheda = document.getElementsByClassName('active')[0];
    currentPic = document.getElementsByClassName('selected')[0];
    let idScheda=currentScheda.id.replace(/^\D+/g, '');
    idTemp=idScheda.replace(/^\D+/g, '');

    if (idTemp > 0) {
        currentScheda.classList.remove("active");
        currentPic.classList.remove("selected");

        idTemp--;
    }
    else if (idTemp == 0) {
        clearActive()
        idTemp = images.length -1;
    }
    currentScheda=document.getElementById("scheda"+idTemp)
    currentPic=document.getElementById("img"+idTemp)
    currentScheda.classList.add("active");
    currentPic.classList.add("selected");

}

function avanti() {
    currentScheda = document.getElementsByClassName('active')[0];
    currentPic = document.getElementsByClassName('selected')[0];
    let idScheda=currentScheda.id
    idTemp=idScheda.replace(/^\D+/g, '');

    if (idTemp < images.length - 1) {
        clearActive()
        idTemp++;
    }
    else if (idTemp == images.length - 1) {
        clearActive()
        idTemp = 0;
    }
    currentScheda=document.getElementById("scheda"+idTemp)
    currentPic=document.getElementById("img"+idTemp)
    currentScheda.classList.add("active");
    currentPic.classList.add("selected");
}

function autoTimer() {
    if (fixTimer==0) {
        autoInterval = setInterval(avanti, 3000);
        fixTimer++;
        console.log("ciao")
    }
}
function revertTimer() {
    if (fixTimer==0) {
    revertInterval = setInterval(indietro, 3000);
    fixTimer++;
    }
}

function stopInterval() {
    clearInterval(autoInterval);
    clearInterval(revertInterval);
    fixTimer=0;

}

function clearActive() {
    let i = 0;
    do {
        document.getElementById("scheda"+i).classList.remove('active');
        document.getElementById("img"+i).classList.remove('selected');
        i++;
    } while (i < images.length);
}
// aggiungi funzioni in fondo per semplificare
// togli ripetizioni dove ci sono e semplifica
//check nomi variabili
