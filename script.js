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


// Уровень: Сложный (Разделений не будет на БЕЗ и С методов, делаем как сможете)
// 1. Объединить два массива без дубликатов.
//Без метода:Дан массив let arr1 = [1, 2, 3] и let arr2 = [2, 3, 4].Необходимо объединить без дубликатов.

let anyArray1 = [1, 2, 3];
let anyArray2 = [2, 3, 4];

let newArr2 = [];
let mergeArr = [];

for (let i = 0; i < anyArray1.length; i++) {
  newArr2.push(anyArray1[i]); 
}
for (let j = 0; j < anyArray2.length; j++) {
  newArr2.push(anyArray2[j]);
}
// console.log("Объединенный массив:", newArr2);

for (let k = 0; k < newArr2.length; k++) {
  let isDuplicate = false;
  
  for (let l = 0; l < mergeArr.length; l++) {
    if (mergeArr[l] === newArr2[k]) {
      isDuplicate = true;
      break; 
    }
  }  
  
  if (!isDuplicate) {
    mergeArr.push(newArr2[k]);
  }
}
console.log("Массив без дубликатов:", mergeArr);

//или
let anyArray3 = [1, 2, 3];
let anyArray4 = [2, 3, 4];

let mergeArr2 = [];

for (let i = 0; i < anyArray3.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < mergeArr2.length; j++) {
    if (mergeArr2[j] === anyArray3[i]) {
      isDuplicate = true;
      break;
    }
  }
  
  if (!isDuplicate) {
    mergeArr2.push(anyArray3[i]);
  }
}

for (let i = 0; i < anyArray4.length; i++) {
  let isDuplicate = false;
  
  for (let j = 0; j < mergeArr2.length; j++) {
    if (mergeArr2[j] === anyArray4[i]) {
      isDuplicate = true;
      break;
    }
  }
  
  if (!isDuplicate) {
    mergeArr2.push(anyArray4[i]);
  }
}

console.log("Результат:", mergeArr2); 

//или
let anyArray5 = [1, 2, 3];
let anyArray6 = [2, 3, 4];
let result2 = [];

for (let i = 0; i < anyArray5.length; i++) {
    if (!result2.includes(anyArray5[i])) {
        result2.push(anyArray5[i]);
    }
}
for (let i = 0; i < anyArray6.length; i++) {
    if (!result2.includes(anyArray6[i])) {
        result2.push(anyArray6[i]);
    }
}
console.log(result2); 


//или
let a = [1, 2, 3];
let b = [2, 3, 4];
let result3 = [];
let c = a.concat(b); 

for (let i = 0; i < c.length; i++) {
    if (result3.indexOf(c[i]) === -1) { 
        result3.push(c[i]);
    }
}
console.log(result3); 

//С методом (Set + spread):Дан массив let arr1 = [1, 2, 3] и let arr2 = [2, 3, 4]. Необходимо объединить без дубликатов. 

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

const newArray = [...new Set([...array1, ...array2])];
console.log(newArray); 

//2. Найти все уникальные элементы в массиве
//Без метода: Дан массив let numbers = [1, 2, 2, 3, 4, 4, 5].Необходимо в новую переменную let unique = [] собрать только уникальные элементы массива numbers

let nums2 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < nums2.length; i++) {
  let count = 0;

  for (let j = 0; j < nums2.length; j++) {
    if (nums2[j] === nums2[i]) {
      count++;
    }
  }

  if (count === 1) {
    unique.push(nums2[i]);
  }
}
console.log(unique); // [1, 3, 5]

//С методом (filter + indexOf): Дан массив let numbers = [1, 2, 2, 3, 4, 4, 5].Необходимо в новую переменную let unique = [] собрать только уникальные элементы массива numbers
let num3 =  [1, 2, 2, 3, 4, 4, 5];
let unique2 = [];
unique2 = num3.filter((num, i, arr) => {
  return arr.indexOf(num) === i
})
console.log(unique2);

//3. Сортировка пузырьком (Bubble Sort) (Самое сложное задание из текущего списка, для выполнения необходимо изучить данный алгоритм который так и называется Пузырьковая сортировка).
// Дан массив let numbers = [5, 3, 8, 1, 2]; Необходимо его отфильтровать в порядке возрастания. В результате мы должны получить [1, 2, 3, 5, 8]
let anyNumbers = [5, 3, 8, 1, 2];
for (let i = 0; i < anyNumbers.length - 1; i ++) {
  for (let j = 0; j < anyNumbers.length - 1 -i; j ++) {
    if (anyNumbers[j] > anyNumbers[j+1]) {
      let sort = anyNumbers[j]
      anyNumbers[j] = anyNumbers[j+1]
      anyNumbers[j+1]=sort
    }
  }
} 
console.log(anyNumbers);
//P.S не очень поняла что я сделала, использовала каркас, немного сложно понять что здесь проихсодит