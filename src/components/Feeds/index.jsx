import React from 'react'

import '../../styles/feedsStyles.css'

import PostCard from '../PostCard'
import FeedContent from '../FeedContent'
import ProfileBioSection from '../ProfileBioSection'


const Feeds = ({ ...props }) => {

    const { page } = props

    return (
        <div id='feeds'>
            <div style={{ width: '100%' }}>
                {page === 'PersonalProfile' &&
                    <PostCard />
                }

                {page === 'PublicProfile' &&
                    <ProfileBioSection />
                }

                <div id='separator1rem' />
                <div id='separator1rem' />

                <FeedContent page={page} />

                <div id='separator1rem' />
                <div id='separator1rem' />
            </div>
        </div>
    )
}

export default Feeds