                 // bind создает копию фции//

// function summa (a,b) {
//     const c = a+b
//     console.log(c);
//     return c;
// }
// let z = summa(3,5)
// console.log(z);

                        //В качстве аргументов мы передаем объект//

// let chel = {
//     name: `vova`,
//     age: 38
// }
// function starenie() {
//     let news= chel.age+=1
//     return news
// }
// let newage = starenie(chel)
// console.log(newage)
// console.log(chel)

                    //колбэк функция//
// function fun(a, b) {
//     let c = a+b
//     return c
// }
// function sum(fu,q) {
//     let g = fu + 20+q
//     return g
// }
// let summa = sum(fun (25, 10),10)
// console.log(summa);

                         //стрелочная функция//
// const sum = (a, b) => a+b
// console.log(sum(12, 20));


                                      //функция конструктор. создания макета объекта//

// function user(name, age, status, skills, whife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.skills= skills;
//     this.whife=whife
//     this.greet = function (qwe) {
//        console.log( `${qwe}, my name is ${this.name}`)
//     };
// }
// let usr1 = new user('vas', 21, true, ['run', 'box'], {name: 'Olga', age: 38})
// let usr2 = new user('gas', 51, false)
// console.log(usr1.greet('halo'))
// console.log(usr2)
//                            //подмена объекта call и apply (полнейшая дичь)//
// let usik = {
//     name: 'jok',
//     age : 28
// }
// usr1.greet.call(usik, 'hoy');
// usr1.greet.apply(usik, ['pruvet']);

                 // шаблон для объекта, то же что и фция, тоько шире//
                //вводишь параметры, нажимаешь alt+Fn+ins и прога сама делает constructor//
// class Userok {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//    //какая-то фция//
// }
// let userok = new Userok('vas', 38)
//    console.log(userok)