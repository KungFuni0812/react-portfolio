import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav id="navbar-example2" class="navbar navbar-light bg-light">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <Link to="/"> <p class="nav-link">About Me</p></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Portfolio"><p class="nav-link">Portfolio </p></Link>
                    </li>
                    <li>
                        <Link to="/contact"> <p class="nav-link">Contact</p></Link>
                    </li>
                </ul>
            </nav>

        <Outlet />
        </>
    )
};

export default Layout;
