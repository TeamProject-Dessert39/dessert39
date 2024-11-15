import interiorDesc from '../../../assets/api/interior_desc';
import InteriorTitle from './InteriorTitle';
import { InteriorDetailContainer } from './style';

const InteriorDetail = () => {
    const detailData = interiorDesc.find((item) => item.category === 'detail').list[0];
    return (
        <InteriorDetailContainer>
            <div className="inner">
                <InteriorTitle title={detailData.title} bold={true} />
                {detailData.items.map((i) => (
                    <div key={i.id} className="box">
                        <div className="txt">
                            <p className="tit">{i.title}</p>
                            {i.desc ? (
                                <p className="desc">
                                    {i.desc.map((t, idx) => (
                                        <span key={idx}>
                                            {t}
                                            <br className="pc" />
                                        </span>
                                    ))}
                                </p>
                            ) : null}
                        </div>
                        <div className={`pics ${i.img.length === 3 ? 'trd' : ''}`}>
                            {i.img.map((pic, idx) => (
                                <div className="pic" key={idx}>
                                    <img src={pic} alt={i.title + '사진'} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </InteriorDetailContainer>
    );
};

export default InteriorDetail;
