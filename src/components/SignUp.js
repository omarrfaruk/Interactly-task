import React, { useState } from 'react';
import SendContact from '../pages/SendContact';
import Video from '../pages/Video';

const SignUp = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div>
                <Video />
            </div>
            <div className='flex justify-center items-center'>
                {clicked ?
                    <SendContact /> :
                    <button className='btn-secondary' onClick={() => setClicked(true)}>Sign up for webinar</button>}
            </div>
        </div>
    );
};

export default SignUp;