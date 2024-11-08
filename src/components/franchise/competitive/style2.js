import { styled } from 'styled-components';

export const Section11Container = styled.div`
    padding: 100px 0;
    .inner {
        width: 95%;
        .title {
            text-align: center;
            margin-bottom: 80px;
            h3 {
                margin: 0 auto;
                width: fit-content;
                font-size: 45px;
                font-weight: 700;
                background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                letter-spacing: -3px;
                margin-bottom: 30px;
            }
            p {
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .box {
            display: flex;
            gap: 40px;
            box-sizing: border-box;
            .left {
                width: 50%;
                ul {
                    width: 100%;
                    li {
                        width: 100%;
                        box-sizing: border-box;
                        display: flex;
                        gap: 20px;
                        .num {
                            background-color: #ffb400;
                            width: 140px;
                            height: fit-content;
                            display: flex;
                            box-sizing: border-box;
                            border-radius: 25px;
                            gap: 8px;
                            justify-content: center;
                            align-items: flex-start;
                            padding: 7px 15px;
                            font-size: 20px;
                            color: #fff;
                            span {
                                display: block;
                                span {
                                    font-size: 16px;
                                }
                            }
                            span:first-child {
                                font-family: 'Lexend Deca', sans-serif;
                                font-weight: 700;
                            }
                        }
                        .txt_wrap {
                            width: 90%;
                        }
                        .txt {
                            margin-bottom: 20px;
                            strong {
                                display: block;
                                font-size: 20px;
                                font-weight: 700;
                                margin-bottom: 10px;
                                letter-spacing: -1px;
                            }
                            p {
                                letter-spacing: -1px;
                                margin-bottom: 30px;
                                word-break: keep-all;
                                span {
                                    font-weight: 700;
                                }
                            }
                        }
                    }
                }
            }
            .right {
                width: 50%;
                display: flex;
                justify-content: center;
                .pic {
                    width: 500px;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
`;

export const Section12Container = styled.div`
    padding: 100px 0;
    background: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_bg.png');
    .inner {
        .title {
            margin-bottom: 80px;
            p {
                background-color: #1c1c1c;
                width: 250px;
                padding: 8px 40px;
                margin: 0 auto;
                border-radius: 24px;
                color: #fff;
                text-align: center;
                line-height: 1.3;
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 25px;
                letter-spacing: -1px;
                font-family: 'Lexend Deca', sans-serif;
            }
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                text-align: center;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
        }
        .box {
            margin: 0 auto;
            width: 90%;
            position: relative;
            .slide {
                .slide_item {
                    .num {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 55px;
                        height: 55px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 20px;
                        font-family: 'Lexend Deca', sans-serif;
                        background-color: #ffb400;
                        color: #fff;
                    }
                    .txt_wrap {
                        height: 480px;
                        border-radius: 30px;
                        padding: 50px 0;
                        margin-top: 25px;
                        background-color: #fff;
                        text-align: center;
                        box-sizing: border-box;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        .txt {
                            font-size: 20px;
                            line-height: 1.7;
                            p {
                            }
                            b {
                                font-weight: 700;
                                span {
                                    display: inline-block;
                                    background-repeat: no-repeat;
                                    background-position: bottom;
                                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_underline.png);
                                }
                            }
                        }
                    }
                }
                .slide_item01 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img01.png);
                    }
                }
                .slide_item02 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img02.png);
                    }
                }
                .slide_item03 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img03.png);
                    }
                }
                .slide_item04 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img04.png);
                    }
                }
                .slide_item05 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img05.png);
                    }
                }
            }
            .navigation {
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                .swiper-button-prev,
                .swiper-button-next {
                    color: #1c1c1c;
                    border: none;
                    background-color: transparent;
                }
                .swiper-button-prev {
                    left: -60px;
                }
                .swiper-button-next {
                    right: -60px;
                }
            }
        }
    }
`;

