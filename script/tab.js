const tab = (elem) => {
    const container = elem;
    const buttons = container.querySelector('.tabs_buttons');
    const contents = container.querySelector('.tabs_content');

    const show = e => {
        const button = e.target;
        if (button.tagName === 'LI'){
            if (!button.classList.contains('add')){
                [...buttons.children].forEach((el, i) => {
                    el !== button ? el.classList.remove('active') : el.classList.add('active');
                    el === button ? showContent(i) : null;
                });
            }else{
                addContent(buttons.children.length)
            }
        }
    }

    const showContent = i => {
        [...contents.children].forEach((el, count) => {
            i === count ? el.classList.add('active') : el.classList.remove('active');
        });
    }

    const addContent = (l) => {
        let button = document.createElement('li');
        let conten = document.createElement('li');

        conten.innerText = prompt();
        button.innerText = `tab ${l}`;

        contents.append(conten);
        let add = buttons.querySelector('.add');
        add.before(button);
    }

    buttons.addEventListener('click', show);
}

window.addEventListener('load', () => {
    const tabs = document.querySelectorAll('.container')
    tabs.forEach(el => tab(el));
});