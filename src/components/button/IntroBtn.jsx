import { useNavigate } from 'react-router-dom';
import { GlobalStyle, ButtonsContainer, BlobButton, ButtonInner, ButtonBlobs, ButtonBlob, MoreBtnWrap, IntorBtn } from './IntroCss';
import SVGFilter from './SVGFilter';
import { TitleWrap } from '../main/EventNewsCss';

const IntroBtn = ({title , link}) => {
    const navigate = useNavigate()
    const ongo = () => {
        navigate(link)
    }
    return (
        <IntorBtn onClick={ongo}>
            <MoreBtnWrap></MoreBtnWrap>
            <GlobalStyle />
            <ButtonsContainer>
                <BlobButton>
                    {title}
                    <ButtonInner>
                        <ButtonBlobs>
                            {[0, 1, 2, 3].map((index) => (
                                <ButtonBlob key={index} $index={index} />
                            ))}
                        </ButtonBlobs>
                    </ButtonInner>
                </BlobButton>
            </ButtonsContainer>
            <SVGFilter />
        </IntorBtn>
    );
};

export default IntroBtn;
