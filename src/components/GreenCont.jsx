import React from 'react';
import women from '../images/women.png'
import cards from '../images/cards.png'

const GreenCont = () => {
    return (
        <div className='greencont_container'>
            <div className='bg_svg'></div>
                <div className='greencont_leftbody'>
                    <h2>Choose Your Membership & Start Saving</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum perspiciatis ipsum, cumque aperiam officia doloribus unde,
                        tenetur excepturi eaque id architecto veritatis? Ratione ipsa, impedit
                        beatae quos laboriosam doloremque quia.</p>
                    <div style={{marginTop:'20px', zIndex:'10'}}>
                        <img src={cards}/>
                    </div>
                </div>
                <div className='greencont_rightbody'>
                    <img src={women}/>
                </div>
        </div>
    );
};

export default GreenCont;
