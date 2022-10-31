import "./component.style.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/catalog'}>Catalog</Link></li>
                <li><Link to={'/abaut'}>Abaut</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;