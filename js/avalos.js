var date = new Date();
var year = date.getFullYear();

function getAge(year, month, day) {
    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();
 
    var age = nowyear - year;
    var age_month = nowmonth - month;
    var age_day = nowday - day;
    
    if(age_month < 0 || (age_month == 0 && age_day <0)) {
        age = parseInt(age) -1;
    }
    
    return age;
}

window.addEventListener('load', function () {
    this.document.getElementById('age').innerHTML = getAge(2003, 8, 30)
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
