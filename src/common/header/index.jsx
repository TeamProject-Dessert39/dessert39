import { Link } from 'react-router-dom';
import { HeaderWrap, HeaderInner, HeaderOuter, NavContainer, Nav, SubWrap, LeftNav, RightNav } from './style';
import { useEffect, useState } from 'react';
import Sub from './sub';
import MobileMenu from './mobileMenu';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <HeaderWrap>
            <HeaderInner>
                <div className="inner">
                    <h1>
                        <Link to="/main">
                            <img
                                className="svg"
                                src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/9ff6b61cec7dd243b2c413364b8b1b9d6b2c0c4a/icon/dessert39_simbol.svg"
                                alt="dessert39_simbol"
                            />
                        </Link>
                    </h1>
                    <NavContainer className="pc" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                    <div className="mo">
                        <MobileMenu />
                    </div>
                </div>
            </HeaderInner>
            <div className="pc">
                <HeaderOuter>
                    <SubWrap $ishovered={isHovered} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Sub />
                    </SubWrap>
                </HeaderOuter>
            </div>
        </HeaderWrap>
    );
};

export default Header;
