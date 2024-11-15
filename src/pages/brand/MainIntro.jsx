import IntroBtn from "../../components/button/IntroBtn";
import { IntroCon } from "./styled";

const Mainintro = () => {
    return (
        <IntroCon>
            <section id="left">
                <div className="section-wrap">
                    <h3>DESSERT39 <br /> MENU</h3>
                    <div className="text-wrap">
                        <strong>디저트39 브랜드</strong>
                        <p>신메뉴부터 인기 메뉴, 추천 메뉴까지 <br />
                        디저트 39의 모든 메뉴와 최신 이벤트 소식을 살펴보세요.</p>
                        <div className="introbtn">
                            <IntroBtn title={'홈페이지'} link={'/'}></IntroBtn>
                        </div>
                    </div>
                </div>
            </section>
            <section id="right">
                <div className="section-wrap">
                    <h3>DESSERT39 <br /> FRANCHISE</h3>
                    <div className="text-wrap">
                        <strong>디저트39 창업</strong>
                        <p>
                            창업 비용부터 실제 창업주분들의 생생한 후기까지, <br />
                            성공 창업의 길 디저트39와 함께하세요. <br />
                            든든한 창업 파트너가 되겠습니다.
                        </p>
                        <div className="introbtn">
                            <IntroBtn title={'창업 문의'} link={'/franchise/competitive'}></IntroBtn>
                            <IntroBtn title={'제휴 문의'} link={'/franchise/alliance'}></IntroBtn>
                        </div>
                    </div>
                </div>
            </section>
        </IntroCon>
    )
};

export default Mainintro;