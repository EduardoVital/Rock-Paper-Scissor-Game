import { userChoiceBtn } from './elements.js'
import { clickChoice } from './choices.js'
import { checkWinner } from './checkWinner.js'

const click = (userChoice) => {
  userChoiceBtn.forEach((item) => {
    item.addEventListener('click', () => {
      userChoice = item.getAttribute('data-choice')
      clickChoice(userChoice)
      setTimeout(() => {
        checkWinner(userChoice)
      }, 1000)
    })
  })
}

export { click }