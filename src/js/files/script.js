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


// function initMap() {
//   ymaps.ready(function () {
//     map = new ymaps.Map('map', {
//       center: [51.7684, 55.0969], // Оренбург
//       zoom: 10,
//       controls: ['zoomControl']
//     });

//     clusterer = new ymaps.Clusterer({
//       clusterDisableClickZoom: false,
//       preset: 'islands#invertedGreenClusterIcons',
//       geoObjectHideIconOnBalloonOpen: false,
//       clusterIconShape: {
//         type: 'Circle',
//         coordinates: [0, 0],
//         radius: 30
//       },
//       // Задаём цвет для кластеров:
//       clusterIconColor: '#14a759'
//     });

//     map.geoObjects.add(clusterer);
//     updateMap();
//   });
// }



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
