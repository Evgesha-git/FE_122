let date = '2025-12-31';

// let dRez = date.replace(/-/g, '/');
// console.log(dRez);
let reg = /(\d{4})(-)(\d{2})(-)(\d{2})/g;

let dRez2 = date.replace(reg, '$5/$3/$1');


console.log(dRez2);


let date2 = new Date();

let day = date2.getDate();
let mont = date2.getMonth() + 1;
let year = date2.getFullYear();

let sec = date2.getSeconds();
let min = date2.getMinutes();
let hour = date2.getHours();

function fD(num){
    if (num >= 10) return num;
    return '0' + num;
}

console.log(`${fD(hour)}:${fD(min)}:${fD(sec)} ${fD(day)}.${fD(mont)}.${year}`);

function testMail(mail){
    let regExp = /^[a-zA-Z0-9-_\.]{2,}@[a-z0-9\.]{2,11}\.[a-z]{2,11}$/gm;
    return regExp.test(mail);
}


function getUrl(url){
    regExp = /(https?:\/\/[0-9]?[a-z][a-z0-9]+(?:\.?[a-z0-9]+\.[a-z]{2,11}))(\/.+\/)?(\?[^#]+)?(#\w+)?/gm;
    let groups = regExp.exec(url);
    console.log(groups);
    let rez = [];

    for (let i = 1; i < groups.length; i++){
        rez.push(groups[i]);
    }
    return rez;
}

// let a = 1;

// {
//     a = 2;
// }

// {
//     let a = 3;
// }

// if (true) {
//     a = 4;
// }

/**
 * if else
 * for, while
 * function
 */

// console.log(a);

let a = 1;

// function f1(){
//     let a = 2

//     function f2(){
//         a = 3;
//     }

//     f2();

//     console.log(a)
// }

// f1();

// console.log(a);

function f1(){
    let a = 1;

    return function(){
        a++;
        console.log(a)
    }
}

// f1()/*Возвращенная функция*/();

let resultF1 = f1();
let resultF12 = f1();

let arr = [1, 2, 3, 4];


function f2(arr, i = 0) {
    console.log(arr[i]);
    if(i < arr.length - 1) f2(arr, ++i)
    return;
}

