import { styled } from 'styled-components';

export const SubLayoutContainer = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 185px;
        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/common/sub_banner_bg.png');
    }
    .inner {
        width: 95%;
        h2 {
            position: absolute;
            left: 0;
            top: 100px;
            font-size: 26px;
            letter-spacing: -1px;
            b {
                margin: 0 6px;
                font-weight: 700;
            }
            span {
                display: block;
                line-height: 1.3;
                font-size: 60px;
                font-weight: 500;
                font-family: 'Lexend Deca', sans-serif;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        .inner {
            h2 {
                top: 110px;
                font-size: 24px;
                span {
                    line-height: 1.2;
                    font-size: 54px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        height: 188px;
        &::before {
            height: 160px;
        }
        .inner {
            h2 {
                top: 92px;
                font-size: 22px;
                letter-spacing: -1.5px;
                span {
                    font-size: 48px;
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        height: 144px;
        &::before {
            height: 120px;
        }
        .inner {
            h2 {
                top: 60px;
                font-size: 20px;
                letter-spacing: -2px;
                span {
                    font-size: 42px;
                }
            }
        }
    }
`;
