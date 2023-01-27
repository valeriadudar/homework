//Завдання 3
//Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.
//Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:
//Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
//В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
//В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'
//Після всіх перевірок вивести в alert значення змінної message.
//const ADMIN_PASSWORD = 'jqueryismyjam';
//let message;//
// let msg_1 = `Welcome!`;
// let msg_2 = `Access denied, incorrect password!`;
// let msg_3 = `Canceled by user!`;


const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt(`Enter your password`);

if (password == null) {
    console.log(`Canceled by user!`); 
} else if (password == ADMIN_PASSWORD) {
    console.log(`Welcome!`);
} else {
   console.log(`Access denied, incorrect password!`);
}