export const Section13Container = styled.div`
    padding: 100px 0;
    .inner {
        width: 95%;
        background-repeat: no-repeat;
        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se13_bg.png);
        background-position: bottom;
        display: flex;
        align-items: flex-end;
        .left {
            width: 45%;
            .title {
                margin-bottom: 30px;
                p {
                    background-color: #1c1c1c;
                    width: 250px;
                    padding: 8px 40px;
                    border-radius: 24px;
                    color: #fff;
                    text-align: center;
                    line-height: 1.3;
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 25px;
                    letter-spacing: -1px;
                    font-family: 'Lexend Deca', sans-serif;
                }
                h3 {
                    width: fit-content;
                    text-align: left;
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    font-family: 'Lexend Deca', sans-serif;
                    background: linear-gradient(90deg, rgba(101, 243, 249, 1) 0%, rgba(252, 69, 85, 1) 100%);
                    color: transparent;
                    background-clip: text;
                    -webkit-background-clip: text;
                }
                & + p {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 1.4;
                }
            }
            .list {
                background-color: #fff;
                width: 360px;
                margin-top: 30px;
                border-radius: 10px;
                box-sizing: border-box;
                padding: 25px;
                box-shadow: 0 0 8px 2px #00000020;
                .list_tit {
                    display: flex;
                    justify-content: space-between;
                    li {
                        color: #b9b9b9;
                        font-weight: 500;
                    }
                }
                .list_cnt {
                    margin-top: 14px;
                    padding-top: 76px;
                    position: relative;
                    li {
                        display: flex;
                        justify-content: space-between;
                        font-weight: 500;
                        padding: 3px 0;
                        p:nth-child(1) {
                            width: 15%;
                        }
                        p:nth-child(2) {
                            width: 40%;
                            text-align: center;
                        }
                        p:nth-child(3) {
                            width: 45%;
                            text-align: right;
                        }
                        &:first-child {
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            background-color: #fff;
                            border: 4px solid transparent;
                            border-radius: 10px;
                            width: 130%;
                            height: 64px;
                            box-sizing: border-box;
                            padding: 0;
                            display: flex;
                            align-items: center;
                            font-size: 20px;
                            font-weight: 700;
                            background-image: linear-gradient(#fff, #fff), linear-gradient(90deg, rgba(101, 243, 249, 1) 0%, rgba(252, 69, 85, 1) 100%);
                            background-origin: border-box;
                            background-clip: content-box, border-box;
                            p:first-child {
                                padding-left: 20px;
                            }
                            p:last-child {
                                padding-right: 20px;
                                color: #ff3732;
                            }
                        }
                    }
                    & + p {
                        font-size: 12px;
                        color: #666;
                        margin-top: 18px;
                    }
                }
            }
        }
        .right {
            width: 55%;
            .pic {
                position: relative;
                width: 100%;
                border-radius: 20px;
                overflow: hidden;
                img {
                    width: 100%;
                    position: relative;
                    z-index: 0;
                }
                .more {
                    opacity: 0;
                    transition: 0.4s;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #1c1c1c99;
                    z-index: 1;
                    display: flex;
                    gap: 30px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p {
                        text-align: center;
                        line-height: 1.8;
                        color: #fff;
                    }
                    .more_btn {
                        background-color: #fff;
                        color: #1c1c1c;
                        padding: 20px;
                    }
                }
                &:hover {
                    .more {
                        opacity: 1;
                    }
                }
            }
        }
    }
`;

