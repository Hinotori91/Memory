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
          nicht_richtig(i);
          setTimeout(() => {
            zudecken(i);
          }, 1000);
          clicks = 0;
        }
      }
    }
  });
}

////////  Funktionen ////////
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
  karte.htmlElem.classList.remove('card_unmatched');
  objektKarten[i].htmlElem.classList.remove('card_open');
  objektKarten[i].htmlElem.classList.remove('card_unmatched');
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
  
  console.log(objektKarten);
}

function nicht_richtig (i){
      objektKarten[i].htmlElem.classList.remove('card_open');
      objektKarten[i].htmlElem.classList.add('card_unmatched');
      karte.htmlElem.classList.remove('card_open');
      karte.htmlElem.classList.add('card_unmatched');
  
  console.log(objektKarten);
}