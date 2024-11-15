import styled from 'styled-components';

export const PartWrap = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: calc(100% / 3 - 200px / 3);
        max-width: 300px;

        .titleBox {
            display: flex;
            align-items: center;
            width: 230px;
            height: 85px;
            background-color: #2c2c2c;
            border-radius: 42.5px;

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 62px;
                height: 62px;
                margin-left: 12px;
                background-color: #fff;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 73%;
                }
            }

            .partName {
                width: calc(100% - 74px);
                color: #fff;
                font-size: 20px;
                letter-spacing: -0.05em;
                text-align: center;
                font-weight: 700;
                line-height: 1.4;
            }
        }

        .line {
            width: 1px;
            height: 120px;

            .lineMotion {
                width: 100%;
                height: 0%;
                background-color: #1b1b1b;
                transition: height 1s;

                &.visible {
                    height: 100%;
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }
        }

        .descBox {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            justify-content: center;
            width: 100%;

            .name {
                display: flex;
                align-items: center;
                justify-content: center;
                width: calc(50% - 25px / 2);
                max-width: 142px;
                height: 50px;
                font-size: 18px;
                letter-spacing: -0.05em;
                background-color: #e8e8e8;
                border-radius: 26px;
                font-weight: 700;
                line-height: 1.4;
            }
        }
    }
`