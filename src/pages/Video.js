import React, { useRef, useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs'
import { BiFullscreen } from 'react-icons/bi'
import videoask from '../assests/videoask-logos-idXf2z_NOQ.svg'

const Video = ({ children }) => {
    const videoref = useRef(null)
    const [playing, setPlaying] = useState(false);
    const [videoTime, setVideoTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [speed, setSpeed] = useState(1);

    const videoHandler = () => {
        setPlaying(!playing)
        if (!playing) {
            videoref.current.play();
            let vid = document.getElementById("video1");
            setVideoTime(vid.duration);
        } else {
            videoref.current.pause();
        }
    };


    window.setInterval(function () {
        setCurrentTime(videoref.current?.currentTime);
        setProgress((videoref.current?.currentTime / videoTime) * 100);
    }, 1000);

    const handleSpeed = () => {
        if (speed === 1) {
            const speedx = videoref.current.playbackRate = 1.5
            setSpeed(speedx)
        } else if (speed === 1.5) {
            const speedx2 = videoref.current.playbackRate = 2.0
            setSpeed(speedx2)
        }

    }
    let elem = document.getElementById("video1");
    const handleScreenControl = () => {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    }


    return (
        <div className='relative h-screen'>
            <div className="timecontrols">
                <div className="bg-gray-400 w-full h-3 relative z-30">
                    <div style={{ width: `${progress}%` }} className={`time_progressBar`}></div>
                </div>
            </div>
            <video
                onClick={() => videoHandler()}
                ref={videoref}
                id="video1"
                className='h-screen object-cover cursor-pointer'
            >
                <source src='https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2Mzc3MjE1NH0.sut40p-XhaMDOJL22Fh9dc1f1aj8vOm5oH_ZO0CHs4COrWIDr61tFtfdhaEHJOfZtrWvVao019c4aTqII7CSANLhpcNRE4DKTGlTDP1Mv_riR_GpPwRhqTVnYYrQIX-2gwgOIgmVggpnZJE_gUTddjSlX77-4iqb_k1oPbLy8Hd4fY5ZC3UCLzQz-86OUyhAmaWQwdt0-0V0ynMj_OuVDz4e4pL5xUJobI4ZenGCdm5iNk87JcefFYzcjJLLKO2FvWOoHsq9txrM5NsRZPg-ts1K_fsCnHY1fLrc1pUcjtnfEatklf9SKvoCfw0LbvWCpTq6dVRJfywh1FDmZt2UYbVoebmcmN6Y_2FjWKuMNK2oEVtk8IsXE8rxP718IaZI0MsH-hKT84bvbowWFgeyHqQByuXWIQskPKus7zkVKIDkokkcSyLQTeMEP0FCoGkxhMG4vBGgZIlBppyUe9x4pjo1Ost8EhvZRLTA2Qy-sjjznaib5mRAmgcD64tLvX86uTMnokkpLn5xDNif5XMOyNzRVQk_3OUNZMHUjR4C61UyB7SYlJ2GfP7HYPO2aFwKeWUiSaOHyhzPf1riFTRPpxhE4OEcguLrQt9YmwOSdxV-rVLiOPggWrZDvHxZbNIvCLw9fmjDCOxypu1l7aEkLT4-WNkEzI29IUuI8cwi1Ss' />
            </video>

            <p
                className='text-sm absolute bottom-10 left-9 z-20 text-white bg-[#6D21B8] p-1 rounded'
            >
                Powered by:
                <img className='w-24' src={videoask} alt="videoask" />
            </p>

            {!playing &&
                <div
                    onClick={() => videoHandler()}
                    className=" flex items-center justify-center mt-[-30vw] px-10 z-20"
                >
                    <div className="controls" >
                        <BsPlayCircle className='w-24 h-24 text-white' />
                    </div>
                </div>}

            <div className='flex items-center gap-3 absolute top-8 right-8'>
                <div
                    className="z-10  flex justify-end text-white"
                >
                    <p>{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}/ {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
                </div>

                <button
                    className='btn-toggle'>
                    CC
                </button>
                <button
                    onClick={() => handleSpeed()}
                    className='btn-toggle'>
                    {speed}x
                </button>
                <button
                    className='btn-toggle flex justify-center h-5'
                    onClick={() => handleScreenControl()}><BiFullscreen />
                </button>
            </div>
        </div>
    );
};

export default Video;