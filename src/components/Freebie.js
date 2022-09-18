import React, { useState } from 'react';
import SendContact from '../pages/SendContact';
import Video from '../pages/Video';

const Freebie = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div>
                <Video />
            </div>
            <div className='flex justify-center items-center'>
                {clicked ?
                    <SendContact /> :
                    <button className='btn-secondary' onClick={() => setClicked(true)}>Download "Campaign Structure Guide"</button>}
            </div>
        </div>
    );
};

export default Freebie;