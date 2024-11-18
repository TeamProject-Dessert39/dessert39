import { createSlice } from '@reduxjs/toolkit';
// import 참조변수 from '../../assets/api/데이터';

const initialState = {
    isSubmit: false,
    allPersonalCheck: false,
    personalCheck: {
        part1: false,
        part2: false,
        part3: false,
    },
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
    store: '',
    recommend: '',
    addr: {
        addr1: '',
        addr2: '',
        addr3: '',
    },
    area: {
        area1: '',
        area2: '',
    },
    hope: {
        hope1: '',
        hope2: '',
        hope3: '',
    },
    etc: '',
};

export const allianceEntrySlice = createSlice({
    name: 'allianceEntry',
    initialState,
    reducers: {
        resetState: () => initialState,

        onSubmitReset: (state, action) => {
            state.isSubmit = false;
        },

        /* onAllPersonalCheck: (state, action) => {
            state.allPersonalCheck = !state.allPersonalCheck;
            console.log(state.allPersonalCheck);
        }, */
        onPersonalCheck1: (state, action) => {
            state.personalCheck.part1 = action.payload;
            // console.log(state.personalCheck.part1);
        },
        onPersonalCheck2: (state, action) => {
            state.personalCheck.part2 = action.payload;
        },
        onPersonalCheck3: (state, action) => {
            state.personalCheck.part3 = action.payload;
        },

        // 주소찾기
        onAddr: (state, action) => {
            state.addr = action.payload;
            // console.log(state.addr);
        },

        // 인증하기
        onCertify: (state, action) => {
            state.certify = action.payload;
            // console.log(state.certify);
        },
        getCertifyNumber: (state, action) => {
            if (state.certifyNum) {
                alert('인증번호가 입력되었습니다.');
                return;
            }

            if (!state.certify.certify_name) {
                alert('실명을 입력해 주세요.');
                return;
            }
            if (!state.certify.certify_phone.agency) {
                alert('통신사를 선택해 주세요.');
                return;
            }
            if (!state.certify.certify_phone.part1 || state.certify.certify_phone.part2 < 4 || state.certify.certify_phone.part3 < 4) {
                alert('휴대폰번호를 입력해 주세요.');
                return;
            }
            if (
                isNaN(Number(state.certify.certify_phone.part1)) ||
                isNaN(Number(state.certify.certify_phone.part2)) ||
                isNaN(Number(state.certify.certify_phone.part3))
            ) {
                alert('휴대폰번호 - 숫자를 입력해 주세요.');
                return;
            }

            state.certifyNum = String(Math.floor(100000 + Math.random() * 900000));
        },
        insertCertify: (state, action) => {
            state.b_name = state.certify.certify_name;
            state.b_phone = `${state.certify.certify_phone.part1}-${state.certify.certify_phone.part2}-${state.certify.certify_phone.part3}`;
        },
        onEmail: (state, action) => {
            state.b_email = action.payload;
            // console.log(state.b_email);
        },

        // 신규 입점 제의 상담 신청
        onSubmit: (state, action) => {
            // dispatch 객체로 전달
            const { store, recommend, area, hope, etc } = action.payload;

            // payload 값 state에 넣음
            state.store = store;
            state.recommend = recommend;
            state.area = area;
            state.hope = hope;
            state.etc = etc;

            // 개인정보 동의 체크 여부 확인
            if (!state.personalCheck.part1) {
                alert('입점 제의 상담 신청에 동의해 주세요.');
                return;
            }
            if (!state.personalCheck.part2) {
                alert('신규 입점 제의 이용약관에 동의해 주세요.');
                return;
            }
            if (!state.personalCheck.part3) {
                alert('개인정보취급방침에 동의해 주세요.');
                return;
            }

            if (!state.certifyNum) {
                alert('휴대폰 인증해주세요.');
                return;
            }

            // 담당자 이름, 번호는 위에 있음.

            const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
            if (!state.b_email) {
                alert('담당자 이메일을 입력해 주세요.');
                return;
            }
            if (pattern.test(state.b_email) === false) {
                alert('이메일 형식이 올바르지 않습니다.');
                return;
            }

            if (!state.store) {
                alert('점포 구분을 선택해 주세요.');
                return;
            }
            if (!state.recommend) {
                alert('추천인 구분을 선택해 주세요.');
                return;
            }

            if (!state.addr.addr1 || !state.addr.addr2) {
                alert('주소를 입력해 주세요.');
                return;
            }
            if (!state.addr.addr3) {
                alert('상세주소를 입력해 주세요.');
                return;
            }

            if (!state.area.area1) {
                alert('토지면적을 입력해 주세요.');
                return;
            }
            if (state.area.area1 === '' || isNaN(Number(state.area.area1))) {
                alert('토지면적 숫자를 입력해 주세요.');
                return;
            }
            if (!state.area.area2) {
                alert('전용면적을 입력해 주세요.');
                return;
            }
            if (state.area.area2 === '' || isNaN(Number(state.area.area2))) {
                alert('전용면적 숫자를 입력해 주세요.');
                return;
            }

            if (!state.hope.hope1) {
                alert('보증금을 입력해 주세요.');
                return;
            }
            if (state.hope.hope1 === '' || isNaN(Number(state.hope.hope1))) {
                alert('보증금 숫자를 입력해 주세요.');
                return;
            }
            if (!state.hope.hope2) {
                alert('임대료를 입력해 주세요.');
                return;
            }
            if (state.hope.hope2 === '' || isNaN(Number(state.hope.hope2))) {
                alert('임대료 숫자를 입력해 주세요.');
                return;
            }
            if (!state.hope.hope3) {
                alert('관리비를 입력해 주세요.');
                return;
            }
            if (state.hope.hope3 === '' || isNaN(Number(state.hope.hope3))) {
                alert('관리비 숫자를 입력해 주세요.');
                return;
            }

            if (!state.etc) {
                alert('기타 상세를 입력해 주세요.');
                return;
            }

            state.isSubmit = true;
            alert('신청되었습니다. 닫기를 누르면 메인화면으로 이동합니다.');
        },
    },
});

export const {
    resetState,
    onEmail,
    onSubmitReset,
    onAllPersonalCheck,
    insertCertify,
    getCertifyNumber,
    onCertify,
    onAddr,
    onPersonalCheck1,
    onPersonalCheck2,
    onPersonalCheck3,
    onSubmit,
} = allianceEntrySlice.actions;
export default allianceEntrySlice.reducer;
