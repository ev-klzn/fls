"use strict"


// Задача №1
// Отримати в константу елемент <body>

/*
const bodyElement = document.body;
console.log(bodyElement);
*/

// ====================================================

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

/*
const bodyElement = document.body;
// console.log(bodyElement);

function addList(li = 1) {
	let el = ``
	const ul = document.createElement("ul")
	// console.log(ul)

	for (let i = 1; i <= li; ++i) {
		el += `<li>№ ${i}</li>`
		// console.log(el)
   }

	ul.insertAdjacentHTML("afterbegin", el)
	bodyElement.insertAdjacentElement("beforeend", ul)
}

addList(5)
*/

// ====================================================

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

/*
const bodyElement = document.body
bodyElement.classList.add("loaded")
console.log(bodyElement)

if (bodyElement.classList.contains("loaded")) {
	bodyElement.style.color = "yellowgreen"
	console.log(bodyElement.style.color)
}
*/


// ====================================================

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

/*
const element = document.querySelectorAll(".item");

if (element.length) {
	element.forEach((item, index) => {
		item.classList.add("active");
		console.log(item.classList)
		item.textContent = `Елемент № ${index + 1}`;
		console.log(item.textContent)
	})
}
*/

// ====================================================

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

/*
const button = document.querySelector(".button")

if (button) {
	button.scrollIntoView({ behavior: "smooth" })
}
*/

// ====================================================

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

/*
const link = document.querySelector(".link")

if (link) {
	link.setAttribute("data-quantity", 100)
	const dataQuantity = link.getAttribute("data-quantity")
	console.log(dataQuantity)
	if ((dataQuantity) < 200) {
		link.style.color = "red"
		console.log(link.style.color)
	}
}
*/