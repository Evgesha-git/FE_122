import { getStorageData } from "./API/spa.js";
import { addCart, cartCounter } from "./cart.js";
import addButtonComponent from "./API/addButtonComponent.js";

class Catalog {
    constructor() {
        this.catalog = document.createElement('div');
        this.catalog.classList.add('catalog');
        this.catalog.innerHTML = '<h1>Catalog page</h1>';
    }

    async initComponent() {
        const data = await getStorageData();
        console.log(data);
        this.catalog.innerHTML = '';

        const catalogContainer = document.createElement('div');
        catalogContainer.classList.add('catalog-container');
        data.forEach(element => {
            const { id, image, title, price, rating: { rate } } = element;
            const product = document.createElement('div');
            product.classList.add('product');
            product.innerHTML = `
            <div class="img">
                <a href="#Product/${id}"><img src="${image}" alt=""></a>
            </div>
            <p class="text"><a href="#Product/${id}">${title}</a></p>
            <span class="price">${price}</span>
            <span class="raiting">${rate}</span>
            `;

            // let minus = document.createElement('button');
            // minus.innerText = '-';
            // let counter = document.createElement('div');
            // counter.innerHTML = '1';
            // let plas = document.createElement('button');
            // plas.innerText = '+';

            // minus.addEventListener('click', () => {
            //     let num = cartCounter(false, element);
            //     try{
            //         num = num.counter;
            //     }catch(e){
            //         num = 0;
            //     }
                
            //     if (num){
            //         counter.innerHTML = num; //без try .. catch было бы так => counter.innerHTML = num.counter
            //     }else{
            //         addButton.innerHTML = 'Add';
            //         addButton.addEventListener('click', add);
            //     }
            // })

            // plas.addEventListener('click', () => {
            //     let num = cartCounter(true, element);
            //     counter.innerHTML = num;
            // });

            // const add = (e) => {
            //     if (!e.target.classList.contains('add-button')) return;
            //     if (addCart(element)) {
            //         addButton.innerHTML = '';
            //         addButton.append(minus, counter, plas);
            //         addButton.removeEventListener('click', add);
            //     } else {
            //         addCart(element);
            //     }
            // }

            // let addButton = document.createElement('div');
            // addButton.classList.add('add-button')
            // addButton.innerText = 'Add';
            // addButton.addEventListener('click', add);
            const addButton = addButtonComponent(element, addCart, cartCounter);
            product.append(addButton);

            catalogContainer.append(product);
        });

        this.catalog.append(catalogContainer);
    }

    init() {
        this.initComponent();
        return this.catalog;
    }
}

export default new Catalog().init();