import { addCatStorage, getCartStorage } from "./API/spa.js";
import addButtonComponent from "./API/addButtonComponent.js";

class Cart {
    constructor() {
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.cart = getCartStorage();
        this.cartContainer = document.createElement('div');
        this.cartContainer.classList.add('cart-container');
        this.addCart = this.addCart.bind(this);
        this.cartCounter = this.cartCounter.bind(this);
        this.getCart = this.getCart.bind(this);
    }

    getTotalPrice(){
        let num = this.cart.reduce((total, item) => total + (item.price * item.counter), 0);
        num = Number.parseFloat(num.toFixed(2));
        return num
    }

    getWidget() {
        let counter = this.cart.length ?? 0; //оператор нулевого сравнения схож с ||
        let totalPrice = this.getTotalPrice() ?? 0;
        this.widget.innerHTML = `
        <a href="#cart">${counter}</a>
        <span>|</span>
        <a href="#cart">${totalPrice} Тугриков</a>
        `
        return this.widget;
    }

    render() {
        this.cartContainer.innerHTML = '';

        if (this.cart.length > 0) {
            this.cart.forEach(item => {
                let cartElem = document.createElement('div');
                cartElem.classList.add('catr-elem');
                cartElem.innerHTML = `
                    <div class="img">
                        <img src="${item.image}" alt=""/>
                    </div>
                    <p class="title">${item.title}</p>
                    <p class="price">${item.price}</p>
                `;

                let button = addButtonComponent(item, this.addCart, this.cartCounter);
                cartElem.append(button);

                this.cartContainer.append(cartElem);
            });
        } else {
            let empty = document.createElement('div');
            empty.classList.add('empty');
            empty.innerHTML = '<h1>Корзина пуста</h1>';
            this.cartContainer.append(empty);
        }


    }

    widgetRender(){
        let counter = this.widget.firstElementChild;
        let totalPrice = this.widget.lastElementChild;

        counter.innerText = this.cart.length ?? 0;
        totalPrice.innerText = this.getTotalPrice() + ' Тугриков' ?? 0 + ' Тугриков';
    }

    addCart(obj) {
        if (obj) {
            obj.counter = 1;
            this.cart.push(obj);
        }

        this.widgetRender();

        let flag = this.cart.some(item => item.id === obj.id);

        addCatStorage(this.cart);
        this.render();

        return flag;
    }

    cartCounter(direction, item) {
        if (direction) {
            this.cart = this.cart.map(data => {
                if (data.id === item.id){
                    data.counter += 1;
                    return data;
                }
                return data;
            });

            this.widgetRender();
            addCatStorage(this.cart);
            this.render();

            let count = this.cart.find(data => data.id === item.id);
            return count.counter;
        } else {
            this.cart = this.cart.filter(data => {
                if (data.id === item.id){
                    data.counter -= 1;
                    if (data.counter < 1){
                        if (!confirm('Вы действительно хотите удалить товар?')){
                            data.counter = 1;
                            return data
                        }else{
                            return null;
                        }
                    }
                    return data;
                }
                return data;
            });

            this.widgetRender();
            addCatStorage(this.cart);
            this.render();

            let count = this.cart.find(data => data.id === item.id);
            return count;
        }
    }

    init() {
        // this.render();
        return this.cartContainer;
    }

    getCart(){
        return this.cart;
    }
}

let cart = new Cart();
let widget = cart.getWidget();
let addCart = cart.addCart;
let cartCounter = cart.cartCounter;
let init = cart.init();
let data = cart.getCart;
cart.render();


export default init;
export { widget, addCart, cartCounter, data};
