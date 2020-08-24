const loginDisplay = document.querySelector('.content .box .login')
const regDisplay = document.querySelector('.content .box .register')
const loginChoice = document.querySelectorAll('.content .choice span')[0]
const regChoice = document.querySelectorAll('.content .choice span')[1]
const clickHere = document.querySelector('.content .box .register p span')


loginChoice.addEventListener('click', function() {
    loginDisplay.classList.remove('display-none')
    loginChoice.classList.add('on')
    regDisplay.classList.add('display-none')
    regChoice.classList.remove('on')
})
regChoice.addEventListener('click', function() {
    loginDisplay.classList.add('display-none')
    loginChoice.classList.remove('on')
    regDisplay.classList.remove('display-none')
    regChoice.classList.add('on')
})

clickHere.addEventListener('click', function() {
    document.querySelector('.popup-bg').classList.remove('display-none')
    document.querySelector('.popup').classList.remove('display-none')
})
document.querySelector('.popup div').addEventListener('click', function() {
    document.querySelector('.popup-bg').classList.add('display-none')
    document.querySelector('.popup').classList.add('display-none')
})
