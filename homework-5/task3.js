// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).
// const getUsersWithGender = (users, gender) => {
//   // твій код
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

import users from "./users.js"

const getUsersWithGender = (users, genders) => {
    let res = users.map(({gender, name}) => {
       if(gender === genders){
        return name
       }
    });
    return res;
};
  
console.log(getUsersWithGender(users, 'male')); 
