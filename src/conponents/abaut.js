class Abaut{
    constructor(){
        this.abaut = document.createElement('div');
        this.abaut.classList.add('abaut');
        this.abaut.innerHTML = '<h1>Abaut page</h1>';
    }

    init(){
        return this.abaut;
    }
}

export default new Abaut().init();