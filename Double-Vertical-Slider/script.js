const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top= `-${(slidesLength-1)*100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction ==='up')
    {
        activeSlideIndex++;
        if(activeSlideIndex===slidesLength)
            activeSlideIndex=0;
        
    }
    else{
        activeSlideIndex--;
        if(activeSlideIndex<0)
            activeSlideIndex=slidesLength-1;
    }
    // leftSlide.style.top=`-${(slidesLength-activeSlideIndex-1)*100}vh`
    // rightSlide.style.top=`-${(activeSlideIndex)*100}vh`
    leftSlide.style.transform=`translateY(${sliderHeight*activeSlideIndex}px)`
    rightSlide.style.transform=`translateY(-${sliderHeight*activeSlideIndex}px)`
}