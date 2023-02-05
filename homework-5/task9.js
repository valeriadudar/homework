// Завдання 9
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
// const getNamesSortedByFriendsCount = users => {
//   // твій код
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


import users from "./users.js"



const getNamesSortedByFriendsCount = users => {
    let res = users.sort((a, b) => {
      return a.friends.length - b.friends.length
    }).map((item) => {
        return item.name
    });
    return res;
  };

  
  
  console.log(getNamesSortedByFriendsCount(users));
  
  