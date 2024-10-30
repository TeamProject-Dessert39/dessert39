import styled from 'styled-components';

export const HeaderWrap = styled.header`
    width: 100%;
`;

export const HeaderInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: 100px;
    position: relative;

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
        
        .svg {
            width: 50px;
            height: 80px;
            vertical-align: middle;
        }
    }
`;

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
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
            padding: 60px;
            font-size: 18px;
            font-weight: 600;

            a {
                text-decoration: none;
                color: #333;
                transition: color 0.3s ease;

                &:hover {
                    color: tomato;
                }
            }
        }
    }
`;

export const LeftNav = styled.div`
    display: flex;
    align-items: center;
`;

export const RightNav = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderOuter = styled.div`
    width: 100%;
    background-color: #f8f8f8;
    position: relative;
`;

export const SubWrap = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    background-color: white;
    transform-origin: top;
    transform: scaleY(${props => props.$ishovered ? 1 : 0});
    opacity: ${props => props.$ishovered ? 1 : 0};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;