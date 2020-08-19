import { randomChoice } from './choices.js'
import { resultDraw, resultWin, resultLose } from './results.js'
import { userChoice } from './click.js'

let pcChoice = []
const gameChoices = [ 
  {
    choice: 'rock',
  },
  {
    choice: 'paper',
  },
  {
    choice: 'scissor'
  }
]

const [ ...items ] = gameChoices
items.forEach((item) => { pcChoice.push(item.choice) } )

const resultPcChoice = () => {
  return pcChoice[Math.floor(Math.random() * pcChoice.length)]
}

const checkWinner = () => {
  const computerChoice = resultPcChoice()
  randomChoice(computerChoice)

  if (userChoice === computerChoice) {
    //draw
    resultDraw()
  } else if (
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    // user won
    resultWin()
  } else {
    // user lose
    resultLose()
  }
}

export { checkWinner }