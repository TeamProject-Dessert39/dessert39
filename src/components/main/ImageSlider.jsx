/*
swiper plugin을 사용해서 구현
* 기능
    1. 액션에 의해 슬라이드
        1-1. 드래그(왼쪽 -> 오른쪽) : 이전 이미지로 이동
        1-2. 드래그(오른쪽 -> 왼쪽) : 다음 이미지로 이동
        1-3. 오른쪽에 왼 클릭하면 해당 이미지로 이동
        1-4. 아래 화살표로 이전 및 다음 이미지로 이동

    2. 시간마다 넘어가도록 설정 (5초(5000))
*/
import { useEffect, useRef, useState } from 'react';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ImageSliderWrap, SliderButtonWrap, TextBoxWrap } from './ImageSliderCss';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// react Icon
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import mainDesc from '../../assets/api/mainDesc';
import MainReadMore from '../button/MainReadMore';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1); // 현재 이미지 index
    const [title, setTitle] = useState(mainDesc[0].title);
    const [desc, setDesc] = useState(mainDesc[0].desc);
    const [hash, setHash] = useState(mainDesc[0].hash);
    const [color, setColor] = useState(mainDesc[0].color);
    const [animate, setAnimate] = useState(false);

    // 총 이미지 스와이프 개수 선언
    const imgTotalCnt = 39;
    const swiperRef = useRef(null);
    const startImgUrl = 'https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/main/';
    const endImgUrl = '?raw=true';
    let imgUrlArray = [];
    for (let i = 1; i <= imgTotalCnt; i++) {
        if (i < 10)
            if (i == 1) imgUrlArray.push(`main_0${i}.gif`);
            else imgUrlArray.push(`main_0${i}.png`);
        else imgUrlArray.push(`main_${i}.png`);
    }

    useEffect(() => {
        setTitle(mainDesc[currentSlide - 1].title);
        setDesc(mainDesc[currentSlide - 1].desc);
        setHash(mainDesc[currentSlide - 1].hash);
        setColor(mainDesc[currentSlide - 1].color);

        setAnimate(true);
    }, [currentSlide]);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex + 1);
    };

    return (
        <ImageSliderWrap className="inner">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                }}
                onSlideChange={handleSlideChange}
                // autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onActiveIndexChange={handleSlideChange}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                {/* 이미지 리스트 생성 */}
                {imgUrlArray.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img referrerPolicy="no-referrer" src={`${startImgUrl}${img}${endImgUrl}`} alt={`${index + 1}`}></img>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* 이미지 좌우 클릭 */}
            <SliderButtonWrap>
                <button className="leftBtn" onClick={handlePrev}>
                    <SlArrowLeft />
                </button>
                {`${currentSlide} / ${imgTotalCnt}`}
                <button className="rightBtn" onClick={handleNext}>
                    <SlArrowRight />
                </button>
            </SliderButtonWrap>
            {/* 버튼 */}
            <TextBoxWrap key={currentSlide} $animate={animate.toString()}>
                <h4 style={{ color: color === 'white' ? 'white' : 'black' }}>{hash}</h4>
                <h3 style={{ color: color === 'white' ? 'white' : 'black' }}>{title}</h3>
                <p style={{ color: color === 'white' ? 'white' : 'black' }}>{desc}</p>
                <div className="btnWrap">
                    {mainDesc[currentSlide - 1].button && (
                        <MainReadMore linkUrl={mainDesc[currentSlide - 1].buttonUrl} circleBg={'#a9af91'} bg={color} />
                    )}
                </div>
            </TextBoxWrap>
        </ImageSliderWrap>
    );
};

export default ImageSlider;
