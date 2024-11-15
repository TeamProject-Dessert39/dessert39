import { styled } from 'styled-components';

// AllianceSupplier
export const AllianceSupplierContainer = styled.div`
    .inner {
        width: 95%;
        padding: 100px 0;

        .steps {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-bottom: 1px solid #d0d0d6;
            li {
                font-size: 18px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #c0c0c0;
                &.on {
                    position: relative;
                    color: #5c5c5c;
                    font-weight: 700;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        border-bottom: 3.5px solid #5c5c5c;
                        animation: line 4s ease-in infinite 3s;

                        @keyframes line {
                            0% {
                                width: 0;
                            }
                            20% {
                                width: 100%;
                            }
                            100% {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }

        .appli {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            height: 440px;
            li {
                width: 48%;
                height: 100%;
                padding: 50px;
                box-sizing: border-box;
                background-color: #f7f8f9;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .txt {
                    .pic {
                        width: 40px;
                        margin-bottom: 10px;
                        img {
                            width: 100%;
                        }
                    }
                    h3 {
                        font-size: 30px;
                        letter-spacing: -1px;
                        font-weight: 700;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 17px;
                        letter-spacing: -0.5px;
                        line-height: 1.4;
                    }
                }
                .inp {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    dl {
                        width: 100%;
                        height: 55px;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid #9fa1b8;
                        dt {
                            width: 120px;
                            font-size: 18px;
                            font-weight: 700;
                        }
                        dd {
                            font-size: 18px;
                            width: calc(100% - 120px);
                            height: 100%;
                            & > input {
                                font-size: 18px;
                                outline: none;
                                padding: 0;
                                width: 100%;
                                height: 100%;
                                background-color: transparent;
                                border: none;
                                &::placeholder {
                                    color: #c0c0c0;
                                    font-size: 16px;
                                }
                            }
                            & > input[type='password'] {
                                letter-spacing: 1px;
                            }
                        }
                    }
                }
                button {
                    cursor: pointer;
                    margin-top: 20px;
                    padding: 14px 0;
                    font-size: 20px;
                    background-color: #9fa1b8;
                    width: 100%;
                    color: #fff;
                    border-radius: 5px;
                    letter-spacing: -1px;
                    border: none;
                    height: auto;
                    font-family: 'Noto Sans KR', sans-serif;
                    font-weight: 500;
                    transition: 0.5s;
                    &:hover {
                        background-color: #505268;
                    }
                }
            }
        }
    }
`;

