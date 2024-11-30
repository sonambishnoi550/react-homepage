import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick1 from '../../assets/images/png/slick1.png';
import Slick2 from '../../assets/images/png/slick2.png';
import Slick3 from '../../assets/images/png/slick3.png';
import Slick4 from '../../assets/images/png/slick4.png';

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div>
            <div className="container mx-auto pb-[100px]">
                <div>
                    <h1 className='font-bold text-7xl pb-5 text-pink-600 text-center'>
                        Slick Slider
                    </h1>
                </div>
                <div className="max-w-[1140px] mx-auto">
                    <Slider {...settings}>
                        <div>
                            <img className="max-w-[267px] w-full mx-auto" src={Slick1} alt="slick1" />
                        </div>
                        <div>
                            <img className="max-w-[267px] w-full mx-auto" src={Slick2} alt="slick2" />
                        </div>
                        <div>
                            <img className="max-w-[267px] w-full mx-auto" src={Slick3} alt="slick3" />
                        </div>
                        <div>
                            <img className="max-w-[267px] w-full mx-auto" src={Slick4} alt="slick4" />
                        </div>
                        <div>
                            <img className="max-w-[267px] w-full mx-auto" src={Slick2} alt="slick1" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Slick;
