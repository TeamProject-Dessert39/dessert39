import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    return (
        <div className="wrap">
            <Header />
            <main className="main" style={{ padding: '100px 0 0 0' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
