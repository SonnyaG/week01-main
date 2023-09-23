const nameArea = () => {
    let Exname = document.getElementById("exname").textContent;

    document.getElementById("exname").innerHTML = Exname;
    //return userName;
}

const calculateArea = () => {
    let lenght = document.getElementById("lenght").value;
    let area = (5 * Math.pow(lenght, 3) / 12) * (3 + Math.sqrt(5));

    document.getElementById("result").innerHTML = area;
    document.getElementById("button").style = "color: #808080";
    //return userName;
}
let username = prompt('Add username'); //необходимо использовать для приветственного слова
console.log(`Привет, ${username}!`);   //вывод на консоль



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



// function testFunction() {
//     return 42;
// }

// console.log(10);
// console.log(10.5);
// console.log('10.5');
// console.log("10.5");
// console.log(`10.${5}`);
// console.log(`10.${5}` + "123123123");

// console.log(typeof 10);
// console.log(typeof 10.5);
// console.log(typeof '10.5');
// console.log(typeof "10.5");
// console.log(typeof `10.${5}`);
// console.log(typeof (1 != 0));

// const user = {
//     id: 1,
//     name: 'Ivan'
// };
// console.log(typeof user);
// console.log(typeof calculateArea);
// console.log(typeof calculateArea('qwe'));


// console.log(typeof testFunction);