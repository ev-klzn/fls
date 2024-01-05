// Строгий режим
"use strict"

// ЩО ТАКЄ JS

/*
Що такє JS - мультипарадигмена,
динамічно типізована, мова програмування.

Будь-яка программа це певна
послідовність інструкцій (команд)

Інструкції можуть містити:
Значення
Оператори
Вирази
Ключові слова
Коментарі
*/

// СИНТАКСИС

// Коментар
/*
	Коментар
	Коментар
	Коментар
*/

/*
причиною ДУЖЕ (98%)
багатьох невдач
є - ВАША неуважність
Перевіряйте код та помилки в консолі
*/

// ПРАВИЛО СИНТАКСИСУ №0
/*
ВСЕ що відкрито має бути закрито
ВСЕ що закрито має бути відкрито
*/

// ПРАВИЛО СИНТАКСИСУ №1 (Я раджу)
/*
пишемо кожну інструкцію з нового рядку
*/

// ПРАВИЛО СИНТАКСИСУ №2
/*
мова JS чутлива до регістру!
*/

// ЗМІННІ ТА КОНСТАНТИ

/*
Змінна - це певний контейнер,
який може зберігати якісь дані.
let - об'являє змінну. Потрібне тільки в момент об'яви змінної
*/
// Анатомія:
// let і'мя_змінної;

// І'мя змінної
/*
	0) має відповідати данним які містить змінна,
	або буде містити
	1) латиниця (врай рекомндовано)
	2) букви, цифри, символи $ та _
	3) не може починатись з цифри
	4) не може дорівнювати одному з ключових
	(зарезервованих) слів
	(список - https://fls.guru/js-reservedkeywords.html)
	5) Стиль - lowerCamelCase
*/

// Об'ява (cтворення, оголошення) змінної
// let userAge;

// Не може бути 2х однакових змінних в одній області видимості

// Привласнення значення

// Відразу, в момент об'яви
// let userAge = 39;

// Потім, в процесі ходу програми
/*
let userAge;
// ...код...
userAge = 39; // let вже не потрібен
*/

// Зміна значення
/*
let userAge = 39;
console.log(userAge);
// ...код...
userAge = 15;
console.log(userAge);
// Динамічна типизація в дії
userAge = "Жека";
console.log(userAge);
// ...код...
console.log('Мені років:' + userAge); // :)
*/

// Копіювання значення
/*
let userAge = 15;
console.log(userAge);
let otherUserAge;
console.log(otherUserAge);
otherUserAge = userAge;
console.log(otherUserAge);
console.log(userAge);
*/

// Область видимості
/*
	1) Не можна використовувати змінну (let)
		до її об'яви
	2) Змінну "видно" в межах блоку де вона
		об'явлена та в усіх дочірніх
*/
/*
console.log(userAge); // Помилка
let userAge = 39;
*/
/*
let userAge = 39;
// Тут ми за межами блоку
function someFunction() { // Це функція, яка є JS-блоком
	// Тут ми всередені блоку
	let userAge = 15;
	console.log(userAge);
	if (userAge > 10) { // Це умова, яка є JS-блоком
		let userAge = 10;
		console.log(userAge);
	}
}
someFunction();
// Тут ми за межами блоку
console.log(userAge);
*/

// Константи
// Анатомія:
// const і'мя_константи;
// Значення константи неможна змінити*


/*
const userAge = 15;
console.log(userAge);
userAge = 39;
*/

// !!!
// Використовуйте саме константи
// а змінні, лише тоді, коди плануєте
// змінювати її значення
// !!!

// Якщо значення константи нам відомо заздалегідь
/*
const COLOR_GREY = '#424551';
console.log(COLOR_GREY);
*/

// ТИПИ ДАНИХ
/*
undefined
null
number
string
boolean
object
*/
// Оператор typeof вертає тип даних

// undefined (невизначанність)
/*
let userAge;
console.log(typeof userAge); // Тип даних
console.log(userAge);  // Значення
if (typeof userAge === "undefined") {
	console.log('Працюємо...');
}
*/

// null (пустота, порожнеча)
/*
let userAge = null;
console.log(typeof userAge); // Тип даних
console.log(userAge);  // Значення
*/

// number - число (не велике) та спец. значення
// Number() - примусова зміна типу даних

/*
let userAge = 10;
console.log(typeof userAge); // Тип даних
console.log(userAge); // Значення
*/

// Infinity - нескінченність
/*
let result = 10 / 0;
console.log(typeof result); // Тип даних
console.log(result); // Значення
*/

// NaN - обчислення не може бути виконано
/*
let result = "Жека" * 10;
console.log(typeof result); // Тип даних
console.log(result); // Значення
*/

