const openNav = document.querySelector('.nav__menu')
const closeNav = document.querySelector('.nav__links__close')
const navLink = document.querySelector('.nav__links')

openNav.addEventListener('click', () => {
    navLink.classList.add('active')
})

closeNav.addEventListener('click', () => {
    navLink.classList.remove('active')
})


window.addEventListener('scroll', scrollNav)

function scrollNav(){

    const header = document.querySelector('header')

    if(scrollY > 20){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        // when window width is >= 320px
        // when window width is >= 480px
        375: {
        slidesPerView: 3,
        spaceBetween: 10
        },
        // when window width is >= 640px
        630: {
        slidesPerView: 4,
        spaceBetween: 30
        },
        980: {
            slidesPerView: 5,
            spaceBetween: 40
            },
    }
});


var swiper = new Swiper(".inspired", {
    slidesPerView: 2,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        // when window width is >= 480px
        375: {
        slidesPerView: 3,
        spaceBetween: 10
        },
        // when window width is >= 640px
        630: {
        slidesPerView: 4,
        spaceBetween: 30
        },
        980: {
            slidesPerView: 5,
            spaceBetween: 40
            },
    }
});


