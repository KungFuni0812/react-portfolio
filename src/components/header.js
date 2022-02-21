import React from 'react';
import logo from '../components/portfolio-about-me.PNG';

const Header = () => {
    return (
        <div className = "container-fluid text-center">
            <h1 className = " text-center">Kaini Feller</h1>
            <img src={logo} className= "rounded mx-auto d-block" alt="Logo" />
        </div>
    );
};

export default Header;