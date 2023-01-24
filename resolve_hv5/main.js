// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const plosha = (a, b) => a * b;
// console.log(plosha(7, 9));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const kolo =  (r) => Math.PI * Math.pow(r, 2);
// console.log(kolo(12));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const cilindurdyr = (r, h) => Math.PI * r* 2 * h + 2* Math.PI * Math.pow(r, 2);
// console.log(cilindurdyr(3, 9));
// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,2,3,4,5];
// function food(array) {
//     for (const loop of array) {
//         console.log(loop);
//     }
// }
// food(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function dom(opis) {
    document.write(`<p> ${opis}</p>` );
}
dom(`horosho jit doma, gde teplo i svetlo`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function dom(opis) {
//     document.write(`
//         <ul>
//             <li>${opis}</li>
//             <li>${opis}</li>
//             <li>${opis}</li>
//         </ul>
//     `)
// }
// dom('teplo');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function dom(opis,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//        document.write(`<li>${opis}</li>`)
//     }
//     document.write(`</ul>`)
// }
// dom(`teplo`,`10`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [`teplo`,`svetlo`,1,2,true,false];
// const dim = function (array){
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`)
// }
// dim(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const arr=[
//     {name: `oleh`,
//     age: `45`
// },
// {
//     name: `erny`,
//         age: `34`
// }
// ]
// const domovoy = function (array) {
//     for (const user of array) {
//         document.write(`<div>${user.name} -- ${user.age}</div>`)
//     }
// }
// domovoy(arr);
// - створити функцію яка повертає найменьше число з масиву

// let arr = [1,5,7,9,11,13,15];
//
// function chislo(array){
//     let min = array[0];
//     for (const item of array) {
//         if (item< min) {
//             min=item;
//         }
//     }
//     return min;
// }
// let chislo1 = chislo(arr);
// console.log(chislo1);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,3,5,7,9];
// function summa(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
//
// console.log(summa(arr));


