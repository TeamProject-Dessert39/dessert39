import { useState } from 'react';
import AllianceAgreementItem from '../../../components/franchise/alliance/AllianceAgreementItem';
import AllianceCertify from '../../../components/franchise/alliance/AllianceCertify';
import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import AlliancePopup05 from '../../../components/franchise/alliance/AlliancePopup05';
import { AllianceSupplierContainer2 } from './style';
import { useNavigate } from 'react-router-dom';

// 제휴/제안 협력사 신청 및 조회
const AllianceSupplier2 = () => {
    const navigate = useNavigate();
    const [isPopup, setIsPopup] = useState(false);

    /* 
    사업자 등록번호 숫자 유효성 검사 필요
    인증하기 누르면 정보 오른쪽에 들어가야함.

    모든 정보 입력해야 다음 버튼 누를수 있음. 
    인풋 하나씩 다 alert 검사 알림.
    */

    return (
        <AllianceSupplierContainer2>
            <AllianceLayout ktit={'협력사 신청 및 조회'} />

            <div className="inner">
                <ul className="steps">
                    <li>협력사 제휴·제안 안내</li>
                    <li className="on">등록 및 약관</li>
                    <li>제출 완료</li>
                </ul>

                <form action="" method="post">
                    <section className="agreement">
                        <h3>협력사 신청 개인정보 수집 및 이용 동의</h3>
                        <AllianceAgreementItem
                            id={'agree1'}
                            txt={'협력고객사 등록 신청 개인정보 수집 및 이용에 대해 동의합니다.'}
                            button={'개인정보 수집·이용'}
                            PopupComponent={AlliancePopup05}
                        />
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
                                        담당자 이름
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
                                    <input type="text" name="" id="email" required placeholder="담당자 이메일" />
                                </div>
                            </div>
                        </div>

                        <AllianceCertify setIsPopup={setIsPopup} active={isPopup} />
                    </section>

                    <section className="num">
                        <div className="left">
                            <label className="req" htmlFor="num">
                                사업자 등록번호
                            </label>
                            <span>[사업자등록증]</span>
                        </div>
                        <div className="right">
                            <input type="text" name="" id="num" required />
                            <input type="text" name="" id="" required />
                            <input type="text" name="" id="" required />
                        </div>
                    </section>
                </form>
                <div className="btns">
                    <button onClick={() => navigate('/franchise/alliance/allianceSupplier')} type="button" className="prev">
                        이전
                    </button>
                    <button onClick={() => navigate('/franchise/alliance/allianceSupplier3')} type="button" className="next">
                        다음
                    </button>
                </div>
            </div>
        </AllianceSupplierContainer2>
    );
};

export default AllianceSupplier2;
