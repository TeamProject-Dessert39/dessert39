import AllianceLayout from '../../../components/franchise/alliance/AllianceLayout';
import AlliancePurchasingForm from '../../../components/franchise/alliance/AlliancePurchasingForm';
import { AlliancePurchasingContainer } from './style';
import { MdLocalPostOffice } from 'react-icons/md';
import { IoMdCheckmark } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import AllianceAgreementItem from '../../../components/franchise/alliance/AllianceAgreementItem';
import AlliancePopup01 from '../../../components/franchise/alliance/AlliancePopup01';

// 제휴/제안 기업 및 단체 구매 문의
const AlliancePurchasing = () => {
    const navigate = useNavigate();

    /* 
        확인 버튼 클릭시 문의가 접수되었습니다. alert 띄움
    */

    return (
        <AlliancePurchasingContainer>
            <AllianceLayout ktit={'기업 및 단체 구매 문의'} />
            <div className="inner">
                <form action="" method="post">
                    <h3>기업 및 단체 구매 문의 개인정보 수집·이용 동의</h3>
                    <section className="agreement">
                        <AllianceAgreementItem
                            id={'agree1'}
                            txt={'개인정보 수집 및 이용에 동의합니다.'}
                            button={'개인정보 수집·이용'}
                            PopupComponent={AlliancePopup01}
                        />
                    </section>

                    <AlliancePurchasingForm />

                    <div className="guide">
                        <h3>기업 및 단체 구매 상담 안내 사항</h3>
                        <p>
                            <MdLocalPostOffice />
                            상품 구매 및 상담 문의 : <span>dessert39@dessert39.com</span>
                        </p>
                        <p>
                            <IoMdCheckmark />
                            답변 및 안내는 상담 운영시간 내에 이메일 또는 전화번호로 안내드립니다.
                        </p>
                        <p>
                            <IoMdCheckmark />
                            기재 오류 시 답변이 불가할 수 있으니 기재 시 꼭 메일 주소 및 전화번호를 확인해 주시기 바랍니다.
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
        </AlliancePurchasingContainer>
    );
};

export default AlliancePurchasing;
