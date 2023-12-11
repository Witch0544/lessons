
const icon = document.querySelector('.item-header__burger');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});