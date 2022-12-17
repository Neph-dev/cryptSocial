import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/feedsStyles.css'
import { profile } from '../../Mocks/profile'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { FaHeartBroken } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { MdKeyboardBackspace } from 'react-icons/md'

import Comment from '../../components/Comment'


const PostContent = () => {

    const [liked, setLiked] = useState(false)

    const navigate = useNavigate()

    const handleLike = () => {
        setLiked(!liked)
    }

    const handleBack = () => navigate(-1)

    return (
        <div id='feeds'>
            <div style={{ width: '100%' }}>

                <div id='separator1rem' />

                <MdKeyboardBackspace
                    id='MdKeyboardBackspace'
                    onClick={handleBack}
                    size={30} />

                <div id='separator1rem' />

                <div id='FeedContent'>
                    <div className='FeedContent'>
                        <div className='post-container'>
                            <div className='post'>
                                Two assure edward whence the was. Who worthy yet ten boy denote wonder.
                            </div>
                            <div className='bottom-post'>
                                <div> Says </div>

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

                                <div id='separatorHalfrem' />

                                <div classname='flex-content'>
                                    <textarea
                                        maxLength={150}
                                        className='post-input-comment'
                                        placeholder='Comment this post...'
                                        rows={1}
                                        type='text' />
                                    <RiSendPlaneFill size={25} color='#3D5B59' />
                                </div>

                                <Comment />
                            </div>
                        </div>
                    </div>
                </div>

                <div id='separator1rem' />
                <div id='separator1rem' />
            </div>
        </div>
    )
}

export default PostContent