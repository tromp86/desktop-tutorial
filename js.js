"use strict";

// Раздел 7 Структуры Данных И Строки В Современном JavaScript
// const japaneseRestaurant = {
//   restname: "Banzai",
//   location: "108 Markham Woods Rd, Longwood, USA",
//   categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
//   appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
//   mainMenu: ["Sushi", "Ramen", "Tempura"],

// wokingHours: {
//     wed: {
//     open: 10,
//     close: 23,
// },
// fri: {
//     open: 10,
//     close: 23,
// },
// sun: {
//     open: 12,
//     close: 23,
// }}
// };
// const { wokingHours, restname, categories } = japaneseRestaurant;
// console.log( wokingHours, restname, categories );
//_________________________
// учимся пушить
// const orderItems = [];
// answerF();
// function answerF() {
// let answer = confirm('Добавить еще?');
// if ( answer === true ) {
//     const orderPipi = prompt('Желаете Cola чи не?', 'Cola');
//     orderItems.push(orderPipi);
//     return answerF();
// } else {
//     console.log(orderItems[0]);
//     // console.log(orderItems);
// }}
// let arrOrderItems = orderItems;
// // console.log(arrOrderItems[0]);// работає показує нльовий масив
// arrOrderItems[0] = 'Pepsi'
// // console.log(arrOrderItems[0]);
// for(let i = 0; i < arrOrderItems.length; ++i)
// console.log(arrOrderItems[i]);

// Раздел 12 Объектно-Ориентированное Программирование (ООП) в JavaScript
// 221

// const Person = function(firstName, birdh){
// this.firstName = firstName,
// this.birdh = birdh
// // console.log(this);
// }
// let goga = new Person('Goga', 1974);
// console.log(goga); 

// шо твориця 
// 1. создаєця новий пустий обєкт
// 2. визиваєця функція this = {}
// 3. this = {} связуёця з прототипом
// 4. Функція автоматом повертає {}
// let protoPerson;


// Person.prototype.printingYear = function(){
//     console.log(2022 - this.birdh);
// };
// goga.printingYear();   

// _________________dom__________________
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value;

// console.log(document.querySelector('.number-input').value = 13);
// _________________
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;


const evenHendler = function () {
const guessNumber = Number(document.querySelector('.number-input').value);
// console.log(typeof guessNumber);
if (!guessNumber  ) {
    document.querySelector('.guess-message').textContent = 'Введіть номер'; 
    score = score - 1;
    document.querySelector('.score').textContent = score; 

} else if (guessNumber === secretNumber){
    document.querySelector('.guess-message').textContent = 'Правильно'; 
    score = score + 2;  
    document.querySelector('.score').textContent = score; 
    document.querySelector('.question').textContent = secretNumber; 
document.querySelector('body').style.backgroundColor =   'rgba(8, 8, 8, 0.8)';
document.querySelector('.question').style.backgroundColor = 'green';
document.querySelector('.question').style.width = '35rem';

} else if (guessNumber >= secretNumber) {
    if (score > 1) {
        document.querySelector('.guess-message').textContent = 'Секретне число менше'; 
        score = score - 1;
        document.querySelector('.score').textContent = score; 
    } else {
        document.querySelector('.guess-message').textContent = 'Гра закінчена';
    }

} else if (guessNumber <= secretNumber) {
    if (score > 1) {
        document.querySelector('.guess-message').textContent = 'Секретне число більше'; 
        score = score - 1;
        document.querySelector('.score').textContent = score; 
    } else {
        document.querySelector('.guess-message').textContent = 'Гра закінчена';
    }
}
};
document.querySelector('.check')
.addEventListener('click',evenHendler);  

