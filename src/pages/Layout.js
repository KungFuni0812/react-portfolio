import { Outlet, Link } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = () => {
    return (
        <>
            <Header />
            <div className="card container-fluid mb-3 justify-content-center">
                <div className="row no-gutters">
                    <div className= "col-md-1"/>
                    <div className= "col-md-6">
                        <nav id="navbar-example2" className="navbar navbar-light bg-light">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link to="/"> <p className="nav-link">About Me</p></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Portfolio"><p className="nav-link">Portfolio </p></Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link to="/contact"><p className="nav-link">Contact</p></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet />
            
            <Footer />
        </>
    )
};

export default Layout;
