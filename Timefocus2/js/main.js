import Sounds from './sounds.js'
import Theme from './darktheme.js'

const theme = Theme()
const sound = Sounds()

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop  = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

buttonPlay.addEventListener('click', function(){
  countdown()
  play()
})
buttonPause.addEventListener('click', function(){
  hold()
  pause()
})

buttonStop.addEventListener('click',function(){

    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
    pause()
    
})
buttonPlus.addEventListener('click', function(){
  minutes = minutes + 5

  minutesDisplay.textContent = String(minutes).padStart(2,"0")
})

buttonMinus.addEventListener('click', function(){
  if (minutes > 0){
    minutes = minutes - 5
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
  }
  return
})

function updateTimerDisplay(newMinutes, seconds) {
  
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
  timerTimeOut = setTimeout(function(){
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  let isFinished = minutes <= 0 && seconds <= 0  
  updateTimerDisplay(minutes, 0)
  
  if(isFinished){
    updateTimerDisplay()
    pause()
   return
  }
  
  if(seconds <= 0){
    seconds = 60
    --minutes
  }

  updateTimerDisplay(minutes, String(seconds - 1))
  countdown()

  },1000)
}

function hold() {
  clearTimeout(timerTimeOut)
}

function play(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

function pause(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}
