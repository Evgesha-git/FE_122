import { getApiItem } from "./API/spa.js";
import { addCart } from "./cart.js";

class Product {
    constructor(id) {
        this.id = id;
        this.container = document.createElement('div');
        this.container.classList.add('product_page');
    }

    async render() {
        let item = await getApiItem(this.id);
        const { title, image, description: desc, category: cat, price, rating: { rate } } = item;
        this.container.innerHTML = `
        <div class="img"><img src="${image}" alt=""></div>
        <span class="category">${cat}</span>
        <h2 class="title">${title}</h2>
        <p class="description">${desc}</p>
        <span class="rating">Rating: ${rate}</span>
        <span class="price">Price: ${price}</span>
        `;
        let addButton = document.createElement('button');
        addButton.classList.add('add-button')
        addButton.innerText = 'Add';
        addButton.addEventListener('click', () => addCart(item));

        this.container.append(addButton);
    }

    init() {
        this.render();
        return this.container
    }


}

export default Product;