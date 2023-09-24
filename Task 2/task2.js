console._log = console.log;
console.log = function() {
  document.querySelector('p').innerText = arguments[0];
  console._log.apply(null, arguments);
}

// Объявление переменных с различными типами данных
var number = 10; // Числовой тип данных (number)
var string = "Hello"; // Строковый тип данных (string)
var boolean = true; // Логический тип данных (boolean)
var array = [1, 2, 3]; // Тип данных массив (object)
var object = {name: "John", age: 25}; // Тип данных объект (object)
var undefinedVariable; // Значение переменной не определено (undefined)
var nullVariable = null; // Значение переменной явно указано как "ничего" (object)

// Вывод типов данных переменных
console.log(typeof number); // number
console.log(typeof string); // string
console.log(typeof boolean); // boolean
console.log(typeof array); // object
console.log(typeof object); // object
console.log(typeof undefinedVariable); // undefined
console.log(typeof nullVariable); // object

// Вывод максимальных и минимальных значений числовых типов данных
console.log(Number.MAX_VALUE); // Максимальное значение числового типа данных - 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Минимальное положительное значение числового типа данных - 5e-324

console.log(result);