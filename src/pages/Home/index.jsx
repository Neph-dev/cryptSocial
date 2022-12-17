import React from 'react'

import '../../styles/homeStyles.css'
import { profile } from '../../Mocks/profile'

import Header from '../../components/Header'
import ProfileSection from '../../components/ProfileSection'
import Feeds from '../../components/Feeds'
import PriceFeed from '../../components/PriceFeed'


const Home = () => {

    const page = 'PersonalProfile'

    return (
        <div id='inAppPages'>
            <div className='page-content'>
                <section>
                    <Header />
                </section>

                <div id='separator4rem' />

                <div className='flex-content' id='home'>
                    <ProfileSection profile={profile} page={page} />
                    <Feeds page={page} />
                    <PriceFeed />
                </div>
            </div>
        </div>
    )
}

export default Home