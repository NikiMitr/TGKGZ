const slides = document.querySelectorAll('.gallery__slide'); 
const prev = document.getElementById('prev'); 
const next = document.getElementById('next'); 
let index = 0; 
let timer = 0; 
 
function autoSlider() { 
    timer = setTimeout(nextSlide, 20000); 
 
} 
 
const activeSlide = n => { 
    for (slide of slides) { 
        slide.classList.remove('active'); 
    } 
    slides[n].classList.add('active'); 
} 
 
const nextSlide = () => { 
    if (index == slides.length - 1) { 
        index = 0; 
        activeSlide(index); 
        autoSlider(); 
    } else { 
        index++; 
        activeSlide(index); 
        autoSlider(); 
    } 
} 
 
const prevSlide = () => { 
    if (index == 0) { 
        index = slides.length - 1; 
        activeSlide(index); 
    } else { 
        index--; 
        activeSlide(index); 
    } 
} 
 
autoSlider(); 
next.addEventListener('click', nextSlide); 
prev.addEventListener('click', prevSlide);