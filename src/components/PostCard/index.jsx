import React, { useState } from 'react'
import { MultilineInput } from 'react-input-multiline'

import '../../styles/feedsStyles.css'
import { BsCloudHaze2Fill } from 'react-icons/bs'
import { useEffect } from 'react'


const PostCard = () => {

    const [editPost, setEditPost] = useState('')
    const [postMessage, setPostMessage] = useState()

    const maxPostLength = 1000

    useEffect(() => {
        if (editPost.length > maxPostLength) {
            setPostMessage('Your post is too long.')
        }
        else setPostMessage()
    }, [editPost])

    return (
        <div id='postCard'>
            <div className='postCard'>
                <MultilineInput
                    value={editPost}
                    id='mutilineInput-post'
                    placeholder='Type something...'
                    onChange={(e) => setEditPost(e.target.value)} />
                <div style={{ color: 'red' }}>
                    {postMessage}
                </div>
            </div>
            <BsCloudHaze2Fill
                id='BsCloudHaze2Fill'
                title='Send'
                size={30} />
        </div>
    )
}

export default PostCard