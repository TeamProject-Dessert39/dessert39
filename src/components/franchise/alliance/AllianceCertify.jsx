import { IoCloseSharp } from 'react-icons/io5';
import { AllianceCertifyContainer } from './style';

const AllianceCertify = ({ setIsPopup, active }) => {
    return (
        <AllianceCertifyContainer className={`${active ? 'active' : ''}`}>
            <div className="box">
                <button
                    className="close"
                    type="button"
                    onClick={() => {
                        setIsPopup(false);
                    }}>
                    <IoCloseSharp className="icon" />
                </button>
                <div className="title">
                    <strong>본인인증</strong>
                    <p>
                        신용카드 명의자의 휴대폰 번호를 확인하시고. <span>SMS 인증번호 6자리</span>를 입력해 주세요.
                    </p>
                </div>
                <form action="">
                    <div className="desc">
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <label htmlFor="">실명</label>
                                    </th>
                                    <td>
                                        <input type="text" name="" id="" placeholder="실명 입력" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="">휴대폰번호</label>
                                    </th>
                                    <td className="phone">
                                        <select name="" id="" required>
                                            <option value="SKT">SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="LG U+">LG U+</option>
                                            <option value="알뜰폰 SKT">알뜰폰 SKT</option>
                                            <option value="알뜰폰 KT">알뜰폰 KT</option>
                                            <option value="알뜰폰 LG U+">알뜰폰 LG U+</option>
                                        </select>
                                        <select name="" id="" required>
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="016">016</option>
                                            <option value="017">017</option>
                                            <option value="018">018</option>
                                            <option value="019">019</option>
                                        </select>
                                        <span>-</span>
                                        <input type="text" name="" id="" maxLength={4} required />
                                        <span>-</span>
                                        <input type="text" name="" id="" maxLength={4} required />
                                        <button type="button">인증번호 받기</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="">인증번호</label>
                                    </th>
                                    <td>
                                        <input type="text" name="" id="" minLength={6} maxLength={6} required placeholder="인증번호 입력" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            휴대폰 인증 이용 시 이동통신사 사정으로 일시적으로 인증번호 발송이
                            <br />
                            지연될 수 있으니 양해하여 주시기 바랍니다.
                        </p>
                    </div>
                    <div className="certify_btns">
                        <button
                            onClick={() => {
                                setIsPopup(false);
                            }}
                            className="prev"
                            type="button">
                            취소
                        </button>
                        <button className="next">다음</button>
                    </div>
                </form>
            </div>
        </AllianceCertifyContainer>
    );
};

export default AllianceCertify;
