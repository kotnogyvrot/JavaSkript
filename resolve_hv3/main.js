
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;
if (x !== 0) {
    console.log("okey");
} else {
    console.log("notokey");
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 25;
if (time >=0 && time <=14) {
    console.log("first");
} else if (time >=15 && time <=29) {
    console.log("second");
} else if (time >=30 && time <=44) {
    console.log("third");
} else if (time >=45 && time <=59) {
    console.log("forth");
} else {
    console.log("error");
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 25;
if (day >=1 && time <=10) {
    console.log("first");
} else if (day >=11 && time <=20) {
    console.log("second");
} else if (day >=21 && time <=31) {
    console.log("third");
} else {
    console.log("error");
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
// дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let num = +prompt();
switch (num) {
    case 1:
        console.log("pokushal, pospal");
        break;
    case 2:
        console.log("vstal, poguljal");
        break;
    case 3:
        console.log("sel, otdohnul");
        break;
    case 4:
        console.log("shodil v tualet");
        break;
    case 5:
        console.log("pomyl ruki");
        break;
    case 6:
        console.log("pomyl vse octalnoe");
        break;
    case 7:
        console.log("sostavil plan na sleduyshuy nedely");
        break;
    default:
        console.log("error");
}
//А вот так можно было??? тоже работает)))
// let num = +prompt();
// switch (num) {
//     case 1:
//         console.log("pokushal, pospal");
// }switch (num) {
//     case 2:
//         console.log("vstal, poguljal");
// }switch (num) {
//     case 3:
//         console.log("sel, otdohnul");
// }switch (num) {
//     case 4:
//         console.log("shodil v tualet");
// }switch (num) {
//     case 5:
//         console.log("pomyl ruki");
// }switch (num) {
//     case 6:
//         console.log("pomyl vse octalnoe");
// }switch (num) {
//     case 7:
//         console.log("sostavil plan na sleduyshuy nedely");
// }switch (num) {
//     default:
//         console.log("error");
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 7;
let b = 7;
if (a>b) {
    console.log(a);
} else if (b>a) {
    console.log(b);
}  else if (b === a) {
    console.log("odinakovo");
} else  {
    console.log("error");
}
    // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null
// і тд включно). Напишіть код який, за допомоги  оператора ||
// буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = +prompt() || "default";
console.log(x);