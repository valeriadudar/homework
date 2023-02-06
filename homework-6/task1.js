// Критерії прийому
// Створено окремий репозиторій
// При здачі домашньої роботи є посилання на вихідні файли в репозиторії
// Кожне завдання виконано в окремому файлі з ім'ям task-номер_завдання.js. Використовуй <script type="module"> щоб закрити код завдання в окремій області видимості і уникнути конфліктів імен ідентифікаторів.
// Імена змінних зрозумілі, описові
// Код відформатований за допомогою Prettier
// Завдання 1
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.
// console.log(Account.prototype.getInfo); // function



const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com





