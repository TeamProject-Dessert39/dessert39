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
            <ImageSlider />

            {/* 그래프 */}
            <ReuserableGraph />

            {/* 탭 - 영상, 이미지 슬라이드 */}
            <EcoStory />

            {/* 디저트 - 이미지 슬라이드 변형 */}
            <DessertList />

            {/* 음료 - 이미지 슬라이드 변형 */}
            <Beverage />

            {/* 문구 - 버튼, 이미지 */}
            <Introduction />

            {/* 화살표 버튼 - 이미지 전환 */}
            <StoreInterior />

            {/* 이미지 슬라이드 */}
            <EventNews />

            {/* div 슬라이드 */}
            <NewStoreList />

            {/* 이미지 슬라이드 */}
            <Instagram />
        </>
    );
};

export default Main;
