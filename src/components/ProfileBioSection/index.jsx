import React from 'react'

import '../../styles/profileBioSectionStyles.css'


const ProfileBioSection = ({ ...props }) => {

    const { profile } = props

    return (
        <div id='profileBioSection'>
            <div style={{ width: '90%' }}>

                <div id='separator1rem' />

                <div className='profileBioSection-name-author'>{profile.username}</div>

                <div id='separatorHalfrem' />

                <div className='profileBioSection'>
                    {profile.bio}
                </div>
            </div>
        </div>
    )
}

export default ProfileBioSection