import styled from 'styled-components';

export const IntroductionWrap = styled.div`
    .inner {
        display: flex;
        justify-content: center;
        padding: 100px 0 100px 0;

        h3 {
            font-size: 35px;
            font-weight: 600;
        }

        p {
            font-size: 20px;
            font-weight: 400;
            padding: 15px 0;

            span {
                font-weight: 700;
            }
        }

        .btnDiv {
            padding: 0 0 20px 0;
        }
    }
`

export const TitleWrap = styled.div`
    padding: 20px 0 20px 0;
    font-size: 60px;
    font-weight: 600;
    text-align: center;
`

export const LeftSide = styled.div`
    padding: 0 50px 0 50px;
    border-right: 1px solid #d3d3d2;

    .location {
        width: 600px;
        height: 400px;
        border-radius: 50px 5px 5px 5px;
    }
`

export const RightSide = styled.div`
    padding: 0 50px 0 50px;

    .location {
        width: 600px;
        height: 400px;
        border-radius: 5px 5px 50px 5px;
    }
`