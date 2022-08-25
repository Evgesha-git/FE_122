// let arr = ['data1', 'data2', 'data3', 'data4', 'data5'];

// // arr.name = 'Petr';

// console.log(arr);

// const lamp = {
//     power: '60W',
//     v: 230,
// };

// function Contact(data){
//     this.data = data;

//     this.edit = function(data){
//         Object.assign(this.data, data); //this.data {fio, age, tel, email, /*mail */}, data {mail}
//     }
// }

// function Contacts(){
//     this.contacts = [];
//     this.count = 0;

//     this.add = function(data){ // {fio: 'Петр петров Петрович', age: 99, tel: "+3752255678990", email: ""}
//         const {fio, age, tel, email} = data
//         if (!fio) return; // fio === '' => false, fio === nul => false, fio === undefined => false
//         if (age < 18 || age > 120) return;
//         let contact = new Contact(data);
//         let id = this.count++;
//         contact.data.id = id;
//         this.contacts.push(contact);
//     }

//     this.show = function(){
//         for (let i = 0; i < this.contacts.length; i++){
//             console.log("--------------------");
//             for (let key in this.contacts[i].data){
//                 console.log(`${key}: ${this.contacts[i].data[key]}`);
//             }
//         }
//     }

//     this.remove = function(id){
//         this.contacts = this.contacts.filter(contact => contact.data.id !== id);
//     }

//     this.edit = function(id, data){
//         let findContact = this.contacts.find(contact => contact.data.id === id);
//         findContact.edit(data);
//     }

//     this.getContacts = function(){
//         return this.contacts;
//     }
// }

// const contacts = new Contacts()

// let [, data2, data3, ] = arr;

// // console.log(data1);
// console.log(data2);
// console.log(data3);
// // console.log(data5);

// let obj = {
//     name: "Alex",
//     age: 23,
//     student: {
//         bool: true,
//         cours: 5,
//     }
// }

// let {age: a, name: b, student: {bool: c}} = obj;

// console.log(b);
// console.log(a);
// console.log(c);

let child_1 = document.getElementById('child_1');

console.log(child_1);

// child_1.innerText = 'String';


//Навигация по дочерним элементам
console.log(child_1.firstElementChild);
console.log(child_1.lastElementChild);
console.log(child_1.children);

//Навигация по соседним элементам
console.log(child_1.nextElementSibling);
console.log(child_1.previousElementSibling);


//Обращение к родительскому элементу
console.log(child_1.parentElement)

child_1.style.color = 'green';
child_1.style.fontSize = '36px';


//Поиск элементов:
/**
 * getElementById - поиск по id элемента
 * getElementsByTagName - по имини тега
 * getElementsByClassName - по классу
 * getElementsByName - по свойству name
 * 
 * querySelector - поиск одного элемента по CSS селектору
 * queryselectorAll - поиск элементов по CSS селектору
 */

let elems = document.getElementsByClassName('child');
let elems2 = document.querySelectorAll('.child');

console.log(elems);
console.log(elems2);
