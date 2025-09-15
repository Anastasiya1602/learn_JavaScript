// //strings
// // 1.литералы строк
// // 'строка';
// // "строки";
// // `strings${'string'}`;

// //2.slice, includes, length (просто практикуюсь рандомно)
// let str = 'Anastasiia Chavdar';
// let myName =str.slice(0,10);
// console.log(myName);
// let mySurname = str.slice(11,18);
// console.log(mySurname);
// console.log(`my name is ${myName}, my surname is ${mySurname},  я изучаю строки и методы строк`)
// const valid = str.includes('a');
// console.log(valid)
// console.log(str.length)
// const str2 = 'abcdefghijklmnopqrstuvwxyz';
// console.log(str2.length);
// //2. indexOf, substring (основные частые операции со строками)
// let name = 'i love my hobby, but i dont like my job';
// let simbol = name.indexOf('t');
// console.log(simbol)
// let substr = name.substring(16);
// console.log(substr);
// console.log(name.length)
// console.log(name + 'gfgfgfgf');

// //доступ к символам:
// //1. charAt
// let f = 'freedom';
// let ff = f.charAt(5)
// console.log(ff)
// //2. []
// let j = 'freedom';
// let jj = j[6];
// console.log(jj);

// //сравнение строк:
// let alfa = 'g'
// let beta ='g'

// if (alfa < beta) {
//   console.log('не равны');
// } else if (alfa > beta) {
//   console.log('не равны');
// } else {
//   console.log(alfa + ' ' + 'and' + ' ' + beta + ' ' +'равны')
// }

// //строки-примитивный тип данных, есть string- объект: преобразование строки в объект
// let strr = 'string';
// let strrr = new String(strr)
// console.log(typeof(strr), typeof(strrr));

// //eval() глобальная функция:
// let str8 = '3+6';
// let str9 = new String('3+6'); //переводим строку в объект с помощью new String
// console.log(eval(str8));//9
// console.log(eval(str9)); //[String: '3+6']

// //преобразование объекта String  в строковый примитив:
// console.log(str9.valueOf());
// console.log(eval(str9.valueOf()));

// console.log(+new Date())//1754407321147

// // 1. Математические операции
// console.log(new Number(2) + new Number(3)); // 5 (вызваны valueOf())


// // 2. Сравнения
// console.log(new String('foo') == 'foo'); // true

// // 3. Унарные операторы
// console.log(+new Date()); 

// //
// console.log(new Date());// 1678901234567 (timestamp)
// console.log(Date.now());
// console.log(Date.now());
// console.log(Date.now());

// // var num = 15;
// // console.log(String.replace(num, /5/, "2"));

// //методы:
// //1.String.fromCharCode()
// console.log(String.fromCharCode(34,57,99))//"9c
// console.log(String.fromCharCode(94,65,66,68,86,67));

// //2.String.fromCodePoint()???????
// console.log(String.fromCodePoint(0x1d306, 0x61, 0x1d307));

// //String.raw()
// const winPath = String.raw`C:\Program Files\NodeJS`;
// const winPath2 = `C:\Program Files\NodeJS`;
// console.log(winPath); // "C:\Program Files\NodeJS" (корректно)
// console.log(winPath2);

// //методы объекта string:
// //разбираюсь в строках:
// const a = new String(null); 
// const b = String(null);
// console.log(a, typeof a)
// console.log(b, typeof b)

// //1.charCodeAt() выводит Unicode-код символа в строке "меня зовут Настя" по указанному индексу.
// const sentence = "меня зовут Настя"; // Строка для анализа
// const index = 7;                     // Индекс символа, который нужно проверить

// console.log(
//   `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`,
// );
// // Что произойдет при выполнении:
// // sentence.charAt(4) – возвращает символ на 4-й позиции (индексация с 0):
// // 0: 'м', 1: 'е', 2: 'н', 3: 'я', 4: ' ' (пробел) и т.д.
// // sentence.charCodeAt(4) – возвращает Unicode-код этого символа:
// // напрмиер пробел имеет код 32.

// //2.codePointAt() метод, который возвращает Unicode code point (числовое значение) символа в строке по указанному индексу.
// const exm = '☃★♲';
// console.log(exm.codePointAt(0))
// console.log(exm.codePointAt(1))
// console.log(exm.codePointAt(2))
// console.log(exm.codePointAt(3))
// console.log(exm.codePointAt(4))

// //concat()объеденяет строки
// const myFirstName = 'Anastasiia';
// const mySurname2 = 'Chavdar';
// console.log(myFirstName.concat(' ', mySurname2));
// console.log(mySurname2.concat(' ', myFirstName));

