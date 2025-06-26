/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
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
function initSliders() {
	//Список слайдеров
	//Проверяем, есть ли слайдер на странице
	if (document.querySelector('.about__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.about__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Navigation, EffectFade, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,

			autoHeight: true,
			speed: 800,

			lazy: true,

			// slidesPerView: "auto",


			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			// effect: 'creative',
			// creativeEffect: {
			// 	prev: {
			// 		opacity: 0
			// 	},
			// 	next: {
			// 		opacity: 0
			// 	},
			// },

			// Эффекты
			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},



			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.about-btn.swiper-button-prev',
				nextEl: '.about-btn.swiper-button-next',
			},

			// Брейкпоинты
			breakpoints: {
				360: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				1920: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.zoning__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.zoning__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// centeredSlides: true,





			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.zoning-btn.swiper-button-prev',
				nextEl: '.zoning-btn.swiper-button-next',
			},




			// Брейкпоинты
			breakpoints: {
				360: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				992: {

					slidesPerView: 3,
					spaceBetween: 10,
				},
				1920: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
			},

			// События
			on: {

			}

		});
	}

	if (document.querySelector('.gallery__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.gallery__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			// spaceBetween: 20,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// centeredSlides: true,





			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.gallery-btn.swiper-button-prev',
				nextEl: '.gallery-btn.swiper-button-next',
			},


			// Брейкпоинты
			breakpoints: {
				360: {
					slidesPerView: 1,
					spaceBetween: 10,
					// autoHeight: true,
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 10,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1920: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}

		});
	}

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