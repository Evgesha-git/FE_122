import Logo from "./Logo";

import "./component.style.css";
import Nav from "./Nav";
import Profile from "./Profile";

const Header = (props) => {
    return (
        <header className="header">
            <Logo
                style={{ width: '260px', height: '40px' }}
                src={'https://via.placeholder.com/260x40'}
            />
            <Nav />
            <Profile/>
        </header>
    )
}

export default Header;