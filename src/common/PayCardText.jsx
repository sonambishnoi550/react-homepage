import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation

const PayCardText = ({ PayCardText }) => {
    return (
        <div>
            <h4 className='font-bold text-[22px] text-[#191D23] pb-[11px]'>
                {PayCardText}
            </h4>
        </div>
    );
};

export default PayCardText;
