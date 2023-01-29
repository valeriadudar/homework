// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
// const findLongestWord = function (string) {
//   // твій код
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


const findLongestWord = (str) => {

    const newArr = str.trim().split(' ');
    let theLongestWord = ''

    for (const item of newArr) {
        if (item.length > theLongestWord.length) {
            theLongestWord = item
        }

    }
    return theLongestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
console.log(findLongestWord('Google do a roll')) 
console.log(findLongestWord('May the force be with you'))