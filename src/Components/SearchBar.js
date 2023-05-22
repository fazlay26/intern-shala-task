import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#609FA7', padding: '10px', paddingTop: '10px' }}>
                <div className='flex justify-center my-5'>
                    <div className="relative w-96">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FontAwesomeIcon style={{ color: '#609FA7' }} icon={faSearch} />
                        </span>
                        <input type="text" placeholder="Search for Products" className="input input-bordered pl-10 w-full max-w-md" />
                    </div>
                    <span className="flex items-center pl-3">
                        <FontAwesomeIcon style={{ color: 'white' }} icon={faMicrophone} />
                    </span>
                </div>
            </div>
        </div>


    );
};

export default SearchBar;