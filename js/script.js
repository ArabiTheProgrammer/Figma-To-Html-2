$('.main_banner_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
});

$('.main_slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: `<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right right"></i>`,
});
