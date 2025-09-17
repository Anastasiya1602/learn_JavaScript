// Уровень Легкий:
//1. Простой калькулятор. Создайте функцию calculate(a, b, operation).функция calculate возвращает результат операции callback.Параметр operation — это callback-функция, которая выполняет математическую операцию над a и b (например, сложение или вычитание). Вызовите calculate с разными callback-ами.

function calculate(a, b, operation) {
  console.log(operation(a, b));
}

calculate(8, 4, (a,b) =>  a + b);
calculate(9, 3, (a,b) => a - b);
calculate(11, 2, (a,b) => a * b);
calculate(35, 7, (a,b) => a / b);

//2. Массив в квадрате.Напишите функцию squareArray(arr, callback).Функция должна применить callback-функцию к каждому элементу массива arr и вернуть новый массив с результатами.Callback должен возводить число в квадрат.

function squareArray(arr, callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }
  return newArr;
}

let square = (num) => num ** 2;

console.log(squareArray([1, 2, 3, 5], square));//1,4,9,25

//3. Фильтр четных чисел.Создайте функцию filterArray(arr, callback). Функция должна вернуть новый массив, в который войдут только те элементы arr, для которых callback-функция вернет true.Напишите callback для фильтрации четных чисел.

function filterArray(arr, callback) {
  let evenFromArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (callback(arr[i])) {
      evenFromArr.push(arr[i])
    }
  }

  return evenFromArr
}

const isEven = (num) => num % 2 === 0;

console.log(filterArray([2,3,6,8,20,9,18], isEven));

//4. Форматирование текста.Создайте функцию formatText(text, formatter). formatter — это callback, который принимает строку и возвращает новую отформатированную строку. Напишите два callback-а: один преобразует текст в верхний регистр, другой — в нижний.    

function formatText(text, formatter) {
  return formatter(text)
}

const toUpperCase = (text) => text.toUpperCase();
const toLowerCase = (text) => text.toLowerCase();

console.log(formatText('dfsfDADgdg',toUpperCase))
console.log(formatText('dfsfDADgdg',toLowerCase))

//Уровень Средний:
//1. Собственный forEach.Реализуйте свою версию метода массива forEach.Напишите функцию myForEach(arr, callback), которая принимает массив и callback.Функция должна применять callback к каждому элементу массива, передавая ему сам элемент, его индекс и исходный массив.

function myForEach(arr, callback) {

  for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}

  return undefined;

}

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = ['fgdd', 'njghjj', 'ada', 'fgfh', 'hjl'];
let array3 = [34, 'name', 123, 'fgfd'];

myForEach(array1, function(element, index, array) {
  console.log(`Элемент: ${element}, Индекс: ${index}, Массив: [${array}]`);
});

myForEach(array2, function(element, index, array) {
  console.log(`Элемент: ${element}, Индекс: ${index}, Массив: [${array}]`);
});

myForEach(array3, function(element, index, array) {
  console.log(`Элемент: ${element}, Индекс: ${index}, Массив: [${array}]`);
});

//как метод:

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    
    callback(this[i], i, this);
  }
  return undefined; 
};

array1.myForEach(function(element, index, array) {
  console.log(`Элемент: ${element}, Индекс: ${index}, Массив: ${array}`);
});