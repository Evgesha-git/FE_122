import style from './App.module.scss';
import Header from './components/Header';
import LogIn from "./components/LogIn";
import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Catalog from './components/Catalog';
import Home from './components/Home';
import Footer from './components/Footer';
import Abaut from './components/Abaut';
import Product from './components/Product';
import Cart from './components/Cart';

export const LoginContext = createContext();
export const UserContext = createContext();
export const LogContext = createContext();
export const ProductContext = createContext();
export const CartContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [log, setLog] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <LogContext.Provider value={{ log, setLog }}>
      <UserContext.Provider value={{ user, setUser }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <ProductContext.Provider value={{ products, setProducts }}>
            <CartContext.Provider value={{ cart, setCart }}>
              <div className={style.App}>
                <Routes>
                  <Route path='/' element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/product/:itemId' element={<Product />} />
                    <Route path='/abaut' element={<Abaut />} />
                    <Route path='/cart' element={<Cart/>}/>
                  </Route>
                </Routes>
                {log ? <LogIn /> : null}
                <Footer />
              </div>
            </CartContext.Provider>
          </ProductContext.Provider>
        </LoginContext.Provider>
      </UserContext.Provider>
    </LogContext.Provider>
  );
}

export default App;
