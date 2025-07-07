// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
window.addEventListener("load", function () {
  document.body.classList.remove("load");
});



// $(function () {
//   let header = $('.header');
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 40) {
//       header.addClass('_fixed');
//     } else {
//       header.removeClass('_fixed');
//     }
//   });

//   $('.filter-open').click(function () {
//     $('.catalog__filter-row').fadeIn();
//     $('html').addClass('lock ')
//   })

//   $('.close-filter').click(function () {
//     $('.catalog__filter-row').fadeOut();
//     $('html').removeClass('lock')
//   })


//   $('.filter-reset').on('click', function () {
//     // Сброс полей формы
//     $('#catalog-form')[0].reset();

//     // Снимаем все чекбоксы вручную
//     $('input[type="checkbox"]').prop('checked', false);

//     // Очищаем URL от всех параметров
//     // window.location.href = window.location.pathname;
//   });





//   var map;
//   ymaps.ready(function () {
//     var map = new ymaps.Map('map', {
//       center: [55.751574, 37.573856],
//       zoom: 10,
//     });


//     const openMapButton = document.querySelector('.open-map');

//     // Добавляем обработчик клика на кнопку
//     openMapButton.addEventListener('click', function () {
//       // Вызываем метод fitToViewport для обновления карты

//       setTimeout(function () {
//         map.container.fitToViewport(); // Перестроить карту под новый размер
//       }, 300);
//     });

//     var myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
//       hintContent: 'Москва',
//       balloonContent: 'Столица России',
//       controls: [],
//     });

//     map.geoObjects.add(myPlacemark);
//   });

//   function bigMap() {
//     $('.catalog__row').toggleClass('big-map');
//     $('.catalog__map').toggleClass('big-map');
//     $('.catalog__list').toggleClass('big-map');
//     $('.catalog__item').toggleClass('big-map');
//     $('.open-map span').toggle();
//     $('.open-map svg').toggle()
//   }

//   $('.open-map').click(function () {
//     bigMap()
//   });

// });

$(function () {
  // Проверяем наличие элемента .header
  let header = $('.header');
  if (header.length > 0) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        header.addClass('_fixed');
      } else {
        header.removeClass('_fixed');
      }
    });
  }


  // Проверяем наличие кнопки .filter-open
  let filterOpenButton = $('.filter-open');
  if (filterOpenButton.length > 0) {
    filterOpenButton.click(function () {
      $('.catalog__filter-row').fadeIn();
      $('html').addClass('lock');
    });
  }

  // Проверяем наличие кнопки .close-filter
  let closeFilterButton = $('.close-filter');
  if (closeFilterButton.length > 0) {
    closeFilterButton.click(function () {
      $('.catalog__filter-row').fadeOut();
      $('html').removeClass('lock');
    });
  }

  // Проверяем наличие кнопки .filter-reset
  let filterResetButton = $('.filter-reset');
  if (filterResetButton.length > 0) {
    filterResetButton.on('click', function () {
      // Сброс полей формы
      let catalogForm = $('#catalog-form');
      if (catalogForm.length > 0) {
        catalogForm[0].reset();
      }

      // Снимаем все чекбоксы вручную
      $('input[type="checkbox"]').prop('checked', false);

      // Очищаем URL от всех параметров
      // window.location.href = window.location.pathname;
    });
  }

  // Проверяем наличие элемента #map для инициализации карты
  let mapElement = document.getElementById('map');
  // if (mapElement) {
  //   ymaps.ready(function () {
  //     var map = new ymaps.Map('map', {
  //       center: [55.751574, 37.573856],
  //       zoom: 10,
  //     });

  //     // Проверяем наличие кнопки .open-map
  //     const openMapButton = document.querySelector('.open-map');
  //     if (openMapButton) {
  //       openMapButton.addEventListener('click', function () {
  //         setTimeout(function () {
  //           map.container.fitToViewport(); // Перестроить карту под новый размер
  //         }, 300);
  //       });
  //     }

  //     var myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
  //       hintContent: 'Москва',
  //       balloonContent: 'Столица России',
  //       controls: [],
  //     });

  //     map.geoObjects.add(myPlacemark);
  //   });
  // }

  // Функция для изменения размера карты
  function bigMap() {
    $('.catalog__row').toggleClass('big-map');
    $('.catalog__map').toggleClass('big-map');
    $('.catalog__list').toggleClass('big-map');
    $('.catalog__item').toggleClass('big-map');
    $('.open-map span').toggle();
    $('.open-map svg').toggle();
  }

  // Проверяем наличие кнопки .open-map
  let openMapButton = $('.open-map');
  if (openMapButton.length > 0) {
    openMapButton.click(function () {
      bigMap();
    });
  }
});


document.body.addEventListener('click', (event) => {
  // Находим ближайший элемент с классом favorite
  const clickedElement = event.target.closest('.item-catalog__favorite');

  if (clickedElement) {
    // Проверяем, есть ли у элемента класс active
    if (clickedElement.classList.contains('active')) {
      // Если класс active есть, удаляем его
      clickedElement.classList.remove('active');
    } else {
      // Если класса active нет, добавляем его
      clickedElement.classList.add('active');
    }
  }
});


// Находим элемент, на котором нужно отслеживать события (например, контейнер слайдера)

// const sliderElement = document.querySelectorAll('.item-catalog__photos'); // Замените селектор на нужный
// window.itemPhotos.autoplay.stop();
// sliderElements.forEach(sliderElement => {
//   // Добавляем обработчик для события mouseenter
//   sliderElement.addEventListener('mouseenter', () => {
//     window.itemPhotos.autoplay.start();
//   });

//   // Добавляем обработчик для события mouseleave
//   sliderElement.addEventListener('mouseleave', () => {
//     window.itemPhotos.autoplay.stop();
//   });
// }


// Кнопка Узнать больше

document.addEventListener("DOMContentLoaded", () => {
  const textWrapper = document.querySelector(".flat__text-content");
  const readMoreButton = document.querySelector(".read-more-btn");

  readMoreButton.addEventListener("click", () => {
    textWrapper.classList.add("open");
    readMoreButton.style.display = "none";
  });
});










