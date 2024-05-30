const swiper = new Swiper('.slider-product-body', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
var swiper2 = new Swiper(".product-s-b-p", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    speed: 800,
    breakpoints: {
        // when window width is >= 992px
        992: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },

    pagination: {
        el: ".swiper-pagination",

    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});