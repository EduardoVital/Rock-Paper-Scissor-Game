const cardBtn = document.querySelectorAll('.card__border')
const score = document.getElementById('score')
const button = document.querySelector('.btn')
const options = document.querySelector('.options')
const choice = document.querySelector('.choice')
const cardChoice = document.querySelector('.choice .card__border')
const wait = document.querySelector('.computer__wait')
const cardComputerChoice = document.querySelector('.computer .card__border')
const WinOrLose = document.querySelector('.check')

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

    if( userChoice === computerChoice ) {
        //draw
        setTimeout(() => {
            resultDraw()
        },1500)
    } else if ( (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'rock' && computerChoice === 'scissor') || (userChoice === 'scissor' && computerChoice === 'paper') ) {
        // user won
        setTimeout(() => {
            resultWin()
            updateScore(1)
        },1500)
    } else {
        // user lose
        setTimeout(() => {
            resultLose()
            updateScore(-1)
        },1500)
    }
}

const modalEvents = (element) => {
    const modal = document.querySelector(element)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.className === 'modal__close' || e.target.className === 'modal mostrar') {
            modal.classList.remove('mostrar')
        }
    })
}

const youChoice = () => {
    if( userChoice === 'paper' ) {
        options.style.display = 'none'
        choice.style.display = 'flex'
        //create elements
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = '/src/assets/images/icon-paper.svg'
        //append elements
        div.appendChild(img)
        cardChoice.appendChild(div)
        //add class
        cardChoice.classList.add('blue')
    } else if ( userChoice === 'rock' ) {
        options.style.display = 'none'
        choice.style.display = 'flex'
        //create elements
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = '/src/assets/images/icon-rock.svg'
        //append elements
        div.appendChild(img)
        cardChoice.appendChild(div)
        //add class
        cardChoice.classList.add('red')
    } else if ( userChoice === 'scissor' ) {
        options.style.display = 'none'
        choice.style.display = 'flex'
        //create elements
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = '/src/assets/images/icon-scissors.svg'
        //append elements
        div.appendChild(img)
        cardChoice.appendChild(div)
        //add class
        cardChoice.classList.add('yellow')
    }
}

const houseChoice = () => {
    if( computerChoice === 'paper' ) {
        wait.style.display = 'none'
        cardComputerChoice.style.display = 'flex'
        //create elements
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = '/src/assets/images/icon-paper.svg'
        //append elements
        div.appendChild(img)
        cardComputerChoice.appendChild(div)
        //add class
        cardComputerChoice.classList.add('blue')
    } else if ( computerChoice === 'rock' ) {
        wait.style.display = 'none'
        cardComputerChoice.style.display = 'flex'
        //create elements
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = '/src/assets/images/icon-rock.svg'
        //append elements
        div.appendChild(img)
        cardComputerChoice.appendChild(div)
        //add class
        cardComputerChoice.classList.add('red')
    } else if ( computerChoice === 'scissor' ) {
        wait.style.display = 'none'
        cardComputerChoice.style.display = 'flex'
        //create elements
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = '/src/assets/images/icon-scissors.svg'
        //append elements
        div.appendChild(img)
        cardComputerChoice.appendChild(div)
        //add class
        cardComputerChoice.classList.add('yellow')
    }
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

const showModal = () => {
    button.addEventListener('click', () => modalEvents('.modal'))
}

click()
showModal()




