// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
window.addEventListener("load", function () {
  document.body.classList.remove("load");
});



$(function () {
  let header = $('.header');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      header.addClass('_fixed');
    } else {
      header.removeClass('_fixed');
    }
  });
});



// var swiper = new Swiper(".partners__slider", {
//   slidesPerView: 5.5,
//   grid: {
//     rows: 2,
//     fill: "row",
//   },
//   spaceBetween: 20,
// });



// document.addEventListener('DOMContentLoaded', function () {
//   var flkty = new Flickity('.flickity-slider', {
//     wrapAround: true, // Бесконечная прокрутка
//     freeScroll: true, // Разрешить свободную прокрутку
//     pageDots: false, // Отключаем точки пагинации
//     prevNextButtons: true, // Включаем кнопки "назад" и "вперед"
//     cellAlign: 'left', // Выравнивание слайдов по левому краю
//     contain: false, // Разрешить выход за пределы контейнера
//   });
// });
