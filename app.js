const cardArray=[
    {
        name:"fries",
        img: "assets/img/fries.png",
    },
    {
        name:"cheeseburger",
        img: "assets/img/cheeseburger.png",
    },

    {
        name: "ice-cream",
        img:"assets/img/ice-cream.png",
    },
    {
        name: "pizza",
        img: "assets/img/pizza.png",
    },
    {
        name: "milkshake",
        img:"assets/img/milkshake.png",
    },
    {
        name: 'hotdog',
        img: 'assets/img/hotdog.png'
      },
      {
        name: 'fries',
        img: 'assets/img/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'assets/img/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'assets/img/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'assets/img/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'assets/img/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'assets/img/hotdog.png'
      }
]
cardArray.sort(()=>0.5-Math.random()) // Yuxaridaki arrayda biz dedikki birinci 0.5-den kicikden basla boyuye dogru getsin.

// console.log(cardArray);

const gridDisplay=document.querySelector(".grid");
const resultDisplay = document.querySelector('#result')
let cardsChosen=[]
let cardsChosenId=[]
const cardsWon=[]




//Create Board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.setAttribute('src', 'assets/img/blank.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          gridDisplay.appendChild(card)
        }
    }
    createBoard()


function checkMatch(){
  const cards=document.querySelectorAll("img")
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'assets/img/blank.png')
    cards[optionTwoId].setAttribute('src', 'assets/img/blank.png')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'assets/img/white.png')
    cards[optionTwoId].setAttribute('src', 'assets/img/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'assets/img/blank.png')
    cards[optionTwoId].setAttribute('src', 'assets/img/blank.png')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

    function flipCard(){
      let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name);
cardsChosenId.push(cardId);
// console.log(chosenCard);
// console.log(chosenCardsid);
this.setAttribute('src',cardArray[cardId].img);

if (cardsChosen.length ===2) {
  setTimeout(checkMatch, 500)
}
    }
