let btn = document.querySelector('.header .btn');
let popUp = document.querySelector('.pop-up');
let popUpClose = document.querySelector('.pop-up__close');

btn.addEventListener('click', function () {
    popUp.classList.add('active');
})

popUpClose.addEventListener('click', function () {
    popUp.classList.remove('active');
})