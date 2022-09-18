import React from 'react';
import Video from '../pages/Video';

const Campaign = () => {
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div>
                <Video />
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn-secondary'>Download "Campaign Structure Guide"</button>
            </div>
        </div>
    );
};

export default Campaign;