import styled from 'styled-components';

export const FooterWrap = styled.footer`
    background-color: #f4f5f6;
    .inner {
        height: 300px;
        box-sizing: border-box;
        padding: 40px 0;
        display: flex;
    }
    .info {
        display: flex;

        li {
            padding: 60px;
            font-size: 20px;

            a {
                color: #fcc419;
                transition: 0.3s;

                &:hover {
                    color: tomato;
                }
            }
        }
    }

    .family {
        position: absolute;
        top: 35px;
        right: 0;
        display: flex;

        li {
            padding: 20px;
            font-size: 20px;

            a {
                img {
                    width: 30px;
                    transition: 0.5s;
                    &:hover {
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }
`;

export const LogoTabWrap = styled.div`
    img {
        width: 150px;
        height: 20px;
    }

`


export const InfoWrap = styled.div`
    ul {
        margin-left: 70px;

        li {
            position: relative;
            font-size: 16px;
            margin-bottom: 15px;
            display: flex;

            span {
                font-weight: 600;
                margin-right: 10px;
            }

            p {
                margin-left: 10px;
            }

            .company {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 121px;
                }
            }

            .address {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 71px;
                }
            }

            .cs {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 145px;
                }
            }

            .rn {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 170px;
                }
            }
        }
    }
`


export const ContactWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-items: right;
    position: relative;
    box-sizing: border-box;

    .follow {
        text-align: right;
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 600;


        .followIcon {
            float: right;
            align-items: center;
            margin-left: 20px;

            li {
                a {
                    display: block;
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }

    .contact {
        text-align: right;
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 600;
    }


`


