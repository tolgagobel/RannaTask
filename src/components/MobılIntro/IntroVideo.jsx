import React from 'react';
import logo from '../../images/Group.png';
import video from "../../images/Group 61.png";
import { Link } from 'react-router-dom';

const IntroVideo = () => {
    return (
        <div className="introvideo_container">
            <div className="introvideo_body">
                <img src={logo} alt="Logo" className="introvideo_logo" />
                <div>
                    <img src={video} alt="Video" />
                </div>
            <Link to='/login'><button className='welcome_buttonbody_green'>Continue</button></Link>

            </div>
        </div>
    );
}

export default IntroVideo;
