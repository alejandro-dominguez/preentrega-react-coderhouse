import { Link } from "react-router-dom";
import { CartWidget } from "../";
import headerLogo from '../../assets/logo-header.svg';
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => {

    return (
        <nav className="z-50 w-full fixed bg-white/80 backdrop-blur-md h-[67.5px] text-slate-700">
            <div className="navBarFlexBox">
                <Link to="/">
                    <img src={headerLogo} alt="Geekommerce logo" className="h-10 block" />
                </Link>
                <ul className="flex justify-between items-center uppercase font-bold h-full text-center">
                    <li className="dropdown relative">
                        <button type="button" className="btnNav relative flex justify-between items-center px-3
                        hover:text-slate-900 hover:bg-slate-300 h-[67.5px] w-36 uppercase">
                            Informática
                            <IoIosArrowDown className="dropdownArrow -rotate-90" />
                        </button>
                        <div className="dropdownMenu absolute top-full shadow-md rounded-b-md bg-slate-50">
                            <Link to="/category/notebooks">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Notebooks
                                </div>
                            </Link>
                            <Link to="/category/tablets">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Tablets
                                </div>
                            </Link>
                            <Link to="/category/celulares">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36 rounded-b-md">
                                    Celulares
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="dropdown relative">
                        <button type="button" className="btnNav relative flex justify-between items-center px-3
                        hover:text-slate-900 hover:bg-slate-300 h-[67.5px] w-36 uppercase">
                            Periféricos
                            <IoIosArrowDown className="dropdownArrow -rotate-90" />
                        </button>
                        <div className="dropdownMenu absolute top-full shadow-md rounded-b-md bg-slate-50">
                            <Link to="/category/monitores">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Monitores
                                </div>
                            </Link>
                            <Link to="/category/mouses">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Mouses
                                </div>
                            </Link>
                            <Link to="/category/teclados">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Teclados
                                </div>
                            </Link>
                            <Link to="/category/auriculares">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Auriculares
                                </div>
                            </Link>
                            <Link to="/category/microfonos">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36 rounded-b-md">
                                    Micrófonos
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="dropdown relative">
                        <button type="button" className="btnNav relative flex justify-between items-center px-3
                        hover:text-slate-900 hover:bg-slate-300 h-[67.5px] w-36 uppercase">
                            Accesorios
                            <IoIosArrowDown className="dropdownArrow -rotate-90" />
                        </button>
                        <div className="dropdownMenu absolute top-full shadow-md rounded-b-md bg-slate-50">
                            <Link to="/category/butacas">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Butacas
                                </div>
                            </Link>
                            <Link to="/category/mousepads">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36">
                                    Mouse pads
                                </div>
                            </Link>
                            <Link to="/category/lentes">
                                <div className="grid place-items-center cursor-pointer hover:text-slate-900
                                hover:bg-slate-200 h-14 w-36 rounded-b-md">
                                    Lentes
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;