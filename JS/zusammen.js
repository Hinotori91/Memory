///////////////////////////////////
//   SPRITESHEET!!!
let img = new Image();
img.src = "../img/spriteimages236.jpg"

let array = []


let MemoryBilder = [
  {
    name : 'Klee',
    nummer : 1,
    posx : 0,
    posy :2,
  },
  {
    name : 'Diamant',
    nummer : 2,
    posx : -48,
    posy :0,
  },
  {
    name : 'Flasche',
    nummer : 3,
    posx : -97,
    posy :0,
  },
  {
    name : 'Käse',
    nummer : 4,
    posx : -144,
    posy :0,
  },
  {
    name : 'Keule',
    nummer : 5,
    posx : -190,
    posy :0,
  },
  {
    name : 'Apfel',
    nummer : 6,
    posx : 0,
    posy :-48,
  },
  {
    name : 'Ei',
    nummer : 7,
    posx : -48,
    posy :-48,
  },
  {
    name : 'Ring',
    nummer : 8,
    posx : -94,
    posy :-48,
  },
  {
    name : 'Buch',
    nummer : 9,
    posx : -143,
    posy :-48,
  },
  {
    name : 'Schriftrolle',
    nummer : 10,
    posx : -190,
    posy :-48,
  },
  {
    name : 'Stein-Blau',
    nummer : 11,
    posx : 0,
    posy :-95,
  },
  {
    name : 'Stein-Rot',
    nummer : 12,
    posx : -46,
    posy :-95,
  },
  {
    name : 'Blauer-Ball',
    nummer : 13,
    posx : -96,
    posy :-95,
  },
  {
    name : 'Gold',
    nummer : 14,
    posx : -143,
    posy :-95,
  },
  {
    name : 'Proben Röhrchen',
    nummer : 15,
    posx : -190,
    posy :-95,
  },
  {
    name : 'Spitzhacke',
    nummer : 16,
    posx : 0,
    posy :-142,
  },
  {
    name : 'Bogen',
    nummer : 17,
    posx : -48,
    posy :-144,
  },
  {
    name : 'Feder',
    nummer : 18,
    posx : -95,
    posy :-144,
  },
  {
    name : 'Alraune',
    nummer : 19,
    posx : -141,
    posy :-144,
  },
  {
    name : 'Sack',
    nummer : 20,
    posx : -190,
    posy :-144,
  },
  {
    name : 'Schwert',
    nummer : 21,
    posx : 0,
    posy :-193,
  },
  {
    name : 'Diamant-Kette',
    nummer : 22,
    posx : -47,
    posy :-193,
  },
  {
    name : 'Diamant-Rot',
    nummer : 23,
    posx : -95,
    posy :-193,
  },
  {
    name : 'Halskette',
    nummer : 24,
    posx : -144,
    posy :-193,
  },
  {
    name : 'Schuh',
    nummer : 25,
    posx : -190,
    posy :-193,
  },
];


// Array mit 16 Random Zahlen ausgeben
while (array.length < 16){
  let r = Math.round(Math.random()*24);
  if(array.indexOf(r) == -1){
    array.push(r)
    array.push(r)
  } 
}

console.log('Original Array '+ array);

const shuffled = array.sort(() => Math.random() - 0.5)

console.log('Shuffled Array '+ shuffled);


img.onload = function(){
  // Auslesen eines einzelnen Canvas
  let i = 0;
  for (let elementC of canvasAll){
    ctx = elementC.getContext('2d');

    // Speichern der x und y koordinaten in Variablen anhand der ausgegebenen Zufalleszahlen des Arrays
    
    let posIndex = array[i];
    x = MemoryBilder[posIndex].posx;
    y = MemoryBilder[posIndex].posy;
    i++;
      // console.log('RandomZahlen: '+posIndex);
      // console.log(MemoryBilder[posIndex].name);

      // Darstellung des Bildes
      ctx.drawImage(img,x,y);
  };
};


///////////////////////////////////
// SPIELLOGIK !!!

// https://www.better.dev/build-a-memory-matching-game-in-javascript

let deck = document.querySelector('.deck');
const carddeck = document.querySelector('#card-deck');
let cards = [...document.querySelectorAll('.card')];
let canvasAll = [...document.querySelectorAll('.canvas')];


const hideCanvas = () =>{
  for (canvas of canvasAll){
    canvas.style.display = 'none'
  };
}

const showCanvas = (card, e) =>{
  // canvas.style.display = 'block'

    let index = canvasAll.indexOf(e.target);
    console.log(canvasAll.indexOf(e.target));
    newIndex = shuffled[index];
    console.log(newIndex);

  for (let canvas of canvasAll){
    canvas.style.display = 'block'

  };
}

hideCanvas();

let clicks = 0

for(let card of cards){
  card.addEventListener('click', (e)=>{

    if (clicks < 2){
      aufdecken(card,e);
      clicks+=1



      // if(motiv1 == motiv2){
      //   richtig();
      // }else{
      //   zudecken();
      // }
  }else{
    zudecken(card);
    clicks = 0
  }
  });
};  

const aufdecken = (card,e) =>{
  card.classList.remove('card');
  card.classList.add('card_open');
  showCanvas(card, e);
}

const zudecken = (card) => {
  for (card of cards){
    card.classList.remove('card_open');
    card.classList.add('card');
    hideCanvas();
  }
}

const richtig = (card) => {
  card.classList.remove('card_open');
  card.classList.remove('card');
  card.classList.add('card_open');
  showCanvas();
}