// //endsWith() определяет, заканчивается ли строка символами данной строки, возвращая true или false в зависимости от ситуации.
// const email = 'chavdaranastasiya85@gmail.com'
// const email2 = 'chavdaranastasiya85@gmail.ru'
// console.log(email.endsWith('.com'));
// console.log(email2.endsWith('.com'));

// //includes() выполняет поиск с учетом регистра, чтобы определить, может ли заданная строка быть найдена в этой строке, возвращая true или false
// const sentence34 = "gff fgfg fgf gkroi rfgfhfh ";
// const word = "fgfg";
// console.log(sentence34.includes(word));
// console.log(`The word "${word}" ${sentence34.includes(word) ? "is" : "is not"} in the sentence`); //Тернарный оператор ? :

// //indexOf()
// const ggggg = 'Widget with id';
// const indexOfggggg = 'id';
// console.log(ggggg.indexOf(indexOfggggg));//1 первое вхождение по совпадению символа в предложении и выводит индекс первого совпадения 
// console.log(ggggg.indexOf(indexOfggggg, 2));//12 выводит символ по второму совпадению

// const str56 = 'my name nastiya';
// const str57 = 'm';
// console.log(str56.indexOf(str57))//0
// console.log(str56.indexOf(str57, 2))//5

// //задачи
// //1.
// let str1 = 'tommy';
// let newStr1 = str1.replace('t', 'T');
// console.log(newStr1)
// //2.
// let str11 = 'tommy';
// let newStr11 = str11[0].toUpperCase() + str11.slice(1);//можно не указывать второй индекс тогда это означает что до конца строки
// console.log(newStr11)

// //3.Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// // Функция должна быть нечувствительна к регистру:

// // checkSpam('buy ViAgRA now') == true
// // checkSpam('free xxxxx') == true
// // checkSpam("innocent rabbit") == false
// let str677 = 'buy ViAgRA now';
// str677 = str677.toLowerCase();
// console.log(str677.includes('viagra'));
// let str678 = 'free xxxxx';
// console.log(str678.includes('xxxxx'))
// let str679 = "innocent rabbit";
// console.log(str679.includes('xxxxx'));

// //fanction:
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// console.log( checkSpam('buy ViAgRA now') );//true
// console.log( checkSpam('free xxxxx') );//true
// console.log( checkSpam("innocent rabbit") );//false

//fanction:
// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str + '....'
//   } else {
//     return str; 
//   }
// }
// console.log(truncate('hfhfhfhfhfhfhfhfhfhf', 12));
// console.log(truncate('ghghhg', 7));
// console.log(truncate('ryryryryryryryryr',48));
// console.log(truncate('fhf', 1));

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Вот, хотелось", 20));

//ЛОГИЧЕСКИЙ ТИП.ЛОГИЧЕСКИЙ ОПЕРАТОР.
//true
//false


//objects:
// let fruit = prompt('какой фрукт купить?');//вводим apple
// let bag = {
//   [fruit]: 7,
// }
// console.log(bag.aple); //7
// let codes = {
//   49: "Германия",
//   41: "Швейцария",
//   44: "Великобритания",
//   1: "США"
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }
// console.log(codes);

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log(user);
// console.log(user.name);
// console.log(user.surname);
// user.name = 'Pete';
// console.log(user.name);
// console.log(user);
// delete user.name
// console.log(user);

// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = salaries.John+salaries.Ann+salaries.Pete
// console.log(sum)

// sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum); 



// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);
// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     // console.log(typeof menu[key])
//     if (typeof menu[key] === "number") {
//       menu[key] = menu[key]*2
//     } 
//   }
//   console.log(menu)
// }
// multiplyNumeric(menu)

// let number = 5; 
// const f = (number) => {
// number = number +10;
// return number
// };
// f(number);
// console.log(number);//5
// const newNumber = f(number);
// console.log(newNumber);//15
// let salaries = {
//   John: 300,
//   Pete: 300,
//   Mary: 250
// };


// function sumSalaries (obj) {
//   let result = 0;
//   for (let value of Object.values(obj)) {
//     console.log(value);
//     result += value;
//   }
//   return result;
// }

// console.log( sumSalaries(salaries) ); // 650

// Напишите функцию count(obj), которая возвращает количество свойств объекта:
// let user = {
//   name: 'John',
//   age: 30
// };

// function count (obj) {

//   let arr = [];

//   for (let property of Object.entries(obj)){
//     console.log(property);
//     arr.push(property);
//   }
//   return arr.length;
// }

// //или внутри функции просто пишем return Object.entries(obj).length;

// console.log( count(user) ); // 2