export const Section14Container = styled.div`
    padding: 100px 0;
    background-color: #f5f5f5;
    .inner {
        width: 95%;
        .title {
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.5;
                font-family: 'Lexend Deca', sans-serif;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    font-family: 'Noto Sans KR', sans-serif;
                }
            }
            p {
                margin: 20px 0 35px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .box {
            position: relative;
            width: 100%;
            height: 420px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 30px;
            padding: 45px 80px;
            box-sizing: border-box;
            .txt {
                color: #fff;
                span {
                    color: #c8dd76;
                }
                strong {
                    font-size: 30px;
                    font-weight: 700;
                    line-height: 1.5;
                }
                b {
                    display: block;
                    font-weight: 700;
                    font-size: 20px;
                    letter-spacing: -1px;
                }
                p {
                    font-weight: 500;
                    margin-top: 20px;
                    line-height: 1.7;
                }
            }
            .pic {
                width: 450px;
                padding-right: 80px;
                img {
                    width: 100%;
                }
            }
        }
        .content02 {
            padding-top: 100px;
            .txt {
                b {
                    margin-top: 64px;
                    &::before {
                        content: '';
                        display: block;
                        width: 40px;
                        height: 2px;
                        margin-bottom: 12px;
                        background-color: #fff;
                    }
                }
                p {
                    font-weight: 400;
                    line-height: 1.8;
                    letter-spacing: -1px;
                }
            }
            .box {
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
            }
        }
    }
    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 100px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 40px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 18px 0 32px;
                    font-size: 19px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 45px 40px;
                box-sizing: border-box;
                .txt {
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 28px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: -1px;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 20px;
                        line-height: 1.7;
                    }
                }
                .pic {
                    width: 400px;
                    padding-right: 30px;
                    img {
                        width: 100%;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 64px;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 12px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 80px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 18px 0 32px;
                    font-size: 18px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 32px 40px;
                box-sizing: border-box;
                .txt {
                    width: 100%;
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 22px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: -1px;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 16px;
                        line-height: 1.7;
                    }
                }
                .pic {
                    width: 100%;
                    padding-right: 30px;
                    display: flex;
                    justify-content: center;
                    margin-top: 32px;
                    img {
                        width: 40%;
                        min-width: 300px;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 24px;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 14px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 80px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 18px 0 32px;
                    font-size: 17px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 32px 40px;
                box-sizing: border-box;
                .txt {
                    width: 100%;
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 22px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: -1px;
                        word-break: keep-all;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 16px;
                        line-height: 1.7;
                        word-break: keep-all;
                    }
                }
                .pic {
                    width: 100%;
                    padding-right: 30px;
                    display: flex;
                    justify-content: center;
                    margin-top: 32px;
                    img {
                        width: 40%;
                        min-width: 300px;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 24px;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 14px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 16px 0 24px;
                    font-size: 16px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 26px 32px;
                box-sizing: border-box;
                .txt {
                    width: 100%;
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 17px;
                        letter-spacing: -1px;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 16px;
                        line-height: 1.7;
                        font-size: 15px;
                    }
                }
                .pic {
                    width: 100%;
                    padding-right: 30px;
                    display: flex;
                    justify-content: center;
                    margin-top: 32px;
                    img {
                        width: 40%;
                        min-width: 240px;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 24px;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 14px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }
`;