document.querySelector('.again').addEventListener('click',function() {
document.querySelector('.question').textContent = '???'; 
document.querySelector('body').style.backgroundColor ='rgba(13, 14, 14, 0.926)';
document.querySelector('.question').style.backgroundColor = '#fff';
document.querySelector('.question').style.width = '25rem';
document.querySelector('.guess-message').textContent = 'Почни вгадувати заново'; 
document.querySelector('.score').textContent = '20';
document.querySelector('.number-input').value = '';
});    

// ____________________________



















// _________________________00000000000000000000000_________________________
//_______ JavaScript #10
//JavaScript #14_ массивы (array), методы push, pop, shift, unshift, многомерные м.mp4

// let ar = ['Яблуко', { nameHuman: 'Джон'},
// true,
// function() {console.log('привіт');}
// ];
// console.log(ar[1].nameHuman); // джон

// let ar = [];
// const orderPipi = prompt('pipi чи не?', 'pipi');
// const orderPipa = prompt('pipa дада?', 'pipa');
// ar.push(orderPipi,orderPipa);
// ar.push('I say PIPI Kurva');
// console.log(ar); // push

// let matrix = ['cola', 'xxl', '50'];
// matrix[1] = 'pepsi';
// for(let i = 0; i < matrix.length; i++) {
//     let cols = '';
//     for(let j = 0; j < matrix[i].length; j++)
//     cols += matrix[i][j] + '';
// console.log(cols);
// }  //просто пртклад

// let matrix = ['cola', 'xxl', '50'];
// let copyMatrix = matrix.slice();// просто копыя масива
// copyMatrix.splice(1, 2);
// for(let row  of copyMatrix) { // перебірає колонки
//     let cols = '';
// for (let val of row) // перебірає елементи
//     cols += val + '';
//     // console.log(matrix[2]);
// // 50
// // console.log(matrix);
// console.log(cols); //работає
// }

// let ar = ['cola', 'xxl'];
// const orderPipi = prompt('pipi чи не?', 'pipi');
// let rest = ar.concat([orderPipi]);
// console.log(rest); // теж пушить в масив

// let obj = {nemtHuman: 'Bob'};
// let ar = [1, 2];
// // let rest2 = ar.concat([3, 4],[6, 2]);
// let rest3 = ar.concat([3, 4],[6, 2], obj);
// console.log(rest3);// пушить і обєкт і цифри

// forEach - (текущій елемент. індекс . масив)
// let ar = ['cola', 'xxl', '50', 'piza'];
// ar.forEach((item) => {
//     console.log(item);
// });
// гарно виводить все в консоль

// forEach - перебіраємо масів
// let dig = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// dig.forEach( (item, index) => {
//     if(item % 2 == 0) console.log(`${item} з індексом ${index}`);
// });

// let dig = [6, 'byba', 'pepsi', 'pipa', 5, 6, 'триТопора', 8, 9];
// dig.forEach( (item, index) => {
//     console.log(`${item} з індексом ${index}`);
// });

// ar.indexOf(searchElement, fromIndex) - шукай елемент починаючи з індексу
// .lastIndexOf(searchElement, fromIndex) - шукай елемент з кінця
// якщо вкказати 0 то почне щитати з першого і жл першого треба вказувати кінець масива індекс
// .includes(searchElement, fromIndex) - шукає шось якщо найшло то тру

// let cars = [
//     {model: 'toyota', price: 1300 },
//     {model: 'toyota', price: 1250 },
//     {model: 'toyota', price: 1000 },
//     {model: 'opel', price: 700 },
//     {model: 'opel', price: 600 },
//     {model: 'opel', price: 550 },
//     {model: 'menoRegan', price: 1400 },
//     {model: 'menoRegan', price: 1300 },
//     {model: 'menoRegan', price: 1200 },
// ];
// // let res = cars.find(item => item.price < 1000);
// // console.log(res);

// // item.model == 'menoRegan',
// let pushCars = [];
// // let res2 = cars.filter(item => item.price >= 1200);
// // let res3 = cars.filter(item => item.model == 'menoRegan');
// let res4 = cars.filter(cars => cars.model == 'menoRegan' && cars.price == 1200); // работає
// console.log(res4);

