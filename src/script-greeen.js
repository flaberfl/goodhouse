
jQuery(function ($) {
  var map;                 // Глобальная переменная для Я.Карты
  var clusterer;           // Кластеризатор
  var catalogItemSliders = [];  // Массив Swiper'ов
  var popup = $('#apartment-popup');
  var clusterList = $('.cluster-list');

  $(document).ready(function () {
    let $loadingLine = $(".loading-line");

    // Устанавливаем начальную анимацию до 90%
    $loadingLine.css("width", "90%");

    // Когда страница полностью загружена
    $(window).on("load", function () {
      $loadingLine.css("width", "100%");

      setTimeout(() => {
        $loadingLine.fadeOut(300);
      }, 500);
    });
  });

  // 1) ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРОВ
  function initSliders() {
    catalogItemSliders.forEach(function (swiper) {
      swiper.destroy(true, true);
    });
    catalogItemSliders = [];

    $('.catalog-item-photos').each(function () {
      var swiperInstance = new Swiper(this, {
        loop: true,
        pagination: {
          el: $(this).find('.catalog-item-pagination')[0],
          clickable: true
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
      });

      swiperInstance.autoplay.stop();
      $(this).on('mouseenter', function () {
        swiperInstance.autoplay.start();
      });

      $(this).on('mouseleave', function () {
        swiperInstance.autoplay.stop();
      });
      catalogItemSliders.push(swiperInstance);
    });
  }

  // 2) ИНИЦИАЛИЗАЦИЯ КАРТЫ
  function initMap() {
    ymaps.ready(function () {
      map = new ymaps.Map('map', {
        center: [51.7684, 55.0969], // Оренбург
        zoom: 10,
        controls: ['zoomControl']
      });

      clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        preset: 'islands#invertedGreenClusterIcons',
        geoObjectHideIconOnBalloonOpen: false,
        clusterIconShape: {
          type: 'Circle',
          coordinates: [0, 0],
          radius: 30
        },
        // Задаём цвет для кластеров:
        clusterIconColor: '#14a759'
      });

      map.geoObjects.add(clusterer);
      updateMap();
    });
  }

  function bigMap() {
    $('.catalog__map').toggleClass('big-map');
    $('.catalog__list').toggleClass('big-map');
    $('.open-map svg').toggle()
    setTimeout(function () {
      if (map) {
        map.container.fitToViewport(); // Перестроить карту под новый размер
      }
    }, 300);
  }

  $('.open-map').click(function () {
    bigMap()
    popup.hide();
  });

  // 3) ОБНОВЛЕНИЕ КАРТЫ
  function updateMap() {
    if (!map || !clusterer) return;

    clusterer.removeAll();
    var coordinates = {};

    $('.catalog__item').each(function () {
      var item = $(this);
      var data = item.data('coordinates');

      if (!data) return;

      var apartmentData = {
        id: item.find('a.full-link').attr('href'),
        title: item.find('.catalog__item-title h3').text().trim(),
        description: item.find('.catalog__item-desc').text().trim(),
        price: item.find('.catalog__item-price').text().trim(),
        link: item.find('a.full-link').attr('href'),
        linkBron: item.find('a.btn-green').attr('href'),
        images: [],
        thumbnail: item.find('.catalog__item img').first().attr('src') || '/default-thumbnail.jpg'
      };

      // Получаем фото из галереи ACF
      item.find('.catalog-item-photo img').each(function () {
        apartmentData.images.push($(this).attr('src'));
      });

      // Чистим JSON от пробелов
      var cleanedData = JSON.parse(JSON.stringify(data).replace(/\s+/g, ''));

      cleanedData.forEach(function (item) {
        var coords = item.coords.split(',');
        var lat = parseFloat(coords[0]);
        var lon = parseFloat(coords[1]);

        if (!isNaN(lat) && !isNaN(lon)) {
          var key = lat + ',' + lon;
          if (!coordinates[key]) {
            coordinates[key] = [];
          }
          coordinates[key].push(apartmentData);
        }
      });
    });

    Object.keys(coordinates).forEach(function (key) {
      var [lat, lon] = key.split(',').map(parseFloat);
      let apartments = coordinates[key];

      let placemark = new ymaps.Placemark([lat, lon], {
        // hintContent: `Квартир: ${apartments.length}`
      }, {
        preset: 'default#circleIcon',
        iconColor: '#14a759'
      });

      placemark.events.add('click', function () {
        openPopup(apartments);
      });

      clusterer.add(placemark);
    });
  }


  function openPopup(apartments) {
    clusterList.empty(); // Очищаем список перед добавлением новых квартир

    apartments.forEach((apartment, index) => {
      let imagesHTML = '';

      if (apartment.images.length > 1) {
        imagesHTML = `
                            <div class="catalog-item-photos swiper-${index}">
    <div class="swiper-wrapper">
        ${apartment.images.map((img, i) => `
            <div class="swiper-slide catalog-item-photo">
                <img src="${img}" alt="Фото квартиры">
                ${i == 5 && apartment.images.length > 5 ? `<div class="photo-count">Еще ${apartment.images.length - 5} фото</div>` : ''}
            </div>
        `).join('')}
    </div>
    <div class="catalog-item-pagination"></div>
</div>`;
      } else {
        let displayImage = apartment.images.length > 0 ? apartment.images[0] : apartment.thumbnail;
        imagesHTML = `<img src="${displayImage}" alt="Фото квартиры">`;
      }

      clusterList.append(`
                        <div class="catalog__item">
                            <a class="full-link" href="${apartment.link}"></a>
                            ${imagesHTML}
                            <div class="catalog__item-info">
                                <div class="catalog__item-info-top">
                                    <div class="catalog__item-title">
                                       ${apartment.title}
                                    </div>
                                    <div class="apartment-price">
                                        ${apartment.price}
                                    </div>
                                </div>
                                <div class="catalog__item-bottom">
                                    <a class="btn-link" href="${apartment.linkBron}">Забронировать</a>
                                </div>
                            </div>
                        </div>
                    `);
    });

    popup.show();

    // Инициализируем Swiper только для квартир, у которых больше 1 фото
    apartments.forEach((apartment, index) => {
      if (apartment.images.length > 1) {
        const swiperInstance = new Swiper(`.catalog-item-photos.swiper-${index}`, {
          loop: true,
          pagination: { el: '.catalog-item-pagination', clickable: true },
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        });

        const swiperContainer = document.querySelector(`.catalog-item-photos.swiper-${index}`);

        swiperInstance.autoplay.stop();

        swiperContainer.addEventListener('mouseenter', () => {
          swiperInstance.autoplay.start();
        });

        swiperContainer.addEventListener('mouseleave', () => {
          swiperInstance.autoplay.stop();
        });
      }
    });

    $('.catalog__map').addClass('big-map');
    $('.catalog__list').addClass('big-map');
    setTimeout(function () {
      if (map) {
        map.container.fitToViewport(); // Перестроить карту под новый размер
      }
    }, 300);
  }

  $('.close').click(function () {
    popup.hide();
    bigMap()
  });

  $('.city-option').click(function (e) {
    e.preventDefault();

    var selectedCity = $(this).data('city');
    var currentUrl = window.location.href;
    var urlParts = currentUrl.split('?'); // Разделяем URL и параметры
    var params = new URLSearchParams(urlParts[1]); // Берем параметры из URL

    // Получаем текущий город из URL
    var currentPath = window.location.pathname;
    var currentCity = currentPath.split('/')[1]; // Берем первую часть после домена

    // Проверяем, если текущий город - Оренбург или Самара, заменяем его
    if (currentCity === 'orenburg' || currentCity === 'samara') {
      var newPath = currentPath.replace(currentCity, selectedCity);
    } else {
      var newPath = '/' + selectedCity + currentPath; // Если нет города в URL
    }

    // Собираем новый URL с параметрами
    var newUrl = window.location.origin + newPath + '?' + params.toString();

    window.location.href = newUrl; // Перенаправляем на новый URL
  });

  $('.filter-dropdown__result').click(function () {
    $('.filter-dropdown__content').slideToggle();
    $(this).toggleClass('active')
  })

  $('input[name="komnat[]"], input[name="krovat[]"]').prop('checked', false);
  $('input[name="komnat_mobile[]"], input[name="krovat_mobile[]"]').prop('checked', false);

  var urlParams = new URLSearchParams(window.location.search);

  // 2) Восстанавливаем состояние чекбоксов "Комнаты"
  var komnatStr = urlParams.get('komnat');
  if (komnatStr) {
    var komnatArr = komnatStr.split(',');
    $('input[name="komnat[]"]').each(function () {
      if (komnatArr.includes($(this).val())) {
        $(this).prop('checked', true);
      }
    });
  }

  var komnatStrMob = urlParams.get('komnat_mobile');
  if (komnatStrMob) {
    var komnatArrMob = komnatStrMob.split(',');
    $('input[name="komnat_mobile[]"]').each(function () {
      if (komnatArrMob.includes($(this).val())) {
        $(this).prop('checked', true);
      }
    });
  }

  // 3) Восстанавливаем состояние чекбоксов "Кровати"
  var krovatStr = urlParams.get('krovat');
  if (krovatStr) {
    var krovatArr = krovatStr.split(',');
    $('input[name="krovat[]"]').each(function () {
      if (krovatArr.includes($(this).val())) {
        $(this).prop('checked', true);
      }
    });
  }

  var krovatStrMob = urlParams.get('krovat_mobile');
  if (krovatStrMob) {
    var krovatArrMob = krovatStrMob.split(',');
    $('input[name="krovat_mobile[]"]').each(function () {
      if (krovatArrMob.includes($(this).val())) {
        $(this).prop('checked', true);
      }
    });
  }

  $('.minus').click(function () {
    var currentValue = parseInt($('.guests-input').val(), 10);
    if (currentValue > 1) {
      currentValue -= 1;
      $('.guests-input').val(currentValue);
      $('.guests .filter-dropdown__result span').text(currentValue);
    }
    if ($(window).width() > 1024) {
      $('#filterForm').submit();
    }
  });

  $('.plus').click(function () {
    var currentValue = parseInt($('.guests-input').val(), 10);
    currentValue += 1;
    $('.guests-input').val(currentValue);

    if ($(window).width() > 1024) {
      $('#filterForm').submit();
    }
  });

  if ($(window).width() > 1024) {
    $('#filterForm').on('submit', function (e) {
      e.preventDefault(); // Остановка стандартного поведения формы

      var params = new URLSearchParams(); // Очищаем все параметры

      // Цена
      if ($('#czena_min').val()) params.set('czena_min', $('#czena_min').val());
      if ($('#czena_max').val()) params.set('czena_max', $('#czena_max').val());

      // Гости
      if ($('.guests-input').val()) params.set('gosti', $('.guests-input').val());

      // Комнаты (чекбоксы)
      var komnatValues = [];
      $('input[name="komnat[]"]:checked').each(function () {
        komnatValues.push($(this).val());
      });

      if (komnatValues.length > 0) {
        params.set('komnat', komnatValues.join(',')); // Убираем запятые
      } else {
        params.delete('komnat'); // Удаляем параметр, если чекбоксы сняты
      }

      // Кровати (чекбоксы)
      var krovatValues = [];
      $('input[name="krovat[]"]:checked').each(function () {
        krovatValues.push($(this).val());
      });

      if (krovatValues.length > 0) {
        params.set('krovat', krovatValues.join(','));
      } else {
        params.delete('krovat'); // Удаляем параметр, если чекбоксы сняты
      }

      // Площадь
      if ($('#ploshhad_min').val()) params.set('ploshhad_min', $('#ploshhad_min').val());
      if ($('#ploshhad_max').val()) params.set('ploshhad_max', $('#ploshhad_max').val());

      // Сортировка
      var sortValue = $('input[name="sort"]:checked').val();
      if (sortValue) {
        params.set('sort', sortValue);
      } else {
        params.delete('sort');
      }
      // Очистка URL (старые параметры удаляются)
      var currentPath = window.location.pathname;
      currentPath = currentPath.replace(/\/page\/\d+\//, '/');

      // Формируем новый URL без /page/...
      var newUrl = currentPath + '?' + params.toString();
      window.location.href = newUrl;
    });

    $('input').change(function () {
      $('#filterForm').submit();
    })

  } else {
    $('#filterFormMob').on('submit', function (e) {
      e.preventDefault(); // Остановка стандартного поведения формы

      var params = new URLSearchParams(); // Очищаем все параметры

      // Цена
      if ($('#czena_min_mob').val()) params.set('czena_min', $('#czena_min_mob').val());
      if ($('#czena_max_mob').val()) params.set('czena_max', $('#czena_max_mob').val());

      // Гости
      if ($('.guests-input').val()) params.set('gosti', $('.guests-input').val());

      // Комнаты (чекбоксы)
      var komnatValuesMob = [];
      $('input[name="komnat_mobile[]"]:checked').each(function () {
        komnatValuesMob.push($(this).val());
      });

      if (komnatValuesMob.length > 0) {
        params.set('komnat_mobile', komnatValuesMob.join(',')); // Убираем запятые
      } else {
        params.delete('komnat_mobile'); // Удаляем параметр, если чекбоксы сняты
      }

      // Кровати (чекбоксы)
      var krovatValuesMob = [];
      $('input[name="krovat_mobile[]"]:checked').each(function () {
        krovatValuesMob.push($(this).val());
      });

      if (krovatValuesMob.length > 0) {
        params.set('krovat_mobile', krovatValuesMob.join(','));
      } else {
        params.delete('krovat_mobile'); // Удаляем параметр, если чекбоксы сняты
      }

      // Площадь
      if ($('#ploshhad_min_mob').val()) params.set('ploshhad_min', $('#ploshhad_min_mob').val());
      if ($('#ploshhad_max_mob').val()) params.set('ploshhad_max', $('#ploshhad_max_mob').val());

      // Сортировка
      var sortValue = $('input[name="sort"]:checked').val();
      if (sortValue) {
        params.set('sort', sortValue);
      } else {
        params.delete('sort');
      }

      var currentPath = window.location.pathname;
      currentPath = currentPath.replace(/\/page\/\d+\//, '/');

      // Формируем новый URL без /page/...
      var newUrl = currentPath + '?' + params.toString();
      window.location.href = newUrl;
    });
  }

  // Добавляем кнопку "Сбросить фильтр"
  $('#filterForm').append('<button class="reset hidden" type="button">Сбросить</button>');

  $('.reset').on('click', function () {
    // Сброс полей формы
    $('#filterForm')[0].reset();
    $('#filterFormMob')[0].reset();

    // Снимаем все чекбоксы вручную
    $('input[type="checkbox"]').prop('checked', false);

    // Очищаем URL от всех параметров
    window.location.href = window.location.pathname;
  });

  // 6) ЗАПУСК
  initSliders();
  initMap();
});

$('.wp-pagenavi a').each(function () {
  var url = new URL($(this).attr('href'));
  url.searchParams.delete('tl-booking-open');
  url.searchParams.delete('room-type');
  $(this).attr('href', url.href);
});

// document.addEventListener("DOMContentLoaded", function () {
//     if (window.location.search.includes("tl-booking-open") || window.location.search.includes("room-type")) {
//         var newUrl = window.location.pathname + window.location.search.replace(/(&?tl-booking-open=[^&]*)|(&?room-type=[^&]*)/g, '');
//         newUrl = newUrl.replace(/\?&/, '?').replace(/\?$/, '').replace(/&&/g, '&'); // Чистим лишние символы
//         window.history.replaceState({}, document.title, newUrl);
//     }
// });
