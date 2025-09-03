//  Уровень Легкий: (Основы синтаксиса, параметры, возврат значений)
// 1. Приветствие: Напишите функцию greet(name), которая принимает имя и возвращает строку "Привет, [имя]!".

const greet = (name) => {
  return `Hello, ${name}`
}

let usersName = prompt('Напишите свое имя')

console.log(greet(usersName))

// 2. Сумма двух чисел: Создайте функцию sum(a, b), которая возвращает сумму двух чисел.

const sum = (a, b) => {
  return a + b
} 

const numberOne = +prompt('введите любое число');
const numberTwo = +prompt('введите любое число');

alert( sum(numberOne, numberTwo) );
alert( sum(3, 7) ) //10
alert( sum(10, 14) )//24
alert( sum(134, 89) )//223

//3. Проверка на четность:- Напишите функцию isEven(num), которая принимает число и возвращает true, если число четное, и false — если нет.
const isEven = (num) => {
  return num % 2 === 0;
}   

let getNumber = +prompt('Введите любое число');
console.log( isEven(getNumber) );

//4. Случайное число:- Напишите функцию getRandomNumber(min, max), которая возвращает случайное целое число между min и max.

const getRandomNumber = (min, max) => {
  if (min > max) {
    [min, max] = [max, min]; 
  }

  return Math.floor(Math.random() * (max - min + 1)+ min);
}

let numOne = +prompt('Введите любое число');
let numTwo = +prompt('Введите любое число');

console.log( getRandomNumber(numOne, numTwo) );

//5. Форматирование строки:- Создайте функцию formatName(firstName, lastName), которая возвращает строку в формате "Фамилия, Имя".

const formatName = (firstName, lastName) => {
  return `${lastName} ${firstName}`
}

let userName = prompt('Введите своё имя');
let userSurname = prompt('Введите свою фамилию');

console.log( formatName(userName, userSurname) );

//6. Поиск индекса элемента (пишем собственный метод findIndex):- Напишите функцию findIndex(arr, value), которая принимает массив и значение, возвращает индекс первого найденного элемента или -1, если элемент не найден.

const findIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === value) {
      return i
    }
  }  

  return -1 //после полного цикла не нашли элемент-вернули -1
}

console.log( findIndex([4, 5, 7, 8, 9], 7) );
console.log( findIndex([4, 5, 7, 8, 9], 0) );
console.log( findIndex(['apple', 'banana', 'tomato'], 'orange') );
console.log( findIndex([4, 5, 7, 8, 9], 8) );


// Уровень Средний: (Работа с массивами, объектами, области видимости)
//1. Поиск в массиве (использовать только цикл for): Напишите функцию findInArray(arr, value), которая принимает массив и значение, и возвращает true, если значение есть в массиве, и false — если нет.

const findInArray = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === value) {
      return true
    }

  }

  return false
}

console.log( findInArray([11, 5, 64, 8, 45, 123], 45) );
console.log( findInArray([11, 5, 64, 8, 45, 123], 4 ) );
console.log( findInArray([11, 5, 64, 8, 45, 123], 64) );
console.log( findInArray([11, 5, 64, 8, 45, 123], 1) );
console.log( findInArray([11, 5, 64, 8, 45, 123], 123) );

//2. Калькулятор итоговой суммы (использовать только цикл for): Создайте функцию calculateTotal(cart), которая принимает массив объектов товаров (каждый объект имеет свойства price и quantity) и возвращает общую стоимость заказа.

const calculateTotal = (cart) => {
  let basket = 0;

  for (let i = 0; i < cart.length; i++) {
    basket += cart[i].price * cart[i].quantity
  }

  return basket 
}

const totalPrice = calculateTotal([
  {quantity: 3, price: 100},
  {quantity: 1, price: 1500},
  {quantity: 2, price: 600},
])

console.log(totalPrice);

//3. Поиск самого длинного слова: Напишите функцию findLongestWord(words), которая принимает массив слов и возвращает длину самого длинного слова.

const findLongestWord = (words) => {
  let maxLenghtOfWord = 0; 

  for (let i =0; i < words.length; i++) {

    if (words[i].length > maxLenghtOfWord) {
      maxLenghtOfWord = words[i].length;
    }

  } 

  return maxLenghtOfWord
}

const longestWord = findLongestWord(['трава', 'зеленый', 'программирование', 'луна']);

console.log(longestWord);


