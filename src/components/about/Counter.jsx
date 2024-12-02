import React, { useState } from 'react'
import { BgBoxLayer } from '../../common/Icon';

const Counter = () => {

    const [value, setValue] = useState(0);
    const addValue = () => {
        setValue(value + 1);
    }
    const removeValue = () => {
        setValue(value - 1);
    }

    return (
        <>
            <div className='flex items-center justify-center gap-[166px] max-2xl:gap-[140px] max-xl:gap-[100px] max-lg:gap-12 max-md:gap-8 max-sm:gap-3 max-lg:flex-col my-[78px] max-xl:my-20px max-lg:my-10 max-md:my-5'>
                <div>
                    <div className='flex gap-[97px] items-center justify-center bg-[#1EABF8] border-[5px] border-black max-w-[402px] py-9 px-[60px] rounded-[50px] max-sm:max-w-full'>
                        <button className='text-6xl' onClick={removeValue}>-</button>
                        <p className='text-6xl'>{value}</p>
                        <button className='text-6xl' onClick={addValue}>+</button>
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <div className='flex gap-7 flex-wrap max-md:justify-center'>
                        <div className='w-[268px] h-[207px] flex flex-col justify-center text-white bg-[#85B6A6] relative'>
                            <div className='absolute right-0 bottom-0'>
                                <BgBoxLayer />
                            </div>
                            <p className='text-6xl font-semibold text-center'>50%</p>
                            <p className='max-w-[140px] text-xl text-center opacity-80 mx-auto'>Reduction in Pain</p>
                        </div>
                        <div className='w-[268px] h-[207px] flex flex-col justify-center text-white bg-[#82B2C2] relative'>
                            <div className='absolute right-0 bottom-0'>
                                <BgBoxLayer />
                            </div>
                            <p className='text-6xl font-semibold text-center'>90%</p>
                            <p className='max-w-[170px] text-xl text-center opacity-80 mx-auto'>Increase In-Patient Satisfaction</p>
                        </div>
                    </div>
                    <div className='w-[268px] h-[207px] flex flex-col justify-center text-white bg-[#076787] mx-auto relative'>
                        <div className='absolute right-0 bottom-0'>
                            <BgBoxLayer />
                        </div>
                        <p className='text-6xl font-semibold text-center'>50%</p>
                        <p className='max-w-[140px] text-xl text-center opacity-80 mx-auto'>Faster Recovery</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Counter