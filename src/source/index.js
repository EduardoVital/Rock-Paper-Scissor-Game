const cardBtn = document.querySelectorAll('.options .card__border')
const score = document.getElementById('score')
const button = document.querySelector('.btn')
const options = document.querySelector('.options')
const choice = document.querySelector('.choice')
const cardChoice = document.querySelector('.choice .card__border')
const wait = document.querySelector('.computer__wait')
const cardComputerChoice = document.querySelector('.computer .card__border')
const WinOrLose = document.querySelector('.check')
const playAgain = document.querySelector('.check button')

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
  choice.style.width = '65%'
  WinOrLose.style.display = 'flex'
}

const resultDraw = () => {
  const tittleResult = document.querySelector('.check h2')
  tittleResult.innerHTML = 'Game Draw'
  choice.style.width = '65%'
  WinOrLose.style.display = 'flex'
}

const resultLose = () => {
  const tittleResult = document.querySelector('.check h2')
  tittleResult.innerHTML = 'You Lose'
  choice.style.width = '65%'
  WinOrLose.style.display = 'flex'
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
  options.style.display = 'none'
  choice.style.display = 'flex'

  cardChoice.classList.remove('paper')
  cardChoice.classList.remove('rock')
  cardChoice.classList.remove('scissor')

  cardChoice.classList.add(`${userChoice}`)
  const img = cardChoice.querySelector('img')
  img.src = `/src/assets/images/icon-${userChoice}.svg`
  img.alt = userChoice
}

const houseChoice = () => {
  wait.style.display = 'none'
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
  cardBtn.forEach((item) => {
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

const play = () => {
    playAgain.addEventListener('click', () => {
        choice.style.display = 'none'
        WinOrLose.style.display = 'none'
        choice.style.width = '50%'
        wait.style.display = 'flex'
        cardComputerChoice.style.display = 'none'
        options.style.display = 'flex'
    })
}

const showModal = () => {
  button.addEventListener('click', () => modalEvents('.modal'))
}

click()
play()
showModal()
