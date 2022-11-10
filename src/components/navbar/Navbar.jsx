import { Link } from "react-router-dom";
import { CartWidget } from "../";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/teclados">Teclados</Link>
            </li>
            <li>
                <Link to="/category/auriculares">Auriculares</Link>
            </li>
            <li>
                <Link to="/category/micrófonos">Micrófonos</Link>
            </li>
            <CartWidget />
        </ul>
    )
};

export default NavBar;