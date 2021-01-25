



$(document).ready(function() {
  const fieldCodes = [
    'W', 'U', 'B', 'R', 'G'
  ]

  const cardTypes = [
    'terre',
    'creature',
    'incantesimi',
    'artefatti',
    'instantanei',
    'stregonerie'
  ];

  const powerValues = [1,2,3,4,5];

  // Abbiamo creato un oggetto di oggetti, come riferimento
  // di una edizione. Se ad esempio scrivo editions['SP']
  // allora otterrò tutto un oggetto che descrive
  // con più dettagli l'edizione.
  // come oggetto di oggetti, può essere navigato solo con il for-in
  const editions = {

    'BL': {
        edition: 'Boolean',
        rarity: 'blue'
    },

    'SP': {
        edition: 'Special',
        rarity: 'red'
    }

  }


  const cards = [{

    cardName: 'Grizzly Bears',

    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],  // 'W',  - un suo riferimento
        fieldCodes[2]   // 'B'
      ],
    },

    picture: 'images/i.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lorem ipsum',
    story: 'Naltro Lorem Ipsum',

    score: {
      power: 2,  // filtrarlo per power
      toughness: 2
    }

    },
    {

      cardName: 'Sviluppatore guerriero',

      cost: {
        genericCostNumber: 3,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3]
        ],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Bear',

      editionType: editions['BL'],

      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

      score: {
        power: 5,  // r
        toughness: 3
      }

      },
      {

        cardName: 'Mewtwo',

        cost: {
          genericCostNumber: 6,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[0],
            fieldCodes[0],
            fieldCodes[0]
          ],
        },

        picture: 'images/g.png',  // da inserire immagine
        cardType: cardTypes[1],
        cardObject: 'Pokemon',

        editionType: editions['BL'],

        description: '666',
        story: 'yo-yo',

        score: {
          power: 5,  // r
          toughness: 3
        }

        },
        {

          cardName: 'Mew',

          cost: {
            genericCostNumber: 2,
            costFields: [ // colors array con riferimento a fieldCodes
              fieldCodes[0],
              fieldCodes[2],
            ],
          },

          picture: 'images/g.png',  // da inserire immagine
          cardType: cardTypes[1],
          cardObject: 'fokemon',

          editionType: editions['SP'],

          description: 'ciao',
          story: 'vvv',

          score: {
            power: 5,  // r
            toughness: 3
          }

          },
          {

            cardName: 'Paralyze',

            cost: {
              genericCostNumber: '',
              costFields: [ // colors array con riferimento a fieldCodes
                fieldCodes[2],
              ],
            },

            picture: 'images/g.png',  // da inserire immagine
            cardType: cardTypes[2],
            cardObject: 'Enchant',

            editionType: editions['SP'],

            description: 'ciaone',
            story: 'nola',

            score: {
              power: 5,  // r
              toughness: 3
            }

            },
          {

            cardName: 'Dancing Scimitar',

            cost: {
              genericCostNumber: 4,
              costFields: [],
            },

            picture: 'images/g.png',  // da inserire immagine
            cardType: cardTypes[3],
            cardObject: 'Spirit',

            editionType: editions['BL'],

            description: 'orco',
            story: 'xyz',

            score: {
              power: 1,
              toughness: 5
            }

            },

  ]

  console.log(cards);

  function filterByPower(powerValue,array) {
    return array.filter((element) => {
      return element.score.power === powerValue;
    });
  }

  // console.log('>>> CARTE FILTRATE PER POWER 3', filterByPower(5,cards))

   function render(DOMElement, array){
     const cardListHTMLElement = document.getElementById(DOMElementid);
     cardListHTMLElement.innerHTML = '';

     array.forEach((element) =>{
       cardListHTMLElement.innerHTML += `<li> ${element.cardName} </li>`
     })
   }

   function renderSelect(DOMElementId, array){
     const select = document.getElementById(DOMElementId);

     select.innerHTML += `<option value=${element}> ${element} </option> `
   }

   render('listaCarte', cards);
   renderSelect('powerSelect', powerValues);

   $("#powerSelect").change(function() {
     if (isNan($(this).val())) {
       alert('Scegli un valore numerico')
     } else {
       const selectValue = parseInt($(this).val());
       const filteredArray = filterByPower(selectValue, cards);

       render('listaCarte', filteredArray);
     }

   })
})
