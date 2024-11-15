import { useEffect, useRef, useState } from 'react';
import { ContactAgreementItemContainer } from './style';
import { RiCheckFill } from 'react-icons/ri';

const ContactAgreementItem = ({ id, txt, button, PopupComponent }) => {
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
            <ContactAgreementItemContainer>
                <label htmlFor={id}>
                    <span className={`chk ${isChk ? 'chked' : ''}`}>
                        <RiCheckFill />
                    </span>
                    <input checked={isChk} onChange={toggleChk} type="checkbox" id={id} ref={chkBox} required />
                    <span className="txt">{txt}</span>
                </label>
                <button
                    type="button"
                    onClick={() => {
                        setIsPopup(true);
                    }}>
                    {button}
                </button>
            </ContactAgreementItemContainer>

            {/* 컴포넌트 자체를 props로 받아옴 */}
            {PopupComponent && <PopupComponent setIsPopup={setIsPopup} setIsChk={setIsChk} active={isPopup} />}
        </>
    );
};

export default ContactAgreementItem;
