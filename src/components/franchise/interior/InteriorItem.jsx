import InteriorTitle from './InteriorTitle';
import { InteriorItemContainer } from './style';

const InteriorItem = ({ item }) => {
    

    return (
        <InteriorItemContainer>
            <div className="inner">
                <InteriorTitle title={item.title} />
                {item.items.map((i) => (
                    <div className="box" key={i.id}>
                        <div className="txt">
                            <p className="addr">
                                <b>{i.store}</b>
                                {i.addr}
                            </p>
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
                        <div className="pics">
                            {i.img.map((pic, idx) => (
                                <div className="pic" key={idx}>
                                    <img src={pic} alt={i.store + '매장 사진'} />
                                </div>
                            ))}
                        </div>
                        {i.photoImg ? (
                            <div className="photo">
                                <p>PHOTO ZONE</p>
                                <div className="photos">
                                    {i.photoImg.map((pic, idx) => (
                                        <div className="pic" key={idx}>
                                            <img src={pic} alt={i.store + '포토존 사진'} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </InteriorItemContainer>
    );
};

export default InteriorItem;
