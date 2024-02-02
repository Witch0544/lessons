// Суворий режим
"use strict"


/*
Задача №1
Отримати в константу елемент <body>
*/
const bodyElement = document.body
console.log(bodyElement)

/*
Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
*/

const body = document.querySelector('body')
function addList(parentElement, elementCount = 5) {
	if (!parentElement) return
	const list = document.createElement ('ul')	
	for (let i = 1; i <= elementCount; ++i) {
		const elementList = document.createElement ('li')
		elementList.textContent = `Item #${i}`
		list.append(elementList)
	}
	
	parentElement.prepend(list)
}
addList (body, 5)

/*
Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений.
*/
bodyElement.classList.add('loaded')
if (bodyElement.classList.contains('loaded')) {
	bodyElement.style.color = 'green'
}
/*
Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/
const item = document.querySelectorAll('.item')
if (item.length) {
	item.forEach((item, index) => {
		item.classList.add('active')
		item.textContent = `Елемент №${index + 1}`
	})

}

/* 
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/
const button = document.querySelector('.button')
function scrollToBlock(element) {
	if (element) {
		element.scrollIntoView ({
			block: 'center',
      	inline: 'nearest',
      	behavior: 'smooth'
		})
	}
}
scrollToBlock(button)
/*
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/

const link = document.querySelector('.link')
if(link) {
	link.setAttribute('data-value', '100')
}
let value = link.dataset.value
if (value < 200) {
	link.style.color = 'red'
}