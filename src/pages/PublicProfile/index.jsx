import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/publicProfileStyles.css'
import { publicProfile } from '../../Mocks/publicProfile'

import Header from '../../components/Header'
import ProfileSection from '../../components/ProfileSection'
import PriceFeed from '../../components/PriceFeed'
import Feeds from '../../components/Feeds'


const PublicProfile = () => {

  const page = 'PublicProfile'
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

        <div className='flex-content' id='publicProfile'>
          {publicUser !== null && (
            <ProfileSection profile={publicUser} page={page} />
          )}
          <Feeds page={page} profile={publicUser} />
          <PriceFeed />
        </div>

      </div>
    </div>
  )
}

export default PublicProfile