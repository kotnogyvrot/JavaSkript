
let ararat=[
    {name: 'vas', age: 24, statys: true},
    {name: 'gas', age: 22, statys: true},
    {name: 'kvas', age: 34, statys: false},
    {name: 'vasua', age: 37, statys: true},
    {name: 'kvasja', age: 18, statys: false},
    {name: 'vaserman', age: 31, statys: true}
];


// let arr = [`qwe`]
// arr.push(`qwe1`)
// arr.push(`qwe2`)
// arr.push(`qwe3`)
// arr.push(`qwe4`)
// console.log(arr)
//
// arr.pop()   //удаляет последний элемент//
// console.log(arr)
//
// arr.shift()  //удаляет первый элемент//
// console.log(arr)
//
// arr.unshift(`odin`)
// console.log(arr)
//
// let soedinim = arr.join(`---`)    //соединяет массив в стрингу//
// console.log(soedinim)
//
// let arr8 = [1, 2, 3, 4];
// let summa = arr.concat(arr8);      //соединяет два массива//
// console.log(summa)
//
// let naoborot = summa.reverse()
// console.log(naoborot)
// naoborot.includes(4)
// console.log(naoborot.includes(4))


//добавление массива в массив, цикл в цикле//
// let users = [
//     {id:1, name : 'egor', skill: 'sport'},
//     {id:2, name : 'rty', skill: 'tor'},
//     {id:3, name : ',mnb', skill: 'bor'},
//     {id:4, name : 'gena', skill: 'box'},
// ]
// let mesto = [
//     {idon:4, contry : 'egipt', sity: 'Serbgyj'},
//     {idon:3, contry : 'reesp', sity: 'gfd'},
//     {idon:1, contry : ',mon', sity: 'df'},
//     {idon:2, contry : 'usasity', sity: 'sotghuiort'},
// ]
// for (const use of users) {
//     for (const contr of mesto) {
//         if (use.id === contr.idon)
//             use.mesto = contr
//     }
// }
// console.log(users)


                                     //форич//

// let arr = [
//     {name: `vas`, age: 23, pol:1},
//     {name: `gas`, age: 26, pol:1},
//     {name: `kvas`, age: 21, pol:1},
//     {name: `kрas`, age: 25, pol:1},
//     {name: `ras`, age: 29, pol:1}
// ]
// console.log(arr)
// arr.forEach((x)=> console.log(x))
//
// let obrez = arr.filter((arr)=>arr.age>24 );
// console.log(obrez)
//
// let funk = arr.map(function (us) {
// let newarr = {name: us.name, age: us.age}
//     return newarr
// });
// console.log(funk)
//
// let funky = arr.map((us,index) => ({id:index+1,name: us.name, age: us.age}));
// console.log(funky)