import { faCircleDollarToSlot, faFireBurner, faLightbulb, faMobile, faNewspaper, faRectangleAd, faSackDollar, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Font = () => {
    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8  gap-y-8 mt-5 justify-items-center'>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faMobile} size="3x" />
                <p className='text-center text-teal-400 font-medium'>Mobile <br /> Recharge</p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faLightbulb} size="3x" />
                <p className='text-center text-teal-400 font-medium'>Electricty</p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faTv} size="3x" />
                <p className='text-center text-teal-400 font-medium'>DTH</p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faCircleDollarToSlot} size="3x" />
                <p className='text-center text-teal-400 font-medium'>Loan</p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faNewspaper} size="3x" />
                <p className='text-center text-teal-400 font-medium'>News</p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faSackDollar} size="3x" />
                <p className='text-center text-teal-400 font-medium'>refer & <br /> earn</p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faRectangleAd} size="3x" />
                <p className='text-center text-teal-400 font-medium'>promotions</p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-lg shadow-lg w-28 h-36 flex flex-col justify-center'>
                <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faFireBurner} size="3x" />
                <p className='text-center text-teal-400 font-medium'>Book <br /> a stove</p>
            </div>
        </div>

    );
};

export default Font;