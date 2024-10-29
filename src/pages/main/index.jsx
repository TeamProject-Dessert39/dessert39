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
            <div>Dessert39</div>
            <ImageSliderWrap>
                <ImageSlider />
            </ImageSliderWrap>

            <ReuserableGraphWrap>
                <ReuserableGraph />
            </ReuserableGraphWrap>

            <EcoStoryWrap>
                <EcoStory />
            </EcoStoryWrap>

            <DessertListWrap>
                <DessertList />
            </DessertListWrap>

            <BeverageWrap>
                <Beverage />
            </BeverageWrap>

            <IntroductionWrap>
                <Introduction />
            </IntroductionWrap>

            <StoreInteriorWrap>
                <StoreInterior />
            </StoreInteriorWrap>

            <EventNewsWrap>
                <EventNews />
            </EventNewsWrap>

            <NewStoreListWrap>
                <NewStoreList />
            </NewStoreListWrap>

            <InstagramWrap>
                <Instagram />
            </InstagramWrap>
        </>
    );
};

export default Main;
