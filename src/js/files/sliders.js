/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, Grid, Navigation, Pagination, Thumbs } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
// function initSliders() {
//Список слайдеров
//Проверяем, есть ли слайдер на странице
if (document.querySelector('.partners__slider')) { //Указываем класс нужного слайдера
	//Создаем слайдер
	new Swiper('.partners__slider', { //Указываем класс нужного слайдера
		//Подключаем модули слайдера
		//для конкретного случая
		modules: [Grid],
		grid: {
			rows: 2,
			fill: "row",
		},
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 20,
		// autoHeight: true,
		speed: 800,
		clickable: true,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		// lazy: true,
		// centeredSlides: true,

		// Брейкпоинты
		breakpoints: {
			390: {
				slidesPerView: 2.5,
				spaceBetween: 10,
				// autoHeight: true,
			},
			640: {
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 4.5,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 5.5,
				spaceBetween: 20,
			},
			1440: {
				slidesPerView: 5.5,
				spaceBetween: 20,
			},
		},

		// События
		on: {

		}

	});
}


if (document.querySelector('.gallery-top__slider')) { //Указываем класс нужного слайдера
	//Создаем слайдер
	new Swiper('.gallery-top__slider', { //Указываем класс нужного слайдера
		modules: [Navigation, Thumbs],
		observer: true,
		observeParents: true,
		spaceBetween: 7,
		loop: false,
		// grabCursor: true,
		// watchSlidesVisibility: true,
		// loopedSlides: 5,
		navigation: {
			nextEl: '.swiper-button-next.gallery-next',
			prevEl: '.swiper-button-prev.gallery-prev',
		},
		thumbs: {
			//Свайпер с миниатюрами
			//и его настройки
			swiper: {
				el: '.gallery-thumbs__slider',
				slidesPerView: 5,
			}
		},
		// События
		on: {
		}

	});
}

if (document.querySelector('.gallery-thumbs__slider')) { //Указываем класс нужного слайдера
	//Создаем слайдер
	new Swiper('.gallery-thumbs__slider', { //Указываем класс нужного слайдера
		modules: [Thumbs],
		spaceBetween: 7,
		loop: false,
		grabCursor: true,
		slidesPerView: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		on: {
		}
	});
}

// if (document.querySelector('.item-catalog__photos')) { //Указываем класс нужного слайдера
// 	//Создаем слайдер
// 	window.itemPhotos = new Swiper('.item-catalog__photos', { //Указываем класс нужного слайдера
// 		modules: [Pagination, Navigation, Autoplay],
// 		spaceBetween: 0,
// 		observer: true,
// 		observeParents: true,
// 		loop: true,
// 		slidesPerView: 1,
// 		autoplay: {
// 			delay: 1000,
// 			disableOnInteraction: false,
// 		},

// 		pagination: {
// 			el: '.swiper-pagination.item-catalog__pagination',
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: '.swiper-button-next.item-catalog-next',
// 			prevEl: '.swiper-button-prev.item-catalog-prev',
// 		},

// 	});
// }

// const catalogItemSliders = [];

const sliderElements = document.querySelectorAll('.item-catalog__photos');

// Перебираем каждый элемент и добавляем обработчики событий
sliderElements.forEach(sliderElement => {
	// Предполагается, что itemPhotos — это массив или объект, содержащий экземпляры Swiper
	const itemPhotos = new Swiper(sliderElement, {
		modules: [Pagination, Navigation, Autoplay],
		spaceBetween: 0,
		observer: true,
		observeParents: true,
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},
		pagination: {
			el: sliderElement.querySelector('.swiper-pagination.item-catalog__pagination'),
			clickable: true,
		},
		navigation: {
			nextEl: sliderElement.querySelector('.swiper-button-next.item-catalog-next'),
			prevEl: sliderElement.querySelector('.swiper-button-prev.item-catalog-prev'),
		},
		on: {},
	});

	// catalogItemSliders.push(itemPhotos);
	// Останавливаем автопрокрутку при загрузке страницы
	itemPhotos.autoplay.stop();

	// Добавляем обработчик для события mouseenter
	sliderElement.addEventListener('mouseenter', () => {
		itemPhotos.autoplay.start();
	});

	// Добавляем обработчик для события mouseleave
	sliderElement.addEventListener('mouseleave', () => {
		itemPhotos.autoplay.stop();
	});
});

// const sliders = [];

// document.querySelectorAll('.item-catalog__photos').forEach((sliderElement, index) => {
// 	const itemPhotos = new Swiper(sliderElement, {
// 		modules: [Pagination, Navigation, Autoplay],
// 		spaceBetween: 0,
// 		observer: true,
// 		observeParents: true,
// 		loop: true,
// 		slidesPerView: 1,
// 		autoplay: {
// 			delay: 1000,
// 			disableOnInteraction: false,
// 		},
// 		pagination: {
// 			el: sliderElement.querySelector('.swiper-pagination'),
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: sliderElement.querySelector('.swiper-button-next'),
// 			prevEl: sliderElement.querySelector('.swiper-button-prev'),
// 		},
// 		on: {},
// 	});

// 	sliders.push(itemPhotos);
// 	itemPhotos.autoplay.stop();

// 	sliderElement.addEventListener('mouseenter', () => {
// 		itemPhotos.autoplay.start();
// 	});

// 	sliderElement.addEventListener('mouseleave', () => {
// 		itemPhotos.autoplay.stop();
// 	});
// });