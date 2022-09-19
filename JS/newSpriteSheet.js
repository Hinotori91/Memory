//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
//https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3

export let canvasAll = [...document.querySelectorAll('.canvas')];

let img = new Image();
img.src = "../img/spriteimages236.jpg";

let array = [];

export let MemoryBilder = [
  {
    name: 'Klee',
    nummer: 0,
    posx: 0,
    posy: 2,
  },
  {
    name: 'Diamant',
    nummer: 1,
    posx: -48,
    posy: 0,
  },
  {
    name: 'Flasche',
    nummer: 2,
    posx: -97,
    posy: 0,
  },
  {
    name: 'Käse',
    nummer: 3,
    posx: -144,
    posy: 0,
  },
  {
    name: 'Keule',
    nummer: 4,
    posx: -190,
    posy: 0,
  },
  {
    name: 'Apfel',
    nummer: 5,
    posx: 0,
    posy: -48,
  },
  {
    name: 'Ei',
    nummer: 6,
    posx: -48,
    posy: -48,
  },
  {
    name: 'Ring',
    nummer: 7,
    posx: -94,
    posy: -48,
  },
  {
    name: 'Buch',
    nummer: 8,
    posx: -143,
    posy: -48,
  },
  {
    name: 'Schriftrolle',
    nummer: 9,
    posx: -190,
    posy: -48,
  },
  {
    name: 'Stein-Blau',
    nummer: 10,
    posx: 0,
    posy: -95,
  },
  {
    name: 'Stein-Rot',
    nummer: 11,
    posx: -46,
    posy: -95,
  },
  {
    name: 'Blauer-Ball',
    nummer: 12,
    posx: -96,
    posy: -95,
  },
  {
    name: 'Gold',
    nummer: 13,
    posx: -143,
    posy: -95,
  },
  {
    name: 'Proben Röhrchen',
    nummer: 14,
    posx: -190,
    posy: -95,
  },
  {
    name: 'Spitzhacke',
    nummer: 15,
    posx: 0,
    posy: -142,
  },
  {
    name: 'Bogen',
    nummer: 16,
    posx: -48,
    posy: -144,
  },
  {
    name: 'Feder',
    nummer: 17,
    posx: -95,
    posy: -144,
  },
  {
    name: 'Alraune',
    nummer: 18,
    posx: -141,
    posy: -144,
  },
  {
    name: 'Sack',
    nummer: 19,
    posx: -190,
    posy: -144,
  },
  {
    name: 'Schwert',
    nummer: 20,
    posx: 0,
    posy: -193,
  },
  {
    name: 'Diamant-Kette',
    nummer: 21,
    posx: -47,
    posy: -193,
  },
  {
    name: 'Diamant-Rot',
    nummer: 22,
    posx: -95,
    posy: -193,
  },
  {
    name: 'Halskette',
    nummer: 23,
    posx: -144,
    posy: -193,
  },
  {
    name: 'Schuh',
    nummer: 24,
    posx: -190,
    posy: -193,
  },
];

// Array mit 16 Random Zahlen ausgeben
while (array.length < 16) {
  let r = Math.round(Math.random() * 24);
  if (array.indexOf(r) == -1) {
    array.push(MemoryBilder[r]);
    array.push(MemoryBilder[r]);
  }
}

console.log('Original Array ', array);
export let shuffled = array.sort(() => Math.random() - 0.5);
console.log('Shuffled Array ', shuffled);

img.onload = function () {
  // Auslesen eines einzelnen Canvas
  let i = 0;
  for (let elementC of canvasAll) {
    let ctx = elementC.getContext('2d');

    let posIndex = shuffled[i].nummer;
    let x = MemoryBilder[posIndex].posx;
    let y = MemoryBilder[posIndex].posy;
    i++;
    // console.log('RandomZahlen: '+posIndex);
    // console.log(MemoryBilder[posIndex].name);

    // Darstellung des Bildes
    ctx.drawImage(img, x, y);
  };
};
