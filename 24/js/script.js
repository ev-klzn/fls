"use strict"

// Задача №1
// Що потрапить в консоль?

// let someVar = 0;
// ++someVar;
// if (someVar) {
// 	console.log(someVar);
// }

// 1) Оголошуємо змінну someVar
// 2) присвоюємо значення 0 
// 3) Збільшуємо оператором ++ на одиницю
// 4) Якщо значення true (у змінної є значення) виводимо результат у консоль
// 5) Отримуємо у консолі 1

// ========================================

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.


// 1 Створюємо цикл, в якому змінна i = номер рядка
// 2 повторюємо цикл 10 разів, 
// 3 На кожному з 10 кіл додаюємо до тексту 'Рядок -'  число зі змінної ${i} в console

/*
for (let i = 1; i <= 10; ++i) {
	console.log(`Рядок - ${i}`);
}
*/

// ========================================

// Задача №3
/*
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('Все вірно');
}
*/


// 0 (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20")
// 1 (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20") 
// 2 (false || false && true || false)
// 3 (false || false || false)
// В консолі нічого не буде, тому що всі false

// Щоб отримати відповідь у консолі можна записати трьома способами

// тут отримаєму true бо 40 > 10
// (2 * 20 >= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20")

//тут отримаєму true бо 10 && 10 <= 10
// (2 * 20 <= 10 || 30 / 2 - 5 && 10 <= "10" || 20 === "20")

// тут отримаєму true бо оператор == змінює рядок "20" на число 20
// (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 == "20")

// ========================================

/*
Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку
*/

/*
function numsDiv(a, b) {
  let result;
  result = a / b;
  if (Number.isFinite(result)) {
    console.log(`Результат ділення: ${result}`);
    return `Результат ділення: ${result}`;
  }
}
numsDiv(10, 2);
numsDiv(10, 5);
numsDiv(10, -5);
numsDiv(0, 5);
numsDiv(10, 0);
numsDiv(Infinity, 0);
numsDiv(Infinity, Infinity);
numsDiv(Infinity, "Infinity");
numsDiv(Infinity, -Infinity);
numsDiv(10, "");
numsDiv(10, " ");
*/

// ========================================


// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

/*
const array = [1, "5", 10, "Маша", 1.5];

array.forEach((element) => {
  if (element === 10) {
    console.log(element);
  }
});
*/
 




