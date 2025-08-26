// Обязательная часть выполнения заданий
//Уровень Легкий:

// 1. Создание и доступ. Создай объект student со свойствами: name (имя), age (возраст), grade (оценка). Выведи в консоль строку: "Студент [имя] учится в [класс] классе и ему [возраст] лет."

let student =  {
  name: 'Julio',
  age: 15,
  grade: 9,
}
console.log("Студент " + student['name'] + " учится в " + student['grade'] + " классе и ему " + student['age'] + " лет.");
console.log(`Студент ${student.name} учится в ${student.grade} классе и ему ${student.age} лет.`);

//2. Изменение свойств.

// Возьми объект student. Измени его оценку на балл выше.Добавь новое свойство hobby (хобби) со значением "Рисование". Выведи объект в консоль.

student.grade += 1;
student['hobby'] = "Рисование";
console.log(student)

//3. Перебор свойств.Создай объект car с свойствами brand, model, year.Используя цикл for...in, выведи в консоль все пары ключ:значение этого объекта.

let car = {
  brand: 'Ford',
  model: 'Mustang',
  year: '1965',
}
for (let key in car) {
  console.log(`${key}: ${car[key]}`)
}

//4. Проверка свойства (if...in).Создай объект settings с свойствами theme: 'dark' и volume: 80. Напиши код, который проверяет, есть ли в объекте свойство 'theme'. Если есть, выведи в консоль его значение, если нет — выведи 'Свойство не найдено'.

let settings = {
  theme: 'dark',
  volume: 80,
}
if ('theme' in settings ) {
  console.log(settings.theme)
} else {
  console.log('Свойство не найдено')
}

//5. Поиск в массиве объектов (цикл for).Дан массив объектов const movies = [{title: 'Инception', director: 'Christopher Nolan', year: 2010},{title: 'The Matrix', director: 'Lana Wachowski', year: 1999},{title: 'Interstellar', director: 'Christopher Nolan', year: 2014}]; Используя массив movies и обычный цикл for, найди и выведи все фильмы, год выпуска которых раньше 2005 года.

const movies = [
  {title: 'Инception', director: 'Christopher Nolan', year: 2010},
  {title: 'The Matrix', director: 'Lana Wachowski', year: 1999},
  {title: 'Interstellar', director: 'Christopher Nolan', year: 2014},
];

for (let i= 0; i < movies.length; i++) {
  let oldFilm = movies[i]
  if (oldFilm.year < 2005) {
    console.log(`Фильм, год выпуска которого раньше 2005 года: ${oldFilm.title}, режиссёра ${oldFilm.director}`)
  }
}

//или
let oldFilms = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].year < 2005) {
    oldFilms.push(movies[i].title);
  }
}
console.log(`Фильмы до 2005 года: ${oldFilms.join(', ')}`);


//6. Подсчет элементов по условию (цикл for). Посчитай, сколько в массиве movies фильмов снял Кристофер Нолан (director: 'Christopher Nolan'). Используй цикл и условие. Результат выведи в консоль.
let count = 0;
for (let i= 0; i < movies.length; i++) {
  let object = movies[i]
  if (object.director === 'Christopher Nolan') {
    count++
  }
}
console.log(count)

//Уровень: Средний 
//1. Сумма товаров в корзине. Дан массив cart с товарами: [{name: 'Книга', price: 15, quantity: 2}, {name: 'Кофе', price: 25, quantity: 1}, {name: 'Фонарик', price: 10, quantity: 3}]. Используя цикл for, посчитай и выведи общую стоимость корзины (учитывайте что quantity это количество одного товара в корзине).
let cart = [
  {name: 'Книга', price: 15, quantity: 2},//30
  {name: 'Кофе', price: 25, quantity: 1},//25
  {name: 'Фонарик', price: 10, quantity: 3},//30
]
let sum = 0;
for (let i = 0; i < cart.length; i++) {
  let item = cart[i]
  sum += item.price*item.quantity;
}
console.log(sum)//85

//2. Поиск объекта по свойству.Есть массив пользователей users: [{id: 1, name: 'Alice', isOnline: true}, {id: 2, name: 'Bob', isOnline: false}, {id: 3, name: 'Charlie', isOnline: true}].Найди и выведи первого пользователя, у которого isOnline === true. Используй цикл и break для остановки после нахождения. 
let users = [
  {id: 1, name: 'Alice', isOnline:true}, 
  {id: 2, name: 'Bob', isOnline: false}, 
  {id: 3, name: 'Charlie', isOnline: true},
]
let oneline =  null;
for (let i = 0; i < users.length; i++) {
  if(users[i].isOnline === true) {
    oneline = users[i]
    break;
  } 
} console.log(oneline.name)

//3. Группировка по условию. Дан массив животных animals: [{name: 'Кот', type: 'домашнее'}, {name: 'Медведь', type: 'дикое'}, {name: 'Собака', type: 'домашнее'}, {name: 'Лиса', type: 'дикое'}].Создай два новых массива: domestic и wild.Распредели животных по ним в зависимости от свойства type. Используй цикл for...of.
let animals = [
  {name: 'Кот', type: 'домашнее'}, 
  {name: 'Медведь', type: 'дикое'}, 
  {name: 'Собака', type: 'домашнее'}, 
  {name: 'Лиса', type: 'дикое'},
];

let domestic = [];
let wild = [];

for (let animal of animals) {
  if (animal.type === 'дикое') {
    wild.push(animal); 
  } else {
    domestic.push(animal); 
  }
}
console.log('Домашние животные:', domestic);
console.log('Дикие животные:', wild);

// 4. Поиск минимального значения.Дан массив игроков players: [{name: 'Анна', score: 85}, {name: 'Борис', score: 95}, {name: 'Вика', score: 76}].Найди игрока с наименьшим счетом (score). Выведи его имя и счет.Используй цикл и переменную для хранения минимального значения.

let players = [
  {name: 'Анна', score: 85},
  {name: 'Борис', score: 95},
  {name: 'Вика', score: 76}
];

let minPlayer = players[0]; 

for (let player of players) {
  if (player.score < minPlayer.score) {
    minPlayer = player; 
  }
}

console.log(`Игрок с наименьшим счетом: ${minPlayer.name}, счет: ${minPlayer.score}`);

//5. Объединение двух массивов объектов.Есть два списка товаров: newProducts: [{id: 4, name: 'Чашка'}, {id: 5, name: 'Блюдце'}] и oldProducts: [{id: 1, name: 'Ложка'}, {id: 2, name: 'Вилка'}]. Создай третий массив allProducts, содержащий все товары из обоих массивов.

let newProducts = [
  {id: 4, name: 'Чашка'},
  {id: 5, name: 'Блюдце'}
  ];

  let oldProducts = [
    {id: 1, name: 'Ложка'}, 
    {id: 2, name: 'Вилка'}
  ];

  let allProducts = [...newProducts, ...oldProducts];
  console.log(allProducts)

//сортировка
  allProducts.sort((a, b) => a.id - b.id);
  console.log('Объединенный и отсортированный массив:', allProducts);

//или 
let products = oldProducts.concat(newProducts);
console.log(products);
