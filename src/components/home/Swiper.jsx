import React from 'react';
import { LOREM_CARDS } from '../../common/Helper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';

const Swiper = () => {
    return (
        <div className="container mx-auto overflow-hidden relative pb-[165px]">
            <h3 className="font-inter font-semibold text-4xl text-black text-center  pt-[135px] pb-10 animate__animated animate__flipInX animate__slow 1s animate__infinite">
                Lorem ipsum
            </h3>
            <SwiperComponent
                modules={[Autoplay, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next', 
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                onSlideChange={() => console.log('Slide changed')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {LOREM_CARDS && LOREM_CARDS.length > 0 ? (
                    LOREM_CARDS.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="px-3 flex justify-center lg:pb-6 pb-5">
                                <div className="sm:max-w-[365px] lg:h-[273px] h-[260px] duration-700 w-full rounded-[22px] py-5 lg:px-7 px-5 bg-light-yellow shadow-lg">
                                    <img src={item.icon} alt="Card icon" />
                                    <h2 className="font-inter font-semibold text-2xl lg:pt-8 lg:pb-4 py-3">
                                        {item.heading}
                                    </h2>
                                    <p className="font-inter font-light text-base text-black lg:max-w-[304px]">
                                        {item.paragraph}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No cards available</p>
                )}
            </SwiperComponent>

            <div className=" cursor-pointer text-black text-2xl absolute left-[45%]">
                <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_106)">
                        <path d="M9.67831 22.4648L1.74974 13.8756M1.74974 13.8756L9.67831 5.28627M1.74974 13.8756H32.4286"
                            stroke="#0A0A0A" strokeWidth="3.30357" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6_106">
                            <rect width="37" height="27.75" fill="white" transform="matrix(-1 0 0 -1 37.4286 27.75)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className=" cursor-pointer text-black text-2xl absolute right-[47%]">
                <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_106)">
                        <path d="M28.1789 5.28516L36.1074 13.8744M36.1074 13.8744L28.1789 22.4637M36.1074 13.8744H5.42859"
                            stroke="#0A0A0A" strokeWidth="3.30357" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6_106">
                            <rect width="37" height="27.75" fill="white" transform="translate(0.428589)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Swiper;
