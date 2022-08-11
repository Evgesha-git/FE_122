// let a = prompt(),
//     count = 0,
//     sum = 0,
//     reverse = '';

// for (let i = 0; i < a.length; i++){
//     count++;
//     sum += Number(a[i]);
//     reverse = a[i] + reverse; // 1-я итерация: 1 + '', 2-я итерация: 2 + '1' => '21' 3-я итерация: 3 + '21' => '321'
// }

// for (let i = a.length - 1; i >= 0; i--){
//     count++;
//     sum += +a[i];
//     reverse += a[i];
// }

// length - последний индекс + 1

// console.log(`Число: ${a},
// Количество: ${count},
// Сумма: ${sum},
// Перевернутое число: ${reverse}`);

// let str = '-4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 -57',
//     min = Infinity,
//     max = -Infinity,
//     buffer = '';

// for (let i = 0; i < str.length; i++){
//     if(str[i] !== ''){
//         buffer += str[i];
//         if (str[i] !== ' ' && i !== str.length - 1) continue;
//     }
//     buffer = parseFloat(buffer);
//     if(buffer > max) max = buffer;
//     if(buffer < min) min = buffer;
//     buffer = '';
// }

// console.log(`max = ${max}
// min = ${min}`);

// let sum = 0,
//     avg = 0,
//     count = 0;

// for (;;){
//     let num = prompt('Введите число');

//     if (isNaN(num)){
//         alert('Вы ввели не число');
//         continue;
//     }

//     if (num === '' || num == 0) break;

//     sum += +num;
//     count++;
// }

// avg = sum / count;

// console.log(sum, avg);

// let i = 0;

// for (;i < 10;){
//     i++
// }

// console.log(i);

// let num = 50;
// let count = 0;

// while (num > 10){
//     count++;
//     num /= 2; // num = num / 2
// }

// console.log(count);

// let arr = ['string', 1, true, [1, 2, 3], count];

// console.table(arr);

let arr = [1, 2, 3];

console.log(arr.length);

console.log(arr[0]); // 1

arr[100] = 'lol';

console.log(arr);

console.log(arr.length); // 101

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push, pop, shift, unshift

console.log(arr1);

arr1.push(5);

console.log(arr1);

let el = arr1.pop();

console.log(arr1);
console.log(el);

arr1.unshift(0);

console.log(arr1);

let el2 = arr1.shift();

console.log(arr1);
console.log(el2);

//slice splice

let el3 = arr1.slice(2, 6); //безопасней, не изменяет массив

console.log(el3, arr1);

let el4 = arr1.splice(2, 6); // опаснее, изменяет массив

console.log(el4, arr1);

let index1 = arr1.indexOf(10); //первое взождение элемента в массив

let index2 = arr1.lastIndexOf(3); // последнее вхождение элемента в массив

//если элеиент не найден, то возвращают -1

console.log(index1, index2);


let str = 'hghdsfkghsdlfjgsdhgr';
let marker = 'g';

str = str.split(''); //преобразует строку в массив и в качестве параметра принимает строку-разделитель
console.log(str);
while (1){
    let i = str.indexOf(marker);
    if (i === -1) break;
    str.splice(i, 1);
}

str = str.join('-'); //преобразовать массив в строку

console.log(str);