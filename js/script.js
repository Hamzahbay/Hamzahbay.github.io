//Navbar
document.querySelector('.navbar .material-icons').addEventListener('click', function() {
    document.querySelector('.navbar .for-js').classList.toggle('nav-menu')
})

//slideshow
const img1 = document.querySelectorAll('.container .news-slideshow .news-slideshow-img div img')[0]
const img2 = document.querySelectorAll('.container .news-slideshow .news-slideshow-img div img')[1]
const img3 = document.querySelectorAll('.container .news-slideshow .news-slideshow-img div img')[2]
const img4 = document.querySelectorAll('.container .news-slideshow .news-slideshow-img div img')[3]

const left = document.querySelector('.fa-angle-left')
const right = document.querySelector('.fa-angle-right')

const square1 = document.querySelectorAll('.container .news-slideshow .news-slideshow-ico .dot i')[0]
const square2 = document.querySelectorAll('.container .news-slideshow .news-slideshow-ico .dot i')[1]
const square3 = document.querySelectorAll('.container .news-slideshow .news-slideshow-ico .dot i')[2]
const square4 = document.querySelectorAll('.container .news-slideshow .news-slideshow-ico .dot i')[3]

const newsText1 = document.querySelectorAll('.container .news-slideshow .news-slideshow-text div')[0]
const newsText2 = document.querySelectorAll('.container .news-slideshow .news-slideshow-text div')[1]
const newsText3 = document.querySelectorAll('.container .news-slideshow .news-slideshow-text div')[2]
const newsText4 = document.querySelectorAll('.container .news-slideshow .news-slideshow-text div')[3]


const Fsquare1 = function() {
    img1.classList.add('show')
    img1.classList.remove('hide')
    img2.classList.add('hide')
    img2.classList.remove('show')
    img3.classList.add('hide')
    img3.classList.remove('show')
    img4.classList.add('hide')
    img4.classList.remove('show')
    newsText1.classList.remove('display-none')
    newsText2.classList.add('display-none')
    newsText3.classList.add('display-none')
    newsText4.classList.add('display-none')
    square1.classList.add('actived-i')
    square2.classList.remove('actived-i')
    square3.classList.remove('actived-i')
    square4.classList.remove('actived-i')
}
const Fsquare2 = function() {
    img2.classList.add('show')
    img2.classList.remove('hide')
    img1.classList.add('hide')
    img1.classList.remove('show')
    img3.classList.add('hide')
    img3.classList.remove('show')
    img4.classList.add('hide')
    img4.classList.remove('show')
    newsText2.classList.remove('display-none')
    newsText1.classList.add('display-none')
    newsText3.classList.add('display-none')
    newsText4.classList.add('display-none')
    square2.classList.add('actived-i')
    square1.classList.remove('actived-i')
    square3.classList.remove('actived-i')
    square4.classList.remove('actived-i')
}
const Fsquare3 = function() {
    img3.classList.add('show')
    img3.classList.remove('hide')
    img2.classList.add('hide')
    img2.classList.remove('show')
    img1.classList.add('hide')
    img1.classList.remove('show')
    img4.classList.add('hide')
    img4.classList.remove('show')
    newsText3.classList.remove('display-none')
    newsText2.classList.add('display-none')
    newsText1.classList.add('display-none')
    newsText4.classList.add('display-none')
    square3.classList.add('actived-i')
    square2.classList.remove('actived-i')
    square1.classList.remove('actived-i')
    square4.classList.remove('actived-i')
}
const Fsquare4 = function() {
    img4.classList.add('show')
    img4.classList.remove('hide')
    img2.classList.add('hide')
    img2.classList.remove('show')
    img3.classList.add('hide')
    img3.classList.remove('show')
    img1.classList.add('hide')
    img1.classList.remove('show')
    newsText4.classList.remove('display-none')
    newsText2.classList.add('display-none')
    newsText3.classList.add('display-none')
    newsText1.classList.add('display-none')
    square4.classList.add('actived-i')
    square2.classList.remove('actived-i')
    square3.classList.remove('actived-i')
    square1.classList.remove('actived-i')
}

//Square slide click
square1.addEventListener('click', function() {
    i = 0
    Fsquare1()
})
square2.addEventListener('click', function() {
    i = 1
    Fsquare2()
})
square3.addEventListener('click', function() {
    i = 2
    Fsquare3()
})
square4.addEventListener('click', function() {
    i = 3
    Fsquare4()
})

//Auto slide
let i = 0

function autoSlide() {
    if( i < 3 ) {
        i++
        if( i == 1 ) {
            Fsquare1()
        }
        if( i == 2 ) {
            Fsquare2()
        }
        if( i == 3 ) {
            Fsquare3()
        }
    }
    else{
        i = 0
        if( i == 0 ) {
            Fsquare4()
        }
    }
    // console.log(i)
    setTimeout('autoSlide()', 6000)
}
autoSlide()

//Left and Right slide click
let L = 3
let R = 3

left.addEventListener('click', function() {
    if( i > 0 ) {
        i--
        if( i == 0 ) {
            Fsquare1()
        }
        if( i == 1 ) {
            Fsquare2()
        }
        if( i == 2 ) {
            Fsquare3()
        }
    }
    else{
        i = 3
        if( i == 3 ) {
            Fsquare4()
        }
    }
    // console.log(L)
})
right.addEventListener('click', function() {
    if( i < 3 ) {
        i++
        if( i == 1 ) {
            Fsquare1()
        }
        if( i == 2 ) {
            Fsquare2()
        }
        if( i == 3 ) {
            Fsquare3()
        }
    }
    else{
        i = 0
        if( i == 0 ) {
            Fsquare4()
        }
    }
    // console.log(R)
})

// let j = 0

// let counterR = () => ++ j
// let counterL = () => -- j

//Content Fixture
for ( let j = 0; j <= document.querySelectorAll(`.container .fixture .last-fix table .team-fix`).length; j++ ) {
    document.querySelector(`.container .fixture .last-fix table .team-fix${j}`).addEventListener('click', function() {
        for ( let i = 0; i <= document.querySelectorAll(`.container .fixture .last-fix table .detail-fix${j}`).length; i++ ) {
        document.querySelectorAll(`.container .fixture .last-fix table .detail-fix${j}`)[i].classList.toggle('display-none');
        }
    })
}




