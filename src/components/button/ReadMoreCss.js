import styled from 'styled-components';

export const ReadMoreBtnWrap = styled.div`
    position:relative;
    width: 180px;
    height: 50px;
    background-color: #cbccba;
    border-radius: 10px;
    align-content: center;
    justify-items: center;
    transition: 0.3s;

    &:hover {
        .arrow {
            transform: translateX(50%);
        }

        .engText {
            color: rgba(255, 255, 255, 0.59);
        }
    }

    a {
        display: flex;
    }

    .engText {
        padding-right: 20px;
        color: rgba(255, 255, 255);
    }

    .circle {
        width: 24px;
        height: 24px;
        border-radius: 100%;
        background-color: #aab090;
    }

    .arrow {
        position: absolute;
        top: -10%;
        /* transform: translateX(-50%); */
        left: 101px;
        display: block;
        width: 60px;
        overflow: hidden;
        transition: 0.3s;
        right: 0;
    }
`