import styled from 'styled-components';

export const SpecialWrap = styled.div`
    padding: 100px 0;
    box-sizing: border-box;

    h3 {
        font-size: 35px;
        margin-bottom: 55px;
        letter-spacing: -0.075em;

        b {
            font-weight: bold;
        }
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        letter-spacing: -0.05em;
        margin-bottom: 25px;
    }

    .image-container {
        width: 100%;
        height: auto;
        opacity: 0;
        transition: opacity 0.8s ease;

        img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
            clip-path: inset(0 100% 0 0);
            transition: clip-path 1s ease;
        }

        &.visible {
            opacity: 1;

            img {
                clip-path: inset(0 0 0 0);
            }
        }
    }
`

