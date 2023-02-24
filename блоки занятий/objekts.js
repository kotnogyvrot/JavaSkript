                                            //создание копии объекта//


let ararat={
    name: 'vas',
    age: 31,
    stat: true,
wife: { }};

 let ararat2= {...ararat}
 console.log(ararat2)

                                            //быстрая копия чезез ф-цию JSON//
const copy = (ararat) => JSON.parse(JSON.stringify(ararat))

                                            //конвертация объекта в стрингу//
let araratstring = JSON.stringify(ararat)
      console.log(araratstring)

                                            //конвертация стринги в объект//
let newararat = JSON.parse(araratstring)
     console.log(newararat)

                                            //достать поле из объекта//
let {name} = ararat
console.log(name)

                                      //ФУНКЦИИ ОБЪЕКТОВ//

 // let imja = (`Volodja`)
// console.log(imja)
// let bolsh = imja.toUpperCase()             //капс лок большиые  toUpperCase//
// console.log(bolsh)
// let mal = bolsh.toLowerCase()              //капс лок маленькие  toLowerCase//
// console.log(mal)
// let virez = imja.substring( 2, 5)           //вырезать часть от и до  substring//
// console.log(virez)
// let otO = imja.indexOf(`o`)
// let doJ = imja.indexOf(`j`)
// let otOdoJ = imja.substring( otO, doJ)
// console.log(otOdoJ)

// let phon = `064-65-34`;
// let rezult = phon.replace(`-`, ` `)     //заменить имеющийся ОДИН знак   replace//
//     .replace(`-`, ``)
// console.log(rezult)

// разделить стрингу ПО ЗНАКУ например , и получится массив!  split//
// let obj = (`name: vasa, age: 38`)
// let razdel = obj.split(`,`)
//     .join(`-`)
// console.log(razdel)
// console.log(typeof (razdel))
//
// let imj = razdel.split(`:`)
// console.log(imj[2])

// let str = `haloy`
// const fun = (str) => str[0]+str[1].toUpperCase()+str.slice(2)
// console.log(fun(str))