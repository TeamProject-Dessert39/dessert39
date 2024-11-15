import { styled } from 'styled-components';

// Contact
export const ContactContainer = styled.div`
    .inner {
        width: 95%;
        form {
            width: 100%;
            .submit_btn {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 100px;
                & > button {
                    background-color: transparent;
                    border: none;
                }
            }
        }
    }

    @media (max-width: 980px) {
        .inner {
            form {
                .submit_btn {
                    padding-bottom: 70px;
                }
            }
        }
    }

    @media (max-width: 600px) {
        .inner {
            form {
                .submit_btn {
                    padding-bottom: 50px;
                }
            }
        }
    }
`;
