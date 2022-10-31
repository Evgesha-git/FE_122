import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../App";
import ProductCart from "./ProductCart";
import style from "./catalog.module.scss";

const Catalog = () => {
    const { products, setProducts } = useContext(ProductContext);

    const getProductsData = async () => {
        if (products.length > 0) return;
        let resp = await fetch('https://fakestoreapi.com/products');
        let data = await resp.json();
        setProducts(data);
    }

    useEffect(() => {
        getProductsData();
    }, [products]);

    return (
        <main>
            <h1>Catalog</h1>
            <div className={style.catalogContainer}>
                {products.map((item, i) => <ProductCart key={i.toString()} item={item} />)}
            </div>
        </main>

    )
}

export default Catalog;