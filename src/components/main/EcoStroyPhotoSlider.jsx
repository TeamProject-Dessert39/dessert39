import { EcoImageSliderWrap } from './EcoStoryCss';
import mainEcoStory from '../../assets/api/mainEcoStory';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';

const EcoStroyPhotoSlice = () => {
    const [slides, setSlides] = useState([]);
    const [swiper, setSwiper] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // mainEcoStory 데이터를 slides 상태에 설정
        setSlides(mainEcoStory);
    }, []);

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [slides, swiper]);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <EcoImageSliderWrap>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                }}
                onSlideChange={handleSlideChange}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={slides.length > 1} // slides가 2개 이상일 때만 loop 활성화
            >
                {mainEcoStory.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="swiper-slide-content">
                            <h2 dangerouslySetInnerHTML={{ __html: item.main }} />
                            <h3 dangerouslySetInnerHTML={{ __html: item.sub }} />
                        </div>
                        <img src={item.photo} alt={`EcoStroySlider_${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </EcoImageSliderWrap>
    );
};

export default EcoStroyPhotoSlice;
