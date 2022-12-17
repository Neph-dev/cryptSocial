import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/publicProfileStyles.css'
import '../../styles/chatStyles.css'
import { publicProfile } from '../../Mocks/publicProfile'

import Header from '../../components/Header'
import ProfileSection from '../../components/ProfileSection'
import PriceFeed from '../../components/PriceFeed'
import ChatFeed from '../../components/ChatFeed'


const Chat = () => {

    const page = 'PublicProfile'
    const activeTab = 'chat'
    const navigate = useNavigate()

    const username = localStorage.getItem('visiting')

    const [publicUser, setPublicUser] = useState(null)

    const findProfile = (username) => publicProfile.filter((item) => {
        if (item.username.includes(username)) {
            return setPublicUser(item)
        }
        return 0
    })

    useEffect(() => {
        if (username === null) navigate('/home')
        findProfile(username)
    }, [username, navigate])

    return (
        <div id='inAppPages'>
            <div className='page-content'>
                <section>
                    <Header />
                </section>

                <div id='separator4rem' />

                <div className='flex-content' id='home'>
                    {publicUser !== null && (
                        <ProfileSection
                            activeTab={activeTab}
                            profile={publicUser}
                            page={page} />
                    )}
                    <ChatFeed />
                    <PriceFeed />
                </div>
            </div>
        </div>
    )
}

export default Chat