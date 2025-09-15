// Уровень Легкий: Основы синтаксиса, параметры, возврат значений.
//1. Object.keys. Дан объект let car = { brand: 'Toyota', model: 'Camry', year: 2021 }.Используя Object.keys(), получи массив всех его ключей и выведи его в консоль.
let car = { 
  brand: 'Toyota',
  model: 'Camry',
  year: 2021
}

const keysOfObj = Object.keys(car);
console.log(keysOfObj);

//2. Object.values.Дан объект let fruitPrices = { apple: 50, banana: 30, orange: 70 }. Используй Object.values(), чтобы получить массив всех значений и вычисли их общую сумму.

let fruitPrices = {
  apple: 50, 
  banana: 30, 
  orange: 70 
};
// let value = Object.values(fruitPrices);
// let totalPrice = 0;

// for (let i = 0; i < value.length; i++) {
//   let currentPrice = value[i];
//   totalPrice += currentPrice;
// }

// console.log(totalPrice);

//или

let totalPrice = Object.values(fruitPrices).reduce((sum, price) => sum + price, 0)
console.log(totalPrice);

//3. Object.entries.Дан объект let book = { title: 'JavaScript Basics', author: 'Jane Doe', pages: 200 }. Используй Object.entries(), чтобы преобразовать объект в массив пар [ключ, значение] и выведи его в консоль.

let book = { 
  title: 'JavaScript Basics', 
  author: 'Jane Doe', 
  pages: 200 
};

let entries = Object.entries(book);
console.log(entries);

//4. Подсчет количества свойств. Напиши функцию countProperties(obj), которая принимает объект и возвращает количество его свойств, используя Object.keys().

function countProperties(obj) {
  return  Object.keys(obj).length;
}

const data = {
  name: 'Nastiya',
  age: 40,
  city: 'Moscow',
  profession: 'doctor'
};

console.log(countProperties(book));
console.log(countProperties(fruitPrices));
console.log(countProperties(car));
console.log(countProperties(data));

//5. Поиск максимального значения.Дан объект let scores = { Alex: 100, Bob: 75, Charlie: 95 }. Используй Object.values(), чтобы найти и вывести в консоль максимальное значение.

let scores = { 
  Alex: 100, 
  Bob: 75, 
  Charlie: 95 
};

let maxNumber = Object.values(scores).reduce((max, current) => current > max ? current : max, 0);
console.log(maxNumber);

//Уровень Средний:
//1. Сумма числовых свойств.Напиши функцию sumNumericalValues(obj), которая принимает объект, находит все значения, которые являются числами, и возвращает их сумму.Используй Object.values().

function sumNumericalValues(obj) {
  return Object.values(obj).filter(item => typeof item === 'number').reduce((sum, curr) => sum + curr, 0);
}

//пример объекта:
let myObj = {
  age: 33,
  score: 125,
  name: 'ggfgfg',
  city: 'moscow',
  cats:6
}

let myObj2 = {
  age: 33,
  score: 125,
  name: 'ggfgfg',
  city: 'moscow',
  cats:6
}

console.log(sumNumericalValues(myObj));

//2. Преобразование объекта в query string (Чуть сложнее).Напиши функцию toQueryString(obj), которая преобразует объект в строку параметров URL.Пример: { name: 'John', age: 30 } -> "name=John&age=30". Используй Object.entries(), map() и join().

function toQueryString(obj) {
  return Object.entries(obj)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join('&');
}

console.log(toQueryString(myObj)); //объект указан выше, в предыдущем дз

//3. Сравнение двух объектов.Напиши функцию areObjectsEqual(obj1, obj2), которая возвращает true, если оба объекта имеют одинаковый набор свойств и значения этих свойств равны. Для простоты считай, что объекты одноуровневые (без вложенности). Используй Object.keys().

function areObjectsEqual(obj1, obj2) {
  let keysObjOne = Object.keys(obj1);
  let keysObjTwo = Object.keys(obj2);

  if (keysObjOne.length === keysObjTwo.length) {

    for (let i = 0; i < keysObjOne.length; i++) {
      let currentKey = keysObjOne[i];
  
      if (!obj2.hasOwnProperty(currentKey)) {
        return false; 
      }

      if (obj1[currentKey] !== obj2[currentKey]) {
        return false; 
      }
    }
      return true
      
  } else {

    return false
  }
}

console.log(areObjectsEqual(myObj, myObj2));