/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, Grid, Navigation, Thumbs } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
// import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
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



	// if (document.querySelector('.cooperation__slider')) { //Указываем класс нужного слайдера
	// 	//Создаем слайдер
	// 	new Swiper('.cooperation__slider', { //Указываем класс нужного слайдера
	// 		//Подключаем модули слайдера
	// 		//для конкретного случая
	// 		// modules: [Grid],
	// 		// grid: {
	// 		// 	rows: 2,
	// 		// 	fill: "row",
	// 		// },
	// 		freeMode: true,
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 'auto',
	// 		spaceBetween: 10,
	// 		// autoHeight: true,
	// 		speed: 800,
	// 		clickable: true,
	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		// loop: true,
	// 		//preloadImages: false,
	// 		// lazy: true,
	// 		// centeredSlides: true,

	// 		// Брейкпоинты
	// 		breakpoints: {
	// 			390: {
	// 				slidesPerView: 1.2,
	// 				spaceBetween: 16,
	// 				// autoHeight: true,
	// 			},
	// 			640: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 16,
	// 				// centeredSlides: true,
	// 				// loop: true 

	// 			},
	// 			768: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 16,
	// 			},
	// 			992: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 10,
	// 			},
	// 			1440: {
	// 				slidesPerView: 5,
	// 				spaceBetween: 10,
	// 			},
	// 		},

	// 		// События
	// 		on: {

	// 		}

	// 	});
	// }

}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});