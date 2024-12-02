import React from 'react'

const Amount = ({ PayAmount, MonthText }) => {
  return (
    <div>
          <p className='font-semibold text-[56px] max-lg:text-[40px] max-md:text-2xl'> {PayAmount} <span className='font-light text-[13px] text-[#4B5768]'>{MonthText}</span></p>
    </div>
  )
}

export default Amount
