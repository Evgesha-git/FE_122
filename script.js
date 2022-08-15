// let arr = [12, false, 'Текст', 4, 2, -5, 0];
// let arrBuffer = [];

// while (arr.length){
//     let buf = arr.pop();
//     buf = buf.toString().split('').reverse().join('')
//     arrBuffer.push(buf);
// }

// while(arr.length){
//     arrBuffer.push(arr.pop())
// }

// arr = arr.reverse()

// console.log(arr);

// let arr = [5, 9, 21, , , 9, 78, , , , 6];
// let count = 0;

// for(let i = 0; i < arr.length; i++){
//     if(!arr[i]) count++;
// }

// console.log(count)

// let arr1 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
// let arr2 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];

// let indexArr1 = arr1.indexOf(0);
// let lastIndexArr1 = arr1.lastIndexOf(0);

// let indexArr2 = arr2.indexOf(0);
// let lastIndexArr2 = arr2.lastIndexOf(0);

// let summ1 = 0,
//     summ2 = 0;

// if (indexArr1 !== lastIndexArr1) {
//     let buffer = arr1.slice(indexArr1, lastIndexArr1);
//     while (buffer.length) {
//         summ1 += buffer.pop();
//     }
// }

// console.log(summ1);

// if (indexArr2 !== lastIndexArr2) {
//     let buffer = arr2.slice(indexArr2, lastIndexArr2);
//     while (buffer.length) {
//         summ2 += buffer.pop();
//     }
// }

// console.log(summ2);

// let h = prompt('Введите высоту треугольника');
// h = Number(h);
// let arr = []

// for (let i = 0; i < h; i++){
//     let str = ''; //Пустая строка
//     for (let j = 0; j < h - i; j++){
//         str += ' '; // пробельный символ
//     }
//     let p = ''; //Пустая строка
//     for (let k = 0; k < i * 2 - 1; k++){
//         p += '^'
//     }

//     arr.push(str + p + str);
// }

// for (let elem of arr){
//     console.log(elem);
// }

// for (let key in arr){
//     console.log(key)
//     console.log(arr[key]);
// }

// let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > -10 && arr[i] < -3){
//         console.log(arr[i]);
//     }
// }

// let arr = ['10', '20', '30', '50', '235', '3000'];
// let b = ['1', '2', '5'];

// for (let i = 0; i < arr.length; i++){
//     if(arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5){
//         console.log(arr[i]);
//     }
// }

// for (let i = 0; i < arr.length; i++){
//     if (b.includes(arr[i][0])){
//         console.log(arr[i]);
//     }
// }

// let c = arr.concat(b);

// console.log(arr.at(-1));

// console.log(arr[arr.length - 1]);

// let arr = [5, 9, 21, , , 9, 78, , , , 6]

// let b = arr.filter(function(elemArr, index, a){
//     console.log(a);
//     console.log(index);
//     if (elemArr){
//         return elemArr;
//     }
// });

// console.log(b);

// for (let i = 0; i < arr.length; i++){
//     if(arr[i]){
//         b.push(arr[i]);
//     }
// }

// map, foreEch, find, filter, reduce

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];


// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//         if (i == j){
//             arr[i][j] = 0;
//         }
//         if (j == (arr.length - 1) - i){
//             arr[i][j] = 0;
//         }
//     }
// }

// console.log(arr);

// let arr = {
//     a: [1, 2, 3],
//     b: [3, 4, 5],
//     c: [6, 7, 8],
// };

// console.log(arr.b);

// for (let key in arr) {
//     console.log(key)
// }

// let arr2 = {
//     number: 5,
//     string: 'string',
//     boolean: true,
//     array: [1, 2, 3],
//     onj: {
//         number: 5,
//         string: 'string',
//         boolean: true,
//         array: [1, 2, 3],
//     }
// };

// let arr = [
//     {
//       userId: 1,
//       id: 1,
//       title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//       userId: 2,
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
// ]

// for (let i = 0; i < arr.length; i++){
//     if(arr[i].userId === 2){
//         console.log(arr[i].body)
//     }
// }

//Функция - подпрограмма

function f(){ //декларативная функция
    console.log("Hello World");
    console.log(b);
}

// f();

let num1 = 34,
    num2 = 54;

let a = f2(num1, num2);

function f2(a, b){ // a, b - параметры функции 
    console.log(a);
    console.log(b);
    return a + b;
}


const f3 = function(){ //функциональное выражение
    console.log('Функционально выражение')
}

f3();

var b = 23;

const f4 = function(){
    var a = 10;
    function f5(){
        console.log(a)
    }
    f5();
}

console.log(a);

f4()

f();

/**
 * let b = 45
 * js пытается найти переменную в глобальной облатси видимости
 * function f(){
 * js пытается найти объявление переменной в области выше уровнем
 *  function f1(){
 *      js пытается найти объявление переменной в области выше уровнем
 *      function f2(){
 *          b += 5 - js не нашел объявление переменной в текущей облати видимости (в тукцщей функции)
 *      } 
 *      f2()
 *  }
 * f1()
 * }
 * f()
 */

function f6(arg){
    // arg = arg || 10;
    arg = arg ?? 10;

    console.log(arg);
}

function f7() {
    return 'This is f7'
}