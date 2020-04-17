var date = new Date();
var year = date.getFullYear();

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

const darkmode = new Darkmode({
    mixColor: '#000',
    bottom: '64px'
});

var setSwitch = function() {
    var btn = $('#switchTheme');
    if (darkmode.isActivated()) {
        btn.html('Light Mode');
        btn.removeClass('btn-dark').addClass('btn-light').addClass('text-dark');
    } else {
        btn.html('Dark Mode');
        btn.removeClass('btn-light').removeClass('text-dark').addClass('btn-dark');
    }
    btn.blur();
}

var switchTheme = function () {
    darkmode.toggle();
    setSwitch();
};

setSwitch();