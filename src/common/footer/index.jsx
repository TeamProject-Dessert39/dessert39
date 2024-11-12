import { Link } from 'react-router-dom';
import { FooterWrap, LogoTabWrap, InfoWrap, ContactWrap } from './style';

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <LogoTabWrap>
                    <Link to={'/'}>
                        <img
                            src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/icon/dessert39_logo.png?raw=true"
                            alt="dessert39_logo"
                        />
                    </Link>
                </LogoTabWrap>
                <InfoWrap>
                    <ul>
                        <li>
                            <span className="company">Company/CEO</span>
                            <p>SMC INTERNATIONAL CO., LTD. / Minchang Shin, Hanna Choi</p>
                        </li>
                        <li>
                            <span className="address">Address</span>
                            <p>155 Bangbae Jungang-ro, Seocho-gu, Seoul</p>
                        </li>
                        <li>
                            <span className="cs">Customer Service</span>
                            <p>
                                <a href="tel:1644-2927">1644 - 2927</a>
                            </p>
                        </li>
                        <li>
                            <span className="rn">Registration Number</span>
                            <p>719 - 86 - 00092</p>
                        </li>
                    </ul>
                </InfoWrap>
                <ContactWrap>
                    <button>제휴·제안 문의하기</button>
                    <div className="follow">
                        <h4>FOLLOW US</h4>
                        <ul className="followIcon">
                            <li>
                                <a href=""></a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>CONTACT US</h4>
                    </div>
                </ContactWrap>
            </div>
        </FooterWrap>
    );
};

export default Footer;
