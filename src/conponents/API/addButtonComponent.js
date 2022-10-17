export default function addButtonComponent(obj, addCart, cartCounter) {
    let minus = document.createElement('button');
    minus.innerText = '-';
    let counter = document.createElement('div');
    counter.innerHTML = '1';
    let plas = document.createElement('button');
    plas.innerText = '+';

    minus.addEventListener('click', () => {
        let num = cartCounter(false, obj);
        try {
            num = num.counter;
        } catch (e) {
            num = 0;
        }

        if (num) {
            counter.innerHTML = num; //без try .. catch было бы так => counter.innerHTML = num.counter
        } else {
            addButton.innerHTML = 'Add';
            addButton.addEventListener('click', add);
        }
    })

    plas.addEventListener('click', () => {
        let num = cartCounter(true, obj);
        counter.innerHTML = num;
    });

    const add = (e) => {
        if (!e.target.classList.contains('add-button')) return;
        if (addCart(obj)) {
            addButton.innerHTML = '';
            addButton.append(minus, counter, plas);
            addButton.removeEventListener('click', add);
        } else {
            addCart(obj);
        }
    }

    let addButton = document.createElement('div');
    addButton.classList.add('add-button')
    addButton.innerText = 'Add';
    addButton.addEventListener('click', add);

    return addButton;
}