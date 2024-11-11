import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
from { opacity: 0; }
to { opacity: 1; }
`;

export const SliderButtonWrap = styled.div`
    width:130px;
    height: 50px;
    color: #ffffff;
    background-color: #d1d1d1;
    border-radius: 25px;
    text-align: center;
    align-content: center;
    font-size: 18px;
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 2;

    button {
        background-color:#d1d1d1;
        color: #ffffff;
        border: none;
        font-size: 14px;
        cursor: pointer;
    }

    .leftBtn {
        padding-right: 10px;
    }

    .rightBtn {
        padding-left: 10px;
    }
`

export const ImageSliderWrap = styled.div`
    // ---------------------------------------------------------------------
    // swiper
    .swiper {
        width: 100%;
        /* height: 100%; // 원하는 높이 설정 */
        height: 850px;
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover; // 이미지 비율을 유지하면서 컨테이너를 채움
    }

    .swiper-pagination {
        position: absolute;
        left: 96%; /* 오른쪽 여백 조정 */
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10px !important;
        height: 750px !important;
    }

    .swiper-pagination-bullet {
        margin: 5px 0 !important; /* 세로 간격 조정 */
        width: 10px !important; /* 원의 너비 설정 */
        height: 10px !important; /* 원의 높이 설정 */
        text-indent: -9999px; /* 텍스트를 화면 밖으로 밀어냄 */
        overflow: hidden; /* 넘치는 텍스트 숨김 */
        background-color: #ffffff;
        opacity: 0.2;

        &:hover {
            background-color: white;
        }
    }

    .swiper-pagination-bullet-active {
        opacity: 1;
    }
    // ---------------------------------------------------------------------
`

export const TextBoxWrap = styled.div`
    position: absolute;
    top: 0%;
    left: 5%;
    width: 30%;
    height: 100%;
    display: flow;

    // ImagesSlider.jsx에서 props로 받아와서 animation 처리
    ${props => props.$animate && css`
        animation: ${fadeIn} 0.5s ease-out;
    `}


    h4 {
        position: relative;
        z-index: 1;
        margin: 200px 0 20px 0;
    }

    h3 {
        position: relative;
        z-index: 1;
        font-size: 50px;
        font-weight: 600;
    }

    p {
        position: relative;
        z-index: 1;
        font-size: 18px;
        font-weight: 600;
        margin: 20px 0 0 0;
    }

    .btnWrap {
        z-index: 1;
        position: absolute;
        top: 65%;
        left: 0%;
    }
`