import React from 'react'

import '../../styles/profileSectionStyles.css'
import GroupsAndFriends from '../GroupsAndFriends'
import PublicProfileSection from '../PublicProfileSection'


const ProfileSection = ({ ...props }) => {

    const { page, profile, activeTab } = props

    return (
        <div id='profileSection'>

            <div className='flex-content profileSection-picture-name'>
                <img src={profile.profilePicture} alt='' className='rounded-img' />

                <div id='separator1rem' />
                <div>
                    <div className='profileSection-username'>
                        {profile.username}
                    </div>

                    <div id='separator1rem' />

                    <div className='flex-content' style={{ justifyContent: 'space-around' }}>
                        <div className='profileSection-values'>
                            <div className='profileSection-normal-value'>
                                Posts
                            </div>
                            <div className='profileSection-bold-value'>
                                {profile.posts}
                            </div>
                        </div>
                        <div className='profileSection-values'>
                            <div className='profileSection-normal-value'>
                                Network
                            </div>
                            <div className='profileSection-bold-value'>
                                {
                                    Math.abs(profile.network) > 999 && Math.abs(profile.network) <= 999999 ?
                                        ((Math.floor(Math.abs(profile.network) / 1000))) + 'k'
                                        :
                                        Math.abs(profile.network) > 999999 ?
                                            ((Math.floor(Math.abs(profile.network) / 1000000))) + 'M'
                                            :
                                            Math.abs(profile.network)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='separatorHalfrem' />

            {page === 'PersonalProfile' && <GroupsAndFriends />}
            {page === 'PublicProfile' && <PublicProfileSection activeTab={activeTab} />}

        </div>
    )
}

export default ProfileSection