function summer (a, b){
    if(typeof a === 'string') return
    if(typeof b === 'string') return
    return a + b;
}

function tasck7(num, s){
    let arr = [];
    for (let i = 1; i <= num; i++){
        let n = '';
        for (let j = 0; j < i; j++){
            if (s){
                n += s;
            }else{
                n += i;
            }
        }
        arr.push(n);
    }

    return arr;
}

function t5(num){
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function t6(arr){
    let arrReturned = [];

    for (let i = 0; i< arr.length; i++){
        if (t5(arr[i])) arrReturned.push(arr[i]); //push будет работать если в if true
    }

    return arrReturned;
}

function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();


// function fib(num){
//     return num <= 1 ? num : fib(num - 1) + fib(num - 2) 
// }

//Мемоизация

function memoiz(fn){
    let cache = {};

    return function(...arg){
        let n = arg[0];

        if (n in cache){
            return cache[n]
        }else{
            let rez = fn(n);
            cache[n] = rez;
            return rez;
        }
    }
}

const fib = memoiz(
    function(x){
        return x <= 1 ? x : fib(x - 1) + fib(x - 2) 
    }
)

// function fff(b, c, g, ...a){
//     return b, c, g, a
// }



function t12(name, surname, lastName, num){
    let title = 'Домашняя работа: "Функции';
    let subTitle = `Выполнил: студент гр. ${num}`;
    let nameText = `${name} ${surname} ${lastName}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subTitle.length > maxStr) maxStr = subTitle.length;
    if (nameText.length > maxStr) maxStr = nameText.length;
    
    title = makeString(title, maxStr);
    subTitle = makeString(subTitle, maxStr);
    nameText = makeString(nameText, maxStr);
    
    let ramka = '';

    for (let i = 0; i < maxStr + 4; i++){
        ramka += '*';
    }

    return (ramka + '\n' + title  + '\n' + subTitle  + '\n' + nameText  + '\n' + ramka);
}

function makeString(str, l){
    for (let i = str.length; i < l; i++){
        str += ' ';
    }

    str = '* ' + str + ' *';
    return str
}

// console.log(t12('Петр', 'Петрович', 'Петров', 'w4017'));

function t13(str){
    let point = str.lastIndexOf('.');
    if (point === str.length - 1 || point === str.length - 2 || point === 0) return 'Не почтовый адрес';

    let dog = str.lastIndexOf('@');
    if (dog !== str.indexOf('@')) return 'Не почтовый адрес';
    if (dog === str.length - 1 || dog === str.length - 2 || dog === 0 || dog < 3) return 'Не почтовый адрес';

    let defis = str.lastIndexOf('-');
    if (defis === str.length -1 || defis === 0) return 'Не почтовый адрес';

    let n = str.lastIndexOf('_');
    if (n === str.length -1 || n === 0) return 'Не почтовый адрес';

    let symbols = 'бвгджзйклмнпpстфxцчшщayоыэяюёиeъьБВГДЖЗЙКЛМНПРСТФХЦШЩАУОЫЭЯЮЁИЕЪЬ!\"\'#$%&()*+,/:;<=>?[\\]`^{|}~';
    let nums = '1234567890.';
    let nameSymbols = '!\"\'#$%&@()*+,-/:;<=>?[\\]^_`{|}~';

    for (let i = 0; i < str.length - 1; i++){
        if (str[i] === '.' && str[i + 1] === '.' ||
            str[i] === '.' && str[i + 1] === '@' ||
            str[i] === '.' && str[i + 1] === '-' ||
            str[i] === '.' && str[i + 1] === '_' ||

            str[i] === '@' && str[i + 1] === '.' ||
            str[i] === '@' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '_' ||
            str[i] === '@' && str[i + 1] === '-' ||

            str[i] === '-' && str[i + 1] === '-' ||
            str[i] === '-' && str[i + 1] === '@' ||
            str[i] === '-' && str[i + 1] === '_' ||
            str[i] === '-' && str[i + 1] === '.' ||

            str[i] === '_' && str[i + 1] === '_' ||
            str[i] === '_' && str[i + 1] === '@' ||
            str[i] === '_' && str[i + 1] === '-' ||
            str[i] === '_' && str[i + 1] === '.' ) return 'Не почтовый адрес';
            
            if(symbols.includes(str[i])) return 'Не почтовый адрес';
    }

    let postName = str.slice(0, dog);

    if (nums.includes(postName[0])) return 'Не почтовый адрес';

    for (let i = 0; i < postName.length; i++){
        if (nameSymbols.includes(postName[i])) return 'Не почтовый адрес';
    }

    let dom = str.slice(point + 1);
    let domName = str.slice(dog, point);

    if (dom.length < 2 || dom.length > 11) return 'Не почтовый адрес';
    
    for (let i = 0; i < dom.length; i++){
        if (nums.includes(dom[i])) return 'Не почтовый адрес';
    }

    if (domName.length < 2 || domName.length > 11) return 'Не почтовый адрес';


    return 'Почтовый адрес верен';
}

// console.log(t13('sds@sf.com'));

const f14 = () => {
    console.log('Hello world');
}

const f15 = (a, b) => /**return скрыт */ a + b;

const f16 = (a, b) => {
    return a + b;
}

const f17 = a => a ** 4

//Стрелочные функции нет своего контекста this, arguments, нельзя использовать в кучестве конструктора

console.log(this)

let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');

b1.addEventListener('click', function (){
    // console.log(this);
    const f1 = () => console.log(this);
    f1();
});

b2.addEventListener('click', () => {
    console.log(this);
});

function f18(a){
    console.log(arguments);
}

const f19 = () => {
    console.log(arguments);
}

function f20(){
    return () => console.log(arguments);
}

let arr = [1, 2, 3, 4, 5, 6];

let arr2 = arr.map(i => i * 2);

let arr3 = arr.map(function(i){
    return i * 2;
});

console.log(arr2);