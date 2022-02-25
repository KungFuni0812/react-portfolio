import { Outlet} from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';

const Layout = () => {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            
            <Footer />
        </>
    )
};

export default Layout;
