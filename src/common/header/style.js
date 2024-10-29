import styled from 'styled-components';

export const HeaderWrap = styled.header`
`


export const NavWrap = styled.nav`
    &.nav {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        ul {
            display: flex;
            li {
                margin-left: 90px;
                position: relative;
                a {
                    transition: 0.3s;
                    &:hover {
                        color: tomato;
                    }
                }
                &:last-child span {
                    font-size: 16px;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    right: -20px;
                    top: -5px;
                    width: 20px;
                    height: 20px;
                    background-color: #000;
                    color: #fcc419;
                    text-align: center;
                    line-height: 17px;
                }
            }
        }
    }
`