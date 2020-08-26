import { randomChoice } from './choices.js'
import { resultDraw, resultWin, resultLose } from './results.js'

const rock = 'rock'
const paper = 'paper'
const scissor = 'scissor'

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

const pcChoice = gameChoices.map((item) => item.choice)

const resultPcChoice = () => {
  const randomNumber = Math.random() * pcChoice.length
  const integerRandomNumber = Math.floor(randomNumber)
  
  return pcChoice[integerRandomNumber]
}

const checkWinner = (userChoice) => {
  const computerChoice = resultPcChoice()
  randomChoice(computerChoice)

  if (userChoice === computerChoice) {
    //draw
    resultDraw()
  } else if (
    (userChoice === paper && computerChoice === rock) ||
    (userChoice === rock && computerChoice === scissor) ||
    (userChoice === scissor && computerChoice === paper)
  ) {
    // user won
    resultWin()
  } else {
    // user lose
    resultLose()
  }
}

export { checkWinner, rock, paper, scissor }