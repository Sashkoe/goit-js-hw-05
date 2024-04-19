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

const hours = 14;
const minutes = 20;
let = message;

if (minutes > 0) {
    message = `${hours} г. ${minutes} хв.`;    
} else {
    message = `${hours} г.`;
}
const message =  minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г,`;
console.log(message);


