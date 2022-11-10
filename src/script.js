let num = 1;
let str = 'string';
let dol = true;
let n = null;
let u = undefined;
let a = [3, '4'];
let b = ['f', 5];
let arrStr = ['1', '2'];
let arr2Str = ['a', 'b'];
let obj = {
    name: 'Alex',
    age: 22,
};
let arr3 = ['a', 'b', 'c'];
let f = null;
let div = document.querySelector('div');
div === null || div === void 0 ? void 0 : div.classList.add('f');
function f1(a, b) {
    return a + b;
}
function f2(a) {
    return a;
}
const f3 = (a, b) => {
    return a + b;
};
let arr4 = [23, 'a'];
var Season;
(function (Season) {
    Season["Winter"] = "\u0417\u0438\u043C\u0430";
    Season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer"] = "\u041B\u0435\u0442\u043E";
    Season["Autum"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
let current3 = Season.Spring;
console.log(current3);
class User {
    constructor(name, age) {
        this.f = 'Строка только для чтения';
        this.name = name;
        this.age = age;
    }
}
let user2 = new User('Jho', 32);
console.log(user2);
class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
class Student extends User3 {
    constructor(name, age, group, cours) {
        super(name, age);
        this.group = group;
        this.cours = cours;
    }
}
let student = new Student("Alex", 19, 3, 1);
console.log(student.getAge());
