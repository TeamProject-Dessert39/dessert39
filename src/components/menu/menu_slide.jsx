import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { MenuSlideComponents } from './styled';

const MenuSlide = ({newMenuItem}) => {
    return (
        <MenuSlideComponents>
            <Swiper
                slidesPerView={2}
                // centeredSlides={false}
                // slidesPerGroupSkip={1}
                // grabCursor={true}
                // keyboard={{
                // enabled: true,
                // }}
                breakpoints={{
                768: {
                    slidesPerView: 2.5,
                },
                }}
                scrollbar={true}
                navigation={true}
                // pagination={{
                // clickable: true,
                // }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    newMenuItem.map(item => (
                        <SwiperSlide key={item.id}>
                            <img src={item.imgurl} alt={item.name} />
                        </SwiperSlide>
                    ))

                }
            </Swiper>
        </MenuSlideComponents>
    );
};

export default MenuSlide;