//1.задание:
let age =prompt('Введите свой возраст');
if (isNaN(age) || age < 18) {
  alert('Доступ запрещен')
} else {
  alert('Доступ разрешен')
}
//или: 
while (true) {
  let age = prompt('Введите свой возраст');
  
  if (isNaN(age)) {
    alert('Ошибка: введите число!');
    continue; 
  }
  
  if (age.length >= 3) {
    let confirmAge = confirm('Слишком большое число, это действительно Ваш возраст?');
    if (!confirmAge) {
      continue; 
  }
}  
  if (age < 18) {
    alert('Доступ запрещен!');
    break; 
  } else {
    alert('Доступ разрешен!');
    break; 
  }
}

//2.задание:
let anyNumber = 7;
console.log(anyNumber % 2 === 0);
//или
console.log (anyNumber % 2 === 0 ? true : false); 
//или
console.log (anyNumber % 2 === 0 ? 'Введено чётое число' : 'Введено нечётное число'); 
//или
console.log(!isNaN(anyNumber) ? (anyNumber % 2 === 0 ? true : false) :'Ошибка: введено не число!');

// 3. Задание:
let num1 = +prompt('Введите первое число');
let operator = prompt('Введите +, -, * или /');
let num2 = +prompt('Введите второе число');
let result;
switch(operator) {
  case '+':
    result = num1+num2;
    break;
  case '-':
    result = num1-num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    result = 'Ошибка: неверный оператор';
}
alert(`${num1} ${operator} ${num2} = ${result}`);
console.log(`${num1} ${operator} ${num2} = ${result}`);

// или
let numOne = +prompt('Введите первое число');
let operators = prompt('Введите +, -, * или /');
let numTwo = +prompt('Введите второе число');
let resultTwo;

if (isNaN(numOne) || isNaN(numTwo)) {
  alert('Ошибка: введите корректные данные!');
} else {
  switch(operators) {
    case '+':
      resultTwo = numOne + numTwo;
      break;
    case '-':
      resultTwo = numOne - numTwo;
      break;
    case '*':
      resultTwo = numOne * numTwo;
      break;
    case '/':
      if (numTwo === 0) {
        alert('Ошибка: делить на 0 нельзя!');
        resultTwo = undefined;
      } else {
        resultTwo = numOne / numTwo;
      }
      break;
    default:
      alert('Ошибка: введите один из операторов: +, -, *, /');
      resultTwo = undefined;
  }
  
  if (resultTwo !== undefined) {
    alert(`${numOne} ${operators} ${numTwo} = ${resultTwo}`);
    console.log(`${numOne} ${operators} ${numTwo} = ${resultTwo}`);
  }
}
// 4.Задание:
const sentence = prompt('Напишите что-нибудь:');
if (sentence.length > 10) {
  let newSentence = sentence.split("").map((char, i) => i >= 5 ? "*" : char).join("");
  console.log(newSentence);
} else {
  console.log(sentence.toUpperCase())
};
//или
const sentenceTwo = prompt('Напишите что-нибудь:');
if (!sentenceTwo) {
  console.log("Ничего не написано");
} else if (sentenceTwo.length > 10) {
  const newSentence = sentenceTwo.slice(0, 5) + '*'.repeat(sentenceTwo.length - 5);
  console.log(newSentence);
} else {
  console.log(sentenceTwo.toUpperCase());
}

// 5.Задание:
let hour = +prompt('Введите текущий час (число от 0 до 23):');

if (isNaN(hour) || hour < 0 || hour > 23) {
  alert("Введены некорректные данные");
  console.log("Введены некорректные данные");
} else if (hour >= 0 && hour <= 5) {
  alert("Ночь");
  console.log("Ночь");
} else if (hour >= 6 && hour <= 11) {
  alert("Утро");
  console.log("Утро");
} else if (hour >= 12 && hour <= 17) {
  alert("День");
  console.log("День");
} else {
  alert("Вечер");
  console.log("Вечер");
}

// 6.Задание:
let email = prompt('Введите свой email:');
if (email && email.includes('@') && email.includes('.')) {
  alert("Верный формат");
} else {
  alert("Ошибка!");
}

//7.Задание:
const word = prompt('Введите любое слово, если слово читается одинаково с начала и с конца, то выйдет сообщение "true", а иначе "false".');

if(word) {
  const normalWord = word.trim().toUpperCase();
  const palindromeWord = normalWord.split('').reverse().join('');
  if (palindromeWord === normalWord) {
    alert('true')
    console.log(palindromeWord);
  } else {
    alert('false');
    console.log(palindromeWord);
  }
} else {
  alert('ничего не введено')
}

//или
if (word) {
  const normalWord = word.trim().toUpperCase();
  const palindromeWord = normalWord.split('').reverse().join('');
  const isPalindrome = normalWord === palindromeWord;
  
  alert(isPalindrome);
  console.log(isPalindrome);
} else {
  alert('Ничего не введено');
}