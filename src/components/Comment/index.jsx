import React, { useState } from 'react'

import '../../styles/feedsStyles.css'
import { profile } from '../../Mocks/profile'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { FaHeartBroken } from 'react-icons/fa'


const Comment = () => {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }

    return (
        <div id='comments'>
            <div className='post'>
                Messi
            </div>
            <div className='bottom-post'>
                <div> Says to {profile.username}</div>

                <div className='flex-content' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                        <img src={profile.profilePicture} alt='' className='post-image-author' />
                        <div className='post-name-author'>{profile.username},</div>
                        <div className='post-ts'>1h ago</div>
                    </div>

                    <div>
                        {liked ?
                            <BsHeartFill
                                title='like'
                                onClick={handleLike}
                                className='bottom-post-icons'
                                color='red'
                                size={20} />
                            :
                            <BsHeart
                                onClick={handleLike}
                                className='bottom-post-icons'
                                color='#3D5B59'
                                size={20} />
                        }
                        <FaHeartBroken
                            title='dislike'
                            className='bottom-post-icons'
                            color='#3D5B59'
                            size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment