import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/feedsStyles.css'
import { publicProfile } from '../../Mocks/publicProfile'
import { posts } from '../../Mocks/posts'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { FaHeartBroken } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { MdKeyboardBackspace } from 'react-icons/md'

import Comment from '../../components/Comment'


const PostContent = () => {

    const postId = localStorage.getItem('postId')
    const postUser = localStorage.getItem('postUser')

    const [liked, setLiked] = useState(false)

    const navigate = useNavigate()

    const handleLike = () => {
        setLiked(!liked)
    }

    const handleBack = () => navigate(-1)

    const findUserPosts = (id) => posts.filter((item) => {
        if (item.id.includes(id)) {
            return item
        }
        return 0
    })

    const findUserAvatar = (postUser) => publicProfile.filter((item) => {
        if (item.username.includes(postUser)) {
            return item
        }
        return 0
    })

    useEffect(() => {
        if (postId === null || postUser === null) navigate('/home')
    }, [postId, postUser, navigate])

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
                                {findUserPosts(postId)[0].post}
                            </div>
                            <div className='bottom-post'>
                                <div> Says </div>

                                <div className='flex-content' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ alignItems: 'center', display: 'flex' }}>
                                        <img
                                            alt=''
                                            src={findUserAvatar(postUser)[0].profilePicture}
                                            className='post-image-author' />
                                        <div className='post-name-author'>{findUserPosts(postId)[0].author},</div>
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