import { styled } from 'styled-components';

export const Section01Container = styled.div`
    .pc {
        display: block;
    }
    .mo {
        display: none;
    }
    .inner {
        padding: 70px 0 100px;
        width: 95%;
        .box {
            width: 95%;
            margin: 0 auto;
            text-align: center;
            img {
                width: 100%;
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (max-width: 1440px) {
        .inner {
            padding: 60px 0 100px;
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        .inner {
            padding: 40px 0 80px;
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        .pc {
            display: none;
        }
        .mo {
            display: block;
        }
        .inner {
            padding: 20px 0 60px;
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        .inner {
            padding: 20px 0 40px;
        }
    }
`;

export const Section02Container = styled.div`
    .inner {
        padding-bottom: 100px;
        width: 95%;
        .title {
            text-align: center;
            h3 {
                margin: 0 auto;
                width: fit-content;
                letter-spacing: -3px;
                line-height: 1.5;
                font-size: 45px;
                font-weight: 700;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 14px;
                    z-index: -1;
                    background-color: #ffb400;
                    bottom: 0;
                    left: 0;
                    display: block;
                }
            }
            p {
                margin: 12px 0 24px;
                font-size: 13px;
                color: #adadad;
            }
        }
        .pic {
            margin: 0 auto;
            width: 800px;
            max-width: 100%;
            img {
                width: 100%;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        /* 스타일 코드 */
        .inner {
            padding-bottom: 80px;
            .title {
                h3 {
                    font-size: 36px;
                    &::before {
                        height: 12px;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        /* 스타일 코드 */
        .inner {
            padding-bottom: 60px;
            .title {
                h3 {
                    font-size: 30px;
                    &::before {
                        height: 10px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        /* 스타일 코드 */
        .inner {
            padding-bottom: 40px;
            .title {
                h3 {
                    font-size: 26px;
                    &::before {
                        height: 8px;
                    }
                }
                p {
                    margin-top: 10px;
                    font-size: 12px;
                }
            }
        }
    }
`;

export const Section03Container = styled.div`
    .inner {
        padding-bottom: 180px;
        width: 95%;
        .title {
            text-align: center;
            h3 {
                margin: 0 auto;
                width: fit-content;
                letter-spacing: -3px;
                line-height: 1.5;
                font-size: 45px;
                font-weight: 700;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 14px;
                    z-index: -1;
                    background-color: #ffb400;
                    bottom: 0;
                    left: 0;
                    display: block;
                }
            }
            p {
                margin: 12px 0 24px;
                font-size: 13px;
                color: #adadad;
                span {
                    color: #666;
                    font-weight: 500;
                }
            }
        }
        .pic {
            margin: 0 auto;
            width: 800px;
            max-width: 100%;
            img {
                width: 100%;
            }
        }
    }
    @media (max-width: 1440px) {
        .inner {
            padding-bottom: 160px;
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        /* 스타일 코드 */
        .inner {
            padding-bottom: 140px;
            .title {
                h3 {
                    font-size: 36px;
                    &::before {
                        height: 12px;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        /* 스타일 코드 */
        .inner {
            padding-bottom: 100px;
            .title {
                h3 {
                    font-size: 30px;
                    &::before {
                        height: 10px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        /* 스타일 코드 */
        .inner {
            .title {
                h3 {
                    font-size: 26px;
                    &::before {
                        height: 8px;
                    }
                }
                p {
                    margin-top: 10px;
                    font-size: 12px;
                }
            }
        }
    }
`;

