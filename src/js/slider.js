// //slider

// const slider = document.querySelector('.works__slider');
// const sliderItems = document.querySelectorAll('.works__photo');
// const btnNext = document.querySelector('.works__prev');
// const btnPrev = document.querySelector('.works__next');


// sliderItems.forEach(function (slide, index) {

//     if (index !== 0) {
//         slide.classList.add('hidden');
//         slide.removeAttribute('data-active');
//     }

//     slide.dataset.index = index;

//     sliderItems[0].setAttribute('data-active', '');

//     slide.addEventListener('click', function () {
//         showNextSlide('next');
//     });
// });

// btnNext.onclick = function () {

//     showNextSlide('next');
// }

// btnPrev.onclick = function () {
//     console.log('prev');

//     showNextSlide('prev');
// }

// function showNextSlide(direction) {
//     const currentSlide = slider.querySelector('[data-active]');
//     const currentSlideIndex = +currentSlide.dataset.index;
//     currentSlide.classList.add('hidden');
//     currentSlide.removeAttribute('data-active');

//     let nextSlideIndex
//     if (direction === 'next') {
//         nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
//     } else if (direction === 'prev') {
//         nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
//     }

//     const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
//     nextSlide.classList.remove('hidden');
//     nextSlide.setAttribute('data-active', '');
//  }