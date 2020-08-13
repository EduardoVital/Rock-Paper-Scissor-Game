import { userChoiceBtn } from './elements.js'
import { clickChoice } from './choices.js'
import { checkWinner } from './checkWinner.js'

let userChoice = undefined

const click = () => {
  userChoiceBtn.forEach((item) => {
    item.addEventListener('click', () => {
      userChoice = item.getAttribute('data-choice')
      clickChoice()
      setTimeout(() => {
        checkWinner()
      }, 1000)
    })
  })
}

export { click, userChoice }