export const Section04Container = styled.div`
    padding: 100px 0;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se04_bg.png');
    background-color: #191819;
    background-size: cover;
    background-position: 50% 100%;
    --swiper-theme-color: #fff;
    .inner {
        width: 95%;
        .title {
            text-align: center;
            margin-bottom: 40px;
            h3 {
                color: #ffb400;
                margin: 0 auto;
                width: fit-content;
                line-height: 1.4;
                font-size: 45px;
                font-weight: 700;
                position: relative;
                em {
                    display: block;
                    margin-bottom: 6px;
                    span {
                        font-size: 62px;
                    }
                }
                & > span {
                    margin: 0 auto;
                    width: fit-content;
                    display: block;
                    color: #fff;
                    font-size: 42px;
                    position: relative;
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                margin-top: 12px;
                color: #00f9ff;
                font-weight: 500;
                font-size: 18px;
            }
        }
        .slide01 {
            margin: 0 70px 100px;
            .swiper {
                width: 100%;
                height: 100%;
            }
            .swiper-slide {
                width: 100%;
                height: 440px;
                border: 5px solid #ffb400;
                box-sizing: border-box;
                border-radius: 30px;
                text-align: center;
                padding: 30px 0;
                background-size: cover;
                .store {
                    width: 150px;
                    margin: auto;
                    p {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 42px;
                        border-radius: 8px;
                        font-size: 18px;
                        font-weight: 700;
                        background-color: #ffb400;
                    }
                }
                .txt {
                    margin-top: 16px;
                    p:first-of-type {
                        color: #ffb400;
                        font-size: 28px;
                        font-weight: 700;
                    }
                    strong {
                        line-height: 1.5;
                        color: #ffb400;
                        font-size: 60px;
                        font-weight: 700;
                    }
                    p:last-of-type {
                        color: #fff;
                        font-size: 18px;
                        font-weight: 500;
                    }
                }
                .info {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                    p:first-child {
                        font-weight: 700;
                        font-size: 14px;
                        margin-bottom: 4px;
                    }
                }
            }
        }
        .sub_tit {
            word-break: keep-all;
            text-align: center;
            font-size: 22px;
            font-weight: 500;
            color: #fff;
            margin-bottom: 100px;
            padding: 0 30px;
        }
        .slide02 {
            margin: 0 70px 65px;
            position: relative;
            .swiper {
                width: 100%;
                height: 100%;
                position: relative;
            }
            .swiper-slide {
                width: 100%;
                height: 340px;
                border: 5px solid #ffb400;
                box-sizing: border-box;
                border-radius: 30px;
                text-align: center;
                padding: 25px 0;
                background-size: cover;
                .store {
                    margin: auto;
                    width: fit-content;
                    p {
                        padding: 5px 15px;
                        border-radius: 8px;
                        font-size: 15px;
                        font-weight: 700;
                        background-color: #ffb400;
                    }
                }
                .txt {
                    margin-top: 16px;
                    p:first-of-type {
                        color: #ffb400;
                        font-size: 20px;
                        font-weight: 700;
                    }
                    strong {
                        color: #ffb400;
                        font-size: 38px;
                        font-weight: 700;
                    }
                    p:last-of-type {
                        margin-top: 4px;
                        color: #fff;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
                .info {
                    width: 100%;
                    position: absolute;
                    bottom: 25px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                    font-size: 14px;
                    p:first-child {
                        font-weight: 700;
                        margin-bottom: 4px;
                    }
                }
            }
            .swiper-button-prev {
                position: absolute;
                top: 55%;
                left: -50px;
                background-color: transparent;
                border: none;
                transform: translateY(-50%);
            }
            .swiper-button-next {
                position: absolute;
                top: 55%;
                right: -50px;
                background-color: transparent;
                border: none;
                transform: translateY(-50%);
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        .inner {
            .slide01 {
                .swiper-slide {
                    height: 410px;
                    .store {
                        width: 140px;
                        p {
                            height: 38px;
                            font-size: 17px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 26px;
                        }
                        strong {
                            font-size: 50px;
                        }
                        p:last-of-type {
                            font-size: 17px;
                        }
                    }
                    .info {
                        font-size: 15px;
                    }
                }
            }
            .sub_tit {
                font-size: 20px;
            }
            .slide02 {
                margin: 0 70px 60px;
                .swiper-slide {
                    height: 325px;
                    .store {
                        p {
                            padding: 2px 10px;
                            font-size: 14px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 18px;
                        }
                        strong {
                            font-size: 32px;
                        }
                        p:last-of-type {
                            font-size: 15px;
                        }
                    }
                    .info {
                        font-size: 13px;
                        p:first-child {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 80px 0;
        .inner {
            .title {
                text-align: center;
                margin-bottom: 50px;
                h3 {
                    line-height: 1.2;
                    font-size: 36px;
                    & > span {
                        font-size: 36px;
                        letter-spacing: -0.5px;
                    }
                }
                p {
                    font-size: 18px;
                }
            }
            .slide01 {
                margin: 0 40px 80px;
                .swiper-slide {
                    height: 400px;
                    .store {
                        width: 140px;
                        p {
                            height: 36px;
                            font-size: 16px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 26px;
                        }
                        strong {
                            line-height: 1.5;
                            font-size: 46px;
                        }
                        p:last-of-type {
                            font-size: 16px;
                        }
                    }
                    .info {
                        font-size: 15px;
                        width: 100%;
                        p:first-child {
                            font-size: 14px;
                        }
                    }
                }
            }
            .sub_tit {
                font-size: 18px;
                margin-bottom: 80px;
            }
            .slide02 {
                margin: 0 40px 60px;
                .swiper-slide {
                    height: 325px;
                    padding: 25px 0;
                    .store {
                        margin: auto;
                        width: fit-content;
                        p {
                            padding: 2px 10px;
                            border-radius: 8px;
                            font-size: 14px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 18px;
                        }
                        strong {
                            display: block;
                            padding: 0 20px;
                            font-size: 32px;
                            line-height: 1.3;
                            margin: 6px 0 10px;
                            word-break: keep-all;
                        }
                        p:last-of-type {
                            margin-top: 4px;
                            font-size: 15px;
                        }
                    }
                    .info {
                        width: 100%;
                        font-size: 13px;
                        p:first-child {
                            font-size: 13px;
                            margin-bottom: 4px;
                        }
                    }
                }
                .swiper-button-prev {
                    left: -40px;
                }
                .swiper-button-next {
                    right: -40px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 601px) and (max-width: 768px) {
        /* 스타일 코드 */
        padding: 50px 0;
        .inner {
            .title {
                text-align: center;
                margin-bottom: 50px;
                h3 {
                    line-height: 1.2;
                    font-size: 26px;
                    & > span {
                        font-size: 26px;
                        letter-spacing: -1px;
                    }
                }
                p {
                    font-size: 16px;
                }
            }

            .slide01 {
                margin: 0 40px 50px;
                .swiper-slide {
                    height: 380px;
                    .store {
                        width: 120px;
                        margin: auto;
                        p {
                            height: 34px;
                            border-radius: 8px;
                            font-size: 15px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 24px;
                        }
                        strong {
                            line-height: 1.5;
                            font-size: 45px;
                        }
                        p:last-of-type {
                            font-size: 16px;
                        }
                    }
                    .info {
                        font-size: 14px;
                        width: 100%;
                        p:first-child {
                            font-size: 14px;
                            margin-bottom: 4px;
                        }
                    }
                }
            }
            .sub_tit {
                font-size: 17px;
                margin-bottom: 50px;
            }
            .slide02 {
                margin: 0 50px 50px;
                .swiper-slide {
                    height: 300px;
                    padding: 25px 0;
                    .store {
                        margin: auto;
                        width: fit-content;
                        p {
                            padding: 2px 8px;
                            border-radius: 8px;
                            font-size: 13px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 18px;
                        }
                        strong {
                            display: block;
                            padding: 0 20px;
                            font-size: 32px;
                            line-height: 1.2;
                            margin: 4px 0 10px;
                            word-break: keep-all;
                        }
                        p:last-of-type {
                            margin-top: 4px;
                            font-size: 14px;
                        }
                    }
                    .info {
                        width: 100%;
                        font-size: 12px;
                        p:first-child {
                            line-height: 1;
                            font-size: 13px;
                            margin-bottom: 4px;
                        }
                    }
                }
                .swiper-button-prev {
                    left: -50px;
                }
                .swiper-button-next {
                    right: -50px;
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 600px) {
        /* 스타일 코드 */
        padding: 50px 0;
        .inner {
            .title {
                text-align: center;
                margin-bottom: 50px;
                h3 {
                    line-height: 1.2;
                    font-size: 26px;
                    & > span {
                        font-size: 26px;
                        letter-spacing: -1px;
                    }
                }
                p {
                    font-size: 16px;
                }
            }

            .slide01 {
                margin: 0 40px 50px;
                .swiper-slide {
                    height: 340px;
                    border-radius: 26px;
                    .store {
                        width: 100px;
                        margin: auto;
                        p {
                            height: 30px;
                            border-radius: 8px;
                            font-size: 15px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 22px;
                        }
                        strong {
                            display: block;
                            line-height: 1.5;
                            font-size: 40px;
                            margin-bottom: 3px;
                        }
                        p:last-of-type {
                            font-size: 15px;
                        }
                    }
                    .info {
                        font-size: 13px;
                        width: 100%;
                        p:first-child {
                            font-size: 13px;
                            margin-bottom: 4px;
                        }
                    }
                }
            }
            .sub_tit {
                font-size: 17px;
                margin-bottom: 50px;
            }
            .slide02 {
                margin: 0 50px 35px;
                .swiper-slide {
                    height: 260px;
                    border: 3px solid #ffb400;
                    border-radius: 20px;
                    padding: 25px 0;
                    .store {
                        margin: auto;
                        width: fit-content;
                        p {
                            padding: 2px 8px;
                            border-radius: 8px;
                            font-size: 12px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 14px;
                        }
                        strong {
                            display: block;
                            padding: 0 20px;
                            font-size: 22px;
                            line-height: 1.2;
                            margin: 2px 0 8px;
                            word-break: keep-all;
                        }
                        p:last-of-type {
                            margin-top: 4px;
                            font-size: 12px;
                        }
                    }
                    .info {
                        width: 100%;
                        bottom: 25px;
                        font-size: 11px;
                        p:first-child {
                            line-height: 1;
                            font-size: 11px;
                            margin-bottom: 4px;
                        }
                    }
                }
                .swiper-button-prev {
                    left: -40px;
                }
                .swiper-button-next {
                    right: -40px;
                }
            }
        }
    }
`;

