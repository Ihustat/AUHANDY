$(function(){
    $('.services__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/prev-arrow.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/next-arrow.png" alt=""></button>'
      });

});





var mixer = mixitup('.projects__items');