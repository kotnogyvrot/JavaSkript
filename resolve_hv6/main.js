// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ('hello world');
// console.log(str.length);
// let str1 = ('lorem ipsum');
// console.log(str1.length);
// let str2 = ('javascript is coollorem ipsum');
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let slovo1 = (`hello world`);
// let bigslovo1 = slovo1.toUpperCase()
// console.log(bigslovo1)
// let smallslovo1 = bigslovo1.toLowerCase()
// console.log(smallslovo1)
//
// let slovo2 = (`lorem ipsum`);
// let bigslovo2 = slovo2.toUpperCase()
// console.log(bigslovo2)
// let smallslovo2 = bigslovo2.toLowerCase()
// console.log(smallslovo2)
//
// let slovo3 = (`javascript is cool`);
// let bigslovo3 = slovo3.toUpperCase()
// console.log(bigslovo3)
// let smallslovo3 = bigslovo3.toLowerCase()
// console.log(smallslovo3)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str1 = (' dirty string   ')
// let str2 = str1.trim()
// console.log(str2)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let iron = (`I am a man who walks alone and when I am walking a dark road`)
// let iron1 = iron.split(` `)
// console.log(iron1)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let str = arr.map(arg=> arg.toString())
// console.log(str)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let chisla = [11,21,3];
// const sortNums = (direction, arr) => {
//   if (direction==='ascending'){
//       arr.sort((a,b) =>a-b)
//   }
//     if (direction==='descending'){
//         arr.sort((a,b) =>b-a)
//     }
//     return(arr)
// }
// console.log(sortNums('ascending', chisla))
//

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let rezult = coursesAndDurationArray.sort((a, b) =>
// b.monthDuration - a.monthDuration)
//     .filter(vel=>vel.monthDuration>5)
// console.log(rezult)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// const colormast = [
//     {mast: 'spade', color: 'red'},
//     {mast: 'diamond', color: 'red'},
//     {mast: 'heart', color: 'black'},
//     {mast: 'clubs', color: 'black'},
// ]
// const znachenie = [6, 7, 8, 9, 10, 'jack','queen','king', 'ace']
// const koloda =[];
// for (const colormasts of colormast) {
//     for (const znachenies of znachenie) {
//         const card = {
//             mast: colormasts.mast,
//             value: znachenies,
//             color: colormasts.color
//         }
//         koloda.push(card)
//     }
// }
// koloda.push({value: `joker`});
// console.log(koloda);
// // - знайти піковий туз
// let tuz = koloda.filter(value => value.mast===`spade` && value.value===`ace`)
// console.log(tuz);
// // - всі шістки
// let shest = koloda.filter(value =>  value.value===6)
// console.log(shest);
// // - всі червоні карти
// let chervy = koloda.filter(value => value.color===`red`)
// console.log(chervy);
// // - всі буби
// let bubi = koloda.filter(value => value.mast===`diamond`)
// console.log(bubi);
// // - всі трефи від 9 та більше
// let tref = koloda.filter(value => (value.mast===`clubs` && value.value>=9) || (value.mast=== `clubs` && typeof value.value==='string'))
// console.log(tref);
                                       // Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі
// карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
