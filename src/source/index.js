import * as Const from './constants.js'

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
  Const.choosenCardsSection.style.width = '65%'
  Const.checkResult.style.display = 'flex'
}

const resultDraw = () => {
  const tittleResult = document.querySelector('.check h2')
  tittleResult.innerHTML = 'Game Draw'
  Const.choosenCardsSection.style.width = '65%'
  Const.checkResult.style.display = 'flex'
}

const resultLose = () => {
  const tittleResult = document.querySelector('.check h2')
  tittleResult.innerHTML = 'You Lose'
  Const.choosenCardsSection.style.width = '65%'
  Const.checkResult.style.display = 'flex'
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
  Const.userChoiceSection.style.display = 'none'
  Const.choosenCardsSection.style.display = 'flex'

  Const.choosenCards.classList.remove('paper')
  Const.choosenCards.classList.remove('rock')
  Const.choosenCards.classList.remove('scissor')

  Const.choosenCards.classList.add(`${userChoice}`)
  const img = Const.choosenCards.querySelector('img')
  img.src = `/src/assets/images/icon-${userChoice}.svg`
  img.alt = userChoice
}

const houseChoice = () => {
  Const.waitComputerChoice.style.display = 'none'
  Const.cardComputerChoice.style.display = 'flex'

  Const.cardComputerChoice.classList.remove('paper')
  Const.cardComputerChoice.classList.remove('rock')
  Const.cardComputerChoice.classList.remove('scissor')

  Const.cardComputerChoice.classList.add(`${computerChoice}`)
  const img = Const.cardComputerChoice.querySelector('img')
  img.src = `/src/assets/images/icon-${computerChoice}.svg`
  img.alt = computerChoice
}

const click = () => {
  Const.userChoiceBtn.forEach((item) => {
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
  Const.playAgainBtn.addEventListener('click', () => {
    Const.choosenCardsSection.style.display = 'none'
    Const.choosenCardsSection.style.width = '50%'
    Const.checkResult.style.display = 'none'
    Const.waitComputerChoice.style.display = 'flex'
    Const.cardComputerChoice.style.display = 'none'
    Const.userChoiceSection.style.display = 'flex'
    })
}

const showModal = () => {
  Const.modalBtn.addEventListener('click', () => modalEvents('.modal'))
}

click()
playAgain()
showModal()
