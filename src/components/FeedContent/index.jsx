import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { posts } from '../../Mocks/posts'
import { publicProfile } from '../../Mocks/publicProfile'
import '../../styles/feedsStyles.css'
import { BsHeartFill, BsPinAngleFill, BsHeart, BsFillChatFill } from 'react-icons/bs'
import { FaHeartBroken } from 'react-icons/fa'


const FeedContent = ({ ...props }) => {

    const { page } = props

    const navigate = useNavigate()

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }

    const onGoToPost = () => {
        navigate('/post')
    }

    const findProfile = (author) => publicProfile.filter((item) => {
        if (item.username.includes(author)) {
            return item
        }
        return 0
    })

    return (
        <div id='FeedContent'>
            <div className='FeedContent'>
                {posts.map((item, index) => (
                    <div key={index} className='post-container'>

                        {page === 'PublicProfile' &&
                            <BsPinAngleFill id='BsPinAngleFill' size={20} color='#3D5B59' />
                        }

                        <div className='post'>
                            {item.post}
                        </div>
                        <div className='bottom-post'>
                            <div> Says </div>

                            <div className='flex-content' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ alignItems: 'center', display: 'flex' }}>

                                    <img
                                        src={findProfile(item.author)[0].profilePicture}
                                        alt=''
                                        className='post-image-author' />

                                    <div className='post-name-author'>{item.author}</div>
                                    <div className='post-ts'>1h ago</div>
                                </div>

                                <div>
                                    <BsFillChatFill
                                        title='comments'
                                        onClick={onGoToPost}
                                        className='bottom-post-icons'
                                        color='#3D5B59' size={20} />
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
                                        onClick={handleLike}
                                        className='bottom-post-icons'
                                        color='#3D5B59' size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeedContent