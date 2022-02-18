import { Outlet, Link } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = () => {
    return (
        <>
            <Header />
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

            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;
