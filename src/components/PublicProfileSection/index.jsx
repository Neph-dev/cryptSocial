import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/publicProfileStyles.css'
import { BsShieldLockFill } from 'react-icons/bs'


const PublicProfileSection = ({ ...props }) => {

    const { activeTab } = props

    const navigate = useNavigate()

    const onGoToChat = () => {
        navigate('/chat')
    }

    return (
        <div id='publicProfileSection'>
            <div id='separator1rem' />

            <div>
                <button
                    disabled={activeTab === 'chat' ? true : false}
                    onClick={onGoToChat}
                    style={{ backgroundColor: activeTab === 'chat' ? '#667575' : '#3D5B59' }}
                    className='publicProfileSection-action-button'>
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