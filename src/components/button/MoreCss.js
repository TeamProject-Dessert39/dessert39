import styled, { createGlobalStyle } from 'styled-components';

export const MoreBtnWrap = styled.div`
    /* button {
        width: 170px;
        height:40px;
        border-radius: 25px;
        border: 2px solid black;
        cursor: pointer;
        color: black;
        background-color: white;
        transition: 0.5s;
        
        &:hover {
            color: white;
            background-color: black;
        }
    } */
`;
// Global styles
export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

// Styled components
export const ButtonsContainer = styled.div`
    margin-top: 50px;
    text-align: center;
    border-radius: 30px;
`;

export const BlobButton = styled.button`
    z-index: 1;
    position: relative;
    padding: 20px 60px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    color: black;
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
    outline: none;
    border: none;
    transition: color 0.5s;
    cursor: pointer;
    border-radius: 30px;

    &:before {
        content: '';
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px solid black;
        border-radius: 30px;
    }

    &:after {
        content: '';
        z-index: -2;
        position: absolute;
        left: 3px;
        top: 3px;
        width: 100%;
        height: 100%;
        transition: all 0.3s 0.2s;
        border-radius: 30px;
    }

    &:hover {
        color: white;
        border-radius: 30px;

        &:after {
            transition: all 0.3s;
            left: 0;
            top: 0;
            border-radius: 30px;
        }
    }
`;

export const ButtonInner = styled.span`
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: #ffffff;
`;

export const ButtonBlobs = styled.span`
    position: relative;
    display: block;
    height: 100%;
    filter: url('#goo');
`;

export const ButtonBlob = styled.span`
    position: absolute;
    top: 2px;
    width: 25%;
    height: 100%;
    background: black;
    border-radius: 100%;
    transform: translate3d(0, 150%, 0) scale(1.7);
    transition: transform 0.45s;

    @supports (filter: url('#goo')) {
        transform: translate3d(0, 150%, 0) scale(1.4);
    }

    ${({ $index }) => `
        left: ${$index * 30}%;
        transition-delay: ${$index * 0.08}s;
    `}

    ${BlobButton}:hover & {
        transform: translateZ(0) scale(1.7);

        @supports (filter: url('#goo')) {
            transform: translateZ(0) scale(1.4);
        }
    }
`;
