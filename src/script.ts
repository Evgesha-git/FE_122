let num: number = 1;
let str: string = 'string';
let dol: boolean = true;
let n: null = null;
let u: undefined = undefined;
let a: any = [3, '4'];
let b = ['f', 5];

let arrStr: string[] = ['1', '2'];
let arr2Str: Array<String> = ['a', 'b'];

let obj: object = {
    name: 'Alex',
    age: 22,
};

interface User {
    name: string,
    age: number,
    growth?: number,
}

// let user: User = {
//     name: "Petr",
//     age: 23,
// }

type myType = string[];

let arr3: myType = ['a', 'b', 'c'];

type user = {
    name: string,
    age: number,
}

let f: string | number | null = null;

let div: HTMLDivElement | null = document.querySelector('div');

div?.classList.add('f');

function f1 (a: number, b: number): number{ // void - вункция ничего не возвращает
    return a + b;
}

function f2 (a: string): any{
    return a;
}

const f3 = (a: number, b: string): string => {
    return a + b;
}

let arr4: [number, string, string?] = [23, 'a'];

enum Season {
    Winter = 'Зима',
    Spring = 'Весна',
    Summer = 'Лето',
    Autum = 'Осень'
}

// let current: string = Season[1];

// console.log(current);

// let current2: number = Season.Summer;

// console.log(current2);

let current3: string = Season.Spring;

console.log(current3);

class User{
    name: string;
    age!: number;
    readonly f: string = 'Строка только для чтения';

    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // err(){
    //     this.f = 'error';
    // }
}

let user2 = new User('Jho', 32);
// user2.f = 'error';

console.log(user2);

// class Point {
//     constructor(x: number, y: number);
//     constructor(s: string);
//     constructor(xs: any, y?: number);
    
// }

// class A {
//     k = 4
// }

// class B extends A{
//     constructor(){
//         super()
//         console.log(this.k);
//     }
// }

// class Point2{
//     x = 10;
//     y = 5;

//     scale(n: number): void{
//         this.x *= n;
//         this.y *= n;
//     }
// }

interface Point {
    x: number,
    y: number,
    scale: (n: number) => void
}

class Point2 implements Point{
    x: number;
    y: number;

    constructor (x: number, y: number){
        this.x = x;
        this.y = y;
    }

    scale (n: number): void{
        this.x *= n;
        this.y *= n;
    }
}

class User3{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    private getName (): string{
        return this.name;
    }

    public getAge(): number{
        return this.age;
    }
}

class Student extends User3{
    group: number;
    cours: number;
    constructor(name: string, age: number, group: number, cours: number){
        super(name, age);
        this.group = group;
        this.cours = cours;
    }
}

let student = new Student("Alex", 19, 3, 1);

console.log(student.getAge());
// console.log(student.name); //Error

