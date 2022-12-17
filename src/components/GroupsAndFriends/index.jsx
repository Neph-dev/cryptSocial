import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/groupsAndFriendsStyles.css'
import { publicProfile } from '../../Mocks/publicProfile'
import { GoPrimitiveDot } from 'react-icons/go'


const GroupsAndFriends = () => {

    const navigate = useNavigate()

    const onGoToPublicProfile = () => {
        navigate('/public-profile')
    }

    return (
        <div id='groupsAndFriends'>

            <div className='groupsAndFriends-search-container'>
                <input
                    maxLength={100}
                    placeholder='Search in your list...'
                    type='search'
                    id='groupsAndFriends-search' />
            </div>

            <div id='separator1rem' />
            <div id='separator1rem' />

            {
                publicProfile.map((item, index) => (
                    <div key={index} onClick={onGoToPublicProfile} className='groupsAndFriends-content'>
                        <img
                            src={item.profilePicture}
                            alt='' className='groupsAndFriends-content-img' />

                        {item.online === true &&
                            <GoPrimitiveDot id='groupsAndFriends-GoPrimitiveDot' color={'green'} />}

                        {item.online === false &&
                            <GoPrimitiveDot id='groupsAndFriends-GoPrimitiveDot' color={'red'} />}

                        <div className='groupsAndFriends-content-name'>
                            {item.username}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default GroupsAndFriends