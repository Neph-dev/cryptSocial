import React from 'react'

import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { GrBitcoin } from 'react-icons/gr'
import logo from '../../assets/ethereum.png'

import InfiniteSlide from '../../components/InfiniteSlide'


function NewPassword() {
    return (
        <div id='pages'>

            <h3 className='header-logo'>
                <Link to='/'>
                    <img src={logo} alt='' style={{ width: 50, height: 50 }} />
                </Link>
            </h3>

            <div className='form-card-container'>
                <div className='form-card'>
                    <h3>New password</h3>

                    <div id='separator1rem' />
                    <div id='separator1rem' />

                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="New password" />
                        </Form.Group>
                    </Form>
                    <div className='sm-centered-text'>
                        It must contain at least 8 characters, an Uppercase and a lowercase letter and one or more character.
                    </div>
                    <div id='separator1rem' />

                    <button
                        type="button" class="btn btn-outline-primary">
                        Confirm <MdKeyboardArrowRight size={25} />
                    </button>
                </div>
            </div>

            <div className="bottom-icon">
                <GrBitcoin size={120} />
            </div>

            <InfiniteSlide />
        </div>
    )
}

export default NewPassword