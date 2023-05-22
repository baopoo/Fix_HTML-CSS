const mobileWidth = 767;
const menuRight = document.querySelector('.hero-header-right');
const menuButton = document.querySelector('.hero-header_button');
const sliderService = document.querySelector('.service-steps');
const sliderServiceItem = document.querySelectorAll('.service-steps_card');
const sliderLength = sliderServiceItem.length;
const sliderDot = document.querySelectorAll('.service-steps_pagination-item');
let intervalSliderService;

let isCollapsed  = false;
let checkSliderLength = 0;
let positionX = 0;


const onClickToggleMenu = () => {
    isCollapsed  = !isCollapsed ;
    if (isCollapsed ) {
        menuButton.classList.remove('fa-bars');
        menuRight.classList.remove('d-none');
        menuRight.classList.remove('row');
        menuButton.classList.add('fa-xmark');
        menuRight.classList.add('d-block');


    } else {
        menuButton.classList.remove('fa-xmark');
        menuRight.classList.add('d-none');
        menuButton.classList.add('fa-bars');
    }
}

const changeSliderService = () => {
    let sliderItemWidth = sliderServiceItem[0].offsetWidth + 16;
    sliderDot[checkSliderLength].classList.remove('gradient-color');
    checkSliderLength++;
    if (checkSliderLength > sliderLength - 1) {
        checkSliderLength = 0;
        positionX = 0;
    } else {
        positionX = positionX - sliderItemWidth;
    }
    sliderDot[checkSliderLength].classList.add('gradient-color');
    sliderService.style = `transform: translateX(${positionX}px)`
}

const startInterval = () => {
    intervalSliderService = setInterval(() => {
        changeSliderService();
    }, 1500);
}

const stopInterval = () => {
    clearInterval(intervalSliderService);
    sliderService.style = `transform: translateX(0px)`
}

window.onload = ()  => {
    if (window.screen.width <= mobileWidth) {
        startInterval();
    } 
}

window.onresize = () => {
    stopInterval();
    if (window.screen.width <= mobileWidth) {
        startInterval();
    }
}