export const Section15Container = styled.div`
    padding-bottom: 100px;
    background-color: #f5f5f5;
    .inner {
        width: 95%;
        .title {
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.4;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                font-family: 'Lexend Deca', sans-serif;
                margin: 20px 0 35px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .slide {
            --swiper-theme-color: #fff;
            --swiper-navigation-size: 34px;
            position: relative;
            width: 100%;
            height: 420px;
            border-radius: 30px;
            box-sizing: border-box;
            background-color: #412a0a;
            .slide_item {
                background-color: #412a0a;
                &.slide_item02 {
                    .box {
                        .pic {
                            width: 560px;
                        }
                    }
                }
                &.slide_item03 {
                    .box {
                        .pic {
                            width: 540px;
                        }
                    }
                }
                &.slide_item04 {
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 540px;
                        }
                    }
                }
                &.slide_item05 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            width: 540px;
                        }
                    }
                }
                &.slide_item06 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 340px;
                        }
                    }
                }
                &.slide_item07 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 420px;
                        }
                    }
                }
                &.slide_item08 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 320px;
                        }
                    }
                }
                &.slide_item09 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 380px;
                        }
                    }
                }
            }
            .box {
                padding: 25px 40px;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .txt {
                    width: 55%;
                    color: #fff;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    word-break: keep-all;
                    strong {
                        font-size: 28px;
                        font-weight: 700;
                        line-height: 1.4;
                    }
                    b {
                        margin-bottom: 17px;
                        display: block;
                        font-weight: 700;
                        font-size: 20px;
                        letter-spacing: -1px;
                        line-height: 1.3;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 12px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .pic {
                    width: 620px;
                    img {
                        width: 100%;
                    }
                }
            }
            .swiper-pagination {
                margin-bottom: 8px;
                .swiper-pagination-bullet {
                    background-color: #fff;
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding-bottom: 100px;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.4;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-family: 'Lexend Deca', sans-serif;
                    margin: 20px 0 35px;
                    font-size: 20px;
                    letter-spacing: -1px;
                }
            }
            .slide {
                --swiper-theme-color: #fff;
                --swiper-navigation-size: 34px;
                position: relative;
                width: 100%;
                height: 420px;
                border-radius: 30px;
                box-sizing: border-box;
                background-color: #412a0a;
                .slide_item {
                    background-color: #412a0a;
                    &.slide_item02 {
                        .box {
                            .pic {
                                width: 560px;
                            }
                        }
                    }
                    &.slide_item03 {
                        .box {
                            .pic {
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item04 {
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item05 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item06 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 340px;
                            }
                        }
                    }
                    &.slide_item07 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 420px;
                            }
                        }
                    }
                    &.slide_item08 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 320px;
                            }
                        }
                    }
                    &.slide_item09 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 380px;
                            }
                        }
                    }
                }
                .box {
                    padding: 24px 26px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .txt {
                        width: 55%;
                        color: #fff;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        word-break: keep-all;
                        strong {
                            font-size: 28px;
                            font-weight: 700;
                            line-height: 1.4;
                        }
                        b {
                            margin-bottom: 10px;
                            display: block;
                            font-weight: 700;
                            font-size: 18px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                            &::before {
                                content: '';
                                display: block;
                                width: 40px;
                                height: 2px;
                                margin-bottom: 12px;
                                background-color: #fff;
                            }
                        }
                        p {
                            font-weight: 400;
                            line-height: 1.8;
                            letter-spacing: -1px;
                        }
                    }
                    .pic {
                        width: 540px;
                        img {
                            width: 100%;
                        }
                    }
                }
                .swiper-pagination {
                    margin-bottom: 8px;
                    .swiper-pagination-bullet {
                        background-color: #fff;
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding-bottom: 80px;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.4;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-family: 'Lexend Deca', sans-serif;
                    margin: 20px 0 35px;
                    font-size: 18px;
                    letter-spacing: -1px;
                }
            }
            .slide {
                --swiper-theme-color: #fff;
                --swiper-navigation-size: 34px;
                position: relative;
                width: 100%;
                height: 700px;
                border-radius: 30px;
                box-sizing: border-box;
                background-color: #412a0a;
                .slide_item {
                    background-color: #412a0a;
                    &.slide_item02 {
                        .box {
                            .pic {
                                width: 560px;
                            }
                        }
                    }
                    &.slide_item03 {
                        .box {
                            .pic {
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item04 {
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item05 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                        background-repeat: no-repeat;
                        background-position: center bottom;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 660px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item06 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item07 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item08 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item09 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                }
                .box {
                    padding: 24px 26px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    .txt {
                        width: 100%;
                        color: #fff;
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        word-break: keep-all;
                        strong {
                            font-size: 22px;
                            font-weight: 700;
                            line-height: 1.4;
                        }
                        b {
                            margin-bottom: 10px;
                            display: block;
                            font-weight: 700;
                            font-size: 17px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                            margin-top: 24px;
                            &::before {
                                content: '';
                                display: block;
                                width: 40px;
                                height: 2px;
                                margin-bottom: 20px;
                                background-color: #fff;
                            }
                        }
                        p {
                            font-weight: 400;
                            line-height: 1.8;
                            font-size: 15px;
                            letter-spacing: -1px;
                        }
                    }
                    .pic {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        max-width: 600px;
                        height: 300px;
                        overflow: hidden;
                        padding-bottom: 20px;
                        img {
                            width: 100%;
                        }
                    }
                }
                .swiper-pagination {
                    margin-bottom: 8px;
                    .swiper-pagination-bullet {
                        background-color: #fff;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding-bottom: 80px;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.4;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-family: 'Lexend Deca', sans-serif;
                    margin: 20px 0 32px;
                    font-size: 17px;
                    letter-spacing: -1px;
                }
            }
            .slide {
                --swiper-theme-color: #fff;
                --swiper-navigation-size: 34px;
                position: relative;
                width: 100%;
                height: 640px;
                border-radius: 30px;
                box-sizing: border-box;
                background-color: #412a0a;
                .slide_item {
                    background-color: #412a0a;
                    &.slide_item02 {
                        .box {
                            .pic {
                                width: 100%;
                            }
                        }
                    }
                    &.slide_item03 {
                        .box {
                            .pic {
                                width: 100%;
                            }
                        }
                    }
                    &.slide_item04 {
                        .box {
                            .pic {
                                width: 100%;
                            }
                        }
                    }
                    &.slide_item05 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                        background-repeat: no-repeat;
                        background-position: center bottom;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 660px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item06 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item07 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item08 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item09 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                }
                .box {
                    padding: 16px 24px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    .txt {
                        width: 100%;
                        color: #fff;
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        word-break: keep-all;
                        strong {
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 1.4;
                        }
                        b {
                            margin-bottom: 10px;
                            display: block;
                            font-weight: 700;
                            font-size: 16px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                            margin-top: 24px;
                            &::before {
                                content: '';
                                display: block;
                                width: 40px;
                                height: 2px;
                                margin-bottom: 20px;
                                background-color: #fff;
                            }
                        }
                        p {
                            font-weight: 400;
                            line-height: 1.8;
                            font-size: 14px;
                            letter-spacing: -1px;
                        }
                    }
                    .pic {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 300px;
                        overflow: hidden;
                        padding-bottom: 20px;
                        img {
                            width: 100%;
                        }
                    }
                }
                .swiper-pagination {
                    margin-bottom: 8px;
                    .swiper-pagination-bullet {
                        background-color: #fff;
                    }
                }
            }
        }
    }
`;

