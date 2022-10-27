import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import "./Navbar.css";

const Navbar = () => {
    return (
    <nav className='navbar'>
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#products">Products</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <CartWidget/>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;