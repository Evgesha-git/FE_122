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
            <Profile
                login={props.login}
                user={props.user}
                setLogin={props.setLogin}
                setUser={props.setUser}
                setLog={props.setLog}
            />
        </header>
    )
}

export default Header;