import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import { HiTicket } from 'react-icons/hi2';

const sliderData = [
    {
        photoUrl: 'https://i.ibb.co.com/sdZfLJfQ/imgi-134-Untitled-design-2019-05-31-T200158-980.png',
        text: "Up here, life feels lighter, dreams feel closer, and the world feels wide open."
    },
    {
        photoUrl: 'https://i.ibb.co.com/3yfM2cgG/imgi-145-demo-36.jpg',
        text: "From up here, the earth feels endless… just like our journey waiting to begin. Pack your bags, darling."
    },
    {
        photoUrl: 'https://i.ibb.co.com/CDLvw8m/imgi-165-road-view-with-vehicles-passing-from-bus-window-during-ride-time-lapse-ejpmlljd-thumbnail-1.png',
        text: "Every click from the bus window was a promise—these travel days will never fade away."
    },
    {
        photoUrl: 'https://i.ibb.co.com/7tfMRLnj/imgi-189-3970992.jpg',
        text: "From the pilot's seat, the mountain and its lake whisper—once you've flown here, you'll always return."
    },
    {
        photoUrl: 'https://i.ibb.co.com/sdZfLJfQ/imgi-134-Untitled-design-2019-05-31-T200158-980.png',
        text: "Up here, life feels lighter, dreams feel closer, and the world feels wide open."
    },
    {
        photoUrl: 'https://i.ibb.co.com/3yfM2cgG/imgi-145-demo-36.jpg',
        text: "From up here, the earth feels endless… just like our journey waiting to begin. Pack your bags, darling."
    },
    {
        photoUrl: 'https://i.ibb.co.com/CDLvw8m/imgi-165-road-view-with-vehicles-passing-from-bus-window-during-ride-time-lapse-ejpmlljd-thumbnail-1.png',
        text: "Every click from the bus window was a promise—these travel days will never fade away."
    },
    {
        photoUrl: 'https://i.ibb.co.com/7tfMRLnj/imgi-189-3970992.jpg',
        text: "From the pilot's seat, the mountain and its lake whisper—once you've flown here, you'll always return."
    },
]


const BannerSection = () => {
    return (
        <div>
            <div>
                <div className='static z-0 my-[3%] mx-0 w-auto overflow-hidden fredoka-normal'>
                    <Swiper
                        effect={'coverflow'}
                        spaceBetween={0}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.25}
                        loop={true}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        speed={4000}
                        pagination={{
                            clickable: true,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, EffectCoverflow]}
                        className="mySwiper title-logo"
                    >
                        {
                            sliderData.map(data => (
                                <SwiperSlide className="flex flex-col justify-center items-center">
                                    <div className="relative h-fit w-[96%] m-[2%] my-0">
                                        <div className="company-logo absolute bottom-4 right-4 flex flex-col items-center text-white/80 drop-shadow-md">
                                            <h1>
                                                <HiTicket className="mb-0 text-xl lg:text-3xl rotate-325" />
                                            </h1>
                                            <span className="title font-light text-sm lg:text-md">Ticket Kinen</span>
                                            <span className="font-light text-[8px] lg:text-xs">
                                                “Book bus, train, launch & flight tickets easily”
                                            </span>
                                        </div>
                                        <img className="max-h-75 md:max-h-120 w-full border-3 border-[#0a2f23] dark:border-[#edc478] p-2 object-cover rounded-lg" src={data.photoUrl} alt="" />
                                        {/* Overlay text */}
                                        <div className="w-full h-full absolute inset-0 bg-[#0A2F2360]  flex items-center justify-center rounded-lg">
                                            <h3 className="text-white text-lg sm:text-2xl font-light text-center px-12 py-2 rounded">
                                                {data.text}
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;