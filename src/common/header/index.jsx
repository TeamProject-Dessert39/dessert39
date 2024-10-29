import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap } from './style';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img
                            src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/9ff6b61cec7dd243b2c413364b8b1b9d6b2c0c4a/icon/dessert39_simbol.svg"
                            alt="dessert39_simbol"
                        />
                    </Link>
                </h1>
                <h2>header</h2>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;
