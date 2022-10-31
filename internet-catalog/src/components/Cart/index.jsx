import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../App";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <main>
            <h1>Cart</h1>
        </main>
    )
}

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="widget">
            <Link to={'/cart'}>
                <span>{cart.length} | {cart.reduce((acc, item) => acc += item.price, 0)}</span>
            </Link>
        </div>
    )
}

export default Cart;

export { CartWidget }