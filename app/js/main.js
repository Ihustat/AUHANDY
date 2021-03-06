$(function(){
    $('.services__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/prev-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/next-arrow.png" alt=""></button>'
      });
      $('.hamburger').on('click', function(){
        $('.header__menu').toggleClass('active')
      });
      $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active')
      });
    
    var show = true;
    var countbox = ".counter__item";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.counter__item-number').spincrement({
            thousandSeparator: "",
            duration: 4000,
            easing: 'swing',
        });
             
            show = false;
        }
    });

});





var mixer = mixitup('.projects__items');