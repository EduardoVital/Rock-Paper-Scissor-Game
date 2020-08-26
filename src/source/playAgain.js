import { choosenCardsSection, playAgainBtn, checkResult, waitComputerChoice, cardComputerChoice, userChoiceSection } from './elements.js'

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

export { playAgain }