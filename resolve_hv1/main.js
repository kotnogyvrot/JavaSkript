// - Створити змінні. Присвоїти кожному з них значення:
//  'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
//     true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
const str = 'owu';
console.log(str);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let nu = 16;
console.log(nu);
let num =1;
console.log(num);
const PI = 3.14;
console.log(PI);
let numb = 10;
console.log(numb);
let numbe = -999;
console.log(numbe);
let number = 123;
console.log(number);
let numbers = 2.7;
console.log(numbers);
let bool1 = true;
console.log(bool1);
let bool2 = false;
console.log(bool2);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person ' +
// '(Не об'єкт, просто за допомоги конкатенації)
let firstname ='Vladimir';
let middlename = 'Aleksandrivich';
let lastname = 'Gavrish';
let result = firstname + ' ' + middlename + ' ' + lastname;
console.log(result);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// let a = 100;
// console.log(typeof a);
// let b = '100';
// console.log(typeof b);
// let c = true;
// console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в
// консоль

let firstName = prompt('Vladimir');
let middleName = prompt('Aleksandrovich');
let age = +prompt('38');
console.log(firstName);
console.log(middleName);
console.log(age);