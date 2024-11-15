import styled from 'styled-components';

// 미디어 쿼리 브레이크포인트 정의
const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    widescreen: '1440px'
};

// ---------------------------------------------------------------------
// index - header

export const HeaderWrap = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: white;
    display: flex;
    justify-content: center;
`;

export const HeaderInner = styled.div`
    width: 100%;
    max-width: 1440px; // 최대 너비 설정
    margin: 0 auto;
    height: 100px;
    position: relative;

    @media (max-width: ${breakpoints.mobile}) {
        height: 100px;
        background-color: darkorange;
    }

    @media (min-width: ${breakpoints.tablet}) {
        height: 100px;
        background-color: firebrick;
    }

    @media (min-width: ${breakpoints.desktop}) {
        height: 100px;
        background-color: darkblue;
    }

    @media (min-width: ${breakpoints.widescreen}) {
        height: 100px;
        background-color: rebeccapurple;
    }

    .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    h1 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        width: 4%;
        z-index: 1;
        
        .svg {
            width: 50px;
            height: 80px;
            vertical-align: middle;

            @media (max-width: ${breakpoints.mobile}) {
                width: 30px;
                height: 48px;
            }

            @media (min-width: ${breakpoints.tablet}) {
                width: 40px;
                height: 64px;
            }
        }
    }
`;

export const HeaderOuter = styled.div`
    width: 100%;
    background-color: #f8f8f8;
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
`;

// ---------------------------------------------------------------------
// index - nav

export const SubWrap = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    max-width: 1440px; // 최대 너비 설정
    top: 100px;
    background-color: white;
    transform-origin: top;
    opacity: ${props => props.$ishovered ? 1 : 0};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);

    @media (max-width: ${breakpoints.mobile}) {
        top: 0px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        top: 0px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        top: 0px;
    }

    @media (min-width: ${breakpoints.widescreen}) {
        top: 0px;
    }

    &:hover {
        transform: scaleY(1);
        opacity: 1;
    }
`;

export const NavContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;

    &:hover ~ ${HeaderOuter} ${SubWrap},
    &:hover + ${HeaderOuter} ${SubWrap} {
        transform: scaleY(1);
        opacity: 1;
    }
`;

export const Nav = styled.nav`
    height: 100%;

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            padding: 0 100px;
            font-size: 18px;
            font-weight: 600;

            @media (max-width: ${breakpoints.mobile}) {
                padding: 0 100px;
                font-size: 18px;
            }

            @media (min-width: ${breakpoints.tablet}) {
                padding: 0 100px;
                font-size: 18px;
            }

            a {
                position: relative;
                text-decoration: none;
                color: #333;
                transition: color 0.3s ease;

                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: block;
                    width: 0;
                    height: 35%;
                    background-color: #e4e8ec;
                    transition: width 0.3s;
                }

                &:hover {
                    color: #c0c0c0;

                    &::before {
                        width: 100%;
                    }
                }
            }
        }
    }
`;

export const LeftNav = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 50%;
    `;

export const RightNav = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 50%;
`;

// ---------------------------------------------------------------------
// sub
export const SubContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        padding: 20px 0;
    }

    .left, .right {
        justify-content: space-evenly;
        display: flex;

        @media (max-width: ${breakpoints.mobile}) {
            width: 100%;
            margin-bottom: 10px;
        }
    }
`;

export const SubMenu = styled.div`
    display: flex;
    
    ul {
        padding: 0 95px;
        list-style: none;
        margin: 0;
    }

    li {
        margin-bottom: 10px;

        @media (max-width: ${breakpoints.mobile}) {
            margin-bottom: 5px;
        }
    }

    a {
        position: relative;
        text-decoration: none;
        color: #333;
        font-size: 16px;
        font-weight: 600;
        transition: color 0.3s ease;

        @media (max-width: ${breakpoints.mobile}) {
            font-size: 12px;
        }

        &::before {
            content: '';
            z-index: -1;
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 0;
            height: 35%;
            background-color: #e4e8ec;
            transition: width 0.3s;
        }

        &:hover {
            color: #c0c0c0;

            &::before {
                width: 100%;
            }
        }
    }
`;