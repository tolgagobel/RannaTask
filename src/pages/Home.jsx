import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Membership from '../components/MemberShip';
import Dining from '../components/Dining';
import GreenCont from '../components/GreenCont';
import Tourist from '../components/Tourist';
import BlueCont from '../components/BlueCont';
import Mobile from '../components/Mobile';
import Tabbar from '../components/Tabbar'
import Start from '../components/Start';


const Home = () => {
    return (
        <div>
            <ImageSlider/>
            <Membership />
            <Start />
            <Dining />
            <GreenCont />
            <Tourist />
            <BlueCont />
            <Mobile/>
            <Tabbar />
        </div>
    );
}

export default Home;
