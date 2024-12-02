import React from 'react';
import { useLocation } from 'react-router-dom';
import footerLogo from '../assets/images/png/footer-logo.png';
import { FOOTER_LIST } from '../common/Helper';

const Footer = ({ className }) => {
    const location = useLocation(); 
    const pathname = location.pathname;  
    const year = new Date().getFullYear();
    return (
        <div className={`${pathname === "/" ? "bg-black rounded-t-[30px] pt-[70px]" : pathname === "/about" ? "bg-[#002B43] pt-[70px]" : ""}`}>
            <div className='container'>
                <div className='flex flex-wrap flex-row -mx-3 pb-[61px]'>
                    <div className='lg:w-[50%] w-full px-3'>
                        <img src={footerLogo} alt="logo" className='md:w-[172px] w-[100px] pb-4' />
                        <p className='font-lato font-normal sm:text-base text-sm text-white opacity-70 lg:max-w-[431px]'>
                            Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.
                        </p>
                    </div>
                    {FOOTER_LIST.map((value, i) => (
                        <div key={i} className='lg:w-[25%] w-[50%] px-3 flex lg:items-center flex-col lg:mt-0 mt-6'>
                            <p className='font-lato font-semibold text-lg text-white whitespace-nowrap pb-6'>{value.list}</p>
                            {value.content.map((list, item) => (
                                <ul key={item}>
                                    <li className='pb-4'>
                                        <a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtn}</a>
                                    </li>
                                    <li className='pb-4'>
                                        <a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnTwo}</a>
                                    </li>
                                    <li className='pb-4'>
                                        <a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnThree}</a>
                                    </li>
                                    <li>
                                        <a href='#' className='font-lato font-normal text-base text-white opacity-70 hover:opacity-[1] duration-700'>{list.listBtnFour}</a>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='border border-white opacity-40'></div>
            <p className='font-lato font-normal text-base text-white opacity-70 text-center py-6'>
                Copyright©{year} (Logo) All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
