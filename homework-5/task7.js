// Завдання 7
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// const calculateTotalBalance = users => {
//   // твій код
// };

// console.log(calculateTotalBalance(users)); // 20916


import users from "./users.js"

const calculateTotalBalance = users => {
    let res = users.reduce((acc, {balance}) => {
        return acc + balance;
    }, 0);
    return res;
};
  
console.log(calculateTotalBalance(users)); // 20916