// string - рядки (текст)
// String() - примусова зміна типу даних
/*
let myAge = `39`;
let myName = 'Жека';
console.log(typeof myName); // Тип даних
console.log(myName); // Значення
console.log(typeof myAge); // Тип даних
console.log(myAge); // Значення
*/

// Лапки
/*
1) Одинарні - ''
2) Подвійні - ""
3) Зворотні - `` (раджу)

Одинарні та подвійні лапки повністю ідентичні.
Але, якщо відкита одинарні лапки до
закривати треба теж одинарною
*/
/*
let myAge = 39;
let myName = `Жека`;
let myInfo = `Ім'я: ${myName}, вік: ${myAge}`;
console.log(myInfo);
*/

// boolean - правда або брехня (true false)
// Boolean() - примусова зміна типу даних
// false повернуть: пустий рядок, цифра нуль,
// undefined, NaN
/*
let someVar = " ";
console.log(someVar);
console.log(typeof someVar); // Тип даних
console.log(typeof Boolean(someVar)); // Тип даних
console.log(Boolean(someVar));

if (someVar) {
	console.log('Працюємо...');
}*/

// Основні методи рядків

// Довжина рядка length
/*
let someString = `Привіт! Як справи?`;
console.log(someString.length);
*/

// Рядок це масив []
/*
let someString = `Привіт! Як справи?`;
console.log(someString[6]);
*/

// Регістр toUpperCase(), toLowerCase()
/*
let someString = `Привіт! Як справи?`;
console.log(someString.toUpperCase());
console.log(someString.toLowerCase());
*/

// Пошук - методы includes, startsWith, endsWith
/*
let someString = `Привіт! Як справи?`;
// пошук в усьому рядку
// console.log(someString.includes('Як'));
// Починається з
console.log(someString.startsWith('ив'));
// Закінчується на
console.log(someString.endsWith('?'));
*/

// Отримання частини рядка, метод slice(start, end)
// від start (включно) до end
/*
let someString = `Привіт! Як справи?`;
let someNewString = someString.slice(2, 6);
console.log(someNewString);
*/

// Пошук та заміна replace(що, на що)
// Буде опрацьована лише перша знахідка
/*
let someString = `#Привіт! Як справи?`;
someString = someString.replace('#', '');
console.log(someString);
*/
// Детальніше: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// Основні методи чисел
// Math.floor - Округлення в меньшу сторону
/*
let someNotRoundNum = 25.9;
console.log(Math.floor(someNotRoundNum));
*/
// Math.ceil - Округлення в більшу сторону
/*
let someNotRoundNum = 25.001;
console.log(Math.ceil(someNotRoundNum));
*/
// Math.round - Округлення до ближнього цілого
/*
let someNotRoundNum = 25.5;
console.log(Math.round(someNotRoundNum));
*/

// Math.abs - Модуль числа
/*
let someNotRoundNum = -25.9;
console.log(Math.abs(someNotRoundNum));
*/

// Math.random()
// Рандом числа від 0 до 1
// console.log(Math.random());

// Math.max(a, b, c...) / Math.min(a, b, c...)
/*
console.log(Math.max(1, 2, -3));
console.log(Math.min(1, 2, -3));

let numMax = Math.max(1, 2, -3);
console.log(numMax);
*/

// parseInt и parseFloat
/*
let someVar = `35.5px`;
let someNum = parseFloat(someVar);
console.log(someNum);
*/

// Основні оператори
// !!!! Майже всі оператори автоматично
// змінюють тип даних на number
/*
let varOne = "10";
let varTwo = "3";
*/

// Оператор мінус (-)
/*
let varRes = varOne - varTwo;
console.log(typeof varRes);
console.log(varRes);
*/

// Оператор ділення (/)
/*
let varRes = varOne / varTwo;
console.log(typeof varRes);
console.log(varRes);
*/

// Оператор множення (*)
/*
let varRes = varOne * varTwo;
console.log(typeof varRes);
console.log(varRes);
*/

// Взяття залишку від ділення (%)
/*
let varRes = varOne % varTwo;
console.log(typeof varRes);
console.log(varRes);
*/

// Оператор додавання  (+)
// (!!! Тільки цей оператор (бінарний) НЕ змінює тип даних)
/*
let varOne = "10";
let varTwo = "20";
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

/*
Операнд - чувак(и) який приймає участь в обчисленні
Бінарний оператор - коли є 2 операнда
Унарний оператор - коли є 1 операнд
*/

// Унарний оператор додавання
// Використовується тільки з
// одним операндом (учасником обчислення)
/*
let varOne = +"10";
let varTwo = +"20";
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Інкремент (збільшує на 1) / декремент (зменьшує на 1)
// Працює лише зі змінними
/*
let someNumOne = 5;
let someNumTwo = 3;

++someNumOne;
--someNumTwo;

console.log(someNumOne);
console.log(someNumTwo);
*/
