import Note from "./note.js";

export default class NoteController {
    #notes;
    constructor() {
        this.#notes = [];
    }

    add(obj) {
        if (!obj.title) return;

        let note = new Note(obj);
        let id = this.getRandomId();
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
        if (!localStorage.getItem('notes') || !localStorage.getItem('notes').length) return false;

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
        this.storageExpiration = 100;
    }

    get storageExpiration() {
        let name = 'notes'
        let matches = document.cookie.replace(new RegExp(`(?:(?:^|.*;\s*)${name}\s*\=\s*([^;]*).*$)|^.*$`), "$1");
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

    async getApiData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data =  await response.json();
        data.forEach(note => {
            const {title, body: content} = note;
            this.add({title, content});
        });
    }
}