export const Section05Container = styled.div`
    padding: 100px 0;
    .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        text-align: center;
        width: 95%;
        .video {
            margin: 0 auto;
            width: 650px;
            height: 366px;
            border-radius: 20px;
            overflow: hidden;
            iframe {
                width: 100%;
                height: 100%;
            }
        }
        .txt01 {
            font-size: 30px;
            font-weight: 700;
            line-height: 1.5;
            p:first-child {
                color: #ffb400;
            }
        }
        .txt02 {
            margin: 0 auto;
            width: 650px;
            background-color: #1c1c1c;
            padding: 35px;
            box-sizing: border-box;
            border-radius: 20px;
            margin-bottom: 40px;
            p {
                font-weight: 500;
                font-size: 18px;
                color: #ffd300;
                &:first-child {
                    color: #fff;
                    margin-bottom: 6px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 80px 0;
        /* 스타일 코드 */
        .inner {
            .video {
                width: 100%;
                max-width: 650px;
                height: 56.308vw;
            }
            .txt01 {
                font-size: 26px;
                line-height: 1.4;
                letter-spacing: -0.5px;
                p {
                    word-break: keep-all;
                }
            }
            .txt02 {
                width: 100%;
                max-width: 650px;
                padding: 30px 35px;
                border-radius: 20px;
                margin-bottom: 40px;
                p {
                    font-size: 18px;
                    word-break: keep-all;
                    line-height: 1.5;
                    &:first-child {
                        color: #fff;
                        margin-bottom: 6px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 1 */
    @media (max-width: 512px) {
        padding: 60px 0;
        /* 스타일 코드 */
        .inner {
            .video {
                width: 100%;
                max-width: 650px;
                height: 56.308vw;
            }
            .txt01 {
                font-size: 22px;

                line-height: 1.4;
                letter-spacing: -0.5px;
                p {
                    word-break: keep-all;
                }
            }
            .txt02 {
                width: 100%;
                max-width: 650px;
                padding: 22px 28px;
                border-radius: 20px;
                margin-bottom: 40px;
                p {
                    font-size: 16px;

                    word-break: keep-all;
                    line-height: 1.5;
                    &:first-child {
                        color: #fff;
                        margin-bottom: 6px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 2 */
    @media (max-width: 400px) {
        /* 스타일 코드 */
        .inner {
            .video {
                width: 100%;
                max-width: 650px;
                height: 56.308vw;
            }
            .txt01 {
                font-size: 20px;

                line-height: 1.4;
                letter-spacing: -0.5px;
                p {
                    word-break: keep-all;
                }
            }
            .txt02 {
                width: 100%;
                max-width: 650px;
                padding: 18px 20px;
                border-radius: 20px;
                margin-bottom: 40px;
                p {
                    font-size: 16px;

                    word-break: keep-all;
                    line-height: 1.5;
                    &:first-child {
                        color: #fff;
                        margin-bottom: 6px;
                    }
                }
            }
        }
    }
`;

