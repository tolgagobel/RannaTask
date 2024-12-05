import React, { useState } from 'react';
import logo from '../../images/Group.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome_container">
            <div className="welcome_body">
                <img src={logo} alt="Logo" />
                <h3>Welcome</h3>
                <span>Please select a language:</span>

                <select >
                    <option value="A">Turkish</option>
                    <option value="B">English</option>
                </select>

                <div className='welcome_buttonbody'>
                 <Link to='/introduction'><button className='welcome_buttonbody_green'>Continue</button></Link>
                    <button className='welcome_buttonbody_white'>Exit</button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
