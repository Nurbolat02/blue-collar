$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        breakpoint: 500,
        settings: {
            arrows: false,
        }
    });
});
function openOffer(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('current')

    }
    document.getElementById(cityName).style.display = "flex";
    document.getElementById(cityName).classList.add('current')
    check()


}
function check() {
    let tabcurrent = document.querySelector('.tabcontent.current');
    let link = tabcurrent.querySelector('.tabcontent__link');
    let img = tabcurrent.querySelector('.tabcontent__img');
    let content = tabcurrent.querySelector('.tabcontent__info')
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width < 981) {
        if (!(img.classList.contains('done'))) {
            link.before(img)
            img.classList.add('done')
        }
    }
    else {
        content.after(img)
        img.classList.remove('done')

    }
}
window.addEventListener('resize', check)
let list = document.querySelector(".nav__list");
let li = list.querySelectorAll('li')
li.forEach(function (element) {
    element.addEventListener('click', clickHandler)
})
function clickHandler(event) {
    li.forEach(function (el) {
        el.querySelector("a").classList.remove("active");
    })
    event.target.classList.add('active')

}
let body = document.body;
let userMenu = document.querySelector('.header__bottom-row')
let headerMenu = document.querySelector('.header__top__menu')
function menuHadnler() {
    userMenu.classList.toggle('menu-open');
    headerMenu.classList.toggle('menu__active')
    if (headerMenu.classList.contains('menu__active')) {
        body.classList.add('overflow');
    }
    else {
        body.classList.remove('overflow');
    }


}
let menu = document.querySelector('.menu');
menu.addEventListener('click', menuHadnler)

// window.addEventListener('resize', function () {
//     if (window.matchMedia("(max-width: 750px)").matches) {
//         console.log('I work')
//         link.before(img)
//     }

// })

// Math.max(document.documentElement.clientWidth, window.innerWidth || 0)


// let x = document.querySelector("button");
// x.addEventListener('click', function (event) {
//     event.preventDefault()
// });