export const AllianceSupplierContainer2 = styled.div`
    .inner {
        width: 95%;
        padding: 100px 0;

        .steps {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-bottom: 1px solid #d0d0d6;
            li {
                font-size: 18px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #c0c0c0;
                &.on {
                    position: relative;
                    color: #5c5c5c;
                    font-weight: 700;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        border-bottom: 3.5px solid #5c5c5c;
                        animation: line 4s ease-in infinite 3s;

                        @keyframes line {
                            0% {
                                width: 0;
                            }
                            20% {
                                width: 100%;
                            }
                            100% {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }

        form {
            .agreement {
                padding-top: 55px;
                h3 {
                    font-size: 28px;
                    margin-bottom: 25px;
                    letter-spacing: -1.3px;
                    font-weight: 700;
                }
            }

            .certify {
                margin-top: 60px;
                border-top: 2px solid #1c1c1c;
                padding: 50px 0;
                display: flex;
                justify-content: center;
                gap: 30px;
                .l_box {
                    width: 45%;
                    padding: 30px;
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    border-right: 1px solid #e3e5e6;
                    .pic {
                        width: 120px;
                        height: 100px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .txt {
                        width: 100%;
                        strong {
                            font-size: 18px;
                            font-weight: 700;
                            letter-spacing: -0.5px;
                        }
                        p {
                            font-weight: 700;
                            font-size: 16px;
                            letter-spacing: -0.5px;
                        }
                        button {
                            font-family: 'Noto Sans KR', sans-serif;
                            cursor: pointer;
                            width: 100%;
                            height: 50px;
                            line-height: 50px;
                            font-size: 20px;
                            font-weight: 500;
                            letter-spacing: -1px;
                            background-color: #1c1c1c;
                            border-radius: 5px;
                            margin-top: 10px;
                            color: #fff;
                            transition: 0.5s;
                            line-height: 1.5;
                            &:hover {
                                box-shadow: -3px 3px 8px 1px #00000066;
                            }
                        }
                    }
                }
                .r_box {
                    width: 55%;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    .input_box {
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        .left {
                            width: 180px;
                            label {
                                font-size: 20px;
                                font-weight: 700;
                                &.req::after {
                                    content: '*';
                                    display: inline-block;
                                    margin-left: 4px;
                                    color: #c0c0c0;
                                }
                            }
                            span {
                                display: block;
                                font-size: 16px;
                                margin-top: 3px;
                                font-weight: 700;
                                letter-spacing: -0.5px;
                            }
                        }
                        .right {
                            width: calc(100% - 200px);
                            display: flex;
                            align-items: center;
                            gap: 13px;
                            input {
                                font-size: 16px;
                                letter-spacing: -0.5px;
                                outline: none;
                                box-sizing: border-box;
                            }
                            input[type='text'] {
                                width: 100%;
                                height: 50px;
                                padding: 0 15px;
                                border: 1px solid #d4d5d8;
                                background-color: #fafafc;
                                letter-spacing: -0.5px;
                                font-size: 16px;
                                box-sizing: border-box;
                                font-family: 'Noto Sans KR', sans-serif;
                                &::placeholder {
                                    color: #999;
                                    font-weight: 300;
                                    font-size: 16px;
                                    letter-spacing: -0.5px;
                                }
                                &:disabled {
                                    background-color: #eeedf2;
                                    border: none;
                                }
                            }
                        }
                    }
                }
            }

            .num {
                width: 100%;
                padding: 10px 20px;
                background-color: #fafafc;
                border: 1px solid #d5d7da;
                display: flex;
                align-items: center;
                .left {
                    width: 300px;
                    label {
                        font-size: 20px;
                        font-weight: 700;
                        &.req::after {
                            content: '*';
                            display: inline-block;
                            margin: 0 4px;
                            color: #c0c0c0;
                        }
                    }
                    span {
                        font-size: 16px;
                        margin-top: 3px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                        color: #888;
                    }
                }
                .right {
                    width: calc(100% - 200px);
                    display: flex;
                    align-items: center;
                    gap: 13px;
                    input {
                        width: 145px;
                        height: 40px;
                        padding: 0 15px;
                        border: 1px solid #bfbfbf;
                        background-color: #fff;
                        letter-spacing: -0.5px;
                        font-size: 16px;
                        font-family: 'Noto Sans KR', sans-serif;
                        outline: none;
                        box-sizing: border-box;
                        &::placeholder {
                            color: #999;
                            font-weight: 300;
                            font-size: 16px;
                            letter-spacing: -0.5px;
                        }
                        &:disabled {
                            background-color: #eeedf2;
                            border: none;
                        }
                    }
                }
            }
        }
        .btns {
            margin-top: 80px;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            button {
                cursor: pointer;
                width: 170px;
                height: 45px;
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 500;
                border: 2px solid #1c1c1c;
                border-radius: 45px;
                background-color: #fff;
                box-sizing: border-box;
                letter-spacing: -1px;
                font-size: 16px;
                padding: 1px 6px;
                transition: 0.5s;
                &.next,
                &.prev:hover {
                    background-color: #1c1c1c;
                    color: #fff;
                }
                &.next:hover {
                    box-shadow: -2px 2px 8px #00000066;
                }
            }
        }
    }
`;

export const AllianceSupplierContainer3 = styled.div`
    .inner {
        width: 95%;
        padding: 100px 0;

        .steps {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-bottom: 1px solid #d0d0d6;
            li {
                font-size: 18px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #c0c0c0;
                &.on {
                    position: relative;
                    color: #5c5c5c;
                    font-weight: 700;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        border-bottom: 3.5px solid #5c5c5c;
                        animation: line 4s ease-in infinite 3s;

                        @keyframes line {
                            0% {
                                width: 0;
                            }
                            20% {
                                width: 100%;
                            }
                            100% {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }

        .txt {
            padding: 180px 0 100px;
            text-align: center;
            h3 {
                font-size: 30px;
                font-weight: 700;
            }
            p {
                margin-top: 10px;
            }
            button {
                cursor: pointer;
                margin-top: 50px;
                width: 170px;
                height: 45px;
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 500;
                border: 2px solid #1c1c1c;
                border-radius: 45px;
                background-color: #fff;
                box-sizing: border-box;
                letter-spacing: -1px;
                font-size: 16px;
                padding: 1px 6px;
                transition: 0.5s;
                &:hover {
                    background-color: #1c1c1c;
                    color: #fff;
                    box-shadow: -2px 2px 8px #00000066;
                }
            }
        }
    }
`;

