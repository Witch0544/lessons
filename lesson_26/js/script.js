// Суворий режим
"use strict"


/*Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас */
document.addEventListener("click", documentAction)
function documentAction(e) {
	const targetElement = e.target
	if (targetElement.classList.contains('item')) {
		targetElement.classList.toggle('active')
	}
}

/*Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.*/
window.onload = function () {
	const bodyElement = document.body
	if(bodyElement) {
		document.body.classList.add("opaque")
	}
}


/*Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.*/
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
header.addEventListener('mousemove', function() {
	footer.style.backgroundColor = 'yellow'	
})	
header.addEventListener('mouseleave',function() {
	footer.style.backgroundColor = 'rgb(34, 28, 28)'
})


/*Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується
на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.*/
let options = {
	root: null,
	rootMargin: "0px",	
	threshold: 1,
}
function counter(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const item = entry.target;
			const start = parseInt(item.getAttribute('data-start'));
			const end = parseInt(item.getAttribute('data-end'));
			const delay = parseInt(item.getAttribute('data-delay'));

			observer.unobserve(item);

			let counter = start;
			const intervalId = setInterval(() => {
				item.textContent = counter;
				counter++;

				if (counter > end) {
					clearInterval(intervalId);
				}
			}, delay);
		}
	});
}
let observer = new IntersectionObserver(counter, options);

const buttonElement = document.querySelector('.button-item');
if (buttonElement) {
	observer.observe(buttonElement);
}