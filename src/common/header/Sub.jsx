import { Link } from 'react-router-dom';
import {} from './style';

const Sub = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/brand/story">브랜드 스토리</Link>
                </li>
                <li>
                    <Link to="/brand/vision">비전</Link>
                </li>
                <li>
                    <Link to="/brand/history">연혁</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/menu/coffee">커피</Link>
                </li>
                <li>
                    <Link to="/menu/beverage">음료</Link>
                </li>
                <li>
                    <Link to="/menu/food">푸드</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/franchise/info">창업안내</Link>
                </li>
                <li>
                    <Link to="/franchise/process">창업절차</Link>
                </li>
                <li>
                    <Link to="/franchise/inquiry">가맹문의</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/community/notice">공지사항</Link>
                </li>
                <li>
                    <Link to="/community/event">이벤트</Link>
                </li>
                <li>
                    <Link to="/community/faq">FAQ</Link>
                </li>
            </ul>
        </>
    );
};

export default Sub;
