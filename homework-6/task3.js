// Завдання 3
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:
// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]



// ================================

// ES5 Classes

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (itemToDelete) {
//   this.items.forEach((item, idx) => {
//     if (item === itemToDelete) {
//       this.items.splice(idx, 1);
//     }
//   });
// };

// ================================

// ES6 Classes

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToDelete) {
//     this.items.forEach((item, idx) => {
//       if (item === itemToDelete) {
//         this.items.splice(idx, 1);
//       }
//     });
//   }
// }

// ================================

const storage = new Storage([
    "Нанітоіди",
    "Пролонгер",
    "Залізні жупи",
    "Антигравітатор",
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
  
  storage.addItem("Дроїд");
  console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  
  storage.removeItem("Пролонгер");
  console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  