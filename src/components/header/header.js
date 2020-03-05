import React from 'react';
import './header.css';
import Navbar from './navbar/navbar'
const Header = () => {
    return <header >
        <Navbar />
        <div className="header-hero">
            <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
            <a className="btn btn-full" href="/#">I'm hungry.</a>
            <a className="btn btn-ghost" href="/#">Show me more</a>
        </div>

    </header>

};
export default Header;