export const Section16Container = styled.div`
    padding: 100px 0;
    .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        .left {
            width: 40%;
            h3 {
                font-family: 'Lexend Deca', sans-serif;
                font-size: 55px;
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -1px;
                position: relative;
                z-index: 0;
                &::before {
                    content: '';
                    position: absolute;
                    top: -6px;
                    left: -18px;
                    display: block;
                    width: 40px;
                    height: 40px;
                    background-color: #ffb400;
                    z-index: -1;
                }
            }
            b {
                margin: 70px 0 30px;
                display: block;
                font-size: 30px;
                letter-spacing: -1px;
                line-height: 1.5;
                font-weight: 700;
            }
            p {
                font-size: 18px;
                letter-spacing: -1px;
                margin-bottom: 50px;
                line-height: 1.5;
            }
            p:last-child {
                margin-bottom: 0;
            }
        }
        .right {
            width: 60%;
            padding-bottom: 80px;
            .slide {
                position: relative;
                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: -100px;
                    width: 110%;
                    height: 150px;
                    border-radius: 30px;
                    left: -5%;
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                }
                .swiper-slide {
                    width: 80%;
                }
                .pic {
                    width: 100%;
                    height: 400px;
                    overflow: hidden;
                    border-radius: 30px 30px 0 0;
                    a {
                    }
                    img {
                        width: 110%;
                    }
                }
                .slide_item {
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                }
                .slide_item01 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img01.jpg');
                    }
                }
                .slide_item02 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img02.jpg');
                    }
                }
                .slide_item03 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img03.jpg');
                    }
                }
                .slide_item04 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img04.jpg');
                    }
                }
                .slide_item05 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img05.jpg');
                    }
                }
                .slide_item06 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img06.jpg');
                    }
                }
                .slide_item07 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img07.jpg');
                    }
                }
                .slide_item08 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img08.jpg');
                    }
                }
                .slide_item09 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img09.jpg');
                    }
                }
                .slide_item10 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img10.jpg');
                    }
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (max-width: 1440px) {
        padding: 80px 0;
        .inner {
            gap: 20px;
            .left {
                width: 44%;
                padding-left: 6px;
                box-sizing: border-box;
                h3 {
                    font-size: 50px;
                    &::before {
                        left: -15px;
                        width: 36px;
                        height: 36px;
                    }
                }
                b {
                    margin: 60px 0 26px;
                    font-size: 26px;
                }
                p {
                    font-size: 17px;
                    letter-spacing: -1px;
                    margin-bottom: 50px;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 56%;
                padding-bottom: 80px;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -120px;
                        width: 110%;
                        height: 150px;
                        border-radius: 30px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 90%;
                    }
                    .pic {
                        width: 100%;
                        height: 360px;
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 60px 0;
        .inner {
            gap: 40px;
            .left {
                width: 44%;
                padding-left: 6px;
                box-sizing: border-box;
                h3 {
                    font-size: 45px;
                    &::before {
                        left: -14px;
                        width: 30px;
                        height: 30px;
                    }
                }
                b {
                    margin: 52px 0 22px;
                    font-size: 22px;
                }
                p {
                    font-size: 16px;
                    letter-spacing: -1px;
                    margin-bottom: 40px;
                    word-break: keep-all;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 56%;
                padding-bottom: 80px;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -100px;
                        width: 110%;
                        height: 130px;
                        border-radius: 30px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 90%;
                    }
                    .pic {
                        width: 100%;
                        height: 300px;
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 60px 0;
        .pc {
            display: none;
        }
        .inner {
            gap: 32px;
            flex-direction: column;
            .left {
                width: 100%;
                box-sizing: border-box;
                h3 {
                    font-size: 40px;
                    &::before {
                        left: -7px;
                        top: 0px;
                        width: 24px;
                        height: 24px;
                    }
                }
                b {
                    margin: 36px 0 16px;
                    font-size: 20px;
                }
                p {
                    font-size: 15px;
                    letter-spacing: -1px;
                    margin-bottom: 34px;
                    word-break: keep-all;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 95%;
                padding-bottom: 80px;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -100px;
                        width: 110%;
                        height: 130px;
                        border-radius: 0px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 70%;
                    }
                    .pic {
                        width: 100%;
                        height: 260px;
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        .pc {
            display: none;
        }
        .inner {
            gap: 26px;
            flex-direction: column;
            .left {
                width: 100%;
                box-sizing: border-box;
                h3 {
                    font-size: 30px;
                    &::before {
                        left: -5px;
                        top: 0px;
                        width: 18px;
                        height: 18px;
                    }
                }
                b {
                    margin: 30px 0 12px;
                    font-size: 18px;
                }
                p {
                    font-size: 14px;
                    letter-spacing: -1px;
                    margin-bottom: 28px;
                    word-break: keep-all;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 95%;
                padding-bottom: 80px;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -70px;
                        width: 110%;
                        height: 100px;
                        border-radius: 0px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 70%;
                    }
                    .pic {
                        width: 100%;
                        height: 50vw;
                        /* min-height: 200px; */
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
`;

