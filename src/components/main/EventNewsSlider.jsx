import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { EventNewsList } from '../../assets/api/mainEventNewsList';

import { EventNewsSliderWrap } from './EventNewsCss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const EventNewsSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    return (
        <EventNewsSliderWrap>
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={20}
                slidesPerView={1}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                allowTouchMove={true}
                watchSlidesProgress={true}
            >
                {EventNewsList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link to={item.linkUrl}>
                            Brand
                            <img referrerPolicy="no-referrer" src={item.photoUrl} alt={`EventNews_${item.id}`} />
                            <div className="swiper-slide-content">
                                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                <h3 dangerouslySetInnerHTML={{ __html: item.date }} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev" ref={prevRef}></div>
                <div className="swiper-button-next" ref={nextRef}></div>
            </Swiper>
        </EventNewsSliderWrap>
    );
};

export default EventNewsSlider;
