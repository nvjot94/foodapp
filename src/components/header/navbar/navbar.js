import React from 'react';
import logo from '../../../assets/images/logo-white.png';
import './navbar.css';
const Navbar = () => {
    return <nav>
        <div className="row">
            <img src={logo} alt="logo" className="logo"></img>
            <ul className="main-nav">
                <li><a href="/#">Food delivery</a></li>
                <li><a href="/#">How it works</a></li>
                <li><a href="/#">Our cities</a></li>
                <li><a href="/#">Sign up</a></li>

            </ul>

        </div>

    </nav>
};

export default Navbar;