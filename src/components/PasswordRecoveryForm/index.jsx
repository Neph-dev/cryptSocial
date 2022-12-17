import React from 'react'
import Form from 'react-bootstrap/Form'

import { MdKeyboardArrowRight } from 'react-icons/md'


const PasswordRecoveryForm = ({ ...props }) => {
    return (
        <>
            <h3>Password Recovery</h3>

            <div id='separator1rem' />
            <div id='separator1rem' />

            <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group >
            </Form>
            <div className='sm-centered-text'>
                By proceeding, you consent to get calls,
                WhatsApp or SMS messages, including by automated means,
                from Cryptanzo.com and its affiliates to the number provided.
            </div>
            <div id='separator1rem' />

            <button
                onClick={() => props.setGetCode(true)}
                type="button" class="btn btn-outline-primary">
                Verify <MdKeyboardArrowRight size={25} />
            </button>
        </>
    )
}

export default PasswordRecoveryForm