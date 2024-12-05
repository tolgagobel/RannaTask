import React, { useState } from 'react';
import Welcome from './Welcome';
import Intro from './Intro';
import IntroVideo from './IntroVideo';
import Login from './Login';
import UserForm from './UserForm'

const MobilIntro = () => {
    const [step, setStep] = useState(1)

    const IncreaseSteps = () => {
        setStep(step+1)
    }

    return (
        <div className='mobilIntro_container'>
            {step==1 && <Welcome />}
            {step==2 && <Intro />}
            {step==3 && <IntroVideo />}
            {step==4 && <Login />}
            {step==5 && <UserForm />}
        </div>
    );
}

export default MobilIntro;
