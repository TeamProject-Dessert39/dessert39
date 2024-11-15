import styled from "styled-components";

export const SoteCon = styled.div`
    position: relative;

    .map-wrap {
        margin-top: 80px;
        position: relative;

        #map {
            width: 100%;
            height: 750px;
        }

        .con {
            position: absolute;
            top: 0;
            right: 0;
            transform: translateX(-10%);
            width: 500px;
            height: 100%;
            background-color: #f6f6f6;
            z-index: 50;
            .top{
                background: white;
                padding: 0 30px;
                padding-top: 20px;
                p{
                    font-size: 15px;
                    letter-spacing: -1px;
                    color : #1c1c1c
                }
                .filter-tab{
                    strong{
                        font-size: 24px;
                        margin-top: 35px;
                        margin-bottom: 20px;
                        text-align: center;
                        display: block;
                    }
                    ul{
                        display: flex;
                        gap: 8px;
                        justify-content: center;
                        li{
                            display: -webkit-box;
                            cursor: pointer;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            -webkit-box-pack: center;
                            -ms-flex-pack: center;
                            justify-content: center;
                            height: 45px;
                            border-radius: 10px;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            border: 2px solid #1c1c1c;
                            font-size: 16px;
                            padding: 0 10px;
                            &.on{
                                background-color: #1c1c1c;
                                color: white;
                            }
                        }
                    }
                    label{
                        display: block;
                        width: 100%;
                        height: 60px;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        border: 2px solid #1c1c1c;
                        border-radius: 30px;
                        padding: 0 25px;
                        display: flex;
                        justify-content: space-between;
                        input{
                            border: none;
                            height: 100%;
                            background: transparent;
                            width: 100%;
                        }
                        button{
                            background: none;
                            border: none;
                            cursor: pointer;
                        }
                    }
                }
                span{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 0;
                    font-size: 18px;
                    font-weight: bold;
                }
            }
            .bottom{
                height: calc(100% - 380px);
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                padding: 0 30px;
                background-color: white;
                margin-top: 18px;
                overflow: auto;
                ul{
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }

    @media (max-width: 1350px) {
        .map-wrap {
            .con {
                width: 450px;
                .top{
                    padding: 0 25px;
                    padding-top: 20px;
                }
                .bottom{
                    height: calc(100% - 403px);
                    padding: 0 25px;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .map-wrap {
            .con {
                width: 400px;
                .top{
                    padding: 0 20px;
                    padding-top: 15px;
                    p{
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .map-wrap {
            .con {
                width: 350px;
            }
        }
    }

    @media (max-width: 480px) {
        .map-wrap {
            .con {
                width: 300px;
            }
        }
    }
`;

export const StoreItemCon = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 30px 0;
    border-bottom: 1px solid #d2d2d2;
    box-sizing: border-box;
    img{
        width: 160px;
        height: 100px;
        border-radius: 4px;
        flex-shrink: 0;
    }
    .item-wrap{
        margin-left: 20px;
        width: calc(100% - 200px - 20px);
        .d-flex{
            display: flex;
            font-size: 16px;
            color: #2d2d2d;
            gap: 14px;
            strong{
                white-space: nowrap;
                position: relative;
                &::after{
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translate(7px , -50%);
                    content: '';
                    height: 50%;
                    width: 1px;
                    display: inline-block;
                    background: #d2d2d2;
                }
            }
            p{
                overflow: hidden;
                width: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
`

export const SoteModalCon = styled.div`
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1500;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    .modal{
        z-index: 110;
        position: fixed;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 95%;
        max-width: 600px;
        height: 770px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 25px;
        background-color: #FFF;
        padding: 35px;
        box-sizing: border-box;
        height: 750px;
        .modal_header{
            width: 100%;
            position: relative;
            margin-bottom: 50px;
            span{
                text-align: center;
                display: block;
                font-size: 26px;
                font-weight: bold;
            }
            button{
                position: absolute;
                right: 0;
                top: 0;
                border: none;
                background: none;
                cursor: pointer;
            }
        }
        .modal-body{
            display: flex;
            flex-direction: column;
            height: calc(100% - 78px);
            overflow-y: scroll;
            img{
                height: 300px;
                border-radius: 8px;
            }
            span{
                font-size: 20px;
                color: #1c1c1c;
                font-weight: bold;
                margin-top: 35px;
                margin-bottom: 20px;
            }
            ul{
                display: flex;
                gap: 8px;
                margin-bottom: 35px;
                li{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    height: 45px;
                    border-radius: 10px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    border: 2px solid #1c1c1c;
                    font-size: 16px;
                    padding: 0 10px;
                }
            }
            .d-flex{
                display: flex;
                margin-bottom: 3px;
                font-size: 18px;
                strong{
                    flex-basis: 18%;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    padding-right: 10px;
                    line-height: 130%;
                    font-weight: bold;
                }
                p{
                    flex-basis: 82%;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    padding-left: 10px;
                    line-height: 130%;
                    padding-left: 10px;
                    border-left: 1px solid #bfbfbf;
                }
            }
            p.small{
                display: block;
                margin-top: 10px;
                font-size: 16px;
                color: #5a5a5a;
            }
            #modal-map{
                margin-top: 35px;
                width: 100%;
                height: 250px;
                flex-shrink: 0;
            }
        }
    }
`