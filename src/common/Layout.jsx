import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import MainSideBtn from '../components/main/MainSideBtn';
import TopBtn from '../components/main/TopBtn';
import { useEffect, useState } from 'react';

const Layout = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll); //clean up
        };
      }, []);
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true)
        }else{
            setScroll(false)
        }
      };
      
    return (
        <div className="wrap">
            <Header />
            <main className="main" style={{ padding: '100px 0 0 0' }}>
                <Outlet />
                <ul className={scroll ? 'fixed-btn on' : 'fixed-btn'}>
                    <MainSideBtn/>
                    <TopBtn/>
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
