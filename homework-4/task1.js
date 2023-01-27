// Критерії прийому
// Створено окремий репозиторій
// При здачі домашньої роботи є посилання на вихідні файли в репозиторії
// Кожне завдання виконано в окремому файлі з ім'ям task-номер_завдання.js. Використовуй <script type="module"> щоб закрити код завдання в окремій області видимості і уникнути конфліктів імен ідентифікаторів.
// Імена змінних зрозумілі, описові
// Код відформатований за допомогою Prettier

// Завдання 1
// Розстав відсутні this в методах об'єкта account.
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     discount = value;
//   },
//   showOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost;
//     orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']



const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
      this.discount = value;
    },
    showOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost;
      this.orders.push(order);
    },
  };
  
  account.changeDiscount(0.15);
  console.log(account.discount); // 0.15
  
  console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
  account.addOrder(5000, 'order-4');
  console.log(account.balance); // 19000
  console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']