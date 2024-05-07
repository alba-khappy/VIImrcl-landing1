$(document).ready(function(){

    $('.projects__swiper').each(function() {
        $(this).slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            dots: false,
            arrows: true,
        });
    });
  });