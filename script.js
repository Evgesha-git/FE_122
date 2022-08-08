// 8

// let day = +prompt();

// if (day <= 10 && day >= 1){
//     document.write('первая декада');
// }else if(day <= 20 && day > 10){
//     document.write('Вторая декада');
// }else if(day <=31 && day > 20){
//     document.write('Третья декада');
// }else{
//     document.write('Введенный день не входит в диапазон значений');
// }

// day = +prompt('Введите день');

// let m = null,
//     mName = '';

// if (day >= 1 && day <= 31){
//     m = 1;
//     mName = 'Январь';
// }else if (day >= 32 && day <= 59){
//     m = 2;
//     mName = 'Февраль';
// }else{
//     m = 3;
//     mName = 'Все остальное';
// }

// document.write(mName);

// switch (m){
//     case 1:
//     case 2:
//         document.write('Зима')
//         break;
//     case 3:
//         document.write('Весна')
//         break;
//     default:
//         document.write('Все остальное');
// }

// let a = prompt();

// if(isNaN(a)){
//     alert('string');
// }else if(a){
//     alert('NaN')
// }else {
//     alert('null | undefined')
// }

let a = 20;
console.log(a);

if (1){
    let a = 30;
    console.log(a);
}

console.log(a);

var b = 10;
console.log(b);

if (1){
    var b = 20;
    console.log(b);
}

console.log(b);

var i = 0;

for (var i = 1; i < 20; i += 2){
    // console.log('for', i);
}

// console.log(i);

let c = 2;

console.log(c++); // Поствиксный сначала покажет, потом изменит (2), но после произойдет увелеичений на 1 (3)
console.log(++c); // Префиксный сначала изменит, потом покажет (4)

// c++ сначала отобразит текущее значение переменной "c" (2), а затем выполнит операцию "c = c + 1" 
// ++c сначала произведет операцию "c = c + 1", а затем отобразит значение переменной "c" (4)

// sup sub

console.log(--c); 
console.log(c--);
console.log(c);

// ++ - инкремент (+ 1)
// -- - декримент (- 1)

// let str = 'abcde';

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);


// str[2] = 'F';

// console.log(str);

// let flag = true;
// let count = 0;

// while (flag){
//     count += 2;
//     if (count > 30){
//         flag = !flag;
//     }
// }

// let sum = 0;

// while(1){
//     let num = +prompt();
//     if (isNaN(num)) break;
//     if (!num) break;

//     sum += num;
// }

// alert(sum)

// null => пусто

// |3423|4234| => undefined
// |klgf|43re| => undefined
// |3423|3432| => undefined
// |4233|dsff| => undefined
// |dgfd|343d| => undefined
// |    |    | => null

// NaN - всё то, что нельзя преобразовать в число (not a number)

// do{
//     console.log('Цикл do .. while всегда выполняется хотя бы один раз')
// }while(false)

let str = 'dfgdf gdfg  fdg fgddfg   dfgdf    hgfhf   sdfsd rew gdf';
let rez = '';
let s = '';

for (let i = 0; i < str.length; i++){
    s += str[i];
    if(str[i] === ' ' && str[i + 1] === ' '){
        s = '';
    }
    if (str[i] !== ' '){
        rez += s;
        //Вот тут будет условие для определения максимального и минимального числа
        s = '';
    }
}

console.log(rez);

let s1 = 'индо земля зашаталась под ногами-и вырос,';
let s2 = 'и заревел он голосом диким...';
let s3 = 'блеснула молния и ударил гром,';
let s4 = 'а так какое-то чудище, страшное и мохнатое,'
let s5 = 'как будто из-под земли, перед купцом:';
let s6 = 'Он подошёл и сорвал аленький цветочек.';
let s7 = 'зверь не зверь, человек не человек,';
let s8 = 'В ту же минуту, безо всяких туч,';

console.log(s6 + " " + s8 + " " + s3 + " " + s1 + " " + s5 + " " + s7 + " " + s2);

// let max = -Infinity,
//     min = Infinity;

// if (45 > max) max = 45;
// if (45 < min) min = 45;

// for of

// for in

let str1 = 'qwertyuio'; // q[0]w[1]e[2]r[3]t[4]y[5]u[6]i[7]o[8]
                        // value[key]

for (let key in str1){
    console.log(key);
}

for (let value of str1){
    console.log(value);
}

let str3 = ''

for (let k in str1){
    str3 += str1[k];
    if (str1[k] === 't') str3 += 'T' 
}

console.log(str3);

str4 = str1.replace('t', 'T');

console.log(str4)