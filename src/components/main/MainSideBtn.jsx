import { MainSideBtnCon } from "./slideBtn";

const MainSideBtn = () => {
    return (
        <MainSideBtnCon>
            <a href="https://pf.kakao.com/_LNjxfK" target='_blank'>
                <span>카카오 채널</span>
                <div className="wrap">
                    <div className="kakao-wrap">
                        <img src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/ac7edf1177b3a61fa30d9a6615d318daea2a9f0f/icon/kakao_icon.svg" alt="카카오" />
                        <strong>KAKAO</strong>
                    </div>
                </div>
            </a>
        </MainSideBtnCon>
    );
};

export default MainSideBtn;