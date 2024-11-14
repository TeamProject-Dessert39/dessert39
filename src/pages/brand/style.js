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
    width: 95%;
    max-width: 1440px;
    margin: 0 auto;

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
        }

        .right {
            width: 45%;
        }
    }
`