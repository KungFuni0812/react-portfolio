import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="card container-fluid mb-3 justify-content-center">
            <div className="row no-gutters">
                <div className= "col-md-1"/>
                <div className= "col-md-6">
                    <nav id="navbar-example2" className="navbar navbar-light bg-light">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <NavLink to="/"> <a className= "nav-link text-dark nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home">About Me</a></NavLink>
                            </li>
                            <li className="nav-item" role="presentation">
                                <NavLink to="/Portfolio"><a className="nav-link text-dark" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Portfolio </a></NavLink>
                                
                            </li>
                            <li className="nav-item" role="presentation"> 
                                <NavLink to="/contact"><a className="nav-link text-dark" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact">Contact</a></NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default Nav;
