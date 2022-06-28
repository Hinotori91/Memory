// https://www.better.dev/build-a-memory-matching-game-in-javascript
//https://flaviocopes.com/how-to-shuffle-array-javascript/

let popupfeld = document.querySelector('#popup');
let tryagain = document.querySelector('#again');


import {MemoryBilder} from './newSpriteSheet.js';
import {shuffled, canvasAll} from './newSpriteSheet.js';


let cards = [...document.querySelectorAll('.card')];

let clicks = 0
let karte = "";



let objektKarten =[];




for(let i = 0; i < cards.length; i++) {
  let obj = {
    htmlElem: cards[i],
    img:  shuffled[i]
  }
  objektKarten.push(obj);

  cards[i].addEventListener('click', e => {
    let actCard = objektKarten.find(item => item.htmlElem == e.target);

    if (clicks < 2){
      if(clicks < 1){
        karte = objektKarten[i];
        aufdecken(i);
        clicks+=1;
      }else{
        aufdecken(i);

        if (karte.img.name === objektKarten[i].img.name){
          richtig(i);
          clicks = 0;
        }else{
          setTimeout(() => {
            zudecken(i);
          }, 1000);
          clicks = 0;
        }
      }
    }
  });
}



function hideCanvas (i) {
  objektKarten[i].htmlElem.children[0].style.display = 'none';
  karte.htmlElem.children[0].style.display = 'none';
}

function showCanvas (i) {
  objektKarten[i].htmlElem.children[0].style.display = 'block';
  karte.htmlElem.children[0].style.display = 'block';
}

function aufdecken (i) {
  objektKarten[i].htmlElem.classList.remove('card');
  objektKarten[i].htmlElem.classList.add('card_open');
  showCanvas(i);
}

function zudecken(i) {
  karte.htmlElem.classList.remove('card_open');
  objektKarten[i].htmlElem.classList.remove('card_open');
  karte.htmlElem.classList.add('card')
  objektKarten[i].htmlElem.classList.add('card');
  hideCanvas(i);
}


function richtig (i) {
  objektKarten[i].htmlElem.classList.remove('card_open');
  objektKarten[i].htmlElem.classList.add('card_match');
  karte.htmlElem.classList.remove('card_open');
  karte.htmlElem.classList.add('card_match');
  showCanvas(i);
  
  
  // if(objektKarten.htmlElem == 'card_match'){
  //   popupfeld.style.display = 'block'
  // }
  console.log(objektKarten);

}
  
































/* 
let clicks = 0
let karte = "";
let karte2 = "";

for(let card of cards){
  card.addEventListener('click', (e)=>{
    let i = cards.indexOf(e.target);

    if (clicks < 2){
      aufdecken(card,e,i);
      clicks+=1;


    // Überprüfen ob die Symbole der beiden karten gleich sind
    // vergleich von Zahlen in Shuffled-Array anhand von Index der Karten
    // schauen ob beide Zahlen gleich sind

      // if (Motiv1 und Motiv2 das selbe){
      //   richtig()
      // } else{
      //   zudecken()
      // }

      ///////// ??????????????????????????????????????????
      // if(MemoryBilder.find(item => item.name == MemoryBilder[shuffled[i]].name))
      
      if(MemoryBilder.includes(MemoryBilder[shuffled[i]].name)){
        if(karte == ''){
          karte = MemoryBilder[shuffled[i]].name;
        }else{
          karte2 = MemoryBilder[shuffled[i]].name;
        }
      };

      // console.log(MemoryBilder.includes(MemoryBilder[shuffled[i]].name));
      // console.log('Shuffled.name '+ MemoryBilder[shuffled[i]].name);
      // console.log(karte);
      // console.log(karte2);

      if (karte === karte2){
        richtig(card, e, i);
      }else{
        zudecken(card);
        clicks = 0;
      }
      // console.log(shuffled[i]);
      // console.log(MemoryBilder[i].nummer);
      console.log(MemoryBilder[shuffled[i]].name);
      
      ///////// ??????????????????????????????????????????
  }
  else{
    // zudecken(card);
    clicks = 0
  }
  });
};  


function showCanvas (card, e, i) {
  canvasAll[i].style.display = 'block';
  // console.log(MemoryBilder[shuffled[i]].name);
}

*/
// function hideCanvas () {
//   for (let obj of canvasAll){
//     obj.style.display = 'none'
//   };
// }

/*
const aufdecken = (card,e,i) =>{
  card.classList.remove('card');
  card.classList.add('card_open');
  showCanvas(card,e,i);
} */

/* const zudecken = (card) => {
  for (card of cards){
    card.classList.remove('card_open');
    card.classList.add('card');
    hideCanvas();
  }
}

const richtig = (card, e, i) => {
  card.classList.remove('card_open');
  card.classList.remove('card');
  card.classList.add('card_match');
  canvasAll[i].style.display = 'block';
  showCanvas(card,e,i);
} */