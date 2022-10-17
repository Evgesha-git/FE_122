import { widget } from "./cart.js";

class Header{
    constructor(){
        this.header = document.createElement('header');
        this.header.classList.add('header');
        this.header.innerHTML = `
            <div class="logo">
                <a href="/">
                    <img src="https://via.placeholder.com/200x50" alt="">
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#catalog">Catalog</a></li>
                    <li><a href="#Abaut">Abaut</a></li>
                </ul>
            </nav>
        `;

        let cart = document.createElement('div');
        cart.classList.add('cart');
        cart.append(widget);
        this.header.append(cart);
    }

    init(){
        return this.header;
    }
}

export default new Header().init();