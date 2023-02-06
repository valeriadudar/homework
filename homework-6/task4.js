// Завдання 4
// Напиши клас StringBuilder. На вхід він отримує один параметр - рядок, який записує у властивість _value.
// Додай класу наступний функціонал:
// Геттер value - повертає поточне значення поля _value
// Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='








// ============================

// ES5 Classes

// function StringBuilder(_value) {
//   this._value = _value;
// }

// StringBuilder.prototype.value = function () {
//   return this._value;
// };

// StringBuilder.prototype.append = function (newItem) {
//   this._value += String(newItem);
// };

// StringBuilder.prototype.prepend = function (newItem) {
//   this._value = String(newItem) + this.value;
// };

// StringBuilder.prototype.pad = function (newItem) {
//   this._value = String(newItem) + this.value + String(newItem);
// };

// const builder = new StringBuilder(".");
// console.log(builder);

// console.log(builder.value);
// // console.log(builder.value());
// // builder.append = "^";
// builder.append("^");
// console.log(builder.value); // '.^'
// // console.log(builder.value());

// // builder.prepend = "^";
// builder.prepend("^");
// console.log(builder.value); // '^.^'

// // builder.pad = "=";
// builder.pad("=");
// console.log(builder.value); // '=^.^='
// ============================

// ES6 Classes

// using getters/setters

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  set append(newItem) {
    this._value += String(newItem);
  }

  set prepend(newItem) {
    this._value = String(newItem) + this.value;
  }

  set pad(element) {
    this._value = String(element) + this.value + String(element);
  }
}

common

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  append(newItem) {
    this._value += String(newItem);
  }

  prepend(newItem) {
    this._value = String(newItem) + this.value;
  }

  pad(newItem) {
    this._value = String(newItem) + this.value + String(newItem);
  }
}
const builder = new StringBuilder(".");
console.log(builder);

console.log(builder.value);
// console.log(builder.value());
// builder.append = "^";
builder.append("^");
console.log(builder.value); // '.^'
// console.log(builder.value());

// builder.prepend = "^";
builder.prepend("^");
console.log(builder.value); // '^.^'

// builder.pad = "=";
builder.pad("=");
console.log(builder.value); // '=^.^='

// ============================