// let ar = ['cola', 'xxl'];
// let ar = 'tromp1000@gmail; tromp1100@gmail.com; tromp1200@gmail.com; tromp1300@gmail.com;'
// // const orderPipi = prompt('pipi чи не?', 'pipi');
// // let rest = ar.concat([orderPipi]);
// let restSplit = ar.split('; ', 3);
// let restSplit2 = restSplit.join('|| ');
// // for(let botl of restSplit)
// // console.log(botl); // тільки для строк
// console.log(restSplit2); // тільки для строк

// reduce та reduceRight -
// .reduce((previousValue - хранить деякий результат
// і равно initialValue
// = > currentValue, item, Index, array) => {}, initialValue)

// let digs = [1, 5, 20, 5, 54];
// let sum = digs.reduce((sum, current) => sum + current, 0);
// console.log(sum);
// як працює .reduce - перший елемент додаєц ядо другого сума зиписуєця в sum потім додаєця третій елемент 1+5=6     6+20=26 ...
// current - текущее елементи масіва
// _____________________________
// let dig = 2.597
// // let sum = Math.floor(dig);
// let sum = Math.floor(dig*10)/10;
// let sum3 = Math.round(dig*100)/100;
// console.log(sum); // 2.5
// console.log(sum3); // 2.6
// // console.log( Math.round(3.5) );
// або
// let dig = 2.597;
// let sum = dig.toFixed(2);
// console.log(sum); //2.6

// const orderPipi = prompt('pipi чи не?', 'pipi');
// console.log( isNaN(orderPipi));
// якщо строка - true як число то false

// const orderPipi = prompt('pipi чи не?', 'pipi');
// console.log( isFinite(orderPipi));
// якщо строка - false як число то true

// const orderPipi = prompt('pipi чи число?', 'pipi');
// if ( isFinite(orderPipi)){
// console.log('число');
// } else {
// console.log('це не число мать його так')};
// або___
// const orderPipi = prompt('pipi чи число?', 'pipi');
// if ( orderPipi.length > 0 && isFinite(orderPipi))
// console.log('число');
// else if ( orderPipi.length == ''){
//     console.log('не ясно давай зановод');
// } else {
// console.log('це не число мать його так')}; // все работає
// // тепе провіряє число чи ні

// parseInt та parseFloat - виділитич число з строки
// let agr1 = '12грн';
// console.log(parseInt(agr1)); // 12

// №17
// \n - спецсимвол перевода строки
// let str = 'Hello Vlad.\nI am a frontend developer'
// let hel = str[0];
// let vl = str[7];
// // console.log(str);
// console.log(hel, vl);
// console.log(typeof hel);
// for(let ch of 'Hello') просто виводить букви один під одним
// console.log(ch);

// №15
// .indexOf(searchElement, fromIndex) - спочатку шукаємо шось десь перемінна наприклад str а другмий необовязковий параментр з якого місця
// let str = '<span class= "clock"></span>';
// let index1 = str.indexOf("clock");
// console.log(index1); //14

// let str = '<span class= "clock"></span>';
// let indx = '';
// while (true) {
//     indx = str.indexOf("clock", indx + 1);
//     if (indx == -1) break;
//     console.log(indx); //14
// }

// const orderPipi = prompt('pipi чи число?', 'pipi');
// if ( orderPipi.includes('pipi')){
// console.log('піпі'); // true
// } else {
//   let orderPipiIndex = orderPipi.indexOf (1); // показуэ індекс де знаходитимеця 1
//     console.log(orderPipiIndex);
// console.log('це не піпі мать його так')};
//шукає pipi якщо найшло то true

// slice - виділяти строку або підстроку
// .slice(start, end)

// let str = '<span class= "clock"></span>';
// console.log( str.slice(1, 9));

