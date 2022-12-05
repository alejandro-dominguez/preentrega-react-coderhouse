import { Link } from 'react-router-dom';
import { DropdownMenu } from "../../";
import headerLogo from '../../../assets/logo-header.svg';

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="navBarFlexBox">
                <Link to="/">
                    <div className="w-[6.5rem]">
                        <img src={headerLogo} alt="Geekommerce logo" className="w-full block" />
                    </div>
                </Link>
                <ul className="flex justify-center items-center uppercase font-bold h-full text-center">
                    <div className="flex justify-between items-center">
                        <DropdownMenu />
                    </div>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
