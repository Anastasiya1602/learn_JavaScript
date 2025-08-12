//1.задание:  Вывод чисел от 1 до N. Попросите пользователя ввести любое число N через prompt и выведите все числа от 1 до N в консоль.
let anyNumber = +prompt('Введите число от 1 до 100');
if (!isNaN(anyNumber) && anyNumber > 0 && anyNumber <=100){
  for (let i=1; i <= anyNumber; i ++) {
  console.log(i)  
} 
} else {
  console.log('Ошибка: введите число от 1 до 100!');
  alert('Ошибка: введите число от 1 до 100!');
} 

//2.задание: Сумма чисел от 1 до N. Запросите число N и вычислите сумму всех чисел от 1 до N и результат выведите в консоль.
let N = +prompt('введите число от 0 до 100');
let sum = 0;
if (!isNaN(N) && N >= 1 && N <= 100) {
  for(let i=1; i <= N; i++) {
    console.log(i);
    sum+= i;
  }
  console.log(`сумма чисел от 1 до ${N} = ${sum}`);
} else {
  console.log('Ошибка: введите число от 1 до 100!')
}

//3.задание. 3. Четные числа. Выведите все четные числа от 0 до 100 в консоль.

for (let i = 0; i <=100; i=i+2) {
    console.log(i)
}
//или
for (let i = 0; i <= 100; i++) {  // 1. Цикл от 0 до 100
  if (i % 2 === 0) {              // 2. Проверка на чётность
    console.log(i)                 // 3. Вывод чётного числа
  }
}
//или
let index = 0
while (index <= 100) {
  if (index % 2 === 0) console.log(index)
  index++
}

//4.задание:До первого четного числа. Запрашивайте числа через prompt, пока  введенное  пользователем число не будет четным.

while (true) {
  let even = +prompt('введите любое число');
  if (!isNaN(even) && even % 2 === 0){
    console.log(even);
    alert ('введено четное число')
    break;
  } else  {
  alert('введено нечетное число или строка');
  continue;
  }
}

//5.задание:Среднее арифметическое. Запрашивайте числа у пользователя пока он не введет слово "стоп", затем выведите их среднее арифметическое.

let count = 0;
let summa = 0;

while(true) {
  let input = prompt('введите число или напишите "стоп" для прекращения ввода');
  if (input === "стоп" && count!= 0) {
    input= input.trim().toLowerCase();
    console.log(`среднее арифметическое - это сумма введенных чисел / на количество вводов, ${summa}/${count} =`, summa/count);
    alert(summa/count);
    break;
  }
  if (!isNaN(input)) {
    usersNum=Number(input);
    summa = summa + usersNum;
    count++;
    console.log(count, usersNum);
  
  }  else {
    alert('чтото пошло не так');
  }
}
//6. задание:Максимальное число. Запрашивайте числа у пользователя пока он не введет слово "стоп", затем выведите максимальное число из введенных.
let i = 0;
let maxNum = -Infinity;

while(true) {
  let input = prompt('введите число или напишите "стоп" для прекращения ввода');
  input = input.toLowerCase().trim();

  if (input === "стоп" && i!= 0) {
    console.log(`максимальное введённое число: ${maxNum}`);
    alert(maxNum)
    break;
  } 
  
  if (!isNaN(input)) {
    let userNum = Number(input);
    if (userNum > maxNum ) {
      maxNum = userNum;
    }
    i++
    console.log(i, userNum);
    
  } else {
    alert('ошибка, введите число или "стоп"!!!');
  } 
}

//7.задание: Работа со строками: Перевернутая строка- Запросите строку и выведите ее в обратном порядке (например, "hello" → "olleh"). Методы строк не используем.
let inputStr = prompt('Напишите любое слово или предложение');
let reverse = '';
if (inputStr) {
  newStr = inputStr.trim().toLowerCase();
  for(let i = newStr.length-1; i >= 0; i-- ) {
    let indexStr = newStr[i];
    console.log(indexStr)
    reverse  += indexStr
  }
  console.log(reverse)
} else {
  alert('вы нчиего не написали');
}

//8.Задание.8. Подсчет гласных. Посчитайте количество гласных букв (a, e, i, o, u) в введенной строке Пользователем, например "Hello world".

let str = prompt('Введите строку  на английском  языке');
let vowels = ['a', 'e', 'i', 'o', 'u'];
let countOfVowels = 0;

if (str && str !== '') {
  let newStr = str.trim().toLowerCase();  
  for (let i = 0; i < newStr.length; i++) {
    let currentChar = newStr[i];
    if (vowels.includes(currentChar)) {
      countOfVowels++; 
    }
  }  
  console.log(`Количество гласных: ${countOfVowels}`);
  alert(`Количество гласных: ${countOfVowels}`);
} else {
  console.log('Вы не ввели строку');
}

//9.Задание.Замена символов. Замените все буквы 'a' в строке на '!' и выведите результат. За пример слова берите любое, где есть бука "A" / 'a'

let input = prompt('введите слово английскими буквами, если в нем будет буква/ы "a", произойдет их замена на знак "!":');
let transformWord='';
if (input && input != '') {
  let word =input.trim().toLowerCase();
  console.log(word)
  for (let i =0; i < word.length; i++) {
    newWord = word[i];
    transformWord += newWord.replaceAll('a', '!');
  }
  console.log (transformWord);
}