import React from 'react';
import logo from '../components/portfolio-about-me.PNG';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (

    <div className="header container-fluid text-light p-2">
        <div className="row no-gutters">
            <div className= "col-md-1"/>
            <div className="col-md-1">
                <NavLink to="/" className="nav-link text-light" id="about-tab" data-toggle="tab" href="#" role="tab" aria-controls="about">
                    <img src={logo} className = "profile-pic rounded-circle justify-content-center"alt="Logo Max-width 20%" />
                </NavLink>
            </div>
            <div className="col-md-8">
                <div className="header-body">
                <NavLink to="/" className="nav-link text-light" id="about-tab" data-toggle="tab" href="#" role="tab" aria-controls="about">
                    <h1 className="display-4">Kaini Feller</h1>
                    <p className="header-text">Full-Stack Software Developer</p>
                </NavLink>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Header;