import React from 'react';

import videopng from '../images/Group 61.png'

const BlueCont = () => {
    return (
        <div className='greencont_container' style={{backgroundColor:'#004DA7'}}>
        <div className='bg_svg'></div>
            <div className='greencont_leftbody'>
                <h2>How Does it Work?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum perspiciatis ipsum, cumque aperiam officia doloribus unde,
                    tenetur excepturi eaque id architecto veritatis? Ratione ipsa, impedit
                    beatae quos laboriosam doloremque quia.</p>
            </div>
            <div className='blue_rightbody'>
                <img src={videopng}/>
            </div>
    </div>
    );
}

export default BlueCont;
