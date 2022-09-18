import React from 'react';
import Video from '../pages/Video';

const Home = () => {
    return (
        <div className='lg:grid lg:grid-cols-2'>
            <div>
                <Video />
            </div>
            <div>
                <button>Tarek</button>
                <button>Mizan</button>
                <button>ema</button>
            </div>
        </div>
    );
};

export default Home;