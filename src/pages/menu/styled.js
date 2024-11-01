import styled from "styled-components";

export const MenuCom = styled.div`
    .ModalBg{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        z-index: 100;
        transform: translateY(-100px);
    }
    .topCon{
        padding: 100px 230px ;
        text-align: center;
        .inner{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            max-width: 1440px;
            width: 95%;
        }
    }
    .mainCon{
        padding-top: 100px;
        background: #fafbfc;
        .inner{
            max-width: 1440px;
            width: 95%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            span{
                text-align: center;
                margin-top: 10px;
                font-size: 18px;
                font-weight: 500;
            }
            ul{
                margin-top: 33px;
                display: flex;
                flex-wrap: wrap;
                justify-content: start;
                &.click-menu{
                    justify-content: center;
                    max-width: 1044px;
                    margin: 0 auto;
                    margin-top: 33px;
                }
            }
            .con2{
                padding-bottom: 100px;
                div{
                    margin-top: 100px;
                }
            }
        }
    }
`