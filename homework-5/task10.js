// Завдання 10
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
// const getSortedUniqueSkills = users => {
//   // твій код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


// import users from "./users.js"



const getSortedUniqueSkills = users => {
      let res = users.reduce((acc, {skills}) => {
            return [...acc, ...skills]
      }, []).filter((elem,idx,arr) => {
        return idx === arr.indexOf(elem)
      }).sort()
      return res
  };
  
  console.log(getSortedUniqueSkills (users));

