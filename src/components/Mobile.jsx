import React from 'react';
import iphone from '../images/Default model.png'
import appstore from '../images/image 2 (1).png'
import androidstore from '../images/image 3 (1).png'
const Mobile = () => {
    return (
        <div className='mobil_container'>
            <div className='iphone_body'>
                <img src={iphone} alt="" />
            </div>
            <div className='store_body'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis velit delectus nobis similique provident nulla quia soluta eveniet voluptatum magni!</p>
                    <div className='iconstore'>
                       <a href="#"><img src={appstore} /></a>
                       <a href="#"> <img src={androidstore} /></a>
                    </div>
            </div>
        </div>
    );
}

export default Mobile;
