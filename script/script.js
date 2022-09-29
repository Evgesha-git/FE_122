/**
 * Конструкторы для приложения
 * Note - одна заметка
 * NoteController - логика управления заметками
 * NoteUI - отвечает за графическое предствавление
 */

class Note {
    constructor(data) {
        if (data.title.length > 0) this._data = data;
    }

    edit(data) {
        Object.assign(this._data, data);
    }

    get data() {
        return this._data;
    }

    set data(data) {
        // Object.assign(this.#data, data);
        this._data = {
            ...this._data,
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

const note1 = new Note({ title: 'title 1', content: 'content 1' });

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

class NoteController {
    #notes;
    constructor() {
        this.#notes = [];
    }

    add(obj) {
        if (!obj.title) return;

        let note = new Note(obj);
        let id = this.getRandomId();
        console.log({ id });
        note.data = { id }; // {id: id}
        this.#notes.push(note);
        return this;
    }

    getRandomId() {
        let id = Math.floor(Math.random() * 1000000);
        if (this.#notes.length === 0) return id;

        let flag = this.#notes.some(note => note.data.id === id);
        if (flag) {
            return this.getRandomId();
        } else {
            return id;
        }
    }

    remove(id) {
        this.#notes = this.#notes.filter(note => note.data.id !== id);
        return this;
    }

    edit(id, data) {
        this.#notes.forEach(note => {
            if (note.data.id === id) {
                note.data = data;
            }
        });
        return this;
    }

    get notes() {
        return this.#notes;
    }

    get storage() {
        if (!localStorage.getItem('notes')) return false;

        if (!this.storageExpiration) {
            localStorage.removeItem('notes');
            return false;
        }

        let data = localStorage.getItem('notes');
        data = JSON.parse(data);
        return data;
    }

    set storage(data) {
        let dataJson = JSON.stringify(data);
        localStorage.setItem('notes', dataJson);
        this.storageExpiration = 10;
    }

    get storageExpiration() {
        let name = 'notes'
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches || false;
    }

    set storageExpiration(time) {
        let name = 'notes';
        let value = 'notes';
        let options = {
            path: '/',
            secure: true,
            'max-age': time
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
}

//getRandomId(id -> true) -> getRandomId(id -> true) -> getRandomId(id -> true) ...  -> getRandomId(id -> false)
//getRandomId(id -> true) <- getRandomId(id -> true) <- getRandomId(id -> true) ...  <- getRandomId(id -> false)

const notes1 = new NoteController();

class NoteUI extends NoteController {
    constructor(selector) {
        super();
        this.app = null;
        this.notesContainer = null;
        this.init(selector);
    }

    init(selector) {
        this.app = document.querySelector(selector);

        let formContainer = this.createElement('form');
        let titleInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder', 'Введите название заметки']
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
            this.storage = this.notes;
            titleInput.value = '';
            contentInput.value = '';
        });

        this.notesContainer = this.createElement('div', [
            ['class', 'notes']
        ]);

        this.app.append(formContainer, this.notesContainer);

        if (this.storage) {
            let data = this.storage;

            data.forEach(note => {
                Object.keys(note).forEach(key => this.add(note[key]));
            })

            this.render();
        }
    }

    render() {
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
                this.storage = this.notes;
            });

            let flag = true;

            edit.addEventListener('click', () => {
                if (flag) {
                    title.contentEditable = true;
                    content.contentEditable = true;
                    edit.innerHTML = 'Save';
                    flag = !flag; // true -> false
                } else {
                    title.contentEditable = false;
                    content.contentEditable = false;
                    edit.innerHTML = 'Edit';
                    flag = !flag;// false -> true
                    let data = {
                        title: title.innerText,
                        content: content.innerText,
                    }
                    this.edit(note.data.id, title.innerText, content.innerText);
                    this.storage = this.notes;
                    console.log(this.notes);
                }
            });

            noteElem.append(title, content, edit, remove);
            this.notesContainer.append(noteElem);
        });
    }

    edit(id, title, content){
        let data = {title, content};
        NoteController.prototype.edit.call(this, id, data);
        // super.edit(id, data);
    }

    createElement(name, attributes = [], content = '') {
        let elem = document.createElement(name);

        if (attributes.length > 0) {
            attributes.forEach(attr => elem.setAttribute(attr[0], attr[1]));
        }

        if (content) {
            elem.innerHTML = content;
        }
        return elem;
    }
}

new NoteUI('.note');


for (var i = 0; i < 10; i++){
    setTimeout(() => console.log(i), 0);
}

