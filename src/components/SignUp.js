import React from 'react';
import Video from '../pages/Video';

const SignUp = () => {
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div>
                <Video />
            </div>
            <div>
                <button>signup</button>
            </div>
        </div>
    );
};

export default SignUp;