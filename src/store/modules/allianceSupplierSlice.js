import { createSlice } from '@reduxjs/toolkit';
// import 참조변수 from '../../assets/api/데이터';

const initialState = {
    isSubmit: false,
    appli: {
        personalCheck: false,
        certify: {
            certify_name: '',
            certify_phone: {
                agency: '',
                part1: '',
                part2: '',
                part3: '',
            },
        },
        certifyNum: '',
        b_name: '',
        b_phone: '',
        b_email: '',
        b_num: {
            part1: '',
            part2: '',
            part3: '',
        },
    },
    inquiry: {
        b_num: '',
        b_pw: '',
    },
};

export const allianceSupplierSlice = createSlice({
    name: 'allianceSupplier',
    initialState,
    reducers: {
        resetState: () => initialState,
        onDisabled: (state, action) => {
            const { b_num, b_pw } = action.payload;

            state.inquiry.b_num = b_num;
            state.inquiry.b_pw = b_pw;

            if (!state.inquiry.b_num) {
                alert('사업자 번호를 입력해 주세요.');
                return;
            }
            if (isNaN(state.inquiry.b_num)) {
                alert('사업자 번호 - 숫자를 입력해 주세요.');
                return;
            }
            if (!state.inquiry.b_pw) {
                alert('비밀번호를 입력해 주세요.');
                return;
            }
            alert('해당 기능은 아직 사용하실 수 없습니다.');
        },

        onSubmitReset: (state, action) => {
            state.isSubmit = false;
        },

        onPersonalCheckSupplier: (state, action) => {
            state.appli.personalCheck = action.payload;
            // console.log(state.personalCheck);
        },

        // 인증하기
        onCertify: (state, action) => {
            state.appli.certify = action.payload;
            // console.log(state.appli.certify);
        },
        getCertifyNumber: (state, action) => {
            if (state.appli.certifyNum) {
                alert('인증번호가 입력되었습니다.');
                return;
            }

            if (!state.appli.certify.certify_name) {
                alert('실명을 입력해 주세요.');
                return;
            }
            if (!state.appli.certify.certify_phone.agency) {
                alert('통신사를 선택해 주세요.');
                return;
            }
            if (!state.appli.certify.certify_phone.part1 || state.appli.certify.certify_phone.part2 < 4 || state.appli.certify.certify_phone.part3 < 4) {
                alert('휴대폰번호를 입력해 주세요.');
                return;
            }
            if (
                isNaN(Number(state.appli.certify.certify_phone.part1)) ||
                isNaN(Number(state.appli.certify.certify_phone.part2)) ||
                isNaN(Number(state.appli.certify.certify_phone.part3))
            ) {
                alert('휴대폰번호 - 숫자를 입력해 주세요.');
                return;
            }

            state.appli.certifyNum = String(Math.floor(100000 + Math.random() * 900000));
        },
        insertCertify: (state, action) => {
            state.appli.b_name = state.appli.certify.certify_name;
            state.appli.b_phone = `${state.appli.certify.certify_phone.part1}-${state.appli.certify.certify_phone.part2}-${state.appli.certify.certify_phone.part3}`;
        },
        onEmail: (state, action) => {
            state.appli.b_email = action.payload;
            // console.log(state.appli.b_email);
        },

        // 다음
        onSubmit: (state, action) => {
            // dispatch 객체로 전달
            const { b_email, b_num } = action.payload;

            // payload 값 state에 넣음
            state.appli.b_email = b_email;
            state.appli.b_num = b_num;

            // 개인정보 동의 체크 여부 확인
            if (!state.appli.personalCheck) {
                alert('협력고객사 등록 신청 개인정보 수집 및 이용에 대해 동의해 주세요.');
                return;
            }

            if (!state.appli.certifyNum) {
                alert('휴대폰 인증해주세요.');
                return;
            }

            // 담당자 이름, 번호는 위에 있음.

            const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
            if (!state.appli.b_email) {
                alert('담당자 이메일을 입력해 주세요.');
                return;
            }
            if (pattern.test(state.appli.b_email) === false) {
                alert('이메일 형식이 올바르지 않습니다.');
                return;
            }

            if (!state.appli.b_num.part1 || !state.appli.b_num.part2 || !state.appli.b_num.part3) {
                alert('사업자 등록번호를 입력해 주세요.');
                return;
            }
            if (
                state.appli.b_num.part1 === '' ||
                isNaN(Number(state.appli.b_num.part1)) ||
                state.appli.b_num.part2 === '' ||
                isNaN(Number(state.appli.b_num.part2)) ||
                state.appli.b_num.part3 === '' ||
                isNaN(Number(state.appli.b_num.part3))
            ) {
                alert('사업자 등록번호 - 숫자를 입력해 주세요.');
                return;
            }

            state.isSubmit = true;
            alert('제출이 완료되었습니다.');
        },
    },
});

export const { resetState, onDisabled, onEmail, onSubmitReset, insertCertify, getCertifyNumber, onCertify, onPersonalCheckSupplier, onSubmit } =
    allianceSupplierSlice.actions;
export default allianceSupplierSlice.reducer;
