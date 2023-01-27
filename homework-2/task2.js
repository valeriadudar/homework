// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// const calculateEngravingPrice = function (message, pricePerWord) {
//   // твій код
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// const calculateEngravingPrice = function (message, pricePerWord) {

    
// };




const calculateEngravingPrice = (message, pricePerWord) => {
    const newArr = message.toString().split(' ');
    let priceCounter = 0;
    for (const item of newArr) {
         priceCounter += pricePerWord;
    }
    return priceCounter;
 }
 
 console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));
 console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); 