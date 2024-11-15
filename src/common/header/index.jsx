import { Link } from 'react-router-dom';
import { HeaderWrap, HeaderInner, HeaderOuter, NavContainer, Nav, SubWrap, LeftNav, RightNav } from './style';
import { useState } from 'react';
import Sub from './sub';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    return (
        <HeaderWrap>
            <HeaderInner>
                <div className="inner">
                    <h1>
                        <Link to="/">
                            <img
                                className="svg"
                                src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/9ff6b61cec7dd243b2c413364b8b1b9d6b2c0c4a/icon/dessert39_simbol.svg"
                                alt="dessert39_simbol"
                            />
                        </Link>
                    </h1>
                    <NavContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <LeftNav>
                            <Nav>
                                <ul>
                                    <li className="nav1">
                                        <Link to={'/brand/intro'}>Brand</Link>
                                    </li>
                                    <li className="nav2">
                                        <Link to={'/menu/dessert'}>Menu</Link>
                                    </li>
                                    <li className="nav5">
                                        <Link to={'/store/competitiveness'}>Store</Link>
                                    </li>
                                </ul>
                            </Nav>
                        </LeftNav>
                        <RightNav>
                            <Nav>
                                <ul>
                                    <li className="nav3">
                                        <Link to={'/community/information'}>Community</Link>
                                    </li>
                                    <li className="nav4">
                                        <Link to={'/franchise/competitive'}>Franchise</Link>
                                    </li>
                                </ul>
                            </Nav>
                        </RightNav>
                    </NavContainer>
                </div>
            </HeaderInner>
            <HeaderOuter>
                <SubWrap $ishovered={isHovered}>
                    <Sub />
                </SubWrap>
            </HeaderOuter>
        </HeaderWrap>
    );
};

export default Header;
