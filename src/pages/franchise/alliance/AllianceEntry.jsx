import AllianceAgreementItem from '../../../components/franchise/alliance/AllianceAgreementItem';
import AllianceEntryForm from '../../../components/franchise/alliance/AllianceEntryForm';
import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import AlliancePopup02 from '../../../components/franchise/alliance/AlliancePopup02';
import AlliancePopup03 from '../../../components/franchise/alliance/AlliancePopup03';
import AlliancePopup04 from '../../../components/franchise/alliance/AlliancePopup04';
import { AllianceEntryContainer } from './style';
import { RiCheckFill } from 'react-icons/ri';
import { IoMdCheckmark } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import AllianceCertify from '../../../components/franchise/alliance/AllianceCertify';
import { useState } from 'react';

// 제휴/제안 입점 제의
const AllianceEntry = () => {
    const navigate = useNavigate();
    const [isPopup, setIsPopup] = useState(false);

    /* 
    모든 동의 버튼 누르면 3개 다 체크되어야함. 이미 체크되어있으면 3개 다 해제

    유효성 검사 해야함. 이후 required 없애고 alert으로 바꿈. 하나하나 순차적으로 검사.

    휴대폰 인증하기 해야 넘어갈 수 있도록.
    인증번호 입력 전에는 확인 누르면 코드 6자리를 입력해주세요. alert ->
    인증번호 발송 시 인증번호에 랜덤 6자리 숫자 아무거나 들어감. ->
    인증하기 완료하면 오른쪽 input에 내용 자동으로 들어감
    */

    return (
        <AllianceEntryContainer>
            <AllianceLayout ktit={'입점 제의'} />

            <div className="inner">
                <form action="" method="post">
                    <h3>입점 제의 상담 신청 동의</h3>
                    <section className="agreement">
                        <AllianceAgreementItem
                            id={'agree1'}
                            txt={'입점 제의 상담 신청에 동의합니다.'}
                            button={'입점제의 상담신청'}
                            PopupComponent={AlliancePopup02}
                        />
                        <AllianceAgreementItem
                            id={'agree2'}
                            txt={'신규 입점 제의 이용약관을 읽었으며 이에 동의합니다.'}
                            button={'입점제의 상담신청'}
                            PopupComponent={AlliancePopup03}
                        />
                        <AllianceAgreementItem
                            id={'agree3'}
                            txt={'개인정보 수집 및 이용에 대해 동의합니다.'}
                            button={'개인정보 수집·이용'}
                            PopupComponent={AlliancePopup04}
                        />
                        <button className="all" type="button">
                            <RiCheckFill />
                            모든 약관과 방침을 읽었으며 이에 동의합니다.
                        </button>
                    </section>

                    <section className="certify">
                        <div className="l_box">
                            <div className="pic">
                                <img src="https://teamproject-dessert39.github.io/dataCenter/icon/phone-call.svg" alt="휴대폰 인증하기" />
                            </div>
                            <div className="txt">
                                <strong>휴대폰 인증하기</strong>
                                <p>본인 명의의 휴대폰을 통해 인증합니다.</p>
                                <button onClick={() => setIsPopup(true)} type="button">
                                    인증하기
                                </button>
                            </div>
                        </div>
                        <div className="r_box">
                            <div className="input_box name">
                                <div className="left">
                                    <label className="req" htmlFor="name">
                                        담당자 성함
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="" id="name" required disabled />
                                </div>
                            </div>
                            <div className="input_box tel">
                                <div className="left">
                                    <label className="req" htmlFor="tel">
                                        담당자 연락처
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="" id="tel" required disabled />
                                </div>
                            </div>
                            <div className="input_box email">
                                <div className="left">
                                    <label className="req" htmlFor="email">
                                        담당자 이메일
                                    </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="" id="email" required />
                                </div>
                            </div>
                        </div>

                        <AllianceCertify setIsPopup={setIsPopup} active={isPopup} />
                    </section>

                    <AllianceEntryForm />

                    <div className="guide">
                        <p>
                            <IoMdCheckmark />
                            입점 제의 상가는 인근 희망 점주님에게 추천 후 여부에 따라 개별적으로 연락드립니다.
                        </p>
                        <p>
                            <IoMdCheckmark />
                            입력된 정보가 부정확할 경우 검토가 제한될 수 있습니다.
                        </p>
                        <p>
                            <IoMdCheckmark />
                            내부 사정에 따라 회신이 지연될 수 있으며, 이 경우 다시 신청하여 주시길 바랍니다.
                        </p>
                    </div>

                    <div className="btns">
                        <button onClick={() => navigate(-1)} type="button" className="prev">
                            뒤로
                        </button>
                        <button type="submit" className="sure">
                            확인
                        </button>
                    </div>
                </form>
            </div>
        </AllianceEntryContainer>
    );
};

export default AllianceEntry;
