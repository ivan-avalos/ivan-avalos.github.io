var globalScheme = localStorage.getItem('scheme');

var swiper = new Swiper('.swiper-container', {
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

var setScheme = function(scheme) {
	localStorage.setItem('scheme', scheme);
	globalScheme = scheme;
	var body = $('body');
	var btn = $('#switchTheme');
	if (scheme == 'dark') {
		btn.html('Light Mode');
		btn.removeClass('btn-dark').addClass('btn-light').addClass('text-dark');
		body.addClass('darkmode--activated');
	} else if (scheme == 'light') {
		btn.html('Dark Mode');
		btn.removeClass('btn-light').removeClass('text-dark').addClass('btn-dark');
		body.removeClass('darkmode--activated');
	}
};

var toggleScheme = function() {
	if (globalScheme == 'dark') {
		setScheme('light');
	} else if (globalScheme == 'light') {
		setScheme('dark');
	}
}

var switchTheme = function() {
	toggleScheme();
	$('#switchTheme').blur();
}

var loadScheme = function() {
	if (globalScheme == null) {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setScheme('dark');
		} else {
			setScheme('light');
		}
	} else {
		setScheme(globalScheme);
	}
}

loadScheme();
