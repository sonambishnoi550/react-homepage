import React from 'react';
import { useLocation } from 'react-router-dom';
import CommonHeading from '../common/CommonHeading';
import SearchIcon from '../assets/images/svg/search.svg'
const Hero = () => {
    const pathname = useLocation().pathname;
    console.log("Current Pathname:", pathname);
    return (
        <div>
            <div className={`${pathname === "/" ? "bg-custom-gradient rounded-b-[30px]" : pathname === "/about" ? "bg-dark-blue" : ""}`}>
                <div className='container'>
                    <div className='flex items-center justify-center w-full h-screen'>
                        <div>
                            <CommonHeading text="Lorem ipsum dolor sit amet consectetur." redText=" Sceleris"></CommonHeading>
                            <p className='font-lato font-medium text-base leading-[22.4px] text-center text-white'>
                                Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.
                            </p>
                            <form action="" className='flex items-center justify-between bg-white pl-[15px] pr-1 py-[3px] rounded-[15px] border-[1px] border-[#C8C8C8] max-w-[435px] mx-auto mt-[40px] cursor-pointer'>
                                <img src={SearchIcon} alt="Search Icon" />
                                <input className='bg-transparent w-full outline-none px-5' type="email" placeholder='Search' name='email' required />
                                <button className='bg-[#FF722C] font-semibold !tracking-[2%] px-[27px] py-[14px] rounded-[13px] text-white'>Start</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