// №18
// Map
// Map це колекція ключ/значення, як і Object. Але основна відмінність полягає в тому, що Map дозволяє мати ключі будь-якого типу.

// Методи та властивості:

// new Map() – створює колекцію.
// map.set(key, value) – зберігає значення value за ключем key.
// map.get(key) – повертає значення за ключем; повертає undefined якщо key немає в колекції.
// map.has(key) – повертає true якщо key існує, інакше false.
// map.delete(key) – видаляє елемент по ключу.
// map.clear() – видаляє всі елементи колекції.
// map.size – повертає поточну кількість елементів.

// let recipeMap = new Map([
//     ['cola', 50],
//     ['pepsi', 30]
//   // ['огірок',   500],
//   // ['помідори', 350],
//   // ['цибуля',   50]
// ]);

// // перебираємо ключі (овочі)
// for (let vegetable of recipeMap.keys()) {
//  // console.log(vegetable); // огірок, помідори, цибуля
// }

// // перебираємо значення (кількість)
// for (let amount of recipeMap.values()) {
//  // console.log(amount); // 500, 350, 50
// }

// // перебір елементів у форматі [ключ, значення]
// for (let entry of recipeMap) {
//   // те ж саме, що recipeMap.entries()
//  // console.log(entry); // огірок,500 (і так далі)
// }
// recipeMap.forEach( (value, key, map) => {
//     console.log(`${key}: ${value}`); // огірок: 500 і так далі
//   });
// продовження .map
// map.set - seter - записує по ключу key значення value
// map.get - возвращаєт значеніє по ключу якщо ключ відсутсвує тоандефайнед
// map.has(key) - каже тру якщо воно знайдено
// let user = {
//     name: 'js',
//     type: 'es6'
// };

// let m = new Map();
// m.set('string', 'строка');
// m.set(7, 'просто число');
// m.set(true, {descr:'bolean', value:true});
// m.set(user, 'Обєкт user');
// // добавляєм Обєкт user і значення строчка люба наприклад
// console.log(m.get(user));

// console.log(m.get('string'));
// console.log(m.get(7));
// console.log(m.get(true));

// конструктор map
// let car = new Map([
//     ['model', 'Opel'],
//     ['color', 0xff],
//     ['price', 1000]
// ]);
// console.log(car);

// let book = {
//     autor: 'Шевченко',
//     title: 'Сковорода',
//     запуы: 120,
//     price: 80
// };
// let lib = new Map(Object.entries(book));
// console.log(lib);
// console.log(book);
// наоборот Object.fromEntries

// let car = new Map([
//     ['model', 'Opel'],
//     ['color', 0xff],
//     ['price', 1000],
// ]);
// // for (let values of car.values()) {
// //     console.log('марка',`${values}`);
// // }
// // марка Opel
// // марка 255
// // марка 1000
// // або_______

// car.forEach((value, key) => {
//     console.log( `car[${key}] = ${value}` );
// });

// Set
// let quest = new Set();

// let alex = {
//     name: 'Alehandro',
//     old: 35
// };
// let stas = {
//     name: 'Stanislav',
//     old: 32
// }
// let masha = {
//     name: 'Mashka',
//     old: 29
// }
// quest.add(alex);
// quest.add(stas);
// quest.add(masha);
// quest.add(stas);
// quest.add(masha);
// quest.add(alex);
// // __________
// // for (let ques of quest) {
// // console.log(ques.name);}

// quest.forEach( (item) => {
//     console.log(item.name+': '+item.old);
// });

// №19
// деструктурырующыэ пресваюваніє
// let cars = ['yag', 'posh', 'mers'];
// let [car1, car2, car3] = cars;
// console.log(car1);

// split - розделітель
// let [car1, car2, car3]
// = 'Mersedes Mazdovsky Запорожовець'.split(' ');
// console.log(car1, car2, car3);

