import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container-fluid mb-3 justify-content-center sticky-top">
            <div className="row no-gutters">
                <div className= "col-md-1"/>
                <div className= "col-md-10">
                    <nav id="navbar-example2" className="navbar navbar-light bg-white">
                        <ul className="nav nav-tabs flex-fill" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <NavLink to="/" className="nav-link text-dark nav-link" id="about-tab" data-toggle="tab" href="#" role="tab" aria-controls="about">About Me</NavLink>
                            </li>
                            <li className="nav-item" role="presentation">
                                <NavLink to="/Portfolio" className="nav-link text-dark" id="portfolio-tab" data-toggle="tab" href="#portfolio" role="tab" aria-controls="portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item" role="presentation"> 
                                <NavLink to="/contact" className="nav-link text-dark" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default Nav;