export const Section17Container = styled.div`
    padding: 100px 0;
    background-color: #f5f5f5;
    .inner {
        width: 95%;
        .txt {
            text-align: center;
            margin-bottom: 70px;
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.5;
                font-family: 'Lexend Deca', sans-serif;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    font-family: 'Noto Sans KR', sans-serif;
                }
            }
            p {
                margin-top: 25px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
    }
    .slide {
        .swiper-slide {
            /* width: 440px; */
            max-width: 440px;
            width: 30.556vw;
            max-height: 300px;
            height: 20.833vw;
            position: relative;
            overflow: inherit;
            .pic {
                width: 100%;
                max-height: 250px;
                height: 17.361vw;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            p {
                transition: 0.3s;
                position: absolute;
                bottom: -65px;
                left: 0;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.5);
                padding: 15px 20px;
                box-sizing: border-box;
                font-size: 20px;
                span:last-child {
                    font-size: 18px;
                }
            }
            &:hover,
            &.swiper-slide-active {
                p {
                    bottom: 0;
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 80px 0;
        .inner {
            .txt {
                margin-bottom: 40px;
                h3 {
                    font-size: 36px;
                }
                p {
                    margin-top: 22px;
                    font-size: 18px;
                }
            }
        }
        .slide {
            .swiper-slide {
                width: 330px;
                height: 225px;
                .pic {
                    height: 180px;
                }
                p {
                    font-size: 17px;
                    padding: 12px 15px;
                    span:last-child {
                        font-size: 16px;
                        letter-spacing: -1px;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 60px 0;
        .inner {
            .txt {
                margin-bottom: 35px;
                h3 {
                    font-size: 30px;
                }
                p {
                    margin-top: 20px;
                    font-size: 17px;
                }
            }
        }
        .slide {
            .swiper-slide {
                width: 330px;
                height: 220px;
                .pic {
                    height: 180px;
                }
                p {
                    font-size: 16px;
                    padding: 10px 15px;
                    span:last-child {
                        font-size: 15px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 50px 0;
        .inner {
            .txt {
                margin-bottom: 28px;
                h3 {
                    font-size: 26px;
                }
                p {
                    margin-top: 16px;
                    font-size: 16px;
                }
            }
        }
        .slide {
            .swiper-slide {
                width: 240px;
                height: 170px;
                .pic {
                    height: 140px;
                }
                p {
                    font-size: 14px;
                    padding: 8px 12px;
                    span:last-child {
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;

export const Section18Container = styled.div`
    padding: 100px 0 60px;
    .inner {
        display: flex;
        align-items: center;
        width: 95%;
        .txt {
            width: 45%;
            margin-bottom: 70px;
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.5;
                span {
                    display: block;
                    width: 100%;
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                margin-top: 25px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .video {
            width: 55%;
            video {
                width: 100%;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 100px 0 40px;
        .inner {
            gap: 0px;
            .txt {
                h3 {
                    font-size: 36px;
                    span {
                        background: linear-gradient(to top, #ffb400 27%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 18px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 80px 0 20px;
        .inner {
            flex-direction: column;
            gap: 0px;
            .txt {
                width: 100%;
                margin-bottom: 24px;
                h3 {
                    font-size: 30px;
                    span {
                        background: linear-gradient(to top, #ffb400 25%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 17px;
                }
            }
            .video {
                width: 100%;
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0 20px;
        .inner {
            flex-direction: column;
            gap: 0px;
            .txt {
                width: 100%;
                margin-bottom: 0px;
                h3 {
                    font-size: 26px;
                    span {
                        background: linear-gradient(to top, #ffb400 22%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 16px;
                }
            }
            .video {
                width: 100%;
            }
        }
    }
`;

export const Section19Container = styled.div`
    padding: 100px 0;
    .inner {
        display: flex;
        align-items: center;
        gap: 80px;
        width: 95%;
        .txt {
            width: 50%;
            margin-bottom: 70px;
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.5;
                span {
                    display: block;
                    width: 100%;
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                margin-top: 25px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .pic {
            width: 50%;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        .inner {
            gap: 0px;
            .txt {
                h3 {
                    font-size: 36px;
                    span {
                        background: linear-gradient(to top, #ffb400 27%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 18px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 80px 0;
        .inner {
            flex-direction: column;
            gap: 0px;
            .txt {
                width: 100%;
                margin-bottom: 0px;
                h3 {
                    font-size: 30px;
                    span {
                        background: linear-gradient(to top, #ffb400 25%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 17px;
                }
            }
            .pic {
                width: 100%;
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        .inner {
            flex-direction: column;
            gap: 0px;
            .txt {
                width: 100%;
                margin-bottom: 0px;
                h3 {
                    font-size: 26px;
                    span {
                        background: linear-gradient(to top, #ffb400 22%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 16px;
                }
            }
            .pic {
                width: 100%;
            }
        }
    }
`;

export const Section20Container = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 100;
    background-color: #ffbe24;
    width: 100%;
    height: 72px;

    .inner {
        display: flex;
        align-items: center;
        height: 100%;
        .info {
            padding: 0 12px 0 30px;
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            .num {
                width: 50%;
                display: flex;
                align-items: center;
                gap: 20px;
                box-sizing: border-box;
                & > p {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 1.3;
                    letter-spacing: -1px;
                    span {
                        font-weight: 600;
                        font-size: 16px;
                    }
                }
                a {
                    display: block;
                    padding: 2px 18px;
                    background-color: #373737;
                    border-radius: 30px;
                    p {
                        font-size: 25px;
                        font-family: 'Lexend Deca', sans-serif;
                        color: #ffb400;
                        letter-spacing: -0.5px;
                    }
                }
            }
        }
        .form {
            width: 50%;
            height: 100%;
            background-color: #323232;
            box-sizing: border-box;
            a {
                margin: 0 auto;
                width: fit-content;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 14px;
                p:first-child {
                    color: #fff;
                    font-size: 20px;
                    font-weight: 700;
                    word-break: keep-all;
                }
                .name,
                .phone {
                    background-color: #fff;
                    color: #323232;
                    padding: 12px 60px 12px 16px;
                    border-radius: 4px;
                    box-sizing: border-box;
                    font-weight: 500;
                }
                .phone {
                    padding-right: 160px;
                }
                .more {
                    color: #323232;
                    background-color: #ffbe24;
                    text-align: center;
                    padding: 7px 20px;
                    border-radius: 4px;
                    font-size: 18px;
                    letter-spacing: -1px;
                    font-weight: 700;
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (max-width: 1440px) {
        height: 66px;
        .inner {
            .info {
                .num {
                    gap: 16px;
                    & > p {
                        font-size: 18px;
                        letter-spacing: -0.5px;
                        font-weight: 600;
                        span {
                            font-size: 14px;
                            letter-spacing: -0.5px;
                        }
                    }
                    a {
                        padding: 4px 18px;
                        p {
                            font-size: 20px;
                            font-family: 'Lexend Deca', sans-serif;
                            color: #ffb400;
                            letter-spacing: -0.5px;
                        }
                    }
                }
            }
            .form {
                a {
                    p:first-child {
                        font-size: 18px;
                    }
                    .name,
                    .phone {
                        padding: 6px 50px 6px 16px;
                    }
                    .phone {
                        padding-right: 140px;
                    }
                    .more {
                        padding: 5px 18px;
                    }
                }
            }
        }
    }

    /* 중형 데스크톱 스타일 */
    @media (max-width: 1386px) {
        .inner {
            .info {
                .num {
                    & > p {
                        font-weight: 700;
                        line-height: 1.2;
                    }
                }
            }
            .form {
                a {
                    p:first-child {
                        font-size: 18px;
                    }
                    .name,
                    .phone {
                        font-size: 16px;
                        padding: 6px 50px 6px 16px;
                    }
                    .phone {
                        padding-right: 140px;
                    }
                    .more {
                        padding: 5px 18px;
                    }
                }
            }
        }
    }

    /* 중형 데스크톱 스타일2 */
    @media (max-width: 1250px) {
        height: 140px;
        .inner {
            height: auto;
            flex-direction: column;
            .info {
                width: 100%;
                padding: 0;
                .num {
                    justify-content: center;
                    padding: 0 30px;
                    height: 70px;
                    & > p {
                        width: 190px;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 1.2;
                    }
                    a {
                        width: 100%;
                        p {
                            width: 100%;
                            text-align: center;
                        }
                    }
                }
                .num01 {
                    & > p {
                        width: 100px;
                    }
                }
                .num02 {
                    background-color: #ffdf92;
                }
            }
            .form {
                width: 100%;
                height: 70px;
                a {
                    width: auto;
                    p:first-child {
                        font-size: 16px;
                    }
                    .name,
                    .phone {
                        font-size: 16px;
                        padding: 8px 60px 8px 16px;
                    }
                    .phone {
                        padding-right: 150px;
                    }
                    .more {
                        width: 40%;
                        font-size: 15px;
                        padding: 8px 18px;
                        font-weight: 600;
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        /* 스타일 코드 */
        height: 120px;
        .inner {
            .info {
                .num {
                    height: 60px;
                    & > p {
                        font-size: 15px;
                        line-height: 1.3;
                        span {
                            font-size: 14px;
                        }
                    }
                }
                .num02 {
                    padding: 0 30px 0 20px;
                }
            }
            .form {
                height: 60px;
                a {
                    p:first-child {
                        font-size: 15px;
                    }
                    .name,
                    .phone {
                        font-size: 15px;
                        padding: 7px 50px 7px 16px;
                    }
                    .phone {
                        padding-right: 140px;
                    }
                    .more {
                        padding: 7px 18px;
                    }
                }
            }
        }
    }

    /* 소소형 데스크톱 스타일 */
    @media (max-width: 816px) {
        /* 스타일 코드 */
        .inner {
            .info {
                .num {
                    gap: 0;
                    & > p {
                        font-size: 14px;
                        span {
                            font-size: 12px;
                        }
                    }
                    a {
                        padding: 4px 12px;
                    }
                }
            }
            .form {
                a {
                    padding: 0 40px;
                    box-sizing: border-box;
                    p:first-child {
                        width: 14%;
                        font-size: 14px;
                    }
                    .name,
                    .phone {
                        font-size: 14px;
                        width: 16%;
                        padding: 7px 0px 7px 12px;
                    }
                    .phone {
                        width: 24%;
                        padding-right: 0;
                    }
                    .more {
                        width: 46%;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 612px) {
        /* 스타일 코드 */
        height: 143px;
        .inner {
            .info {
                .num {
                    padding: 2px 20px;
                    height: 83px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    & > p {
                        width: 100%;
                        font-size: 15px;
                        font-weight: 700;
                        text-align: center;
                        span {
                            margin-left: 4px;
                        }
                    }
                    a {
                        width: 100%;
                        padding: 3px 12px;
                    }
                }
            }
            .form {
                a {
                    padding: 0 16px;
                    box-sizing: border-box;
                    p:first-child {
                        width: 16%;
                        font-size: 14px;
                    }
                    .name,
                    .phone {
                        font-size: 14px;
                        width: 20%;
                        padding: 7px 0px 7px 12px;
                    }
                    .phone {
                        width: 30%;
                        padding-right: 0;
                    }
                    .more {
                        width: 34%;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        .inner {
            .info {
                .num {
                    & > p {
                        font-size: 14px;
                        span {
                            display: block;
                            margin-left: 0px;
                        }
                    }
                    a {
                        padding: 1px 10px;
                        p {
                            font-size: 16px;
                        }
                    }
                }
            }
            .form {
                a {
                    padding: 0 16px;
                    box-sizing: border-box;
                    p:first-child {
                        width: 16%;
                        font-size: 13px;
                    }
                    .name,
                    .phone {
                        font-size: 13px;
                        width: 20%;
                        padding: 7px 0px 7px 8px;
                    }
                    .phone {
                        width: 30%;
                        padding-right: 0;
                    }
                    .more {
                        width: 34%;
                        font-size: 13px;
                        padding: 0;
                        line-height: 1.4;
                        height: 34px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        word-break: keep-all;
                    }
                }
            }
        }
    }
`;
