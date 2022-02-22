import React from 'react';
import logo from '../components/portfolio-about-me.PNG';

const Header = () => {
    return (
        <div className = "container-fluid text-center col-md-2">
            <h1 className = " text-center">Kaini Feller</h1>
            <img src={logo} className = "img-thumbnail" alt="Logo" />
        </div>
    );
};

export default Header;