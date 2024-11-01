import {
    ImageSliderWrap,
    ReuserableGraphWrap,
    EcoStoryWrap,
    DessertListWrap,
    BeverageWrap,
    IntroductionWrap,
    StoreInteriorWrap,
    EventNewsWrap,
    NewStoreListWrap,
    InstagramWrap,
} from './style';

import ImageSlider from '../../components/main/ImageSlider';
import ReuserableGraph from '../../components/main/ReuserableGraph';
import EcoStory from '../../components/main/EcoStory';
import DessertList from '../../components/main/DessertList';
import Beverage from '../../components/main/Beverage';
import Introduction from '../../components/main/Introduction';
import StoreInterior from '../../components/main/StoreInterior';
import EventNews from '../../components/main/EventNews';
import NewStoreList from '../../components/main/NewStoreList';
import Instagram from '../../components/main/Instagram';

const Main = () => {
    return (
        <>
            {/* 이미지 슬라이드 */}
            <ImageSliderWrap>
                <ImageSlider />
            </ImageSliderWrap>

            {/* 그래프 */}
            <ReuserableGraphWrap>
                <ReuserableGraph />
            </ReuserableGraphWrap>

            {/* 탭 - 영상, 이미지 슬라이드 */}
            <EcoStoryWrap>
                <EcoStory />
            </EcoStoryWrap>

            {/* 디저트 - 이미지 슬라이드 변형 */}
            <DessertListWrap>
                <DessertList />
            </DessertListWrap>

            {/* 음료 - 이미지 슬라이드 변형 */}
            <BeverageWrap>
                <Beverage />
            </BeverageWrap>

            {/* 문구 - 버튼, 이미지 */}
            <IntroductionWrap>
                <Introduction />
            </IntroductionWrap>

            {/* 화살표 버튼 - 이미지 전환 */}
            <StoreInteriorWrap>
                <StoreInterior />
            </StoreInteriorWrap>

            {/* 이미지 슬라이드 */}
            <EventNewsWrap>
                <EventNews />
            </EventNewsWrap>

            {/* div 슬라이드 */}
            <NewStoreListWrap>
                <NewStoreList />
            </NewStoreListWrap>

            {/* 이미지 슬라이드 */}
            <InstagramWrap>
                <Instagram />
            </InstagramWrap>
        </>
    );
};

export default Main;
