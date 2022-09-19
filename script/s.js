// const div = document.querySelector('.red');
// const div2 = document.querySelector('.blue');
// const div3 = document.querySelector('.green');


// div.addEventListener('click', function (e) {
//     // e.stopPropagation();
//     alert(e.target.innerText);
// });

// div2.addEventListener('click', function (e) {
//     // e.stopPropagation();
//     alert(e.target.innerText);
// });

// div3.addEventListener('click', function (e) {
//     // e.stopPropagation();
//     alert(e.target.innerText);
// }, true);

// let arr = [1, 2, 3];
// let arr2 = arr;
// let arr3 = [...arr]; //... - спред оператор

// let obj = {
//     name: 'Alex',
// }

// obj = { ...obj, age: 23 };

// const ul = document.querySelector('ul');

// function f(a, b, ...arr) {
//     console.log(a);
//     console.log(b);
//     console.log(arr);
//     console.log(arguments);
// }

// let arr4 = ['Кастомизация', 'курсора', 'мыши', 'с', 'помощью', 'CSS'];

// let [kast, cursor, mouse, ...arr5] = arr4;

// console.log(kast);
// console.log(cursor);
// console.log(mouse);
// console.log(arr5);

// let obj1 = {
//     name: 'Alex',
//     age: 33,
//     getName: function () {
//         return this.name
//     }
// };

// const { getName, name: x, age: y } = obj1;

// console.log(getName());
// console.log(x);
// console.log(y);

// console.log(obj1.getName());
// console.log(obj1.name);
// console.log(obj1.age);

// const weather = {
//     coord: {
//         lon: 10.99,
//         lat: 44.34
//     },
//     weather: [
//         {
//             id: 501,
//             main: "Rain",
//             description: "moderate rain",
//             icon: "10d"
//         }
//     ],
//     base: "stations",
//     main: {
//         temp: 298.48,
//         feels_like: 298.74,
//         temp_min: 297.56,
//         temp_max: 300.05,
//         pressure: 1015,
//         humidity: 64,
//         sea_level: 1015,
//         grnd_level: 933
//     },
//     visibility: 10000,
//     wind: {
//         speed: 0.62,
//         deg: 349,
//         gust: 1.18
//     },
//     rain: {
//         "1h": 3.16
//     },
//     clouds: {
//         all: 100
//     },
//     dt: 1661870592,
//     sys: {
//         type: 2,
//         id: 2075663,
//         country: "IT",
//         sunrise: 1661834187,
//         sunset: 1661882248
//     },
//     timezone: 7200,
//     id: 3163858,
//     name: "Zocca",
//     cod: 200
// };

// console.log(weather.weather[0].id);

// const {weather:[
//     {
//         id,
//         icon: i
//     }
// ]} = weather;

// console.log(id, i);


function User(n, age){
    let name = n;
    this._age = age; //Ещё один способ сокрытия свойст и методов в объектах
    this.getName = function(){
        return name;
    };
    this.setName = function(n){
        name = n;
    };
}

function Student(name, age, cours, group){
    // User.call(this, name, age);
    User.apply(this, arguments);
    this.cours = cours;
    this.group = group;
}

const user = new User('Petr', 23);

const student = new Student('Jo', 21, 3, 3123);

function makeCounter(){//scope функции
    let count = 0;
    return function(){//scope функции
        return count++;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();


function _age (){ //Так делать нельзя

}