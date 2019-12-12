var date = new Date();
var year = date.getFullYear();

window.addEventListener('load', function () {
    this.document.getElementById('age').innerHTML = (year - 2003);
}, false);

var swiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
