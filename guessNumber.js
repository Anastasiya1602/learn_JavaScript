// const secretNumber = Math.floor(Math.random() * 100) + 1;
// let i = 0;

// while(true) {
//   i++
//   let getNumber = parseInt(prompt('введите число от 1 до 100'));
//   if (getNumber && !isNaN(getNumber) && getNumber < secretNumber) {
//   alert('загаданное число больше');
//   continue;
//   } else if (getNumber && !isNaN(getNumber) && getNumber > secretNumber) {
//     alert('загаданное число меньше');
//     continue;
//   } else if (isNaN(getNumber)){
//     alert ('введено не число, введите число от 1 до 100!')
//     continue;
//   } else if (!getNumber){
//     alert('вы прервали игру')
//     break
//   } else {
//     alert('вы угадали число');
//     console.log(`загаданное число: ${secretNumber}, введенное вами число: ${getNumber}, количество попыток ${i}`)
//     break;
//     }
// }