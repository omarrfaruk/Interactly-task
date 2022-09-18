import React from 'react';
import Video from '../pages/Video';
import { useDispatch } from 'react-redux'
import { routeToCampaign, routeToSignUp, routeToFreebie } from '../features/routingSlice';

const Home = () => {

    const dispatch = useDispatch()


    return (
        <div className='lg:grid lg:grid-cols-2 h-screen'>
            <div>
                <Video welcome={'welcome'} />
            </div>
            <div className='flex justify-center items-center px-5'>
                <div className='flex flex-col gap-y-3'>
                    <button onClick={() => dispatch(routeToCampaign())} className='btn-primary'>
                        <span className='bg-[#7D00FE] text-white text-sm rounded-full mx-3 py-1 px-2'>A</span>
                        <span>Campaign Structure</span>
                    </button>
                    <button onClick={() => dispatch(routeToSignUp())} className='btn-primary'>
                        <span className='bg-[#7D00FE] text-white text-sm rounded-full mx-3 py-1 px-2'>B</span>
                        <span>Learn Facebook Basics</span>
                    </button>
                    <button onClick={() => dispatch(routeToFreebie())} className='btn-primary'>
                        <span className='bg-[#7D00FE] text-white text-sm rounded-full mx-3 py-1 px-2'>C</span>
                        <span>3rd Choice</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Home;