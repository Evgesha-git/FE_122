/**
 * Конструкторы для приложения
 * Note - одна заметка
 * NoteController - логика управления заметками
 * NoteUI - отвечает за графическое предствавление
 */

class Note{
    #data;
    constructor(data){
        if (data.title.length > 0) this.#data = data;
    }

    edit(data){
        Object.assign(this.#data, data);
    }

    get data(){
        return this.#data;
    }

    set data(data){
        // Object.assign(this.#data, data);
        this.#data = {
            ...this.#data,
            ...data,
        }
    }
}

let data = {
    title: 'title',
    content: 'content'
}

let note = {
    data: { //this.data
        title: 'title',
        content: 'content'
    }
}

const note1 = new Note({title: 'title 1', content: 'content 1'});

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// let arr3 = [...arr1]; //[] - создали,[] <- 1, <- 2, <-3

// let o1 = {
//     name: 'alex',
//     age: 11
// };

// let o2 = {
//     ...o1,
//     surname: 'Petrov',
// }

class NoteController{
    #notes;
    constructor(){
        this.#notes = [];
    }

    add(obj){
        if (!obj.title) return;

        let note = new Note(obj);
        let id = this.getRandomId();
        console.log({id});
        note.data = {id}; // {id: id}
        this.#notes.push(note);
        return this;
    }

    getRandomId(){
        let id = Math.floor(Math.random() * 1000000);
        if (this.#notes.length === 0) return id;
        
        let flag = this.#notes.some(note => note.data.id === id);
        if (flag){
            return this.getRandomId();
        }else{
            return id;
        }
    }

    remove(id){
        this.#notes = this.#notes.filter(note => note.data.id !== id);
        return this;
    }

    edit(id, data){
        this.#notes.forEach(note => {
            if (note.data.id === id){
                note.data = data;
            }
        });
        return this;
    }

    get notes(){
        return this.#notes;
    }
}

//getRandomId(id -> true) -> getRandomId(id -> true) -> getRandomId(id -> true) ...  -> getRandomId(id -> false)
//getRandomId(id -> true) <- getRandomId(id -> true) <- getRandomId(id -> true) ...  <- getRandomId(id -> false)

const notes1 = new NoteController();

class NoteUI extends NoteController{
    constructor(selector){
        super();
        this.app = null;
        this.notesContainer = null;
        this.init(selector);
    }

    init(selector){
        this.app = document.querySelector(selector);

        let formContainer = this.createElement('form');
        let titleInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder','Введите название заметки']
        ]);
        let contentInput = this.createElement('textarea', [
            ['placeholder', 'Ваша заметка']
        ]);
        let addButton = this.createElement('button', [
            ['type', 'submit']
        ], 'Добавить заметку');
        formContainer.append(titleInput, contentInput, addButton);
        formContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            let data = {
                title: titleInput.value,
                content: contentInput.value,
            };
            this.add(data);
            this.render();
            titleInput.value = '';
            contentInput.value = '';
        });

        this.notesContainer = this.createElement('div', [
            ['class', 'notes']
        ]);

        this.app.append(formContainer, this.notesContainer);
    }

    render(){
        this.notesContainer.innerHTML = '';
        this.notes.forEach(note => {
            let noteElem = this.createElement('div', [
                ['class', 'note']
            ]);

            let title = this.createElement('h2', [
                ['class', 'title']
            ], note.data.title);
            let content = this.createElement('p', [
                ['class', 'content']
            ], note.data.content);
            let edit = this.createElement('button', [], 'Edit');
            let remove = this.createElement('button', [], 'Remove');

            remove.addEventListener('click', () => {
                this.remove(note.data.id);
                this.render();
            });

            let flag = true;

            edit.addEventListener('click', () => {
                if (flag){
                    title.contentEditable = true;
                    content.contentEditable = true;
                    edit.innerHTML = 'Save';
                    flag = !flag; // true -> false
                }else{
                    title.contentEditable = false;
                    content.contentEditable = false;
                    edit.innerHTML = 'Edit';
                    flag = !flag;// false -> true
                    let data = {
                        title: title.innerText,
                        content: content.innerText,
                    }
                    this.edit(note.data.id, data);
                    console.log(this.notes);
                }
            });

            noteElem.append(title, content, edit, remove);
            this.notesContainer.append(noteElem);
        });
    }

    createElement(name, attributes = [], content = ''){
        let elem = document.createElement(name);

        if (attributes.length > 0){
            attributes.forEach(attr => elem.setAttribute(attr[0], attr[1]));
        }

        if (content){
            elem.innerHTML = content;
        }
        return elem;
    }
}

new NoteUI('.note');