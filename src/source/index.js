const userChoiceBtn = document.querySelectorAll('.options .card__border')
const score = document.getElementById('score')
const modalBtn = document.querySelector('.btn')
const userChoiceSection = document.querySelector('.options')
const choosenCardsSection = document.querySelector('.choice')
const choosenCards = document.querySelector('.choice .card__border')
const waitComputerChoice = document.querySelector('.computer__wait')
const cardComputerChoice = document.querySelector('.computer .card__border')
const checkResult = document.querySelector('.check')
const playAgainBtn = document.querySelector('.check button')

const pcChoice = ['rock', 'paper', 'scissor']
let userChoice = undefined
let count = 0

const resultadoPcChoice = () => {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)]
}

const computerChoice = resultadoPcChoice()

const updateScore = (value) => {
  count += value
  score.innerHTML = count
}

const resultWin = () => {
  const tittleResult = document.querySelector('.check h2')
  tittleResult.innerHTML = 'You Win'
  choosenCardsSection.style.width = '65%'
  checkResult.style.display = 'flex'
}

const resultDraw = () => {
  const tittleResult = document.querySelector('.check h2')
  tittleResult.innerHTML = 'Game Draw'
  choosenCardsSection.style.width = '65%'
  checkResult.style.display = 'flex'
}

const resultLose = () => {
  const tittleResult = document.querySelector('.check h2')
  tittleResult.innerHTML = 'You Lose'
  choosenCardsSection.style.width = '65%'
  checkResult.style.display = 'flex'
}

const checkWinner = () => {
  if (userChoice === computerChoice) {
    //draw
    setTimeout(() => {
      resultDraw()
    }, 1500)
  } else if (
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    // user won
    setTimeout(() => {
      resultWin()
      updateScore(1)
    }, 1500)
  } else {
    // user lose
    setTimeout(() => {
      resultLose()
      updateScore(-1)
    }, 1500)
  }
}

const modalEvents = (element) => {
  const modal = document.querySelector(element)
  modal.classList.add('mostrar')
  modal.addEventListener('click', (e) => {
    if (
      e.target.className === 'modal__close' ||
      e.target.className === 'modal mostrar'
    ) {
      modal.classList.remove('mostrar')
    }
  })
}

const youChoice = () => { 
  userChoiceSection.style.display = 'none'
  choosenCardsSection.style.display = 'flex'

  choosenCards.classList.remove('paper')
  choosenCards.classList.remove('rock')
  choosenCards.classList.remove('scissor')

  choosenCards.classList.add(`${userChoice}`)
  const img = choosenCards.querySelector('img')
  img.src = `/src/assets/images/icon-${userChoice}.svg`
  img.alt = userChoice
}

const houseChoice = () => {
  waitComputerChoice.style.display = 'none'
  cardComputerChoice.style.display = 'flex'

  cardComputerChoice.classList.remove('paper')
  cardComputerChoice.classList.remove('rock')
  cardComputerChoice.classList.remove('scissor')

  cardComputerChoice.classList.add(`${computerChoice}`)
  const img = cardComputerChoice.querySelector('img')
  img.src = `/src/assets/images/icon-${computerChoice}.svg`
  img.alt = computerChoice
}

const click = () => {
  userChoiceBtn.forEach((item) => {
    item.addEventListener('click', () => {
      userChoice = item.getAttribute('data-choice')
      youChoice()
      setTimeout(() => {
        houseChoice()
        checkWinner()
      }, 1000)
    })
  })
}

const playAgain = () => {
    playAgainBtn.addEventListener('click', () => {
        choosenCardsSection.style.display = 'none'
        choosenCardsSection.style.width = '50%'
        checkResult.style.display = 'none'
        waitComputerChoice.style.display = 'flex'
        cardComputerChoice.style.display = 'none'
        userChoiceSection.style.display = 'flex'
    })
}

const showModal = () => {
  modalBtn.addEventListener('click', () => modalEvents('.modal'))
}

click()
playAgain()
showModal()
