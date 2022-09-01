window.addEventListener('DOMContentLoaded', function (){
    const toDoList = function (){
        const container = document.querySelector('.todo-container');
        const form = container.querySelector('form');
        const div = container.querySelector('.todo');
        const save = container.querySelector('.save');
        const clear = container.querySelector('.clear');
        const ul = document.createElement('ul');
        ul.classList.add('to-do-list');

        form.addEventListener('submit', function(e){
            e.preventDefault();
            const input = form.querySelector('input');

            if (!input) return;
            if (!input.value) return;

            const li = addToDo(input.value)

            ul.append(li);
            div.append(ul);
            input.value = '';
        });

        const addToDo = function (text){
            let li = document.createElement('li');
            li.classList.add('item');
            let textElem = document.createElement('span');
            textElem.classList.add('text');
            textElem.innerText = text;
            let btn = document.createElement('button');
            btn.classList.add('remove-item');
            btn.innerText = 'Remove';
            let chkBox = document.createElement('input');
            chkBox.setAttribute('type', 'checkbox');

            li.append(chkBox, textElem, btn);
            return li;
        }

        const saveToDo = function(){
            localStorage.setItem('todo', ul.innerHTML);
        }

        save.addEventListener('click', saveToDo);

        if (localStorage.getItem('todo')){
            ul.innerHTML = localStorage.getItem('todo');
            div.append(ul);
        }

        clear.addEventListener('click', function(){
            localStorage.removeItem('todo');
            ul.innerHTML = '';
        });

        ul.addEventListener('click', function(event){
            if (event.target.tagName === 'INPUT'){
                event.target.nextElementSibling.classList.toggle('complite');
            }
            if (event.target.classList.contains('remove-item')){
                event.target.parentElement.remove();
            }
        });
    }

    toDoList();
})