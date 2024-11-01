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
        height: 194px;
        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/common/sub_banner_bg.png');
    }
    .inner {
        h2 {
            position: absolute;
            left: 0;
            top: 108px;
            font-size: 26px;
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
`;
