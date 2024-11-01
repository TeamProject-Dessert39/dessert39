import styled from "styled-components";

export const TitleComponents = styled.div`
    display: inline;
    text-align: center;
    width: 100%;
    h2{
        position: relative;
        font-size: 60px;
        font-weight: 800;
        display: inline-block;
        &::after{
            content: '';
            display: block;
            width: 100%;
            height: 20%;
            background-color: #c0c0c0;
            opacity: 0.3;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(-10px);
        }
    }
`

export const MenuSlideComponents = styled.div`
    .swiper {
        padding: 30px 80px;
        padding-top: 0px;
        margin-top: 45px;
        .swiper-wrapper{
            box-sizing: border-box;
        }
        .swiper-button-prev{
            color: #1c1c1c;
        }
        .swiper-button-next{
            color: #1c1c1c;
        }
    }
    .swiper-scrollbar{
        margin: 0px 80px;
    }
`

export const ClickMenuComponents = styled.li`
    width: 140px;
    height: 140px;
    border: 2px solid black;
    margin: 0 17px 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;
    cursor: pointer;
    figure{
        width: 90%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 56px;
        img{
            width: 100%;
            height: 56px;
        }
    }
    strong{
        padding: 0px 8px;
        line-height: 130%;
        font-weight: 900;
        text-align: center;
    }
    &:hover{
        background-color: black;
        img{
            transform: translateY(-56px);
        }
        strong{
            color: white;
        }
    
    }
`
export const MenuTitleComponents = styled.div`
    display: block;
    text-align: center;
    margin-bottom: 50px;
    h3{
        display: inline-block;
        font-size: 36px;
        font-weight: bold;
    }
`
export const ProductItemComponents = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100%/5 - 120px/5);
    margin-right: 24px;
    margin-bottom: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(38, 38 , 38 , 0.18);
    border-radius: 10px;
    img{
        width: 170px;
        height: 170px;
    }
    strong{
        font-size: 20px;
        margin: 15px 0px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        width: 240px;
        text-align: center;
        text-overflow: ellipsis;
    }
    button{
        margin-top: 30px;
    }
    &:hover{
        box-shadow: 0px 0px 20px rgba(38, 38 , 38 , 0.35);
    }
`
export const MenuModalComponents = styled.div`
    border-radius: 25px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    right: 50%;
    background-color: white;
    transform: translate(50% ,-50%);
    display: flex;
    flex-direction: column;
    figure{
        width: 605px;
        height: 380px;
        display: flex;
        justify-content: center;
        img{
        }
    }
    button{
        background: none;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(-10px , 10px);
    }
`