export const Section06Container = styled.div`
    padding: 100px 0;
    background-color: #f9f9f9;
    .inner {
        width: 95%;
        h3 {
            margin-bottom: 40px;
            font-size: 35px;
            line-height: 1.3;
            span {
                display: block;
                font-weight: 700;
                color: #ffb400;
            }
        }
        .slide {
            .swiper {
                width: 100%;
                height: 100%;
                .swiper-slide {
                    position: relative;
                    width: 100%;
                    padding-bottom: 50px;
                    box-sizing: border-box;
                    .video {
                        width: 100%;
                        /* height: 282px; */
                        height: 16.588vw;
                        iframe {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .box {
                        background-color: #1c1c1c;
                        padding: 25px;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .txt {
                            h4 {
                                color: #ffb400;
                                font-weight: 700;
                                font-size: 18px;
                                line-height: 1.4;
                                word-break: keep-all;
                            }
                            .desc {
                                margin: 16px 0 40px;
                                p {
                                    font-weight: 400;
                                    color: #fff;
                                    font-size: 16px;
                                    line-height: 1.7;
                                    word-break: keep-all;
                                }
                            }
                        }
                        p {
                            color: #fff;
                            font-weight: 300;
                            font-size: 16px;
                        }
                    }
                }
                .swiper-button-prev,
                .swiper-button-next {
                    opacity: 0.5;
                    color: #000;
                }
            }
        }
        .pagination {
            margin-top: 10px;
            font-size: 45px;
            font-weight: 400;
            font-family: 'Lexend Deca', sans-serif;
            color: #666;
            span {
                display: inline-block;
                width: 52px;
                color: #1c1c1c;
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 80px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 40px;
                font-size: 35px;
                line-height: 1.3;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 50px;
                        .video {
                            /* height: 285px; */
                            height: 21.269vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 16px;
                                        line-height: 1.7;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 16px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 45px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 52px;
                    color: #1c1c1c;
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        /* 스타일 코드 */
        padding: 70px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 26px;
                font-size: 28px;
                line-height: 1.3;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 40px;
                        .video {
                            /* height: 272px; */
                            height: 28vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 15px;
                                        line-height: 1.7;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 15px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 32px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 42px;
                    color: #1c1c1c;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        /* 스타일 코드 */
        padding: 70px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 24px;
                font-size: 24px;
                line-height: 1.3;
                word-break: keep-all;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                    word-break: keep-all;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 20px;
                        .video {
                            /* height: 232px; */
                            height: 33.721vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 14px;
                                        line-height: 1.7;
                                        font-weight: 600;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 14px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 26px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 30px;
                    color: #1c1c1c;
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        /* 스타일 코드 */
        padding: 60px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 22px;
                font-size: 24px;
                line-height: 1.3;
                word-break: keep-all;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                    word-break: keep-all;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 20px;
                        .video {
                            /* height: 150px; */
                            height: 40vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 14px;
                                        line-height: 1.7;
                                        font-weight: 600;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 14px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 26px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 30px;
                    color: #1c1c1c;
                }
            }
        }
    }
`;

