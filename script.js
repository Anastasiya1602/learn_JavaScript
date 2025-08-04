//задание 1:
let str1 =  " JavaScript is AWESOME ";
console.log(str1.trim().toUpperCase());

//задание 2:
let str2 = "2024-07-30";
let year = `Год: "${str2.slice(0,4)}"`;
let month = `Месяц: "${str2.slice(5,7)}"`;
let data = `День: "${str2.slice(8,10)}"`;
console.log(year);
console.log(month);
console.log(data);

//задание 3:
let str3 = " Я люблю JavaScript! Я люблю это дело. ";
let newStr3 = str3.trim().replace('JavaScript', 'программирование').replaceAll('люблю', 'обожаю');
console.log(newStr3);

//задание 4:

let str4 = "яблоки,груши,виноград"
let newStr4 = str4.split(',').map(word => word.toUpperCase()).join(' | ');
console.log(newStr4); 

//или:
let fruits = "яблоки,груши,виноград";
let newFruits = fruits.toUpperCase().replaceAll(',', ' | ');
console.log(newFruits);

//задание 5:
let email = "example@mail.com";
let validSimbolEmail = email.includes('@');
let validEndEmail = email.endsWith('.com')
console.log(`Содержит @: ${validSimbolEmail}, cодержит .com: ${validEndEmail}`);

//задание 6:
let account = "1234567812345678";
//1.
let maskedAccount = `${account.slice(0,4)} **** **** ${account.slice(-4)}`;
console.log(maskedAccount);
//2.
let maskedAccount2 = account.replace(/(\d{4})(\d{4,12})(\d{4})/, '$1 **** **** $3');
console.log(maskedAccount2);

//задание 7:
let strIng = "Hello World!";
let length = strIng.length;
let firstLetter = strIng[0];
let lastLetter = strIng.slice(-1);
let middleIndex = Math.floor(strIng.length / 2); 
let middleLetter = strIng[middleIndex];

console.log(`Длина строки: '${length}', первый символ: '${firstLetter}', последний символ: '${lastLetter}', символ посередине: '${middleLetter}'`);