const weaponsTypes = {
  ar: 'artillery',
  ml: 'MLRS',
  ms: 'missile',
  aa: 'anti-aircraft',
  av: 'winged aircraft',
  hl: 'helicoptor',
  dr: 'drone',
}
/*
**** PzH2000 https://interfax.com.ua/news/general/837555.html

russian: https://en.wikipedia.org/wiki/List_of_equipment_of_the_Russian_Ground_Forces#Artillery
javelin
nlaw
Cheetah AA
Mistral Air
S300
AT4 atgm
ML270 MLRS, 

*/
const toAdd = [
  {
    name: 'Bayraktar',
    type: '??',
    range: 0,
    accuracy: '',
    units: 0,
    cost: '??',
    punch: '??', //hi-lo
    mobility: '??', //hi-lo
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'url'
  },
  {
    name: 'Bayraktar',
    type: '??',
    range: 0,
    accuracy: '',
    units: 0,
    cost: '??',
    punch: '??', //hi-lo
    mobility: '??', //hi-lo
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'url'
  },
  {
    name: 'Bayraktar',
    type: '??',
    range: 0,
    accuracy: '',
    units: 0,
    cost: '??',
    punch: '??', //hi-lo
    mobility: '??', //hi-lo
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'url'
  },
  {
    name: 'Bayraktar',
    type: '??',
    range: 0,
    accuracy: '',
    units: 0,
    cost: '??',
    punch: '??', //hi-lo
    mobility: '??', //hi-lo
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'url'
  },
  {
    name: 'HIMAR',
    type: 'ar',
    range: 0,
    accuracy: '',
    units: 0,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: ''
  },
  {
    name: 'FH70',
    type: 'ar',
    range: 0,
    accuracy: '',
    units: 0,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 1,
    ref: ''
  },
  {
    name: 'Zuzana 2 howitzers',
    type: 'sp',
    range: [40,50],  ///km
    accuracy: '',
    units: 8,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 1,
    ref: 'https://www.usnews.com/news/world/articles/2022-06-02/slovakia-to-deliver-eight-zuzana-2-howitzers-to-ukraine-says-ministry'
  },
  {
    name: 'R-73 Air-to-air missiles',
    type: 'mi',
    range: 30,  ///km
    accuracy: '',
    units: 100,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'https://twitter.com/visegrad24/status/1533050752142397440'
  },
  {
    name: 'Piorun MANPADS',
    type: '',
    range: 30,  ///km
    accuracy: '',
    units: 0,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'https://twitter.com/visegrad24/status/1533050752142397440'
  },
  {
    name: '122mm BM-21 Grad MRL',
    type: 'ar',
    range: 30,  ///km
    accuracy: 'ss',
    units: 20,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'https://twitter.com/visegrad24/status/1533050752142397440'
  },
  {
    name: 'AHS Krab SPGs',
    type: 'ar',
    range: 30,  ///km
    accuracy: 'ss',
    units: 18,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'https://twitter.com/visegrad24/status/1533050752142397440'
  },
  {
    name: '2S1 Goździk self-propelled howitzers',
    type: 'ar',
    range: 30,  ///km
    accuracy: 'ss',
    units: 20,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'highai',
    img: 'img',
    side: 'u',
    deployed: 0,
    ref: 'https://twitter.com/visegrad24/status/1533050752142397440'
  },
  {
    name: 'M109/A3GN 155mm self-propelled howitzers',
    type: 'ar',
    range: 30,  ///km
    accuracy: 'ss',
    units: 20,
    cost: 'xxx',
    punch: 'hilo',
    mobility: 'high',
    img: 'img',
    side: 'u',
    deployed: true,
    ref: 'https://twitter.com/ChuckPfarrer/status/1533477956022067202'
  },
]

const weapons = [
  {
    category: 'ar',
    label: 'Artillery',
    weapons: [
      {
        name: 'CAESAR',
        type: 'ar',
        range: [42,50],
        accuracy: '',
        units: 0,
        cost: 'xxx',
        punch: 'hilo',
        mobility: 'highai',
        img: 'img',
        side: 'u',
        deployed: 1,
        ref: ''
      },
      {
        name: 'M777',
        type: 'ar',
        range: 0,
        accuracy: '',
        units: 0,
        cost: 'xxx',
        punch: 'hilo',
        mobility: 'highai',
        img: 'img',
        side: 'u',
        deployed: 1,
        ref: ''
      },
      {
        name: 'M109',
        type: 'ar',
        range: 0,
        accuracy: '',
        units: 0,
        cost: 'xxx',
        punch: 'hilo',
        mobility: 'highai',
        img: 'img',
        side: 'u',
        deployed: 1,
        ref: ''
      },
      {
        name: '2S19 Msta',
        type: 'ar',
        range: 0,
        accuracy: '',
        units: 0,
        cost: 'xxx',
        punch: 'hilo',
        mobility: 'highai',
        img: 'img',
        side: 'r',
        deployed: 1,
        ref: ''
      },
      {
        name: 'TOS-1',
        type: 'ar',
        range: 0,
        accuracy: '',
        units: 0,
        cost: 'xxx',
        punch: 'hilo',
        mobility: 'highai',
        img: 'img',
        side: 'r',
        deployed: 1,
        ref: ''
      },
      {
        name: 'BM-21 Grad',
        type: 'ar',
        range: 0,
        accuracy: '',
        units: 0,
        cost: 'xxx',
        punch: 'hilo',
        mobility: 'highai',
        img: 'img',
        side: 'r',
        deployed: 1,
        ref: ''
      },
    ]
  }
]

export default weapons;