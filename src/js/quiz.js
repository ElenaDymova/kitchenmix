// //quiz
// const quiz = document.querySelector('#quiz');
// const quizItems = Array.from(quiz.children);
// const knowPrice = document.querySelector('.count__button');

// if (knowPrice) {
//     thirstWindow = document.querySelector('.count__calc');
//     secondWindow = document.querySelector('.type');

//     knowPrice.addEventListener("click", function(e){
//         thirstWindow.style.display = "none";
//         secondWindow.style.display = "block";
//     });
// };

// quizItems.forEach(function (section, index) {
//     section.classList.add('hidden');

//     if (index != 0) {
//         section.classList.add('hidden');
//     }

//     section.dataset.index = index;

//     section.addEventListener('click', function () {

//         section.classList.add('hidden');

//         const nextSlideIndex = +section.dataset.index + 1;
//         console.log(nextSlideIndex);

//         const nextSlide = section.querySelector(`[data-index="${nextSlideIndex}"]`);
//         nextSlide.classList.remove('hidden');
//     });
// });