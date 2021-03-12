$(function(){
 
  

    $('.our-services__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/prev-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/next-arrow.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1301,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3, 
              arrows: false,
              autoplaySpeed: 2000,
              autoplay: true,
            }
          },
          {
            breakpoint: 895,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2, 
              arrows: false,
              autoplaySpeed: 2000,
              autoplay: true,
            }
          },
          {
            breakpoint: 625,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, 
              arrows: false,
              autoplaySpeed: 2000,
              autoplay: true,
            }
          },
        
        ]
      });
      $('.hamburger').on('click', function(){
        $('.header__menu').toggleClass('active')
      });
      $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active');
        $('body').toggleClass('fixed-page');
      });
      $('.faq__accordion-item').on('click', '.faq__accordion-title', function()
      { $(this).parent().toggleClass('active');
    });
   




    $('.scrollup').on('click', function() {

      $("html, body").animate({
        scrollTop:0
      },1000);
    })
    $(this.body).on('scroll', function() {
      // если пользователь прокрутил страницу более чем на 200px
      if ($(this).scrollTop()>200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
      }
      // иначе скрыть кнопку scrollup
      else {
        $('.scrollup').fadeOut();
      }
    });
  //   $('.counter__item-number').spincrement({
  //     thousandSeparator: "",
  //     duration: 4000,
  //     easing: 'swing',
  // });
    var show = true;
    var countbox = ".counter__item";
    $(this.body).on("scroll load resize", function () {
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
   
    var acc = document.getElementsByClassName(" faq__accordion-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
var acc = document.getElementsByClassName(" header__dropdown");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

    document.getElementById("defaultOpen").click();


});



var mixer = mixitup('.projects__items');

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



