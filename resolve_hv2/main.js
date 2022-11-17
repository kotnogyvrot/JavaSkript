// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [];
// arr[0] = 'one';
// arr[1] = 'two';
// arr[2] = 'three';
// arr[3] = 'four';
// arr[4] = 'five';
// arr[5] = 'six';
// arr[6] = 'seven';
// arr[7] = 'eight';
// arr[8] = 'nine';
// arr[9] = 'ten';
// console.log(arr);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: 'The Texas Chain Saw Massacre',
    pageCount: 123,
    genre: 'slash'
}
console.log(book);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors
// Поле "автори" - масив.
//     Кожен автор має поля name,age
let book1 = {
    title: 'The Hills Have Eyes',
    pageCount: 123,
    genre: 'slash',
    authors: [
       {
            name: 'Wesley Earl Craven',
           age: 76,
        },
        {
          name: 'Peter Locke',
             age: 82
        }
     ]
}
console.log(book1);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль ' +
// 'пароль кожного користувача
let arr = [
    {
        name: 'Oleh',
        username: 'helO',
        password: 123
    },
    {
        name: 'Artem',
        username: 'sid',
        password: 456
    },
    {
        name: 'Sergey',
        username: 'serj',
        password: 789
    },
    {
        name: 'Andrey',
        username: 'privet',
        password: 321
    },
    {
        name: 'Anton',
        username: 'durex',
        password: 654
    },
    {
        name: 'Gleb',
        username: 'borodinsky',
        password: 098
    },
    {
        name: 'Roma',
        username: 'rom',
        password: 987
    },
    {
        name: 'Grisha',
        username: 'gosha',
        password: 432
    },
    {
        name: 'Karl',
        username: 'marks',
        password: 654
    },
    {
        name: 'Johny',
        username: 'valker',
        password: 654
    }
]
console.log(arr)

// я не понял, какую информацию нужно выводить, вывел всё, но могу и отдельные части)
// console.log(arr[0].password);
// console.log(arr[0].name);
// console.log(arr[0].username);