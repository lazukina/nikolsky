var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

$(function () {

  // Ибо у меня 2 слайдерв
  var owlOne = $('#slider-1');
  var owlTwo = $('#slider-2');

  owlOne.owlCarousel({
    // Циклирование как правило есть. Если его нет, проверь кастомизацию кнопок .disabled
    loop: true,
    // Дабы слайдер не съедал ресурсы. По дефолту будет подгружаться только первый слайд. Остальные подгрузяться только, если юзер воспользуется слайдером.
    lazyLoad: true,
    // Расстояние между слайдами справа. Будет видно на drag или touch. Или при отсутствии анимации на dots, arrows, keyboard arrows.
    margin: 0,
    autoHeight: true,
    // Расстояние от самого слайдера по краям
    stagePadding: 0,
    // Сколько слайдов будет показано на странице. Обычно это 1
    items: 1,
    // Стрелки
    nav: false,
    // Нужно, если дефолтные стрелки от owl не устроят... т.е. нужно всегда.
    // Пустыми кавычки должны быть для использования любого iconpack
    navText: ["", ""],
    // Скорость смены слайдов 1c = 1000
    smartSpeed: 700,
    // Автопрокрутка поставлена на 5с
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true
    responsive: {
      0: {
        items: 1
      }
      // // Примера ради
      // 576: {
      //   items: 1
      // },
      // 768: {
      //   items: 1
      // },
      // // Отключение плагина
      // 992: {
      //   items: 0,
      //   dots: false
      // }
      // // У последней кавычке не должно быть запятой. Поэтому и у 0: ее нет
    }
  });

  // Для переключения слайдов с клавиатуры
  $(document.documentElement).keyup(function(event) {
    if (event.keyCode == 37) { /*left arrow*/
      owlOne.trigger('prev.owl.carousel', [900]);
    } else if (event.keyCode == 39) { /*right arrow*/
      owlOne.trigger('next.owl.carousel', [900]);
    }
  });

  // Настройка автопрокрутки, пауза на ховер
  $('.play').on('click',function(){
    owlOne.trigger('play.owl.autoplay',[5000])
  })
  $('.stop').on('click',function(){
    owlOne.trigger('stop.owl.autoplay')
  })

  owlTwo.owlCarousel({
    // Циклирование как правило есть. Если его нет, проверь кастомизацию кнопок .disabled
    loop: false,
    // Дабы слайдер не съедал ресурсы. По дефолту будет подгружаться только первый слайд. Остальные подгрузяться только, если юзер воспользуется слайдером.
    lazyLoad: false,
    // Расстояние между слайдами справа. Будет видно на drag или touch. Или при отсутствии анимации на dots, arrows, keyboard arrows.
    margin: 0,
    stagePadding: 0,
    // Сколько слайдов будет показано на странице. Обычно это 1
    // items: 2,
    // Стрелки
    nav: false,
    // Нужно, если дефолтные стрелки от owl не устроят... т.е. нужно всегда.
    // Пустыми кавычки должны быть для использования любого iconpack
    navText: ["", ""],
    // Анимация. Animate встроен в owlOne.
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    // Скорость смены слайдов 0.3c
    smartSpeed: 300,
    // Автопрокрутка поставлена на 5с
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 0,
        dots: false,
        touchDrag: false,
        mouseDrag: false
      }
      // // Отключение плагина
      // 992: {
      //   items: 0,
      //   dots: false
      // }
      // // У последней кавычке не должно быть запятой. Поэтому и у 0: ее нет
    }
  });

  // Для переключения слайдов с клавиатуры
  $(document.documentElement).keyup(function(event) {
    if (event.keyCode == 37) { /*left arrow*/
      owlTwo.trigger('prev.owl.carousel', [900]);
    } else if (event.keyCode == 39) { /*right arrow*/
      owlTwo.trigger('next.owl.carousel', [900]);
    }
  });

  // Настройка автопрокрутки, пауза на ховер
  $('.play').on('click',function(){
    owlTwo.trigger('play.owl.autoplay',[5000])
  })
  $('.stop').on('click',function(){
    owlTwo.trigger('stop.owl.autoplay')
  })

});

// $(function() {
//     var owl = $('.owl-carousel'),
//         owlOptions = {
//             loop: false,
//             margin: 0,
//             responsive: {
//                 0: {
//                     items: 1
//                 }
//             }
//         };
//
//     if ( $(window).width() < 1199 ) {
//         var owlActive = owl.owlCarousel(owlOptions);
//     } else {
//         owl.addClass('off');
//     }
//
//     $(window).resize(function() {
//         if ( $(window).width() < 854 ) {
//             if ( $('.owl-carousel').hasClass('off') ) {
//                 var owlActive = owl.owlCarousel(owlOptions);
//                 owl.removeClass('off');
//             }
//         } else {
//             if ( !$('.owl-carousel').hasClass('off') ) {
//                 owl.addClass('off').trigger('destroy.owl.carousel');
//                 owl.find('.owl-stage-outer').children().unwrap();
//             }
//         }
//     });
// });
