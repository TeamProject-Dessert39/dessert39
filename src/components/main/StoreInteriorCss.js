import styled from 'styled-components';

export const StoreInteriorWrap = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper {
        display: flex;
        width: 540px;
        height: 540px;
        overflow: visible;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
    }
`;

export const TitleWrap = styled.div`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 30px;
`;

export const LeftSide = styled.div`
    width: 540px;
    margin: 0 180px 0 0;

    .inner {
        width: 100%;
        height: 100%;
    }
`;


export const RightSide = styled.div`
    width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .silderInfo {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 30px;

        .logo {
            width: 140px;
            height: 210px;
            margin: 0 150px 0 0;
        }
    }
`;

export const ControllBox = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 30px;

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 50px;
        line-height: 0;
    }
`

