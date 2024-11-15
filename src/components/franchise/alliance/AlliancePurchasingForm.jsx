import AllianceTitle from './AllianceTitle';
import { AlliancePurchasingFormContainer } from './style';
import { FaPlus } from 'react-icons/fa';

const AlliancePurchasingForm = () => {
    // 이메일 직접 입력 클릭시 input text로 바뀌어야함.

    return (
        <AlliancePurchasingFormContainer>
            <AllianceTitle txt={'기업 및 단체 구매 희망자 정보'} />
            <div className="form01">
                <div className="input_wrap">
                    <div className="input_box purchaser">
                        <div className="left">
                            <label className="req" htmlFor="purchaser">
                                구매자 유형
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="purchaser01">
                                    <input type="radio" name="purchaser" id="purchaser01" required />
                                    <span className="custom"></span>
                                    <span>개인 사업자</span>
                                </label>
                                <label htmlFor="purchaser02">
                                    <input type="radio" name="purchaser" id="purchaser02" />
                                    <span className="custom"></span>
                                    <span>법인 사업자</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box company">
                        <div className="left">
                            <label className="req" htmlFor="company">
                                회사명
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="" id="company" required placeholder="회사명을 입력해 주세요" />
                        </div>
                    </div>
                    <div className="input_box b_number">
                        <div className="left">
                            <label className="req" htmlFor="b_number">
                                사업자등록번호
                            </label>
                            <span>[사업자등록증]</span>
                        </div>
                        <div className="right">
                            <input type="text" name="" id="b_number" required />
                            <input type="text" name="" id="b_number" required />
                            <input type="text" name="" id="b_number" required />
                        </div>
                    </div>
                    <div className="input_box name">
                        <div className="left">
                            <label className="req" htmlFor="name">
                                담당자명
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="" id="name" required placeholder="담당자명을 입력해 주세요" />
                        </div>
                    </div>
                    <div className="input_box title">
                        <div className="left">
                            <label htmlFor="title">직함</label>
                        </div>
                        <div className="right">
                            <input type="text" name="" id="title" placeholder="직함을 입력해 주세요" />
                        </div>
                    </div>
                    <div className="input_box email">
                        <div className="left">
                            <label className="req" htmlFor="email">
                                담당자 이메일
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="" id="email" required placeholder="이메일을 입력해 주세요" />@
                            <select name="" id="">
                                <option value="">선택</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="naver.com">naver.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="hotmall.com">hotmall.com</option>
                                <option value="empal.com">empal.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="lycos.co.kr">lycos.co.kr</option>
                                <option value="chol.com">chol.com</option>
                                <option value="netian.com">netian.com</option>
                                <option value="korea.com">korea.com</option>
                                <option value="">직접 입력</option>
                            </select>
                        </div>
                    </div>
                    <div className="input_box phone">
                        <div className="left">
                            <label className="req" htmlFor="phone">
                                담당자 연락처
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="" id="phone" required />
                            <input type="text" name="" id="phone" required />
                            <input type="text" name="" id="phone" required />
                        </div>
                    </div>
                    <div className="input_box pay">
                        <div className="left">
                            <label className="req" htmlFor="pay">
                                결제수단
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="pay01">
                                    <input type="radio" name="pay" id="pay01" required />
                                    <span className="custom"></span>
                                    <span>별도문의</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AllianceTitle txt={'기업 및 단체 구매 문의사항'} />
            <div className="form02">
                <div className="input_wrap">
                    <div className="input_box hope">
                        <div className="left">
                            <label className="req" htmlFor="hope">
                                구매 희망 상품
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="hope01">
                                    <input type="radio" name="hope" id="hope01" required />
                                    <span className="custom"></span>
                                    <span>디저트&베이커리</span>
                                </label>
                                <label htmlFor="hope02">
                                    <input type="radio" name="hope" id="hope02" />
                                    <span className="custom"></span>
                                    <span>텀블러</span>
                                </label>
                                <label htmlFor="hope03">
                                    <input type="radio" name="hope" id="hope03" />
                                    <span className="custom"></span>
                                    <span>머그컵</span>
                                </label>
                                <label htmlFor="hope04">
                                    <input type="radio" name="hope" id="hope04" />
                                    <span className="custom"></span>
                                    <span>기타MD</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box price">
                        <div className="left">
                            <label className="req" htmlFor="price">
                                예상 구매 금액
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="price" id="price" required placeholder="숫자만 입력해 주세요" />
                            <span>만원</span>
                        </div>
                    </div>
                    <div className="input_box num">
                        <div className="left">
                            <label className="req" htmlFor="num">
                                예상 구매 수량
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="num" id="num" required placeholder="숫자만 입력해 주세요" />
                            <span>개</span>
                        </div>
                    </div>
                    <div className="input_box date">
                        <div className="left">
                            <label className="req" htmlFor="date">
                                구매 희망 일자
                            </label>
                        </div>
                        <div className="right">
                            <input type="date" name="" id="" />
                        </div>
                    </div>
                    <div className="input_box desc">
                        <div className="left">
                            <label className="req" htmlFor="desc">
                                문의 내용
                            </label>
                        </div>
                        <div className="right">
                            <textarea name="desc" id="desc" placeholder="문의하실 내용을 입력해 주세요."></textarea>
                        </div>
                    </div>
                </div>

                {/* 버튼 클릭시 form2 wrap 추가, 우측 상단 삭제버튼 있어야함 */}
                <button className="add" type="button">
                    문의사항 추가
                    <span>
                        <FaPlus />
                    </span>
                </button>
            </div>
        </AlliancePurchasingFormContainer>
    );
};

export default AlliancePurchasingForm;
