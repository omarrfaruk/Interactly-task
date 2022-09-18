import React from 'react';
import Video from '../pages/Video';
import { useDispatch } from 'react-redux'
import { routeToCampaign, routeToSignUp, routeToFreebie } from '../features/routingSlice';

const Home = () => {

    const dispatch = useDispatch()


    return (
        <div className='lg:grid lg:grid-cols-2 h-screen'>
            <div>
                <Video />
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-y-3'>
                    <button onClick={() => dispatch(routeToCampaign())} className='btn-primary text-xl'>Campaign Structure</button>
                    <button onClick={() => dispatch(routeToSignUp())} className='btn-primary text-xl'>Learn Facebook Basics</button>
                    <button onClick={() => dispatch(routeToFreebie())} className='btn-primary text-xl'>3rd Choice</button>
                </div>
            </div>
        </div>
    );
};

export default Home;