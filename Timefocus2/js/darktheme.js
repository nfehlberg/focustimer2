export default function(){

const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')
const lightTheme = document.querySelector('.light-theme')




buttonLight.addEventListener('click', function(){

  lightTheme.classList.toggle('dark-theme')
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  
})

buttonDark.addEventListener('click', function(){

  lightTheme.classList.toggle('dark-theme')
  buttonLight.classList.remove('hide')
  buttonDark.classList.add('hide')
})

}