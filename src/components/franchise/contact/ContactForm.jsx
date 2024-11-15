import { ContactFormContainer } from './style';

const ContactForm = () => {
    /* 
    checkbox 유효성 검사

    document.querySelector("form").addEventListener("submit", function(event) {
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='shape']");
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isChecked) {
        event.preventDefault(); // 제출 막기
        alert("최소 한 가지 상담 방식을 선택해 주세요.");
    }
    });
    */

    /* 
    기타 체크시 input text 입력되어야 넘어가지도록.
    */

    /* 
    휴대전화 text input 숫자 유효성 체크 필요
    */

    /* 
    기타 text값 받아야함
    */

    return (
        <ContactFormContainer>
            <div className="input_wrap input_wrap01">
                <div className="input_box phone">
                    <div className="left">
                        <label className="req" htmlFor="phone">
                            휴대전화
                        </label>
                    </div>
                    <div className="right">
                        <select name="" id="phone" required>
                            <option value="">선택</option>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                        </select>
                        <input type="text" name="" id="" required placeholder="12341234" minLength={8} maxLength={8} />
                    </div>
                </div>
                <div className="input_box phone">
                    <div className="left">
                        <label className="req" htmlFor="phone">
                            휴대전화 확인
                        </label>
                    </div>
                    <div className="right">
                        <select name="" id="phone" required>
                            <option value="">선택</option>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                        </select>
                        <input type="text" name="" id="" required placeholder="12341234" minLength={8} maxLength={8} />
                    </div>
                </div>
            </div>
            <div className="input_wrap input_wrap02">
                <div className="input_box purpose">
                    <div className="left">
                        <label className="req" htmlFor="">
                            상담 목적
                        </label>
                    </div>
                    <div className="right">
                        <p className="plus">✔️ 입점 제의 상가는 인근 희망 점주님에게 추천 후 여부에 따라 개별적으로 연락드립니다.</p>
                        <div className="radio">
                            <label htmlFor="purpose01">
                                <input type="radio" name="purpose" id="purpose01" required />
                                <span className="custom"></span>
                                <span>가맹 문의</span>
                            </label>
                            <label htmlFor="purpose02">
                                <input type="radio" name="purpose" id="purpose02" />
                                <span className="custom"></span>
                                <span>입점 제의</span>
                            </label>
                            <label htmlFor="purpose03">
                                <input type="radio" name="purpose" id="purpose03" />
                                <span className="custom"></span>
                                <span>업종 변경</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="input_box shape">
                    <div className="left">
                        <label className="req" htmlFor="shape">
                            상담 형태
                        </label>
                        <span>[다중 선택 가능]</span>
                    </div>
                    <div className="right">
                        <p className="plus">✔️ 빠른 상담 원하시면 전화 상담을 꼭 체크해 주세요.</p>
                        <div className="check">
                            <div className="top">
                                <label htmlFor="shape01">
                                    <input type="checkbox" name="shape01" id="shape01" />
                                    <span className="custom"></span>
                                    <span>전화 상담</span>
                                </label>
                                <label htmlFor="shape02">
                                    <input type="checkbox" name="shape02" id="shape02" />
                                    <span className="custom"></span>
                                    <span>문자 상담</span>
                                </label>
                                <label htmlFor="shape03">
                                    <input type="checkbox" name="shape03" id="shape03" />
                                    <span className="custom"></span>
                                    <span>카카오톡 상담</span>
                                </label>
                            </div>
                            <label htmlFor="shape_other">
                                <input type="checkbox" name="shape_other" id="shape_other" />
                                <span className="custom"></span>
                                <span>기타(직접 입력)</span>
                                <input type="text" name="" id="shape_other_text" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="input_box time">
                    <div className="left">
                        <label className="req" htmlFor="time">
                            상담 희망 시간
                        </label>
                    </div>
                    <div className="right">
                        <select name="" id="time" required>
                            <option value="">선택</option>
                            <option value="상시 가능">상시 가능</option>
                            <option value="9:30 ~ 10:30">9:30 ~ 10:30</option>
                            <option value="10:30 ~ 11:30">10:30 ~ 11:30</option>
                            <option value="11:30 ~ 12:30">11:30 ~ 12:30</option>
                            <option value="12:30 ~ 13:30">12:30 ~ 13:30</option>
                            <option value="13:30 ~ 14:30">13:30 ~ 14:30</option>
                            <option value="14:30 ~ 15:30">14:30 ~ 15:30</option>
                            <option value="15:30 ~ 16:30">15:30 ~ 16:30</option>
                            <option value="16:30 ~ 17:30">16:30 ~ 17:30</option>
                            <option value="그 외 시간">그 외 시간</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="input_wrap input_wrap03">
                <div className="input_box motive">
                    <div className="left">
                        <label className="req" htmlFor="motive">
                            신청계기
                        </label>
                        <span>[다중 선택 가능]</span>
                    </div>
                    <div className="right">
                        <div className="check">
                            <div className="top">
                                <label htmlFor="motive01">
                                    <input type="checkbox" name="motive01" id="motive01" />
                                    <span className="custom"></span>
                                    <span>유튜브</span>
                                </label>
                                <label htmlFor="motive02">
                                    <input type="checkbox" name="motive02" id="motive02" />
                                    <span className="custom"></span>
                                    <span>네이버검색</span>
                                </label>
                                <label htmlFor="motive03">
                                    <input type="checkbox" name="motive03" id="motive03" />
                                    <span className="custom"></span>
                                    <span>네이버블로그</span>
                                </label>
                                <label htmlFor="motive04">
                                    <input type="checkbox" name="motive04" id="motive04" />
                                    <span className="custom"></span>
                                    <span>인스타그램</span>
                                </label>
                                <label htmlFor="motive05">
                                    <input type="checkbox" name="motive05" id="motive05" />
                                    <span className="custom"></span>
                                    <span>지인소개</span>
                                </label>
                                <label htmlFor="motive06">
                                    <input type="checkbox" name="motive06" id="motive06" />
                                    <span className="custom"></span>
                                    <span>매장방문</span>
                                </label>
                            </div>
                            <label htmlFor="motive_other">
                                <input type="checkbox" name="motive_other" id="motive_other" />
                                <span className="custom"></span>
                                <span>기타(직접 입력)</span>
                                <input type="text" name="" id="motive_other_text" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="input_wrap input_wrap04">
                <div className="input_box desc">
                    <div className="left">
                        <label className="req" htmlFor="desc">
                            문의 내용
                        </label>
                    </div>
                    <div className="right">
                        <textarea name="desc" id="desc" required placeholder="내용을 입력해 주세요."></textarea>
                        <p className="precaution">
                            지나친 욕설이나 광고글, 타인의 명예를 훼손하는 글을 올리시거나 반복적인 글은 별도의 통보 없이 삭제될 수 있습니다.
                            <br />
                            입력하신 개인 정보는 개설 문의에 대한 답변 목적으로 사용되며, 이용 목적이 달성되면 지체 없이 파기합니다.
                            <br />
                            아래 개인 정보를 입력하시고 개설 문의를 하셨을 경우 dessert.39 홈페이지 개인정보취급방침에 동의하신 것으로 간주합니다.
                        </p>
                    </div>
                </div>
            </div>
        </ContactFormContainer>
    );
};

export default ContactForm;
