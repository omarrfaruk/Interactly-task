import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const SendContact = () => {
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='px-12'>
            <h4 className='text-xl'>Before you go, please leave your contact details so we can get back to you...</h4>
            <form className='mt-5' onSubmit={handleSubmit}>
                <input className='block border-b-2 w-full py-3 pl-5 text-lg' type="text" required placeholder='*Your name' />
                <input className='block border-b-2 w-full py-3 pl-5 text-lg mb-4 mt-4' type="email" required placeholder='*Your email' />
                {error && <p className='text-red-500 text-sm mb-3'>{error}</p>}
                <div>
                    <input className='mr-2' onClick={() => setChecked(!checked)} type="checkbox" name="check" id="" />
                    <label className='text-sm' htmlFor="check">
                        * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</label>
                </div>

                {checked ?
                    <button className='btn-secondary w-full py-3 mt-12' type='submit'>
                        <a target='_blank' rel="noreferrer" href="https://github.com/omarrfaruk/Interactly-task">
                            <span>Send your answer</span>
                            <span><HiOutlineArrowNarrowRight className='inline ml-10' /></span>
                        </a>
                    </button> :
                    <button onClick={() => setError('To continue you must accept the terms & conditions.')} className='btn-secondary w-full py-3 mt-12' type='submit'>
                        <span>Send your answer</span>
                        <span><HiOutlineArrowNarrowRight className='inline ml-10' /></span>
                    </button>
                }
            </form>
        </div>
    );
};

export default SendContact;