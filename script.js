// в начале строки отсупы в виде табуляции
// let a = 23;

// if (true){
//     if (true){

//     }    
// }

// В конце строки не должно быть пробелов

// let a = 'Очень нужное значение!!!'

// До 5 уровней вложенности
// {
//     {
//         {
//             {
//                 {
                    //Далее вложенности делать не стоит
//                 }
//             }
//         }
//     }
// }

// Длинна строки не более 80 символов

// Выравнивание аргументов при переносе выполнять по первому аргменту

// let a = 1,
//     b =2,
//     c = 3;

// if/else/for/while/try многострочные и с фигурными скобками

// унарные операторы отделяются пробелами с двух сторон + - / * = % ^ |

// : после имени должны отделятся одним пробелом "условие ? true : false

// Не использовать пробелы в пустых конструкциях по типу [] {} fn()

// 1 Пробел между аргументом и выражением

// let a = 1;

// let title = document.querySelector('h1');
// title.style.color = 'green';

// var a = 'string';

// var a = 43;

// let b = 1;

// let b = 'string';

// const c = 23;

let str = "String";
let num = 23; // number - целые числе так и числа с плавающей точкой
let bool = true || false;
let u = undefined; // только созданная переменная и вней хранится мусор
let n = null; // ничего
let nan = NaN; //Больше относится к числам, не число, это не относится к типу данных
let arr = []; //Массивы
let obj = {}; //Объекты


console.log(num + str); //Не явного приведения типов

console.log(typeof str);

let a = '234.43';

console.log(Number(a)); //1 Способ

console.log(parseInt(a)); //2 Способ

console.log(parseFloat(a)); //3 Способ

console.log(+ a); //4 Способ


let b = 432;

console.log(b);

b = 'String';

console.log(b);


// let a = 'второстепенное значение';

console.log(a)

//Первый способ
/*
let a = 5;

// выполняем задание
//его успешно выполнили

a = 10;
*/

//Второй способ

let global = 'Глобальная переменная';

{
    let a = 5;
    console.log('Шестой задание', a);
}

{
    let a = 10;
    console.log('Восьмое задание', a);
}

{
    let c = 'Видна только в блоке';
    console.log(c);
    {
        console.log('Видна внутри вложенного блока', c);
        console.log('Глобальная переменная тут', global)
    }
}

// console.log(c);

var d = 34;

console.log(d);

{
    var d = 'Hello world';
    console.log(d);
}

console.log(d);

//Блочная область видимости у операторов if/for/while
let e = 'fgdfg'

console.log(isNaN(e)); //true

let f = '43242';

console.log(isNaN(f));  //false

let g = 56 / 0;

console.log(isFinite(g));

// 0, '', false, null, undefined == false

console.log(0 || 1); // 1
console.log(1 || 0 || 323); // 1 

console.log(0 && 1); // 0
console.log(1 && 0); // 0

// Для оператора ?? ложными не являются 0 и ''

console.log(0 ?? 1); // 0
console.log(1 ?? 0); // 1
console.log(null ?? 1); // 1
console.log(undefined ?? 1); // 1
console.log('' ?? 1); // ''
console.log(1 ?? null); // 1

// let vvod = prompt('Введите значение') ?? 'Пользователь не ввел ничего';

// console.log(vvod)

console.log(('5' && false) || true + 10); // true => 1

console.log(html);