export const Section07Container = styled.div`
    padding: 100px 0;
    .inner {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        .left {
            width: 46%;
            h3 {
                font-size: 45px;
                font-weight: 700;
                word-break: keep-all;
                margin-bottom: 40px;
                letter-spacing: -3px;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                font-size: 20px;
                word-break: keep-all;
                font-weight: 300;
                &:last-of-type {
                    font-weight: 400;
                    width: 84%;
                    line-height: 1.4;
                }
            }
            .video {
                margin: 16px 0;
                width: 80%;
                /* height: 300px; */
                height: 20.604vw;
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .right {
            width: 54%;
            .title {
                margin: 0 auto;
                width: fit-content;
                font-size: 18px;
                font-weight: 500;
                color: #fff;
                border-radius: 40px;
                background-color: #1c1c1c;
                padding: 6px 24px;
                margin-bottom: 35px;
            }
            ul {
                li {
                    padding: 6px 15px;
                    display: flex;
                    align-items: center;
                    border: 2px solid #000;
                    border-bottom: none;
                    &:last-child {
                        border-bottom: 2px solid #000;
                    }
                    i {
                        svg {
                            vertical-align: -2px;
                        }
                        &::after {
                            content: '';
                            background-color: #1c1c1c;
                            display: inline-block;
                            width: 2px;
                            height: 10px;
                            margin: 1px 10px 1px 12px;
                        }
                    }
                    p {
                        span {
                            color: #922108;
                            font-weight: 700;
                            margin-right: 4px;
                        }
                        &::after {
                            content: '/';
                            margin: 0 8px;
                            font-weight: 500;
                        }
                        &:last-child::after {
                            content: none;
                        }
                    }
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 80px 0;
        .inner {
            .left {
                h3 {
                    font-size: 45px;
                }
                p {
                    font-size: 17px;
                    word-break: keep-all;
                    font-weight: 300;
                    &:last-of-type {
                        font-weight: 400;
                        width: 84%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px 0;
                    width: 80%;
                    /* height: 300px; */
                    height: 20.604vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 54%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 60px 0;
        .inner {
            flex-direction: column;
            gap: 40px;
            .left {
                width: 100%;
                h3 {
                    font-size: 36px;
                    width: 600px;
                }
                p {
                    font-size: 17px;
                    word-break: keep-all;
                    font-weight: 300;
                    text-align: center;
                    &:last-of-type {
                        margin: 0 auto 20px;
                        font-weight: 400;
                        width: 61%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px auto;
                    width: 60%;
                    /* height: 300px; */
                    height: 31.712vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 100%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 17px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 80px 0;
        .inner {
            flex-direction: column;
            gap: 40px;
            .left {
                width: 100%;
                h3 {
                    font-size: 30px;
                    width: 100%;
                }
                p {
                    font-size: 16px;
                    word-break: keep-all;
                    font-weight: 300;
                    text-align: center;
                    &:last-of-type {
                        margin: 0 auto 20px;
                        font-weight: 400;
                        width: 80%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px auto;
                    width: 80%;
                    /* height: 280px; */
                    height: 41.791vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 100%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        font-size: 15px;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 40px 0;
        .inner {
            flex-direction: column;
            gap: 40px;
            .left {
                width: 100%;
                h3 {
                    font-size: 26px;
                    width: 100%;
                }
                p {
                    font-size: 14px;
                    word-break: keep-all;
                    font-weight: 300;
                    text-align: center;
                    &:last-of-type {
                        margin: 0 auto 6px;
                        font-weight: 400;
                        width: 100%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px auto;
                    width: 100%;
                    /* height: 200px; */
                    height: 53.333vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 100%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 14px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        font-size: 15px;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const Section08Container = styled.div`
    background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
    padding-bottom: 100px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 62%;
        clip-path: polygon(0 37%, 100% 22%, 100% 100%, 0 85%);
        background-color: #fff;
    }
    .inner {
        text-align: center;
        width: 95%;
        .box01,
        .box02 {
            padding: 100px 0;
            .title01 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -2px;
                span {
                    display: block;
                    font-size: 32px;
                    color: #8f61ff;
                    letter-spacing: 0px;
                }
            }
            .txt {
                margin: 30px auto 16px;
                width: 80%;
                font-size: 20px;
                letter-spacing: -1px;
                b {
                    font-weight: 700;
                }
                p {
                    span {
                        color: #8f61ff;
                        font-weight: 700;
                    }
                }
            }
            .pic {
                margin: 30px auto 0;
                width: 800px;
                img {
                    width: 100%;
                }
            }
            .title02 {
                font-size: 45px;
                color: #8f61ff;
                font-weight: 700;
                letter-spacing: -2px;
                line-height: 1.5;
            }
        }
        .box03 {
            .items {
                display: flex;
                justify-content: center;
                gap: 60px;
                position: relative;
                .left,
                .right {
                    width: 50%;
                    max-width: 600px;
                    height: 620px;
                    position: relative;
                    background-color: #f6f2ff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-sizing: border-box;
                    text-align: left;
                    padding: 50px;
                    strong {
                        font-size: 32px;
                        font-weight: 700;
                        line-height: 1.4;
                        letter-spacing: -1px;
                        span {
                            color: #8f61ff;
                        }
                    }
                    p {
                        margin-top: 20px;
                        font-size: 20px;
                        letter-spacing: -1px;
                        word-break: keep-all;
                    }
                    .pic {
                        width: 100%;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        img {
                            width: 100%;
                        }
                    }
                }
                .right {
                    background-color: #fffaf2;
                }
            }
            .desc {
                margin-top: 20px;
                text-align: right;
                p {
                    font-weight: 500;
                    line-height: 1.8;
                    letter-spacing: -1px;
                    span {
                        display: block;
                        font-weight: 700;
                        color: #8f61ff;
                    }
                }
            }
        }
        .box04 {
            margin-top: 50px;
            text-align: center;
            p:first-child {
                margin: 0 auto;
                color: #fff;
                padding: 10px 30px;
                font-size: 22px;
                font-weight: 700;
                background-color: #8f61ff;
                border-radius: 30px;
                width: fit-content;
                letter-spacing: -1px;
            }
            p {
                margin-top: 20px;
                font-size: 20px;
                font-weight: 400;
                span {
                    display: block;
                    font-weight: 700;
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
        padding-bottom: 100px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 60%;
            clip-path: polygon(0 37%, 100% 22%, 100% 100%, 0 85%);
            background-color: #fff;
        }
        .inner {
            text-align: center;
            width: 95%;
            .box01,
            .box02 {
                padding: 60px 0;
                .title01 {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -2px;
                    span {
                        display: block;
                        font-size: 28px;
                        color: #8f61ff;
                        letter-spacing: 0px;
                    }
                }
                .txt {
                    margin: 30px auto 10px;
                    width: 80%;
                    font-size: 18px;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    b {
                        font-weight: 700;
                    }
                    p {
                        span {
                            color: #8f61ff;
                            font-weight: 700;
                        }
                    }
                }
                .pic {
                    margin: 30px auto 0;
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
                .title02 {
                    font-size: 36px;
                    color: #8f61ff;
                    font-weight: 700;
                    letter-spacing: -2px;
                    line-height: 1.5;
                }
            }
            .box03 {
                .items {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    position: relative;
                    .left,
                    .right {
                        width: 50%;
                        max-width: 600px;
                        height: 520px;
                        position: relative;
                        background-color: #f6f2ff;
                        border-radius: 20px;
                        overflow: hidden;
                        box-sizing: border-box;
                        text-align: left;
                        padding: 50px;
                        strong {
                            font-size: 28px;
                            font-weight: 700;
                            line-height: 1.4;
                            letter-spacing: -1px;
                            word-break: keep-all;
                            span {
                                color: #8f61ff;
                            }
                        }
                        p {
                            margin-top: 20px;
                            font-size: 18px;
                            letter-spacing: -1px;
                            word-break: keep-all;
                        }
                        .pic {
                            width: 100%;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .right {
                        background-color: #fffaf2;
                    }
                }
                .desc {
                    margin-top: 20px;
                    text-align: right;
                    p {
                        font-weight: 500;
                        line-height: 1.8;
                        letter-spacing: -1px;
                        span {
                            display: block;
                            font-weight: 700;
                            color: #8f61ff;
                        }
                    }
                }
            }
            .box04 {
                margin-top: 50px;
                text-align: center;
                p:first-child {
                    margin: 0 auto;
                    color: #fff;
                    padding: 10px 30px;
                    font-size: 22px;
                    font-weight: 700;
                    background-color: #8f61ff;
                    border-radius: 30px;
                    width: fit-content;
                    letter-spacing: -1px;
                }
                p {
                    margin-top: 20px;
                    font-size: 18px;
                    font-weight: 400;
                    span {
                        display: block;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 521px) and (max-width: 768px) {
        background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
        padding-bottom: 100px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 64%;
            clip-path: polygon(0 33%, 100% 22%, 100% 100%, 0 85%);
            background-color: #fff;
        }
        .inner {
            text-align: center;
            width: 95%;
            .box01,
            .box02 {
                padding: 60px 0 40px;
                .title01 {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: -2px;
                    span {
                        display: block;
                        font-size: 28px;
                        color: #8f61ff;
                        letter-spacing: 0px;
                    }
                }
                .txt {
                    margin: 22px auto 10px;
                    width: 90%;
                    font-size: 17px;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    b {
                        font-weight: 700;
                    }
                    p {
                        span {
                            color: #8f61ff;
                            font-weight: 700;
                        }
                    }
                }
                .pic {
                    margin: 30px auto 0;
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
                .title02 {
                    font-size: 30px;
                    color: #8f61ff;
                    font-weight: 700;
                    letter-spacing: -2px;
                    line-height: 1.5;
                }
            }
            .box03 {
                .items {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    position: relative;
                    .left,
                    .right {
                        width: 50%;
                        max-width: 600px;
                        height: 500px;
                        position: relative;
                        background-color: #f6f2ff;
                        border-radius: 20px;
                        overflow: hidden;
                        box-sizing: border-box;
                        text-align: left;
                        padding: 44px 34px;
                        strong {
                            font-size: 26px;
                            font-weight: 700;
                            line-height: 1.4;
                            letter-spacing: -1px;
                            word-break: keep-all;
                            span {
                                color: #8f61ff;
                            }
                        }
                        p {
                            margin-top: 16px;
                            font-size: 16px;
                            letter-spacing: -1px;
                            word-break: keep-all;
                        }
                        .pic {
                            width: 100%;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .right {
                        background-color: #fffaf2;
                    }
                }
                .desc {
                    margin-top: 20px;
                    text-align: right;
                    font-size: 15px;
                    p {
                        font-weight: 500;
                        line-height: 1.8;
                        letter-spacing: -1px;
                        span {
                            display: block;
                            font-weight: 700;
                            color: #8f61ff;
                        }
                    }
                }
            }
            .box04 {
                margin-top: 50px;
                text-align: center;
                p:first-child {
                    margin: 0 auto;
                    color: #fff;
                    padding: 6px 24px;
                    font-size: 22px;
                    font-weight: 700;
                    background-color: #8f61ff;
                    border-radius: 30px;
                    width: fit-content;
                    letter-spacing: -1px;
                }
                p {
                    width: 90%;
                    margin: 20px auto 0;
                    font-size: 16px;
                    font-weight: 400;
                    span {
                        display: block;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 520px) {
        background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
        padding-bottom: 80px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 52px;
            left: 0;
            display: block;
            width: 100%;
            height: 54%;
            clip-path: polygon(0 29%, 100% 23%, 100% 100%, 0 94%);
            background-color: #fff;
        }
        .inner {
            text-align: center;
            width: 95%;
            .box01,
            .box02 {
                padding: 50px 0 30px;
                .title01 {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: -2px;
                    span {
                        display: block;
                        font-size: 24px;
                        color: #8f61ff;
                        letter-spacing: 0px;
                    }
                }
                .txt {
                    margin: 22px auto 10px;
                    width: 90%;
                    font-size: 16px;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    b {
                        font-weight: 700;
                    }
                    p {
                        span {
                            color: #8f61ff;
                            font-weight: 700;
                        }
                    }
                }
                .pic {
                    margin: 30px auto 0;
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
                .title02 {
                    font-size: 26px;
                    color: #8f61ff;
                    font-weight: 700;
                    letter-spacing: -2px;
                    line-height: 1.5;
                }
            }
            .box03 {
                .items {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    gap: 16px;
                    position: relative;
                    .left,
                    .right {
                        width: 100%;
                        max-width: 600px;
                        height: 460px;
                        position: relative;
                        background-color: #f6f2ff;
                        border-radius: 20px;
                        overflow: hidden;
                        box-sizing: border-box;
                        text-align: left;
                        padding: 30px;
                        strong {
                            font-size: 22px;
                            font-weight: 700;
                            line-height: 1.4;
                            letter-spacing: -1px;
                            word-break: keep-all;
                            span {
                                color: #8f61ff;
                            }
                        }
                        p {
                            margin-top: 16px;
                            font-size: 16px;
                            letter-spacing: -1px;
                            word-break: keep-all;
                        }
                        .pic {
                            width: 100%;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .right {
                        background-color: #fffaf2;
                    }
                }
                .desc {
                    margin-top: 20px;
                    text-align: right;
                    font-size: 13px;
                    p {
                        font-weight: 500;
                        line-height: 1.8;
                        letter-spacing: -1px;
                        span {
                            display: block;
                            font-weight: 700;
                            color: #8f61ff;
                        }
                    }
                }
            }
            .box04 {
                margin-top: 50px;
                text-align: center;
                p:first-child {
                    margin: 0 auto;
                    color: #fff;
                    padding: 6px 24px;
                    font-size: 20px;
                    font-weight: 700;
                    background-color: #8f61ff;
                    border-radius: 30px;
                    width: fit-content;
                    letter-spacing: -1px;
                }
                p {
                    width: 90%;
                    margin: 20px auto 0;
                    font-size: 16px;
                    font-weight: 400;
                    span {
                        display: block;
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;

export const Section09Container = styled.div`
    padding: 100px 0;
    .pc {
        display: block;
    }
    .mo {
        display: none;
    }
    .inner {
        width: 95%;
        text-align: center;
        .txt {
            h3 {
                font-size: 45px;
                font-weight: 700;
                word-break: keep-all;
                letter-spacing: -3px;
                margin-bottom: 80px;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                font-size: 20px;
                letter-spacing: -1px;
                margin-bottom: 100px;
                line-height: 1.8;
                span {
                    font-weight: 700;
                }
            }
        }
        .pic {
            margin: 0 auto;
            width: 100%;
            max-width: 1440px;
            img {
                width: 100%;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 100px 0;
        .pc {
            display: none;
        }
        .mo {
            display: block;
        }
        .inner {
            .txt {
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    word-break: keep-all;
                    letter-spacing: -3px;
                    margin-bottom: 70px;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-size: 18px;
                    letter-spacing: -1px;
                    margin-bottom: 80px;
                    line-height: 1.8;
                    span {
                        font-weight: 700;
                    }
                }
            }
            .pic {
                margin: 0 auto;
                width: 100%;
                max-width: 1440px;
                img {
                    width: 100%;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 80px 0;
        .inner {
            .txt {
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                    word-break: keep-all;
                    letter-spacing: -3px;
                    margin-bottom: 40px;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-size: 17px;
                    letter-spacing: -1px;
                    margin-bottom: 60px;
                    line-height: 1.8;
                    span {
                        font-weight: 700;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        .inner {
            .txt {
                h3 {
                    font-size: 26px;
                    font-weight: 700;
                    word-break: keep-all;
                    letter-spacing: -3px;
                    margin-bottom: 40px;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-size: 16px;
                    letter-spacing: -1px;
                    margin-bottom: 60px;
                    line-height: 1.8;
                    span {
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;

export const Section10Container = styled.div`
    padding: 100px 0;
    background-color: #f9f9f9;
    .inner {
        width: 95%;
        .title {
            margin-left: 20px;
            margin-bottom: 30px;
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                font-family: 'Lexend Deca', sans-serif;
                span {
                    color: #ffb400;
                }
            }
        }
        .box {
            position: relative;
            .slide {
                padding: 40px 35px;
                box-sizing: border-box;
                .swiper {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    box-sizing: border-box;
                    .swiper-slide {
                        background-color: #fff;
                        border-radius: 30px;
                        width: 80%;
                        display: flex;
                        align-items: center;
                        gap: 40px;
                        padding: 50px 40px;
                        box-sizing: border-box;
                        box-shadow: 0px 0px 10px #00000010;
                        .left {
                            width: 40%;
                            height: 300px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .pic {
                                width: 100%;
                                height: 240px;
                                img {
                                    width: 100%;
                                }
                            }
                            p {
                                font-size: 20px;
                                text-align: center;
                                font-weight: 700;
                                word-break: keep-all;
                                span {
                                    color: #21a9a9;
                                }
                            }
                        }
                        .right {
                            width: 60%;
                            strong {
                                font-size: 30px;
                                font-weight: 700;
                                word-break: keep-all;
                                &::after {
                                    content: '';
                                    display: block;
                                    background-color: #1c1c1c;
                                    width: 70px;
                                    height: 3px;
                                    margin: 24px 0 30px;
                                }
                            }
                            p {
                                margin-bottom: 12px;
                                word-break: keep-all;
                                line-height: 1.8;
                                &:last-child {
                                    margin-bottom: 0;
                                }
                                b {
                                    font-weight: 700;
                                }
                            }
                        }
                    }
                }
            }
            .navigation {
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
                button {
                    position: absolute;
                    color: #1c1c1c;
                    background-color: transparent;
                    border: none;
                    &.swiper-button-prev {
                        left: 0;
                        padding-right: 40px;
                    }
                    &.swiper-button-next {
                        right: 0;
                        padding-left: 60px;
                    }
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 100px 0;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                margin-left: 20px;
                margin-bottom: 25px;
                h3 {
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        color: #ffb400;
                    }
                }
            }
            .box {
                position: relative;
                .slide {
                    padding: 40px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 80%;
                            display: flex;
                            align-items: center;
                            gap: 30px;
                            padding: 50px 30px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 40%;
                                height: 300px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 100%;
                                    height: 240px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 18px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 60%;
                                strong {
                                    font-size: 28px;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 3px;
                                        margin: 24px 0 30px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 80px 0 40px;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                margin-bottom: 20px;
                h3 {
                    font-size: 36px;
                }
            }
            .box {
                position: relative;
                .slide {
                    padding: 40px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 90%;
                            display: flex;
                            align-items: center;
                            gap: 16px;
                            padding: 50px 30px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 35%;
                                height: 300px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 100%;
                                    height: 240px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 17px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 65%;
                                strong {
                                    font-size: 26px;
                                    font-weight: 700;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 3px;
                                        margin: 24px 0 30px;
                                    }
                                }
                                p {
                                    margin-bottom: 12px;
                                    word-break: keep-all;
                                    line-height: 1.8;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                    b {
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                    }
                }
                .navigation {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    button {
                        position: absolute;
                        color: #1c1c1c;
                        background-color: transparent;
                        border: none;
                        &.swiper-button-prev {
                            left: 0;
                            padding-right: 40px;
                        }
                        &.swiper-button-next {
                            right: 0;
                            padding-left: 60px;
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 601px) and (max-width: 768px) {
        padding: 80px 0 0;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                margin-bottom: 0px;
                h3 {
                    font-size: 30px;
                }
            }
            .box {
                position: relative;
                .slide {
                    padding: 40px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            gap: 16px;
                            padding: 40px 24px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 35%;
                                height: 300px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 100%;
                                    height: 240px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 16px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 65%;
                                strong {
                                    font-size: 22px;
                                    font-weight: 700;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 3px;
                                        margin: 22px 0 26px;
                                    }
                                }
                                p {
                                    margin-bottom: 12px;
                                    word-break: keep-all;
                                    line-height: 1.8;
                                    font-size: 15px;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                    b {
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                    }
                }
                .navigation {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    button {
                        position: absolute;
                        color: #1c1c1c;
                        background-color: transparent;
                        border: none;
                        &.swiper-button-prev {
                            left: 0;
                            padding-right: 40px;
                        }
                        &.swiper-button-next {
                            right: 0;
                            padding-left: 60px;
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 600px) {
        padding: 60px 0 0;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                text-align: center;
                margin-bottom: 0px;
                margin-left: 0;
                h3 {
                    font-size: 28px;
                }
            }
            .box {
                position: relative;
                margin: 0 auto;
                .slide {
                    padding: 20px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            gap: 16px;
                            padding: 40px 24px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 100%;
                                height: 230px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 80%;
                                    height: 160px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 15px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 100%;
                                text-align: center;
                                strong {
                                    font-size: 20px;
                                    font-weight: 700;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 2px;
                                        margin: 22px auto 26px;
                                    }
                                }
                                p {
                                    margin-bottom: 12px;
                                    word-break: keep-all;
                                    line-height: 1.8;
                                    font-size: 14px;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                    b {
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                    }
                }
                .navigation {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    button {
                        position: absolute;
                        color: #1c1c1c;
                        background-color: transparent;
                        border: none;
                        &.swiper-button-prev {
                            left: 0;
                            padding-right: 40px;
                        }
                        &.swiper-button-next {
                            right: 0;
                            padding-left: 60px;
                        }
                    }
                }
            }
        }
    }
`;