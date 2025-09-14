// 1. Написание чистой функции. Задача: Напишите функцию addToCart принимает массив const cart = ['apple', 'banana', и] и товар item - addToCart(cart, 'orange'). Она должна возвращать новый массив, содержащий все элементы cart и новый item. Исходный массив cart не должен изменяться.

const cart = ['apple', 'banana'];

const addToCart = (cart, item = 'orange') => {
  const newArray = [];
  
  for (let i = 0; i < cart.length; i++) {
    newArray.push(cart[i]);
  }
  newArray.push(item);
  return newArray;
};

const newCart = addToCart(cart);

console.log(cart);    // ['apple', 'banana']
console.log(newCart); // ['apple', 'banana', 'orange']
console.log(addToCart(cart, 'peach'))//[ 'apple', 'banana', 'peach' ] 

//или?
// const addToCart = (cart, item = 'orange') => {
//   return [...cart, item]
// }

//2. Проблема поверхностного копирования.Задача: Дан объект user. const user = {name: 'Alice',profile: {settings: {theme: 'dark',notifications: true}}}; Создайте его глубокую копию userClone, так чтобы изменение userClone.profile.settings.theme не влияло на исходный объект user. userClone.profile.settings.theme = 'light'; console.log(user.profile.settings.theme);  Должно остаться 'dark'

const user = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'dark',
      notifications: true
    }
  }
};
//прочитала про этот способ копирования, но он имеет недостатки и не отвечает всем требованиям, например в отношении объекта user  он выполнит свою задачу, но JSON.stringify может обрабатывать только базовые объекты, массивы и примитивы. Любой другой тип может быть обработан непредсказуемым образом. Например, Dates преобразуются в string. Но Set просто преобразуется в {}. поэтому это не лучший способкопирования:
const userClone = JSON.parse(JSON.stringify(user));
console.log(userClone)

userClone.profile.settings.theme = 'light'; 

console.log(userClone);
console.log(user);

//глубокое копирование с помощью рекурсивной функции: (здесь обрабатываю только объект, а так можно дописать обработку любых типов данных для полного глубокого копирования любого объекта c любыми типами данных):
function deepClone(obj) {

  if (typeof obj === 'object' && obj !== null ) {
    const clone = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  }
  return obj;
}

const userClone2 = deepClone(user);
userClone2.profile.settings.theme = 'light';

console.log(user); 
console.log(userClone2); 

//современный способ глубокого копирования в js c  помощью метода structuredClone (но так же не копирует функции):

const userClone3 = structuredClone(user);
userClone3.profile.settings.theme = 'light';
console.log(userClone3);
console.log(user);

//3. Возврат по ссылке. Задача:Дан код. Какой будет вывод?Создает ли это потенциальную проблему? Можете написать текстом свою мысль прям комментарием в скрипте.Перепишите метод getLogs, чтобы избежать этой проблемы!

function getLogger() {
  const logs = [];

  return {
    addLog(message) {
      logs.push(message)
    },

    getLogs() {
      return logs;//получаем в итоге ссылку на массив logs, который внутри функции, влияя на данные этого массива? то есть нам по сути нужно получить копию? тогда напишем return logs.slice() к примеру или map() или через цикл перепишем массив; 
    }
  };
}

const logger = getLogger()
logger.addLog('session started');

const logsReference = logger.getLogs();
logsReference.push('User logget in');

console.log(logger.getLogs());// что будет здесь? => ['session started', 'User logget in'], получается метод меняет исходный массив внтури функции
//console.log(logsReference)=>['session started', 'User logged in']-должно быть так, а в console.log(logger.getLogs())=>['session started'] - оригинал не изменился,  если в методе getLogs() мы будем копировать массив а не ссылаться на исходный и не менять исходный logs. 


//4. Чистая функция, изменяющая вложенный объект.Задача:Напишите чистую функцию enableDarkTheme(user), которая принимает объект пользователя и возвращает его новую копию, в которой свойство user.profile.settings.theme установлено в 'dark'.Исходный объект должен остаться неизменным.

const user2 = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'light',
      notifications: true
    }
  }
};

function enableDarkTheme (obj) {

  if (typeof obj === 'object' && obj !== null) {
    const clone = structuredClone(obj)

    if (clone.profile && clone.profile.settings) {
    clone.profile.settings.theme = 'dark';
  }
    return clone;
  }  
}

const updatedUser = enableDarkTheme(user2);

console.log('копия:', updatedUser);
console.log("Оригинал:", user2);