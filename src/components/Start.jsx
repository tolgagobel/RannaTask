import { all } from 'axios';
import React, { useState } from 'react';
import { FaMap,FaSlidersH } from 'react-icons/fa';
import CategorySelection from './CategorySelection';

const Start = () => {
    const [enablecat,setEnablecat] = useState(false)
    return (
        <div className='start_container'>
            <div className='start_container_body'>
                <FaMap className='start_container_icon'/>
                <span className='start_text'>Start exploring now!</span>
                <FaSlidersH onClick={() =>{setEnablecat(!enablecat)}} className='start_container_icon' />
                <div style={{ transition: 'all 1s ease-out', position: 'fixed',bottom:enablecat ? '0px' : '-300px'}}>
                    <CategorySelection />
                </div>
            </div>
        </div>
    );
}

export default Start;
