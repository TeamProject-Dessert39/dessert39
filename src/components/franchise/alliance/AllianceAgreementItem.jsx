import { useEffect, useRef, useState } from 'react';
import { AllianceAgreementItemContainer } from './style';
import { RiCheckFill } from 'react-icons/ri';

const AllianceAgreementItem = ({ id, txt, button, PopupComponent }) => {
    const [isPopup, setIsPopup] = useState(false);
    const [isChk, setIsChk] = useState(false);
    const chkBox = useRef();

    const toggleChk = () => {
        if (isChk) {
            setIsChk(false);
        } else {
            setIsChk(true);
        }
    };

    return (
        <>
            <AllianceAgreementItemContainer>
                <label htmlFor={id}>
                    <span className={`chk ${isChk ? 'chked' : ''}`}>
                        <RiCheckFill />
                    </span>
                    <input checked={isChk} onChange={toggleChk} type="checkbox" name="agree" id={id} ref={chkBox} required />
                    <span className="txt">{txt}</span>
                </label>
                <button
                    type="button"
                    onClick={() => {
                        setIsPopup(true);
                    }}>
                    {button}
                </button>
            </AllianceAgreementItemContainer>

            {/* 컴포넌트 자체를 props로 받아옴 */}
            {PopupComponent && <PopupComponent setIsPopup={setIsPopup} setIsChk={setIsChk} active={isPopup} />}
        </>
    );
};

export default AllianceAgreementItem;
