import styled from 'styled-components';

export const Inner = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
`

export const BiWrap = styled.div`
    position: relative;
    padding: 0 75px;
    margin-top: 120px;
    box-sizing: border-box;

    .center {
        width: 95%;
        max-width: 1440px;
    }

    .cover {
        display: flex;
        align-items: center;
        gap: 75px;

        .left {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 606px;
            width: 55%;
            height: 532px;
            margin-top: 50px;
            border: 2px solid #1b1b1b;
            box-sizing: border-box;
            border-top-right-radius: 266px;
            border-bottom-right-radius: 266px;

            .frame {
                width: 40%;
                max-width: 220px;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .point {
                position: absolute;
                top: 0;
                left: 0;
                width: 145px;
                height: 530px;
                background-image: url('https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/orora_bg.png?raw=true');
                background-size: cover;
                background-repeat: no-repeat;

                p {
                    width: 300px;
                    color: #fff;
                    font-size: 25px;
                    letter-spacing: 0.1em;
                    transform: rotate(90deg);
                    margin-top: 160px;
                    margin-left: -40px;
                }
            }
        }

        .right {
            width: 45%;

            h3 {
                font-size: 42px;
                letter-spacing: -0.025em;
                line-height: 1.3;
                margin-bottom: 80px;
                font-weight: 600;
                font-family: 'Lexend Deca', sans-serif;
                transform: translate(0, 70px);
                transition: transform 1s, opacity 1s;
                opacity: 0;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }
            .txt1 {
                font-size: 24px;
                letter-spacing: -0.05em;
                line-height: 1.3;
                margin-bottom: 30px;
                font-weight: 700;
                transform: translate(0, 70px);
                transition: transform 1s, opacity 1s;
                transition-delay: 0.4s;
                opacity: 0;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }

            .txt2 {
                font-size: 18px;
                letter-spacing: -0.05em;
                line-height: 1.5;
                transform: translate(0, 70px);
                transition: transform 1s, opacity 1s;
                transition-delay: 0.7s;
                opacity: 0;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }
        }
    }

    .logo {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        padding-bottom: 100px;
        box-sizing: border-box;

        .logoWrap {
            margin-right: 20px;
            width: 100%;
            max-width: 100%;

            h4 {
                font-size: 26px;
                letter-spacing: -0.025em;
                margin-bottom: 15px;
                font-weight: 500;
                font-family: 'Lexend Deca', sans-serif;
            }

            .logoBox {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                width: 100%;
                height: 213px;
                border: 1px solid #1b1b1b;

                img {
                    width: 90%;
                    max-width: 220px;
                    font-family: 'Noto Sans KR', sans-serif;
                }

                .bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/e6e059fd7913f602bbabdc4bfcf83fd47cdf7763/images/brand/patten_bg.svg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    opacity: 0.2;
                    z-index: -1;
                    font-family: 'Noto Sans KR', sans-serif;
                }
            }
        }
    }
`

export const HQWrap = styled.div`
    box-sizing: border-box;

    .center {
        max-width: 1440px;
    }

    .cover {

        .bg {
            width: 100%;
            height: 260px;
            background-image: url('https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/orora_bg_1440.png?raw=true');
            background-size: cover;
        }

        .txtWrap {
            width: 95%;
            max-width: 1290px;
            margin: -80px auto 0;
            padding-bottom: 100px;
            box-sizing: border-box;

            h3 {
                font-size: 40px;
                letter-spacing: -0.06em;
                line-height: 1.3;
                margin-bottom: 60px;
                font-weight: 700;
                text-align: left;
                transform: translate(-70px, 0);
                transition: transform 1s, opacity 1s;
                opacity: 0;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }

            .titleBox {
                display: flex;
                align-items: flex-end;
                gap: 30px;
                margin-bottom: 35px;

                p {
                    width: calc(50% - 15px);
                    font-size: 22px;
                    letter-spacing: 0.01em;
                    font-weight: 600;
                    font-family: 'Lexend Deca', sans-serif;

                    span {
                        color: #96dad8;
                    }
                }

                .line {
                    width: 77px;
                    height: 2px;
                    background-color: #bad6f8;
                }
            }

            .descBox {
                display: flex;
                font-size: 16px;
                gap: 30px;

                .leftTxt {
                    line-height: 1.4;
                    width: calc(50% - 15px);
                }

                .partiction {
                    display: none;
                }

                .rightTxt {
                    width: calc(50% - 15px);

                    .rightTxt1 {
                        margin-bottom: 55px;
                        line-height: 1.4;
                    }

                    .rightTxt2 {
                        line-height: 1.4;
                    }
                }
            }
        }
    }
`