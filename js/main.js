// variabili
const containerSchede = document.getElementById("caroselloImg");
const thumbnails = document.getElementById("thumbnails");

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
    imgThumb.addEventListener("click", () => {
        let i=0;
        do {
            document.getElementById("scheda"+i).classList.remove('active');
            document.getElementById("img"+i).classList.remove('selected');
            i++;
        } while (i<images.length);
    document.getElementById("scheda"+index).classList.add('active');
    document.getElementById("img"+index).classList.add('selected');
    })



});

// display prima scheda
let idNumber = 0;
let idTemp = "scheda" + idNumber;
let currentScheda = document.getElementById(idTemp);
currentScheda.classList.add("active");

// display prima thumb
let idImg = "img" + idNumber;
let currentPic = document.getElementById(idImg);
currentPic.classList.add("selected");


// bottoni
const prevBtn = document.getElementById("prev");

prevBtn.addEventListener("click", function () {

    if (idNumber < images.length - 1) {
        currentScheda.classList.remove("active");
        currentPic.classList.remove("selected");
        idNumber++;
        idTemp = "scheda" + idNumber;
        idImg = "img" + idNumber;

        // posso rimuovere sta ripetizione??-----------------------------------------------
        currentScheda = document.getElementById(idTemp);
        currentPic = document.getElementById(idImg);
        currentScheda.classList.add("active");
        currentPic.classList.add("selected");

    }

    else if (idNumber == images.length - 1) {
        currentScheda.classList.remove("active");
        currentPic.classList.remove("selected");
        idNumber = 0;
        idTemp = "scheda" + idNumber;
        idImg = "img" + idNumber;
        currentScheda = document.getElementById(idTemp);
        currentPic = document.getElementById(idImg);
        currentPic.classList.add("selected");
        currentScheda.classList.add("active");
    }
});

const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", function () {
    if (idNumber > 0) {
        currentScheda.classList.remove("active");
        currentPic.classList.remove("selected");
        idNumber--;
        idTemp = "scheda" + idNumber;
        idImg = "img" + idNumber;
        currentScheda = document.getElementById(idTemp);
        currentPic = document.getElementById(idImg);
        currentScheda.classList.add("active");
        currentPic.classList.add("selected");
    }
    else if (idNumber == 0) {
        currentScheda.classList.remove("active");
        currentPic.classList.remove("selected");
        idNumber = images.length - 1;
        idTemp = "scheda" + idNumber;
        idImg = "img" + idNumber;
        currentScheda = document.getElementById(idTemp);
        currentPic = document.getElementById(idImg);
        currentScheda.classList.add("active");
        currentPic.classList.add("selected");
    }
});