// AlliancePurchasing
export const AlliancePurchasingContainer = styled.div`
    .inner {
        width: 95%;
        padding: 100px 0;
        form {
            & > h3 {
                font-size: 18px;
                font-weight: 700;
                line-height: 1.4;
                word-break: keep-all;
                letter-spacing: -0.5px;
                padding-bottom: 20px;
            }
        }

        .guide {
            width: 100%;
            padding: 30px;
            border-radius: 10px;
            box-sizing: border-box;
            background-color: #f4f5f6;
            h3 {
                font-size: 22px;
                letter-spacing: -1px;
                font-weight: 700;
            }
            p {
                font-size: 16px;
                letter-spacing: -0.5px;
                svg {
                    margin-right: 4px;
                    vertical-align: 0px;
                }
                span {
                    font-family: 'Lexend Deca', sans-serif;
                }
            }
            p:nth-of-type(1) {
                margin: 15px 0 20px;
            }
        }

        .btns {
            margin-top: 60px;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            button {
                cursor: pointer;
                width: 170px;
                height: 45px;
                font-family: 'Noto Sans KR', sans-serif;
                font-weight: 500;
                border: 2px solid #1c1c1c;
                border-radius: 45px;
                background-color: #fff;
                box-sizing: border-box;
                letter-spacing: -1px;
                font-size: 16px;
                padding: 1px 6px;
                transition: 0.5s;
                &.sure,
                &.prev:hover {
                    background-color: #1c1c1c;
                    color: #fff;
                }
                &.sure:hover {
                    box-shadow: -2px 2px 8px #00000066;
                }
            }
        }
    }
`;

