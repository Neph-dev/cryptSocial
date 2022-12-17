import React from 'react'
import { Link } from 'react-router-dom'

import { MdKeyboardArrowRight } from 'react-icons/md'


function ConfirmationCode({ to }) {

    return (
        <div id='confirmationCode'>
            <div className='lg-text'>
                Enter the 5-digit code sent to you at @email.
            </div>
            <div id='separator1rem' />
            <form className='input-boxes-container'>
                <input
                    autoFocus
                    type='text' maxLength='1' size='1' min='0' max='9' pattern='[0-9]{1}' />
                <input
                    type='text' maxLength='1' size='1' min='0' max='9' pattern='[0-9]{1}' />
                <input
                    type='text' maxLength='1' size='1' min='0' max='9' pattern='[0-9]{1}' />
                <input
                    type='text' maxLength='1' size='1' min='0' max='9' pattern='[0-9]{1}' />
                <input
                    type='text' maxLength='1' size='1' min='0' max='9' pattern='[0-9]{1}' />
            </form>

            <div id='separator1rem' />
            <div id='separator1rem' />

            <Link to={to}>
                <button
                    type='button' class='btn btn-outline-primary'>
                    Confirm <MdKeyboardArrowRight size={25} />
                </button>
            </Link>
        </div>
    )
}

export default ConfirmationCode