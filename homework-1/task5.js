//Завдання 5
//Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні сторінки в prompt. Врахуй, користувач може ввести ім'я країни не тільки буквами нижнього регістра, а наприклад 'кИтАЙ'.
//Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково використовуй switch. Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна] кредитів'.
//Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в alert повідомлення 'У вашій країні доставка недоступна'.
//Нижче наведено список країн і вартість доставки.
//Китай - 100 кредитів
//Чилі - 250 кредитів
//Австралія - 170 кредитів
//Індія - 80 кредитів
//Ямайка - 120 кредитів//

let EnterCountry = prompt (`specify the country for delivery of the goods`);
let credits;
let availability = 1;


switch (EnterCountry.toLowerCase()) {
    case "china":
    credits = 100;
    break;
    case "chile":
    credits = 250;
    break;
    case "australia":
    credits = 170;
    break;
    case "india":
    credits = 80;
    case "jamaica":
    credits = 120;
    break;
    default:
    console.log(`Delivery is not available in your country`);
    availability = 0;
    break;
}

if (availability) {
    EnterCountry = EnterCountry.charAt(0).toUpperCase() + EnterCountry.slice(1).toLowerCase();
console.log(`Delivery in ${EnterCountry} will cost ${credits} of credits`);
}