// let [fr1, fr2, ...last] = ['Груша', 'Sliva', 'Yablyko',
// 'ptrsic', 'vunograd'];
// console.log(fr1, fr2, last);

// let [piza = prompt('яка піца?'), price = prompt('яка ціна?')]
//  = ['xxl', 'cola'];
// console.log(piza, price);
// можна удалить ххл чи кола і тоді промпт запросить те що треба

// let car = new Map();
//     car.set('model', 'toyota')
//     .set('color', 0xaf)
//     .set('price', 1000);

// for(let [key, value] of car)
// console.log(`car[${key}] = ${value}`);

// let args = {
//     width: 100,
//     height: 200,
//     tag:'div',
// } недороблено

// №20
// Рекурсія____________
// перша задача не рекурсія
// function pow(x, n) {
//     let res = 1;
// for(let i = 0; i < n; ++i)
// res *= x;
// return res;
// }
// функція визиває саму себя
// function pow(x, n) {
//     if(n <= 0) return 1;
//     else return x*pow (x, n-1);
// }

// console.log( pow(2, 3));
// детально - провіряємо н менше дорівнює 0 у нас н = 3 переходимо на елс і визиваємо пов 3 - 1 = 2 переходимо нижче н = 2 провіряємо 2 більше 0 значить елс н у нас = 2 -1 = 1 і коли дойдемо до 0 то виконаєця функція іф і поверне 1 в н. 2 * 1 = 2 ідемо вище 2 * 2 = 4 , 2 * 4 = 8

// let company = {
//     sales: [{ name: 'Ivan', salary: 1000},{ name: 'Dima', salary: 600}],
//     development: {
//         sites: [{ name: 'Evgen', salary: 2000}, { name: 'Alex', salary: 1800}],
//     internals: [{name: 'Toluk', salary: 1300}]
//     }
// };

// console.log( sumSelary(company));
// console.log( sumSelary(company.sales));
// console.log( sumSelary(company.development));

// function sumSelary(departament) {
//     if (Array.isArray(departament)) {
//         return departament.reduce((prev, current) => prev + current.salary, 0);
//     }
//     else {
//         let sum = 0;
//         for (let prop in departament) {
//         sum += sumSelary(departament[prop]);
//         }
//         return sum;
//     }
// }
// departament - ссилка на обєкт де ми хочемо вичислить сумарну зп якщо sales це масив то ви визиваэмо редюс і стрілочну функцію і підщитуємо. якщо елсе наш обєкт не являєця масивом то ми робимо цикл фор для перебору обєкта.  проп - пробігає свойства
// let arg1 = [5, 2] непотрібно
// function sumAll(arg1, arg2, ...masive) {
// return arg1 + arg2 + masive.reduce((prevVal, value) => prevVal += value, 0);
// }
// console.log( sumAll(2, 5));
// console.log( sumAll(4, 5, 6, 8));

// let items = [5, 2, 8];
// let digi = [6, 4, 2];
//let comp = [...items, ...digi]

// let max = Math.max(...items, 9, ...digi);
// console.log( max); // 8

// №22

// let city1 = { charge: 50 };

// let city2 = { charge: 40 };
// let city3 = { charge: 30 };

// // копіює всі властивості з permissions1 та permissions2 у user
// Object.assign(city1, city2, city3);
// console.log(city1, city2, city3);

// function performOperation(secondInteger, secondDecimal, secondString) {
//   const firstInteger = 4;
//   const firstDecimal = 4.0;
//   const firstString = "HackerRank ";

//   // write code below
//   console.log(firstInteger + parseInt(secondInteger, 1));
//   console.log(firstDecimal + parseFloat(secondDecimal, 2));
//   console.log(`${firstString}${secondString}`);

//   secondInteger = 5;
//   secondDecimal = 4.5;
//   secondString = "from Medium";
// }
// performOperation();
// _________________________00000000000000000000000_________________________


