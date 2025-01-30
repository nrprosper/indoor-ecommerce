'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeSwiper() {
    return (
        <div className="w-full relative z-0 h-[19rem] md:h-[33.5rem]">
            <Swiper
                className="h-full"
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                autoplay={{
                    delay: 3000
                }}
                loop={true}
            >
                <SwiperSlide
                    style={{
                        backgroundImage: `url(/images/swiper1.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <SwiperSlide
                    style={{
                        backgroundImage: `url(/images/swiper2.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <SwiperSlide
                    style={{
                        backgroundImage: `url(/images/swiper2.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
            </Swiper>
        </div>
    )
}