

// arrow position //
// const arrows = document.getElementsByClassName('about_arrow');
// const photo = document.querySelector('.about_photo');
// const photoHeight = getComputedStyle(photo).height;
// console.log(photoHeight);

// arrows[0].style.top = parseInt(photoHeight) / 2 + 'px';
// arrows[1].style.top = parseInt(photoHeight) / 2 + 'px';

// swiper //

new Swiper('.about_slider', {

    navigation: {
        nextEl: '.about_arrow--right',
        prevEl: '.about_arrow--left',
    },

    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        800: {
            slidesPerView: 4,
        }
    }
});

new Swiper('.clients_reviews', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    loop: true,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: true,
    },

    speed: 700,

});