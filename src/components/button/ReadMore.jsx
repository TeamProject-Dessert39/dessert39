import { Link } from 'react-router-dom';
import { ReadMoreBtnWrap } from './styled';

const ReadMore = ({ linkUrl }) => {
    return (
        <ReadMoreBtnWrap>
            <Link to={linkUrl}>
                <span className="engText">READ MORE</span>
                <span className="circle">
                    <span className="arrow">
                        <img
                            src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/724a0b41d66f450930a5bdd5d1ce95e6fa567964/icon/arrow_black_icon.svg"
                            alt="화살표 아이콘"
                        />
                    </span>
                </span>
            </Link>
        </ReadMoreBtnWrap>
    );
};

export default ReadMore;
