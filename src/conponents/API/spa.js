import { setCookie, getCookie } from "./cooke.js";

async function getStorageData(id) {
    if (!getCookie('catalog')){
        localStorage.removeItem('catalog');
    }
    if (localStorage.getItem('catalog')) {
        let data = localStorage.getItem('catalog');
        data = JSON.parse(data);
        if (id) {
            return data.find(item => item.id === +id);
        } else {
            return data;
        }
    } else {
        if (id) {
            let data = await getApiItem(id);
            return data;
        } else {
            let data = await getApiData();
            localStorage.setItem('catalog', JSON.stringify(data));
            setCookie('catalog', '', {secure: true, 'max-age': 2000});
            return data;
        }
    }
}

function addCatStorage(data){
    localStorage.setItem('cart', JSON.stringify(data));
    setCookie('cart', '', {secure: true, 'max-age': 5000});
}

function getCartStorage(){
    if (!getCookie('cart')){
        localStorage.removeItem('cart');
        return [];
    }
    let data = localStorage.getItem('cart');
    return JSON.parse(data);
}

async function getApiData() {
    let resp = await fetch('https://fakestoreapi.com/products');
    return await resp.json();
}

async function getApiItem(id) {
    let resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await resp.json();
}

export { getApiData, getApiItem, getStorageData, addCatStorage, getCartStorage };