// AllianceEntry
export const AllianceEntryContainer = styled.div`
    .inner {
        width: 95%;
        padding: 90px 0 100px;
        form {
            & > h3 {
                font-size: 28px;
                font-weight: 700;
                word-break: keep-all;
                letter-spacing: -1.5px;
                padding-bottom: 25px;
            }

            .agreement {
                margin-bottom: 60px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                .all {
                    margin-top: 5px;
                    font-family: 'Noto Sans KR', sans-serif;
                    width: 100%;
                    padding: 15px 0;
                    font-size: 20px;
                    line-height: 1.4;
                    letter-spacing: -1px;
                    background-color: #1c1c1c;
                    color: #fff;
                    font-weight: 500;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: 0.5s;
                    svg {
                        font-size: 26px;
                        vertical-align: -5px;
                        margin-right: 10px;
                    }
                    &:hover {
                        box-shadow: -3px 3px 8px 1px #00000066;
                    }
                }
            }

            .certify {
                border-top: 2px solid #1c1c1c;
                padding: 40px 0;
                display: flex;
                justify-content: center;
                gap: 20px;
                .l_box {
                    width: 49%;
                    padding: 30px;
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    border-right: 1px solid #e3e5e6;
                    .pic {
                        width: 100px;
                        height: 100px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .txt {
                        width: 100%;
                        strong {
                            font-size: 18px;
                            font-weight: 700;
                            letter-spacing: -0.5px;
                        }
                        p {
                            font-size: 16px;
                            letter-spacing: -0.5px;
                        }
                        button {
                            font-family: 'Noto Sans KR', sans-serif;
                            cursor: pointer;
                            width: 100%;
                            height: 50px;
                            line-height: 50px;
                            font-size: 20px;
                            font-weight: 500;
                            letter-spacing: -1px;
                            background-color: #1c1c1c;
                            border-radius: 5px;
                            margin-top: 10px;
                            color: #fff;
                            transition: 0.5s;
                            line-height: 1.5;
                            &:hover {
                                box-shadow: -3px 3px 8px 1px #00000066;
                            }
                        }
                    }
                }
                .r_box {
                    width: 51%;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    .input_box {
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        .left {
                            width: 200px;
                            label {
                                font-size: 20px;
                                font-weight: 700;
                                &.req::after {
                                    content: '*';
                                    display: inline-block;
                                    margin-left: 4px;
                                    color: #c0c0c0;
                                }
                            }
                            span {
                                display: block;
                                font-size: 16px;
                                margin-top: 3px;
                                font-weight: 700;
                                letter-spacing: -0.5px;
                            }
                        }
                        .right {
                            width: calc(100% - 200px);
                            display: flex;
                            align-items: center;
                            gap: 13px;
                            input {
                                font-size: 16px;
                                letter-spacing: -0.5px;
                                outline: none;
                                box-sizing: border-box;
                            }
                            input[type='text'] {
                                width: 100%;
                                height: 50px;
                                padding: 0 15px;
                                border: 1px solid #d4d5d8;
                                background-color: #fafafc;
                                letter-spacing: -0.5px;
                                font-size: 16px;
                                box-sizing: border-box;
                                font-family: 'Noto Sans KR', sans-serif;
                                &::placeholder {
                                    color: #999;
                                    font-weight: 300;
                                    font-size: 16px;
                                    letter-spacing: -0.5px;
                                }
                                &:disabled {
                                    background-color: #eeedf2;
                                    border: none;
                                }
                            }
                        }
                    }
                }
            }

            .guide {
                margin-top: 40px;
                width: 100%;
                padding: 30px;
                border-radius: 10px;
                box-sizing: border-box;
                background-color: #f4f5f6;
                p {
                    font-size: 18px;
                    letter-spacing: -0.5px;
                    svg {
                        margin-right: 6px;
                        vertical-align: -1px;
                    }
                    span {
                        font-family: 'Lexend Deca', sans-serif;
                    }
                }
                p:nth-of-type(1) {
                    color: #1331ff;
                }
            }

            .btns {
                margin-top: 80px;
                display: flex;
                gap: 10px;
                justify-content: center;
                align-items: center;
                button {
                    cursor: pointer;
                    width: 170px;
                    height: 45px;
                    font-family: 'Noto Sans KR', sans-serif;
                    font-weight: 500;
                    border: 2px solid #1c1c1c;
                    border-radius: 45px;
                    background-color: #fff;
                    box-sizing: border-box;
                    letter-spacing: -1px;
                    font-size: 16px;
                    padding: 1px 6px;
                    transition: 0.5s;
                    &.sure,
                    &.prev:hover {
                        background-color: #1c1c1c;
                        color: #fff;
                    }
                    &.sure:hover {
                        box-shadow: -2px 2px 8px #00000066;
                    }
                }
            }
        }
    }
`;

