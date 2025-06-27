// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
window.addEventListener("load", function () {
  document.body.classList.remove("load");
});



$(function() {
 let header = $('.header');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 40) {
    header.addClass('_fixed');
   } else {
    header.removeClass('_fixed');
   }
 });
});

