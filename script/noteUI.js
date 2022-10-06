import NoteController from "./noteController.js";
// import { getApiData } from "./apiData.js";
import { createElement } from "./createElement.js";

class NoteUI extends NoteController {
    constructor(selector) {
        super();
        this.app = null;
        this.notesContainer = null;
        this.init(selector);
    }

    async init(selector) {
        this.app = document.querySelector(selector);

        let formContainer = createElement('form');
        let titleInput = createElement('input', [
            ['type', 'text'],
            ['placeholder', 'Введите название заметки']
        ]);
        let contentInput = createElement('textarea', [
            ['placeholder', 'Ваша заметка']
        ]);
        let addButton = createElement('button', [
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

        this.notesContainer = createElement('div', [
            ['class', 'notes']
        ]);

        this.app.append(formContainer, this.notesContainer);

        if (this.storage) {
            let data = this.storage;

            data.forEach(note => {
                Object.keys(note).forEach(key => this.add(note[key]));
            });

            this.render();
        } else {
            // await this.getApiData();
            // const data = await getApiData();
            // data.forEach(note => {
            //     const { title, body: content } = note;
            //     this.add({ title, content });
            // });
            console.log(import("./apiData.js"));
            await import("./apiData.js")
                .then(async (module) => {
                    const data = await module.getApiData();
                    data.forEach(note => {
                        const { title, body: content } = note;
                        this.add({ title, content });
                    });
                    // this.storage = this.notes;
                    // this.render();
                });
            this.storage = this.notes;
            this.render();
        }
    }

    // getApiData() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(resp => resp.json())
    //         .then(data => {
    //             data.forEach(note => {
    //                 const { title, body: content } = note;
    //                 this.add({ title, content });
    //             });
    //             this.storage = this.notes;
    //             this.render();
    //         });
    // }

    render() {
        this.notesContainer.innerHTML = '';
        this.notes.forEach(note => {
            let noteElem = createElement('div', [
                ['class', 'note']
            ]);

            let title = createElement('h2', [
                ['class', 'title']
            ], note.data.title);
            let content = createElement('p', [
                ['class', 'content']
            ], note.data.content);
            let edit = createElement('button', [], 'Edit');
            let remove = createElement('button', [], 'Remove');

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

    edit(id, title, content) {
        let data = { title, content };
        NoteController.prototype.edit.call(this, id, data);
        // super.edit(id, data);
    }

    // createElement(name, attributes = [], content = '') {
    //     let elem = document.createElement(name);

    //     if (attributes.length > 0) {
    //         attributes.forEach(attr => elem.setAttribute(attr[0], attr[1]));
    //     }

    //     if (content) {
    //         elem.innerHTML = content;
    //     }
    //     return elem;
    // }
}

export { NoteUI as UI }