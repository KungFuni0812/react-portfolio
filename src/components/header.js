import React from 'react';
import logo from '../components/portfolio-about-me.PNG';

const Header = () => {
    return (

    <div className="container-fluid bg-dark text-light p-1">
        <div className="row no-gutters">
            <div className= "col-md-1"/>
            <div className="col-md-1">
                <img src={logo} className = "rounded-circle justify-content-center img-fluid" alt="Logo Max-width 20%" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h1 className="display-4">Kaini Feller</h1>
                <p className="card-text">Full-Stack Software Developer</p>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Header;