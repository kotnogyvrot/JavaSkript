
                                //циклы для объектов for, while, do while, for in, for of//

// for (let q = 2; q<9; q+=2) {
//     console.log(q)
// }
//
// let w=0
//     while (w<8) {
//     console.log(w)
//         w++
//     }

// let r=10
// do {
//     console.log(r)
//     r++
// } while (r<6)

// const chel = {
//         name: "egor",
//         age: 38,
//         stat: true
// }
// for (const Key in chel) {
//     console.log(Key, chel[Key])
// }
// const name = 'nogi'
//       for (const Element of name) {
//       console.log(Element)

//среднее арифметическое//
//let rewq = [100,200,300,400];
//let qwer = 0;
//for (const numbe of rewq) {
//    console.log(numbe)
//    qwer  += numbe;
//}
//let rec = qwer/rewq.length;
//console.log(rec)

// let bukvi = ['v','o','v','a'];
// let name = '';
// for (let i=0; i < bukvi.length; i++) {
//     name += bukvi[i];
// }
// console.log(name)
//
// let i = 0
// while (i<bukvi.length) {
//     name += bukvi[i];
//     i++
// }
// console.log(name)
//
// for (const lement of bukvi) {
//     name += bukvi;
// }
// console.log(name)
//
// let arr = [12,14,75,34,59,34,54]
// let min = function (parametr) {
//     let ches = parametr[0]
//     for (const ch of parametr) {
//         if (ches < ch){
//             ches = ch
//         }
//         return ches
//     }
// }
// console.log(min(arr))
//
// let sum = function (par) {
//     let sloj = 0
//     for (const ches of par)
//         sloj +=ches
//
//     return sloj
// }
// console.log(sum(arr))

                             //циклы для массивов forEach, map, reduse, filter, sort//

 let ararat=[
     {name: 'vas', age: 24, statys: true},
     {name: 'gas', age: 22, statys: true},
     {name: 'kvas', age: 34, statys: false},
     {name: 'vasua', age: 37, statys: true},
     {name: 'kvasja', age: 18, statys: false},
     {name: 'vaserman', age: 31, statys: true}
    ];

                      //sort - два аргумента, последовательно берет два объекта и сравнивает их//
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

                                                           //фильтр по age//
    // let rezult = ararat.sort((a, b) =>
    // b.age - a.age)
    // console.log(rezult)

                          //несколько действий с массивами//
// ararat
    // .map()
    // .filter()
    // .forEach()

                 //разделяет массив на массивы по имени reduse//

//     let reduse = ararat.reduce((accumulator, user) => {
//         accumulator.name.push(user.name);
//         accumulator.age.push(user.age);
//         accumulator.statys.push(user.statys);
//         return accumulator;
//     }, {name: [], age: [], statys: []});
// console.log(reduse)


// let now = ararat.filter(value => value.age > 30);
// console.log(now);


//forEach итерирует каждый элемент массива, map то же, но и создат новый массив//
//
// const myarr = ['odin', 'dva', 'tri', 'chetyri']
// myarr.forEach((qwe, ind) => {
//     console.log(qwe, ind)
// })
//
// const chel = {
//     name: "egor",
//     age: 38,
//     stat: true
// }
// Object.values(chel).forEach(value => {
//   console.log(value)
// })
//
// const myArr = [1,2,3,4]
// myArr.forEach(el => {
//     console.log(el * 5)})
// console.log(myArr)
//
// const myAr = [1,2,3,4]
//      let now = myAr.map(el =>
//       (el * 5))
//       console.log(now)