class Cart{
    constructor(){
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.cart = [];
        this.cartContainer = document.createElement('div');
        this.cartContainer.classList.add('cart-container');
        this.addCart = this.addCart.bind(this);
    }

    getWidget(){
        let counter = this.cart.length ?? 0; //оператор нулевого сравнения схож с ||
        let totalPrice = this.cart.reduce((total, item) => total + item.price, 0) ?? 0;
        this.widget.innerHTML = `
        <a href="#cart">${counter}</a>
        <span>|</span>
        <a href="#cart">${totalPrice} Тугриков</a>
        `
        return this.widget;
    }

    render(){
        this.cartContainer.innerHTML = '';

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

            this.cartContainer.append(cartElem);
        });
    }

    addCart(obj){
        if (obj){
            obj.counter = 1;
            this.cart.push(obj);
        }

        let counter = this.widget.firstElementChild;
        let totalPrice = this.widget.lastElementChild;

        counter.innerText = this.cart.length ?? 0;
        totalPrice.innerText = this.cart.reduce((total, item) => total + item.price, 0) + ' Тугриков'?? 0 + ' Тугриков';

        this.render();
    }

    init(){
        this.render();
        return this.cartContainer;
    }
}

let cart = new Cart();
let widget = cart.getWidget();
let addCart = cart.addCart;
let init = cart.init();

export default init;
export { widget,  addCart };