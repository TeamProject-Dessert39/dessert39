import { SubLayoutContainer } from './style';

const SubLayout = ({ kTitle, eTitle }) => {
    return (
        <SubLayoutContainer>
            <div className="inner">
                <h2>
                    디저트39
                    <b>{kTitle}</b>
                    <span>{eTitle}</span>
                </h2>
            </div>
        </SubLayoutContainer>
    );
};

export default SubLayout;

/*
sublayout에 props로 제목 전달해주세요.
ex) <SubLayout kTitle={'창업경쟁력'} eTitle={'COMPETITIVE'} />
*/
