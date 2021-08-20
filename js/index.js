AOS.init({
	offset: 100,
	disable: function () {
		var maxWidth = 800;
		return window.innerWidth < maxWidth;
	},
	once: true,
	duration: 900,
});

//header scroll
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	var head = document.getElementById('header');
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		head.classList.add('new-header');
	} else {
		head.classList.remove('new-header');
	}
}
//Hamburger toggle
function checkMenu(x) {
	x.classList.toggle('change');
}

var menu = document.querySelector('.menu');
function toggleMenu() {
	if (menu.classList.contains('showMenu')) {
		menu.classList.remove('showMenu');
	} else {
		menu.classList.add('showMenu');
	}
}

function dismiss() {
	document.querySelector('.policy').style.display = 'none'
	
}

