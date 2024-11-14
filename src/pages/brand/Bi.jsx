import SubLayout from '../../common/sub/SubLayout';
import { BiWrap } from './style';

const Bi = () => {
    return (
        <>
            <SubLayout kTitle={'BRAND IDENTITY'} eTitle={'BRAND IDENTITY'} />
            <BiWrap>
                <div className="cover">
                    <div className="left">
                        <div className="frame">
                            <img
                                src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/refs/heads/master/icon/dessert39_favicon.ico"
                                alt="dessert39_favicon"
                            />
                        </div>
                        <div className="point"></div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="logo"></div>
            </BiWrap>
        </>
    );
};

export default Bi;
