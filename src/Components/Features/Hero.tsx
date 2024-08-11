import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {swiper1, swiper2, swiper3} from "../../Constants/bgs.ts";



const Hero = () => {
    return(

        <>
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
                            backgroundImage: `url(${swiper1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                    <SwiperSlide
                        style={{
                            backgroundImage: `url(${swiper2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                    <SwiperSlide
                        style={{
                            backgroundImage: `url(${swiper3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                </Swiper>
            </div>
            <div className="pt-8 pb-10 flex flex-col gap-4 xl:gap-0 xl:flex-row items-start xl:items-center justify-between">
                <div>
                    <h2 className="text-5xl md:text-7xl font-medium">
                        Simply Unique
                        <span className="text-theme-neutral-4">/</span>
                    </h2>
                    <h2 className="text-5xl md:text-7xl font-medium">
                        Simply Better
                        <span className="text-theme-neutral-4">.</span>
                    </h2>
                </div>
                <div className=" w-[19.5625rem] md:w-[28.3125rem]">
                    <p className="text-theme-neutral-4">
                        <span className="text-theme-neutral-5 font-semibold">3legant</span> is a gift & decorations store based in KIGALI, Rwanda. Est since 2019.
                    </p>
                </div>
            </div>
        </>
    )
}


export default Hero;