//4. Сумма всех чисел: Напишите функцию sumAll(...numbers) (используйте rest-оператор), которая возвращает сумму всех переданных аргументов, независимо от их количества.

function sumAll (...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0)
}
console.log( sumAll(1, 2, 3, 4, 5, 7) );//22

// //или
function sumAll(...numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

console.log( sumAll(1, 2, 3, 4, 5, 7) );

// //или
function sumAll(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log( sumAll(1, 2, 3, 4, 5, 7) );

//5. Валидатор пароля: Cоздайте функцию validatePassword(password), которая проверяет, что пароль длиннее 6 символов и содержит хотя бы одну цифру. Функция должна возвращать true или false.

function validatePassword(password) {
  const hasNumber = /\d/.test(password);
  const lengthPassword = password.length > 6;
  
  return hasNumber && lengthPassword;
}

//или
function validatePassword(password) {
  return password.length > 6 && /\d/.test(password);
}

console.log( validatePassword('dggdgd5656hbb') );//true
console.log( validatePassword('dggdghbb') );//false
console.log( validatePassword('6hbb') );//false
console.log( validatePassword('56567889') );//true

// 6. Разворот строки: Напишите функцию reverseString(str), которая возвращает перевернутую строку (без использования встроенного метода reverse).

function reverseString(str) {
  let reverse = '';
  
  for(let i = str.length - 1; i >= 0; i-- ) {
    reverse += str[i]
  }
  
    return reverse
}
const usersText = prompt('введите строку');
console.log(reverseString(usersText));

//7. Уникальные значения массива: Напишите функцию getUniqueValues(arr), которая возвращает новый массив только с уникальными значениями из исходного.

// здесь я написала функцию, которая возвращает только те элементы, которые встречаются ровно один раз:

function getUniqueValues(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {

      if (arr[j] === arr[i]) {
        count ++
      }
    }

    if (count === 1) {
        unique.push(arr[i]);
      }
  } 

  return unique
}

console.log(getUniqueValues([2, 2, 2, 5, 3, 3, 4, 6, 4, 3, 44, 5, 7]))

//здесь возвращает все уникальные, то есть записывает в массив элементы без дубликатов
function getUniqueValues(arr) {
  let unique = [];
  
  for (let i = 0; i < arr.length; i++) {

    if (!unique.includes(arr[i])) { 
      unique.push(arr[i]);          
    }
  }
  
  return unique;
}
console.log(getUniqueValues([2, 2, 2, 5, 3, 3, 4, 6, 4, 3, 44, 5, 7]))


//8. Трансформация массива в объект: Напишите функцию arrayToObject(arr), которая принимает массив пар P[ [key, value], [key, value], [key, value], и тд ] и возвращает объект, собранный из этих пар.

function arrayToObject(arr) {

  const obj = Object.fromEntries(arr);

  return obj
}
console.log(arrayToObject([['name', 'Pete'], ['age', '35'], ['city', 'Moscow']]))


//9. Фильтрация по нескольким условиям: - Напишите функцию filterUsers(users, filters), где filters — объект с условиями (напр., { age: 30, city: 'Moscow' }). Верните пользователей. Пример исходного объекта users = [{name: 'Ivan',  age: 31, city: 'Saratov'}, {name: 'Oleg', age: 30, city: 'Omsk'}, {name: 'Anastasiya', age: 30, city: 'Moscow'}, {И ТД}]

function filterUsers(users, filters) {  
    
    return users.filter(user => {  
        return Object.keys(filters).every(key => {  
            return user[key] === filters[key];  
        });  
    });  
}  
  
const users = [  
    { name: 'Иван', age: 31, city: 'Саратов' },  
    { name: 'Олег', age: 30, city: 'Москва' },  
    { name: 'Анастасия', age: 30, city: 'Москва' },  
    { name: 'Петр', age: 28, city: 'Москва' }  
];  

const filtered = filterUsers( users, { age: 30, city: 'Москва' } );  
console.log(filtered);   


//10. Разница между двумя массивами: Напишите функцию arrayDiff(arr1, arr2), которая возвращает новый массив с элементами, которые есть в arr1, но нет в arr2.

function arrayDiff(arr1, arr2) {
  let diffArr = [];
  
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) { 
      diffArr.push(arr1[i]);
    }
  }
  
  return diffArr;
}

const arrays = arrayDiff( ['name', 4, 6, 7, 88, 33, null, 22], [4, 2, 88, null, 6, 7, 1] );
console.log(arrays); 