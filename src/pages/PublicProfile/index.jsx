import React from 'react'

import '../../styles/publicProfileStyles.css'

import Header from '../../components/Header'
import ProfileSection from '../../components/ProfileSection'
import PriceFeed from '../../components/PriceFeed'
import Feeds from '../../components/Feeds'


const PublicProfile = () => {

  const page = 'PublicProfile'

  return (
    <div id='inAppPages'>
      <div className='page-content'>

        <section>
          <Header />
        </section>

        <div id='separator4rem' />

        <div className='flex-content' id='publicProfile'>
          <ProfileSection page={page} />
          <Feeds page={page} />
          <PriceFeed />
        </div>

      </div>
    </div>
  )
}

export default PublicProfile