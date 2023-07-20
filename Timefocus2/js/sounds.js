export default function (){

const forestAudio = new Audio('../assets/Floresta.wav')
const rainAudio = new Audio('./assets/Chuva.wav')
const cafeAudio = new Audio ('./assets/Cafeteria.wav')
const fireAudio = new Audio('./assets/Lareira.wav')
//const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCafe = document.querySelector('.cafe')
const buttonFire = document.querySelector('.fire')

const inputVolumeForest = document.querySelector('.volumeForest')
const inputVolumeRain = document.querySelector('.volumeRain')
const inputVolumeCafe = document.querySelector('.volumeCafe')
const inputVolumeFire = document.querySelector('.volumeFire')


function isPlaying(musicPlaying, musicAudio, buttonOne, buttonTwo, buttonThree, volumeOne, volumeTwo, volumeThree, volumeFour){
  var musicPlaying
  if (musicPlaying.classList.contains("paused")){
    musicAudio.play()
    musicAudio.loop = true
    musicPlaying.classList.add("play")
    musicPlaying.classList.remove("paused")
    musicPlaying.classList.add("active")
    volumeOne.classList.add("active")
    volumeTwo.classList.remove("active")
    volumeThree.classList.remove("active")
    volumeFour.classList.remove("active")
    buttonOne.classList.remove("active")
    buttonTwo.classList.remove("active")
    buttonThree.classList.remove("active")
    
    
  }else {
    musicAudio.pause()
    musicPlaying.classList.remove("play")
    musicPlaying.classList.add("paused")
    musicPlaying.classList.remove("active")
    volumeOne.classList.remove("active")
  }
}

function soundsOff (soundOne, soundTwo, soundThree, buttonOne, buttonTwo, buttonThree) {
  soundOne.pause()
  soundTwo.pause()
  soundThree.pause()
  buttonOne.classList.remove("play")
  buttonOne.classList.add("paused")
  buttonTwo.classList.remove("play")
  buttonTwo.classList.add("paused")
  buttonThree.classList.remove("play")
  buttonThree.classList.add("paused")
  
}


function pressForest (){
  
  isPlaying(buttonForest, forestAudio, buttonCafe, buttonFire, buttonRain, inputVolumeForest, inputVolumeCafe, inputVolumeFire, inputVolumeRain)
  soundsOff(rainAudio, fireAudio, cafeAudio, buttonCafe, buttonFire, buttonRain)
  inputVolumeForest.addEventListener('input', function() {
  forestAudio.volume = inputVolumeForest.value;
  })
  
}

function pressRain (){
  
  isPlaying (buttonRain, rainAudio, buttonCafe, buttonFire, buttonForest, inputVolumeRain, inputVolumeForest, inputVolumeCafe, inputVolumeFire)
  soundsOff(forestAudio, fireAudio, cafeAudio, buttonCafe, buttonFire, buttonForest)
  inputVolumeRain.addEventListener('input', function() {
    rainAudio.volume = inputVolumeRain.value;
  });
  
}
function pressCafe (){
  isPlaying (buttonCafe, cafeAudio, buttonForest, buttonFire, buttonRain, inputVolumeCafe, inputVolumeFire, inputVolumeRain, inputVolumeForest)
  soundsOff (forestAudio, fireAudio, rainAudio, buttonForest, buttonFire, buttonRain)
  inputVolumeCafe.addEventListener('input', function() {
    cafeAudio.volume = inputVolumeCafe.value;
  });
  
}
function pressFire (){
  isPlaying (buttonFire, fireAudio, buttonCafe, buttonForest, buttonRain,inputVolumeFire, inputVolumeRain, inputVolumeForest, inputVolumeCafe)
  soundsOff(forestAudio, cafeAudio, rainAudio, buttonCafe, buttonForest, buttonRain)
  inputVolumeFire.addEventListener('input', function() {
    fireAudio.volume = inputVolumeFire.value;
  });
}


buttonForest.addEventListener('click', function(){
  pressForest()
})

buttonCafe.addEventListener('click', function(){
  pressCafe()

})
buttonFire.addEventListener('click', function(){
  pressFire()
 
})

buttonRain.addEventListener('click', function(){
  pressRain() 
})


}


