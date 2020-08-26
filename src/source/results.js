import { choosenCardsSection, checkResult  } from './elements.js'

let scoreboard = 0

const updateScore = (value) => {
  scoreboard += value
  score.innerHTML = scoreboard
}

const resultWin = () => {
  setTimeout(() => {
    const tittleResult = document.querySelector('.check h2')
    tittleResult.innerHTML = 'You Win'
    choosenCardsSection.style.width = '65%'
    checkResult.style.display = 'flex'
    updateScore(1)
  }, 500) 
}

const resultDraw = () => {
  setTimeout(() => {
    const tittleResult = document.querySelector('.check h2')
    tittleResult.innerHTML = 'Game Draw'
    choosenCardsSection.style.width = '65%'
    checkResult.style.display = 'flex'
  }, 500)
}

const resultLose = () => {
  setTimeout(() => {
    const tittleResult = document.querySelector('.check h2')
    tittleResult.innerHTML = 'You Lose'
    choosenCardsSection.style.width = '65%'
    checkResult.style.display = 'flex'
    updateScore(-1)
  }, 500)
}

export { resultDraw, resultWin, resultLose }
