import styled from 'styled-components';

export const HeadquartersWrap = styled.div`
    padding: 100px 0;
    box-sizing: border-box;
    background-color: #fafafa;

    .center {
        width: 95%;
        max-width: 1440px;
        margin: 0 auto;

        h3 {
            font-size: 45px;
            letter-spacing: 0.01em;
            margin-bottom: 20px;
            text-align: center;
            font-weight: 600;
            text-transform: uppercase;
            font-family: 'Lexend Deca', sans-serif;
        }

        .desc {
            font-size: 16px;
            letter-spacing: -0.05em;
            text-align: center;
            line-height: 1.5;
            margin-bottom: 65px;
        }

        .partList {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 100px;
        }
    }
`