import AllianceTitle from './AllianceTitle';
import { AllianceEntryFormContainer } from './style';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsExclamationCircle } from 'react-icons/bs';
import { useState } from 'react';

const AllianceEntryForm = () => {
    // textarea 글자 수 확인
    const [textarea, setTextarea] = useState('');
    const [textCount, setTextCount] = useState(0);

    const changeTextarea = (e) => {
        setTextarea(e.target.value);
        setTextCount(e.target.value.length);
    };

    return (
        <AllianceEntryFormContainer>
            <AllianceTitle txt={'신규 입점 제의 상담 신청'} />
            <div className="form01">
                <div className="input_wrap">
                    <div className="input_box store">
                        <div className="left">
                            <label className="req" htmlFor="store">
                                점포 구분
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="store01">
                                    <input type="radio" name="store" id="store01" required />
                                    <span className="custom"></span>
                                    <span>일반 (일반 건물에 입점 매장)</span>
                                </label>
                                <label htmlFor="store02">
                                    <input type="radio" name="store" id="store02" />
                                    <span className="custom"></span>
                                    <span>드라이브스루 (차량을 이용한주문 가능매장)</span>
                                </label>
                                <label htmlFor="store03">
                                    <input type="radio" name="store" id="store03" />
                                    <span className="custom"></span>
                                    <span>토지(신축 단독매장)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box recommend">
                        <div className="left">
                            <label className="req" htmlFor="recommend">
                                추천인 구분
                            </label>
                        </div>
                        <div className="right">
                            <div className="radio">
                                <label htmlFor="recommend01">
                                    <input type="radio" name="recommend" id="recommend01" required />
                                    <span className="custom"></span>
                                    <span>임대인 본인 (소유권자)</span>
                                </label>
                                <label htmlFor="recommend02">
                                    <input type="radio" name="recommend" id="recommend02" />
                                    <span className="custom"></span>
                                    <span>대리인 (부동산, 에이전트)</span>
                                </label>
                                <label htmlFor="recommend03">
                                    <input type="radio" name="recommend" id="recommend03" />
                                    <span className="custom"></span>
                                    <span>임대인 지인 (가족, 지인)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_box addr">
                        <div className="left">
                            <label className="req" htmlFor="addr">
                                추천점포 주소
                            </label>
                        </div>
                        <div className="right">
                            <div>
                                <button className="button">
                                    <FaMapMarkerAlt />
                                    주소찾기
                                </button>
                                <input type="text" name="" id="" disabled required />
                            </div>
                            <div>
                                <input type="text" name="" id="" disabled required />
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder="상세 주소 입력" required />
                            </div>
                            <p>
                                <BsExclamationCircle />
                                주소 검색이 안되실 경우 추천 주소(시, 군, 구)를 임의로 선택 후 상세주소에 실제 주소를 입력하시거나, 아래 기타 상세에 별도로
                                입력하여 주시면 담당자가 확인 가능합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form02">
                <div className="input_wrap">
                    <div className="input_box area">
                        <div className="left">
                            <label className="req" htmlFor="area">
                                면적
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="area" id="area01" required placeholder="토지면적을 입력해주세요." />
                            <p>평</p>
                            <input type="text" name="area" id="area02" required placeholder="전용면적을 입력해주세요." />
                            <p>
                                평<span>[전용면적 : 건물 내 실 면적]</span>
                            </p>
                        </div>
                    </div>

                    <div className="input_box hope">
                        <div className="left">
                            <label className="req" htmlFor="hope">
                                희망 임대조건
                            </label>
                        </div>
                        <div className="right">
                            <input type="text" name="hope" id="hope01" required placeholder="보증금을 입력해주세요." />
                            <p>만원</p>
                            <input type="text" name="hope" id="hope02" required placeholder="임대료을 입력해주세요." />
                            <p>만원</p>
                            <input type="text" name="hope" id="hope03" required placeholder="관리비를 입력해주세요." />
                            <p>만원</p>
                        </div>
                    </div>

                    <div className="input_box etc">
                        <div className="left">
                            <label className="req" htmlFor="hope">
                                기타 상세
                            </label>
                        </div>
                        <div className="right">
                            <textarea
                                onChange={changeTextarea}
                                name=""
                                id=""
                                required
                                placeholder="입점 신청 주소지 주변 상권에 대한 상세 설명, 임차료 협의 가능 여부, 복수 층일 경우 층별 면적 등"></textarea>
                            <p>
                                <span>{textCount}</span> / 1800byte
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AllianceEntryFormContainer>
    );
};

export default AllianceEntryForm;
