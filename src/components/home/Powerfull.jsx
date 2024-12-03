import React from 'react';
import CommonSec from '../../common/CommonSec';
import { BtnIcon } from '../../common/Icon';
import PayCard from '../../common/PayCardText'; 
import { PAY_CARD_DATA } from '../../common/Helper';
import CommonAmount from '../../common/Amount';
import PayPera from '../../common/PayPera';
import CommonBtn from '../../common/PayBtn';
// import CommonPayFeature from '../../common/PayFeature';

const PowerFull = () => {
    return (
        <>
            <div className="pt-[47px] max-xl:pt-16 max-md:pt-10 max-sm:pt-5">
                <CommonSec
                    SectionHeading="Powerful features for" SectionSpanHeading=" powerful creators"
                />
                <p className="text-center font-normal text-xl text-[#191D23] pt-5 pb-10 max-md:pb-5">
                    Choose a plan that’s right for you
                </p>
                <div className="flex items-center gap-6 justify-center">
                    <p className="font-normal text-base text-[#191D23]">Pay Monthly</p>
                    <BtnIcon />
                    <p className="font-normal text-base text-[#191D23]">Pay Yearly</p>
                </div>
            </div>
            <div className="flex items-start justify-center gap-6 mt-12 max-xl:mt-7 max-md:mt-4 flex-wrap pb-24 max-md:pb-10 max-sm:pb-5">
                {PAY_CARD_DATA.map((data, i) => (
                    <div key={i}>
                        <PayCard CommonPayCardHeadingText={data.heading} />
                        <PayPera PayPara={data.para} />
                        <CommonAmount PayAmount={data.amountText} MonthText={data.month} />
                        <CommonBtn PayBtn={data.btn} />
                        {data.payContent.map((obj, idx) => (
                            <div className='flex gap-3 mb-3' key={idx}>
                                {obj.icon}
                                {obj.para}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default PowerFull;
