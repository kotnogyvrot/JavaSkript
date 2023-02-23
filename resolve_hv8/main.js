// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
function user(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const user1 = new user(1,"semen", "semenenko", "@etosobaka", 1234567);
const user2 = new user(5,"evgen", "evenenko", "@fghdgfg", 454543);
const user3 = new user(2,"artem", "dfhenko", "@kjhgf", 1768744);
const user4 = new user(4,"anton", "grthrnenko", "@trgrr", 987654);
const user5 = new user(7,"oleh", "ytnko", "@egfrtgg", 66563354);
const user6 = new user(6,"egor", "serrgenko", "@etohbddf", 7567567);
const user7 = new user(3,"tyui", "seerrghynenko", "@etosobaka", 187657);
const user8 = new user(10,"sfhfn", "dgfertenko", "@efrra", 842234);
const user9 = new user(9,"semdgen", "srtyhhenko", "@edrrbaka", 8534);
const user10 = new user(8,"sege", "semtwenko", "@etfrra", 12454678);
const arryuser =[]
arryuser.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(arryuser)
let filter = arryuser.filter(value => value.id%2 ===0)
console.log(filter)
let hiId = arryuser.sort((a,b) => a.id-b.id)
console.log(hiId)
//


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// class client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const client1 = new client(1,"semen", "semenenko", "@etosobaka", 1234567, [1,2,3,4,5]);
// const client2 = new client(5,"evgen", "evenenko", "@fghdgfg", 454543, [4,5,7,9]);
// const client3 = new client(2,"artem", "dfhenko", "@kjhgf", 1768744, [6,3,8,9,2]);
// const client4 = new client(4,"anton", "grthrnenko", "@trgrr", 987654, [9,8,6,3]);
// const client5 = new client(7,"oleh", "ytnko", "@egfrtgg", 66563354, [6,5,4,3,8]);
// const client6 = new client(6,"egor", "serrgenko", "@etohbddf", 7567567, [9,8,7,6,5]);
// const client7 = new client(3,"tyui", "seerrghynenko", "@etosobaka", 187657, [3,2,1,5]);
// const client8 = new client(10,"sfhfn", "dgfertenko", "@efrra", 842234, [8,7,6,5,4,3]);
// const client9 = new client(9,"semdgen", "srtyhhenko", "@edrrbaka", 8534, [4,5,6,7,8,9]);
// const client10 = new client(8,"sege", "semtwenko", "@etfrra", 12454678,[0,0,9,8,7]);
// const arryuser =[]
// arryuser.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
// let sort = arryuser.sort((a,b) => a.order.length-b.order.length)
// console.log(sort)



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function car(model, produse, year, speed, engine) {
//         this.model=model;
//         this.produse=produse;
//         this.year=year;
//         this.speed=speed;
//         this.engine=engine;
//     this.engine=function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     this.info=function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function') {
//                 console.log(` ${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// const fusion = new car ('ford', 'USA', 2022, 250, 3.0 )
// console.log(fusion);
// fusion.info();
// fusion.engine();
// fusion.increaseMaxSpeed(100);
// fusion.changeYear(2000);
// fusion.addDriver({name: 'oleh'});
// console.log(fusion);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class car {
// constructor (model, produse, year, speed, carEngine)
//     {
//         this.model = model;
//         this.produse = produse;
//         this.year = year;
//         this.speed = speed;
//         this.carEngine = carEngine;
//     }
//     engine(){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     info() {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function') {
//                 console.log(` ${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//    increaseMaxSpeed (newSpeed) {
//         this.speed += newSpeed;
//     }
//    changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
// const fusion = new car ('ford', 'USA', 2022, 250, 3.0 )
// console.log(fusion);
// fusion.info();
// fusion.engine();
// fusion.increaseMaxSpeed(100);
// fusion.changeYear(2000);
// fusion.addDriver({name: 'oleh'});
// console.log(fusion);



//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function pypilushka(name, age, size) {
//     this.name=name;
//     this.age=age;
//     this.size=size;
// }
// const pypilushka1 = new pypilushka('Olga', 38, 36)
// const pypilushka2 = new pypilushka('egor', 49, 42)
// const pypilushka3 = new pypilushka('artem', 64, 56)
// const pypilushka4 = new pypilushka('petja', 83, 45)
// const pypilushka5 = new pypilushka('anton', 51, 51)
// const pypilushka6 = new pypilushka('hleb', 44, 57)
// const pypilushka7 = new pypilushka('yura', 58, 49)
// const pypilushka8 = new pypilushka('ivan', 93, 47)
// const pypilushka9 = new pypilushka('bob', 62, 44)
// const pypilushka10 = new pypilushka('sigizmund', 164, 61)
// const kuchaBab = []
// kuchaBab.push(pypilushka1, pypilushka2, pypilushka3, pypilushka4, pypilushka5, pypilushka6, pypilushka7, pypilushka8, pypilushka9, pypilushka10)
//
// class princ {
//     constructor(name, age, interest) {
//         this.name = name;
//         this.age = age;
//         this.interest = interest;
//     }
// }
// const iAm = new princ('vladimir', 38, 36)
// const gdePupilushka = (arr, boy) => {
//     for (const item of arr) {
//         if (item.size === boy.interest) {
//             console.log(`my princes is ${item.name}`);
//         }
//     }
//
// }
// gdePupilushka(kuchaBab, iAm)
// let find = kuchaBab.find(value => value.size === iAm.interest)
//
// console.log(find);