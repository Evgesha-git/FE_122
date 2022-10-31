import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./productCart.module.scss";
import { CartContext } from "../../../App";

const ProductCart = (props) => {
    const {
        id,
        title,
        image,
        price,
    } = props.item;
    const {cart, setCart } = useContext(CartContext);

    const addHandler = () => {
        if (!cart.some(item => item.id === props.item.id)) {
            setCart([...cart, props.item]);
        }
    }

    return (
        <div className={style.productItem}>
            <div className={style.img}>
                <Link to={`/product/${id.toString()}`}>
                    <img src={image} alt="pict" />
                </Link>
            </div>
            <h2 className={style.title}>
                <Link to={`/product/${id.toString()}`}>
                    {title}
                </Link>
            </h2>
            <p className={style.price}>{price}</p>
            <button onClick={addHandler}>Add</button>
        </div>
    )
}

export default ProductCart;