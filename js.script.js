// $(document).ready(function () {
//$('.your-class').slick({
//  setting- name: setting - value});});


$(".slide-item").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1500,
});



$('.historywrapper__mark2__image__txt__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.history-wrapper__mark2__image'
});
$('.history-wrapper__mark2__image').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.historywrapper__mark2__image__txt__slider',
  dots: true,

  focusOnSelect: true
});

$('.historywrapper__markx__image__txt').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.history-wrapper__markx__image'
});
$('.history-wrapper__markx__image').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.historywrapper__markx__image__txt',
  dots: true,

  focusOnSelect: true
});

$('.historywrapper__markxgs__image__txt').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.history-wrapper__markxgs__image'
});
$('.history-wrapper__markxgs__image').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.historywrapper__markxgs__image__txt',
  dots: true,

  focusOnSelect: true
});


$('.info-wrapper__box__center__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.info-wrapper__box__top'
});
$('.info-wrapper__box__top').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.info-wrapper__box__center__slider',
  dots: true,

  focusOnSelect: true
});


$('.info-wrapper__box__center__slider2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.info-wrapper__bottom'
});
$('.info-wrapper__bottom').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.info-wrapper__box__center__slider2',
  dots: true,

  focusOnSelect: true
});





$('.info-wrapper__box__center__slider3').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.info-wrapper__bottom2'
});
$('.info-wrapper__bottom2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.info-wrapper__box__center__slider3',
  dots: true,

  focusOnSelect: true
});

$('.info-wrapper__box__center__slider4').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.info-wrapper__bottom3'
});


$('.info-wrapper__bottom3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.info-wrapper__box__center__slider4',
  dots: true,

  focusOnSelect: true
});

$('.info-wrapper__box__center__slider5').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.info-wrapper__bottom4'
});
$('.info-wrapper__bottom4').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.info-wrapper__box__center__slider5',
  dots: true,

  focusOnSelect: true
});


$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});