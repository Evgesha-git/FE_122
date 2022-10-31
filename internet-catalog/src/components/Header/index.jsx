import Logo from "./Logo";

import "./component.style.css";
import Nav from "./Nav";
import Profile from "./Profile";
import { Link, Outlet } from "react-router-dom";
import { CartWidget } from "../Cart";

const Header = (props) => {
    return (
        <>
            <header className="header">
                <Link to={'/'}>
                    <Logo
                        style={{ width: '260px', height: '40px' }}
                        src={'https://via.placeholder.com/260x40'}
                    />
                </Link>
                <Nav />
                <Profile />
                <CartWidget/>
            </header>
            <Outlet/>
        </>
    )
}

export default Header;