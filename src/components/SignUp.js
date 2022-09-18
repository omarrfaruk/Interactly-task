import React from 'react';
import Video from '../pages/Video';

const SignUp = () => {
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div>
                <Video />
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn-secondary'>Sign up for webinar</button>
            </div>
        </div>
    );
};

export default SignUp;