import React from 'react'

import '../../styles/publicProfileStyles.css'
import { BsShieldLockFill } from 'react-icons/bs'


const PublicProfileSection = () => {
    return (
        <div id='publicProfileSection'>
            <div id='separator1rem' />

            <div>
                <button className='publicProfileSection-action-button'>
                    <BsShieldLockFill style={{ marginRight: 10 }} color='#fff' />
                    <span>Message</span>
                </button>

                <div id='separator1rem' />

                <button className='publicProfileSection-action-button'>
                    Connect
                </button>
            </div>
        </div>
    )
}

export default PublicProfileSection