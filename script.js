// Уровень: Легкий
//Найти сумму всех элементов массива: 
//1. без метода найти сумму всех элементов в массиве let numbers = [1, 2, 3, 4, 5].
let numbers = [1, 2, 3, 4, 5];
let sum = 0; 
for (let i=0; i < numbers.length; i++) {
  sum += numbers[i];
} console.log(sum)

// 2. C методом (reduce) найти сумму всех элементов в массиве let numbers = [1, 2, 3, 4, 5]:
let num = [1, 2, 3, 4, 5];
let summa = num.reduce((acc, current) => acc+ current, 0);
console.log(summa);

//Найти максимальный элемент в массиве:
//1.Без метода: найти максимальный элемент в массиве let numbers = [3, 7, 2, 9, 5]:

let arr = [3, 7, 2, 9, 5];
let maxNum = 0;
for(let i =0; i < arr.length; i++) {
  let currNum = arr[i];
  if (currNum > maxNum) {
    maxNum = currNum;
  }
} 
console.log(maxNum)

//или
let array = [3, 7, 2, 9, 5];
function MathMax(arr) {
  let max = arr[0];

  for(let i =0; i < arr.length; i++) {
  
  if (arr[i]> max) {
    max = arr[i];
  }
} 
  return max;
}
MathMax(array)
console.log(MathMax(array))

//2.С методом (Math.max + spread): (читаем что такое spread оно позволит в max(3, 7, 2, 9, 5) распаковать массив в таком в виде(в нужно в виде для max(3, 7, 2, 9, 5)))
let num2 =  [3, 7, 2, 9, 5];
let maxNum2 = Math.max(...num2);
console.log(maxNum2);


//Проверить, есть ли элемент в массиве:
//1.Без метода: заводим 2 переменные let fruits = ['apple', 'banana', 'orange']; и  let search = 'banana', если элемент в массиве существует, выводим в консоль текст "Найден элемент", в противном случае " Элемент не найден".
let fruits = ['apple', 'banana', 'orange'];
let search = 'banana';
let found = false; 

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === search) {
    found = true;
    break; 
  }
}

if (found) {
  console.log("Найден элемент");
} else {
  console.log("Элемент не найден");
}

// 2.С методом (includes) заводим 2 переменные let fruits = ['apple', 'banana', 'orange']; и let search = 'banana'если элемент в массиве существует, выводим в консоль текст "Найден элемент", в противном случае " Элемент не найден". 

let fruits2 = ['apple', 'banana', 'orange'];
let search2 = 'banana';

if (fruits2.includes(search2)) {
  console.log("Найден элемент");
} else {
  console.log("Элемент не найден");
}

//Перевернуть массив

// 1.Без метода: дан массив let arr = [1, 2, 3, 4, 5]; его необходимо перевернуть [5, 4, 3, 2, 1], перезаписав в новый массив

let arr2 = [1, 2, 3, 4, 5];
let newArr =[];
for (let i = arr2.length-1; i>= 0; i--) {
  newArr[newArr.length] = arr2[i]
} 
console.log(newArr)

//2.С методом (reverse):дан массив let arr = [1, 2, 3, 4, 5]; его необходимо перевернуть [5, 4, 3, 2, 1], перезаписав в новый массив:
let arr3 = [1, 2, 3, 4, 5];
arr3.reverse();
console.log(arr3)

//или
let arr4 = [1, 2, 3, 4, 5];
let reverseArr = arr4.slice().reverse();
console.log(arr4, reverseArr); 

// Уровень: Средний
//1. Посчитать количество определенного элемента в массиве без метода: дан массив let numbers = [1, 2, 3, 2, 4, 2, 5]; необходимо подсчитать какое количество элементов двойки(2) в массиве
let nums = [1, 2, 3, 2, 4, 2, 5];
let count = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 2) {
    count++
  } 
}console.log(count)


//2.С методом (filter + length):дан массив let numbers = [1, 2, 3, 2, 4, 2, 5]; необходимо подсчитать какое количество элементов двойки(2) в массиве:

let number = [1, 2, 3, 2, 4, 2, 5];
let numberTwo = number.filter(number => number === 2);
console.log(numberTwo.length);

//Найти среднее значение элементов массива:
//1.Без метода: дан массив let arr = [10, 20, 30, 40]; необходимо получить его среднеарифметическое  значение:

let arr5 =  [10, 20, 30, 40];
let total = 0;
for (let i = 0; i < arr5.length; i++) {
  total += arr5[i]
}  
console.log(total)
let average = total/arr5.length;
console.log(average);


//2.С методом (reduce): дан массив let arr = [10, 20, 30, 40]; необходимо получить его среднеарифметическое значение:
let arr6 = [10, 20, 30, 40];
let result = arr6.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
let average2 = result / arr6.length;
console.log(average2);

//Отфильтровать четные числа:
//1.Без метода:дан массив let arr = [1, 2, 3, 4, 5, 6]; необходимо отфильтровать его в новый массив только с четными числами.

let arr7 = [1, 2, 3, 4, 5, 6]; 
let even =[];
for (let i = 0; i < arr7.length; i++) {
  if(arr7[i] % 2 === 0) {
    even[even.length] = arr7[i]
  }
} 
console.log(even);

//2.С методом (filter):дан массив let arr = [1, 2, 3, 4, 5, 6]; необходимо отфильтровать его в новый массив только с четными числами.

let arr8 = [1, 2, 3, 4, 5, 6];
let even2 = arr8.filter(arr8 => arr8 % 2 === 0);
console.log(even2);

//Удвоить каждый элемент массива
//1.Без метода:дан массив let arr = [1, 2, 3]; необходимо создать новый массив и добавить туда текущий массив с удвоенными данными:

let anyNum = [1, 2, 3];
let doubleNum = [];

for (let i = 0; i < anyNum.length; i++) {
  doubleNum[doubleNum.length] = anyNum[i]*2;
}
console.log(doubleNum);

//2.С методом (map):дан массив let arr = [1, 2, 3]; необходимо создать новый массив и добавить туда текущий массив с удвоенными данными:

let anyNums = [1, 2, 3];
let doubleNums = anyNums.map(anyNums => anyNums * 2)
console.log(doubleNums);