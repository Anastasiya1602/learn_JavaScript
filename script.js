// Реализуйте алгоритм вычисления методов Math.flour, Math.ceil, Math.round, Math.pow

//1.Math.floor-округление вниз. Округляет аргумент до ближайшего меньшего целого.

function myMathFloor(x) {
    if (x % 1 === 0) return x;
    return x < 0 ? x - (1 + (x % 1)) : x - (x % 1);
}

//2.Math.ceil-округление вверх. Округляет аргумент до ближайшего большего целого.

function myMathCeil(x) {
  if (x % 1 === 0) return x;
  return x < 0 ? x -(x % 1) : x - (x % 1) + 1;
}  


//3.Метод Math.round() возвращает число, округлённое к ближайшему целому.

function myMathRound(x) {
    if (x % 1 === 0) return x;
    
    const remain = x % 1; //завела переменную куда записывается остаток от деления (вроде по английски остаток-remain)
    
    if (x > 0) {
        return remain >= 0.5 ? x - remain + 1 : x - remain;
    } else {
        
        return remain <= -0.5 ? x - remain - 1 : x - remain;
    }
}

//4.Метод Math.pow() возвращает основание, возведённое в степень показатель, то есть, значение выражения: основание в степени показатель.

function myMathPow (x, y) {
  return x ** y
}


console.log(myMathFloor(45.7), myMathFloor(4.3));//45, 4
console.log(myMathCeil(45.7), myMathCeil(4.3));//46,5
console.log(myMathRound(45.7), myMathRound(4.3));//46,4

console.log(myMathFloor(-77.5), myMathFloor(-4.3));//-78,-5
console.log(myMathCeil(-77.5), myMathCeil(-4.3));//-77,-4
console.log(myMathRound(-77.5), myMathRound(-4.3));//-78,-4

console.log(myMathPow(3, 6)) //729