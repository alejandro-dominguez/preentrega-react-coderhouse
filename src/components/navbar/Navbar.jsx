import { Link } from "react-router-dom";
import { CartWidget } from "../";
import { VscColorMode } from "react-icons/vsc";
import headerLogo from '../../assets/logo-header.svg';

const NavBar = () => {

    return (
    <nav className="z-10 w-full fixed bg-white/80 backdrop-blur-md h-[10vh] text-slate-700">
        <div className="flex justify-between items-center px-12 h-full">
            <Link to="/">
                <img src={headerLogo} alt="Geekommerce logo" className="h-12" />
            </Link>
            <ul className="flex justify-between items-center uppercase font-bold h-full">
                <li className="flex items-center hover:text-slate-900 hover:bg-slate-200
                h-full px-5 cursor-pointer">
                    <Link to="/category/teclados">Teclados</Link>
                </li>
                <li className="flex items-center hover:text-slate-900 hover:bg-slate-200
                h-full px-5 cursor-pointer">
                    <Link to="/category/auriculares">Auriculares</Link>
                </li>
                <li className="flex items-center hover:text-slate-900 hover:bg-slate-200
                h-full px-5 cursor-pointer">
                    <Link to="/category/micrófonos">Micrófonos</Link>
                </li>
                <li>
                    <CartWidget />
                </li>
                <li>
                    <VscColorMode className="ml-10 cursor-pointer" color="#0f172a" size={23} />
                </li>
            </ul>
        </div>
    </nav>
    )
};

export default NavBar;