import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext, ProductContext } from "../../App";
import style from "./product.module.scss";

const Product = () => {
    const { products } = useContext(ProductContext);
    const { cart, setCart } = useContext(CartContext);
    const [data, setData] = useState({});
    const id = useParams();

    const getProduct = async () => {
        if (products.length > 0) {
            setData(products.find(item => item.id === +id.itemId))
        } else {
            let resp = await fetch(`https://fakestoreapi.com/products/${id.itemId}`);
            let item = await resp.json();
            setData(item);
        }
    }

    const addHandler = () => {
        console.log(cart.some(item => item.id === data.id));
        if (!cart.some(item => item.id === data.id)) {
            setCart([...cart, data]);
        }
    }

    useEffect(() => {
        getProduct();
    }, [data]);

    return (
        <main>
            <div className={style.product}>
                <div className="img">
                    <img src={data?.image} alt="pict" />
                </div>
                <div className="description">
                    <h2 className="title">{data?.title}</h2>
                    <p className="desc">{data?.description}</p>
                    <p className="price">{data?.price}</p>
                    <button onClick={addHandler}>Add</button>
                </div>
            </div>
        </main>
    )
}

export default Product;