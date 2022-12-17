import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { GrBitcoin } from 'react-icons/gr'
import logo from '../../assets/ethereum.png'

import InfiniteSlide from '../../components/InfiniteSlide'
import ConfirmationCode from '../../components/ConfirmationCode'


const SignUp = () => {

    const [getCode, setGetCode] = useState(false)

    const to = '/sign-up/profile-set-up'

    return (
        <div id='pages'>

            <h3 className='header-logo'>
                <Link to='/'>
                    <img src={logo} alt='' style={{ width: 50, height: 50 }} />
                </Link>
            </h3>

            <div className='form-card-container'>
                <div className='form-card'>
                    {getCode === false ?
                        <>
                            <h3>Sign Up</h3>

                            <div id='separator1rem' />
                            <div id='separator1rem' />

                            <Form>
                                <Form.Group className='mb-4' controlId='formBasicEmail'>
                                    <Form.Control type='email' placeholder='Enter email' />
                                    <Form.Text className='text-muted'>
                                    </Form.Text>
                                </Form.Group >
                                <Form.Group className='mb-4' controlId='formBasicPassword'>
                                    <Form.Control type='password' placeholder='New password' />
                                </Form.Group>
                            </Form>
                            <div className='sm-centered-text'>
                                By proceeding, you consent to get calls,
                                WhatsApp or SMS messages, including by automated means,
                                from CryptSocial.com and its affiliates to the number provided.
                            </div>
                            <div id='separator1rem' />

                            <button
                                onClick={() => setGetCode(true)}
                                type='button' class='btn btn-outline-primary'>
                                Next <MdKeyboardArrowRight size={25} />
                            </button>
                        </>
                        :
                        <ConfirmationCode to={to} />
                    }
                </div>
            </div>

            <div className='bottom-icon'>
                <GrBitcoin size={120} />
            </div>

            <InfiniteSlide />
        </div>
    )
}

export default SignUp