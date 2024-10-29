import { Link } from 'react-router-dom';
import { NavWrap } from './style';

const NavBar = () => {
    return (
        <>
            <NavWrap className="nav">
                <ul>
                    <li>
                        <Link to={'/brand/intro'}>Brand</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link to={'/community'}>Community</Link>
                    </li>
                    <li>
                        <Link to={'/franchise'}>Franchise</Link>
                    </li>
                </ul>
            </NavWrap>
        </>
    );
};

export default NavBar;