// Alliance
export const AllianceContainer = styled.div`
    .inner {
        width: 95%;
        .intro {
            padding: 78px 0 50px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            p:nth-child(1) {
                font-size: 20px;
                font-weight: 500;
                letter-spacing: -0.5px;
                b {
                    display: block;
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 1.3;
                    letter-spacing: -0.5px;
                }
            }
            p:nth-child(2) {
                a {
                    cursor: pointer;
                    position: relative;
                    font-size: 18px;
                    font-weight: 700;
                    padding-bottom: 6px;
                    transition: 0.4s;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #1c1c1c;
                        transition: 0.3s;
                    }
                    &:hover {
                        color: #9fa1b8;
                        &::after {
                            animation: underline 0.5s ease 1 forwards;
                            background-color: #9fa1b8;
                        }
                        @keyframes underline {
                            0% {
                                width: 0%;
                            }
                            100% {
                                width: 100%;
                            }
                        }
                    }
                    svg {
                        font-size: 22px;
                        vertical-align: -5px;
                        margin-left: 4px;
                        transform: rotate(45deg);
                    }
                }
            }
        }

        .list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2%;
            margin-bottom: 100px;
            .item {
                padding: 40px;
                width: auto;
                height: 300px;
                cursor: pointer;
                position: relative;
                box-sizing: border-box;
                background-color: #f7f8f9;
                transition: 0.5s;
                overflow: hidden;

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    min-width: 408px;
                    height: 100%;
                    transition: 0.5s;
                    background-repeat: no-repeat;
                    background-position: bottom -60px right -220px;
                    background-size: 100%;
                    opacity: 0.1;
                }

                a {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    .icon {
                        width: 55px;
                        height: 55px;
                        background-repeat: no-repeat;
                        transition: 0.5s;
                    }
                    .tit {
                        p {
                            color: #9fa1b8;
                            transition: 0.5s;
                            font-weight: 600;
                            font-family: 'Lexend Deca', sans-serif;
                            font-size: 18px;
                            letter-spacing: -0.2px;
                        }
                        strong {
                            font-weight: 700;
                            transition: 0.5s;
                            font-size: 32px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                            .mo {
                                display: none;
                            }
                        }
                    }
                }

                &.item01 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03.svg);
                        }
                    }
                }
                &.item02 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01.svg);
                        }
                    }
                }
                &.item03 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02.svg);
                        }
                    }
                }

                &:hover {
                    background-color: #9fa1b8;
                    box-shadow: -6px 6px 16px #9fa1b8dd;

                    a {
                        .tit {
                            p {
                                color: #fff;
                            }
                            strong {
                                color: #fff;
                            }
                        }
                    }

                    &.item01 {
                        &::after {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                        }
                        a {
                            .icon {
                                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                            }
                        }
                    }
                    &.item02 {
                        &::after {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                        }
                        a {
                            .icon {
                                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                            }
                        }
                    }
                    &.item03 {
                        &::after {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                        }
                        a {
                            .icon {
                                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1440px) {
        .inner {
            .intro {
                p:nth-child(1) {
                    font-size: 19px;
                    b {
                        font-size: 26px;
                        line-height: 1.2;
                    }
                }
                p:nth-child(2) {
                    a {
                        font-size: 17px;
                        svg {
                            font-size: 20px;
                            vertical-align: -4px;
                        }
                    }
                }
            }
            .list {
                .item {
                    height: 280px;
                    a {
                        .icon {
                            width: 50px;
                            height: 50px;
                        }
                        .tit {
                            p {
                                font-size: 17px;
                            }
                            strong {
                                font-size: 30px;
                                line-height: 1.3;
                                letter-spacing: -2px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .inner {
            .intro {
                p:nth-child(1) {
                    font-size: 18px;
                    b {
                        font-size: 24px;
                        line-height: 1.3;
                    }
                }
                p:nth-child(2) {
                    a {
                        font-size: 16px;
                        letter-spacing: -0.5px;
                        svg {
                            font-size: 18px;
                            vertical-align: -3px;
                        }
                    }
                }
            }
            .list {
                .item {
                    height: 260px;
                    padding: 35px;

                    &::after {
                        min-width: 370px;
                        background-position: bottom -50px right -200px;
                    }

                    a {
                        .icon {
                            width: 50px;
                            height: 50px;
                        }
                        .tit {
                            p {
                                font-size: 16px;
                            }
                            strong {
                                font-size: 28px;
                                line-height: 1.3;
                                letter-spacing: -2px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .inner {
            .intro {
                p:nth-child(1) {
                    font-size: 17px;
                    b {
                        font-size: 22px;
                        line-height: 1.2;
                    }
                }
                p:nth-child(2) {
                    a {
                        font-size: 15px;
                        letter-spacing: -0.5px;
                        svg {
                            font-size: 16px;
                            vertical-align: -2px;
                        }
                    }
                }
            }
            .list {
                .item {
                    height: 250px;
                    padding: 30px;

                    &::after {
                        min-width: 360px;
                        background-position: bottom -60px right -190px;
                    }

                    a {
                        .icon {
                            width: 50px;
                            height: 50px;
                        }
                        .tit {
                            p {
                                font-size: 15px;
                            }
                            strong {
                                font-size: 24px;
                                line-height: 1.3;
                                letter-spacing: -2px;
                                .mo {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 960px) {
        .inner {
            .intro {
                padding: 60px 0 50px;
            }
        }
    }

    @media (max-width: 768px) {
        .inner {
            .intro {
                padding: 60px 0 30px;
                p:nth-child(1) {
                    font-size: 17px;
                    b {
                        font-size: 22px;
                        line-height: 1.2;
                    }
                }
                p:nth-child(2) {
                    a {
                        font-size: 14px;
                        letter-spacing: -0.5px;
                        &:hover {
                            color: #1c1c1c;
                            &::after {
                                animation: none;
                                background-color: #1c1c1c;
                            }
                        }
                        svg {
                            font-size: 15px;
                            vertical-align: -2px;
                        }
                    }
                }
            }
            .list {
                margin-bottom: 80px;
                .item {
                    height: 240px;
                    padding: 25px;
                    background-color: #9fa1b8;
                    box-shadow: -3px 3px 10px #9fa1b8aa;

                    &::after {
                        min-width: 300px;
                        background-position: bottom -30px right -150px;
                    }

                    a {
                        .icon {
                            width: 40px;
                            height: 50px;
                        }
                        .tit {
                            p {
                                font-size: 14px;
                                color: #fff;
                                line-height: 1.3;
                            }
                            strong {
                                display: block;
                                font-size: 22px;
                                margin-top: 2px;
                                line-height: 1.3;
                                letter-spacing: -2px;
                                color: #fff;
                                .mo {
                                    display: block;
                                }
                            }
                        }
                    }

                    &.item01 {
                        &::after {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                        }
                        a {
                            .icon {
                                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                            }
                        }
                    }
                    &.item02 {
                        &::after {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                        }
                        a {
                            .icon {
                                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                            }
                        }
                    }
                    &.item03 {
                        &::after {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                        }
                        a {
                            .icon {
                                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                            }
                        }
                    }

                    &:hover {
                        box-shadow: -3px 3px 10px #9fa1b8aa;
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        .inner {
            .intro {
                padding: 50px 0 28px;
                p:nth-child(1) {
                    font-size: 15px;
                    b {
                        font-size: 19px;
                        line-height: 1.2;
                    }
                }
                p:nth-child(2) {
                    a {
                        font-size: 13px;
                        letter-spacing: -0.5px;
                        &:hover {
                            color: #1c1c1c;
                            &::after {
                                animation: none;
                                background-color: #1c1c1c;
                            }
                        }
                        svg {
                            font-size: 14px;
                            vertical-align: -2px;
                        }
                    }
                }
            }
            .list {
                margin-bottom: 60px;
                .item {
                    height: 220px;
                    padding: 25px;
                    background-color: #9fa1b8;
                    box-shadow: -3px 3px 10px #9fa1b8aa;

                    &::after {
                        min-width: 260px;
                        background-position: bottom -20px right -130px;
                    }

                    a {
                        .icon {
                            width: 40px;
                            height: 50px;
                        }
                        .tit {
                            p {
                                font-size: 12px;
                                color: #fff;
                                line-height: 1.3;
                            }
                            strong {
                                display: block;
                                font-size: 20px;
                                margin-top: 6px;
                                line-height: 1.3;
                                letter-spacing: -2px;
                                color: #fff;
                                .mo {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .inner {
            .intro {
                padding: 46px 0 24px;
                flex-direction: column;
                gap: 20px;
                align-items: flex-start;
                p:nth-child(1) {
                    font-size: 15px;
                    b {
                        font-size: 19px;
                        line-height: 1.2;
                    }
                }
                p:nth-child(2) {
                    a {
                        font-size: 13px;
                        letter-spacing: -0.5px;
                        &:hover {
                            color: #1c1c1c;
                            &::after {
                                animation: none;
                                background-color: #1c1c1c;
                            }
                        }
                        svg {
                            font-size: 14px;
                            vertical-align: -2px;
                        }
                    }
                }
            }
            .list {
                margin-bottom: 60px;
                grid-template-columns: repeat(1, 1fr);
                gap: 20px;
                .item {
                    height: 150px;
                    padding: 25px;
                    background-color: #9fa1b8;
                    box-shadow: -3px 3px 8px 2px #9fa1b8aa;

                    &::after {
                        width: 100%;
                        min-width: auto;
                        background-size: 260px;
                        background-position: bottom -50px right -120px;
                    }

                    a {
                        .icon {
                            width: 40px;
                            height: 50px;
                        }
                        .tit {
                            p {
                                font-size: 12px;
                                color: #fff;
                                line-height: 1.3;
                            }
                            strong {
                                display: block;
                                font-size: 20px;
                                margin-top: 6px;
                                line-height: 1.3;
                                letter-spacing: -2px;
                                color: #fff;
                                .mo {
                                    display: none;
                                }
                            }
                        }

                        &:hover {
                            box-shadow: -3px 3px 8px 2px #9fa1b8aa;
                        }
                    }
                }
            }
        }
    }
`;
