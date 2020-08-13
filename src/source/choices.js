import { userChoiceSection, choosenCardsSection, choosenCards, waitComputerChoice, cardComputerChoice } from './elements.js'
import { userChoice } from './click.js'

const clickChoice = () => { 
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

const randomChoice = (computerChoice) => {
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

export { clickChoice, randomChoice }