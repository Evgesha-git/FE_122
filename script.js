function f1(selector) {
    let elem = document.querySelectorAll(selector);

    console.log(elem);

    const f2 = (elements) => {
        [...elements].forEach((el, i) => {
            if (i % 2 !== 0) el.style.color = 'green';
        })
    }

    elem.forEach(el => {
        let child = el.children;
        for (let i = 0; i < child.length; i++) {
            if (child.tagName === 'UL'){
                console.log(child.children)
                f2(child.children);
            }
        }
    });
}

f1('.container');

let el = document.getElementById('id_1');

el.style.fontSize = '40px';

let el2 = el.nextElementSibling;

el2.style.color = 'red';
el2.style.fontSize = '30px';


let div = el.closest('.container');

console.log(div);

const wrapper = div.querySelector('.wrapper');

let text = wrapper.innerHTML //getter - позволяе получить данные

console.log(text);

wrapper.innerHTML = `<ul class="spisok"><li><a href="#hash">Page1</a></li>
<li><a href="#hash1">Page2</a></li>
<li><a href="#hash2">Page3</a></li>
<li><a href="#hash3">Page4</a></li>
<li><a href="#hash4">Page5</a>
    <ul>
        <li>list item1</li>
        <li class="list">list item2</li>  
        <li class="link link3">list item3</li>
        <li class="link link4">list item4</li>
        <li id="listItem5">list item5</li>
    </ul>
</li>
<li><a href="#hash5">Page6</a></li>
</ul>`; //setter - позволяет задать данные

// innerText - работает аналогично innerHTML

const a = wrapper.querySelector('a[href="#hash4"]');

function color(){
    return Math.floor(Math.random() * 255); // Meth.rangom() выдает случайное число от 0 до 1
}

a.style.color = `rgb(${color()}, ${color()}, ${color()})`;

let aElement = document.createElement('a');
aElement.setAttribute('href', '#');
aElement.classList.add('a'); //add, toggle, remove
aElement.innerText = 'Ссылк в никуда';

wrapper.append(aElement);

function createElement(el, atributes, content){ // atributes - массив двумерных массивов [[atr1, cont], [atr2, cont2]...]
    let element = document.createElement(el);
    atributes.forEach(function(atr){
        element.setAttribute(atr[0], atr[1]);
    });
    element.innerHTML = content;
    return element;
}

let div2 = createElement('div', [['class', 'created-div'], ['title', 'Много некоторого текста'], ['id', 'id_3']], 'контентище');
let div3 = createElement('div', [['class', 'created-div'], ['title', 'Много некоторого текста'], ['id', 'id_3']], 'контентище 2');
let div4 = createElement('div', [['class', 'created-div'], ['title', 'Много некоторого текста'], ['id', 'id_3']], 'контентище 3');
let div5 = createElement('div', [['class', 'created-div'], ['title', 'Много некоторого текста'], ['id', 'id_3']], 'контентище 4');

console.log(div2);

div.appendChild(div2, div3); //Тлько один элемент будет выброшен на страницу

div.append(div3, div4, div5) //Поместив все элементы на страницу

div.insertBefore(div3, wrapper)//wrapper - перед ним будет размещен вставляемый элемент, но если вместо wrapper-а поставить null то сработает как appendChild
