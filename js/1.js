// const chopShop = {
//     stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//     ],
// }
    
//  calcTotalPrice(stoneName) 
//     const stone = this.stone.find((item) => item.name.toLowerCase() === stoneName.toLowerCase());
//     if (! stone) {
//         return `${stoneName} not found`;
//     }
//     return stone.price * stone.quantity;
 
//  console.log(chopShop.calcTotalPrice("sapphire"));
/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */


// function calcBMI(weight, height) {
//     let numWeight = weight.replace(",", ".");
//     numWeight = Number.parseFloat(numWeight);
//     const numHeight = Number.parseFloat(height);
//     const bmi = numWeight / (numHeight ** 2);
//     return bmi.toFixed(1);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);
// function  calcBMI(weight,height){
//     let numWeight = weight.replace(",", ".");
//     numWeight = Number.parseFloat(numWeight);
//     const numHeight = Number.parseFloat(height);
//     const bmi = numWeight / (numHeight ** 2);
//     return bmi.toFixed(1);
// }
// const bim = calcBMI("88,3", "1.75" );
// console.log(bim);

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 20;
// let message;


// if(minutes > 0) {
//     message = `${hours} г. ${minutes} хв.`;
// } else {
//     message = `${hours} г.`;
// }

// const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(message);

// const hours = 14;
// const minutes = 20;
// let  message = ;

// if (minutes > 0) {
//     message = `${hours} г. ${minutes} хв.`;    
// } else {
//     message = `${hours} г.`;
// }
// const message =  minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г,`;
// console.log(message);
// class Car {
//     constructor ( {brand , model,price} ) {
//         this.brand = brand;
//         this.model = model;
//     }
//     getBrand(){
//         return this.brand;
//     }
// }
// const audi = new car ("audi" , "q5", price)


// console.log("audi", audi);

// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя
// function letMeSeeYourName( greet) {
//     const nameUser = prompt ("Введіть своє імя") 
//     greet(nameUser);
// }
// function greet( name) {
//  console.log(`Привіт ${name}`);   
// }
// letMeSeeYourName(greet)

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, showProduct) ;

// function makeProduct(name, price, callback) {
//     const product = {name,price,id:Date.now()}
//   callback(product);
// }
// function showProduct(product) {
//   console.log(product);
// }
// const scientists = [
//     {
//       name: "Albert",
//       surname: "Einstein",
//       born: 1879,
//       dead: 1955,
//       id: 1,
//     },
//     {
//       name: "Isaac",
//       surname: "Newton",
//       born: 1643,
//       dead: 1727,
//       id: 2,
//     },
//     {
//       name: "Galileo",
//       surname: "Galilei",
//       born: 1564,
//       dead: 1642,
//       id: 3,
//     },
// {
//       name: "Marie",
//       surname: "Curie",
//       born: 1867,
//       dead: 1934,
//       id: 4,
//     },
//     {
//       name: "Johannes",
//       surname: "Kepler",
//       born: 1571,
//       dead: 1630,
//       id: 5,
//     },
//     {
//       name: "Nicolaus",
//       surname: "Copernicus",
//       born: 1473,
//       dead: 1543,
//       id: 6,
//     },
// {
//       name: "Max",
//       surname: "Planck",
//       born: 1858,
//       dead: 1947,
//       id: 7,
//     },
//     {
//       name: "Katherine",
//       surname: "Blodgett",
//       born: 1898,
//       dead: 1979,
//       id: 8,
//     },
//     {
//       name: "Ada",
//       surname: "Lovelace",
//       born: 1815,
//       dead: 1852,
//       id: 9,
//     } ];
    // 1)получити масив вчених які народились у 19ст;
    // const scient = scientists.filter(element => element.born >= 1800 && element.born < 1900 ).map(elements => `${elements.name} ${elements.surname}` );
    // console.log(scient);
    // const scientYears = scientists.reduce((acc, element ) => acc + (element.dead - element.born), 0  ) ;
    // console.log(scientYears / scientists.length);
    // 3) відсортувати по алфавіту;
    // const sortName = scientists.toSorted((a,b) => a.name.localeCompare (b.name));
    // console.log(sortName);
    // 4)відсортувати по кількості прожитих років;
    // const sortYear = scientists.toSorted((a,b) => (a.dead - a.born ) - (b.dead - a.born ) );
    // console.log(sortYear);
    // 5)відфільтрувати, хто народився в 15,16,17ст;
    // const scientSt = scientists.filter(element => element.born >= 1400 && element.born < 1700 );
    // console.log(scientSt );
    // 6)знайти рік народження Albert Einstein;
    // const Einstein = scientists.find(element => element.name === "Albert" && element.surname === "Einstein");
    // console.log(Einstein);
//     Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.
// class User {
//     constructor (username,age,numberOfPosts) {
//         this.username = username;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//     }
//     getInfo(){
//        return `User ${this.username } is ${ this.age } years old and has ${  this.numberOfPosts } posts.`  
//     }
// }
// const lalala = new User("Max",33,333);
// console.log(lalala.getInfo());
// console.log(lalala);
// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")
// ЗАДАЧА 4
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.

// ЗАДАЧА НА ЗАМИКАННЯ 5
// У вас є функція counter(), яка повинна повернути нове значення лічильника кожного разу, коли вона викликається. Проте, коли ви викликаєте counter() два рази, вона повертає одне і те ж значення. Ви хочете, щоб кожен виклик counter() повертав нове значення лічильника. Використовуючи замикання, напишіть функцію, яка розв'язує цю проблему.
// ЗАДАЧА 4
// Сортування примітивів.
// Виконати сортування масиву цін зі спадання та зростання.
// const prices = [2, 14, 1, 37, 26, 8];

// ЗАДАЧА 5
// Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];

