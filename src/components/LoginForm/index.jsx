import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FcGoogle } from 'react-icons/fc'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { BsGithub } from 'react-icons/bs'
import '../../styles/loginStyles.css'


const LoginForm = () => {
    return (
        <div className='login-form'>

            <h3>Sign In</h3>

            <div className='md-text'>Type in your credentials to login</div>

            <div id='separator1rem' />

            <Form>
                <Form.Control type="email" placeholder="Enter email" />
                <div id='separator1rem' />

                <Form.Control type="password" placeholder="Enter password" />
                <div id='separatorHalfrem' />

                <Form.Check type="checkbox" label="Remember me." />

                <div id='separator1rem' />

                <Link to='/home'>
                    <Button className='lg-button' style={{ width: '100%' }} variant="primary" type="submit">
                        Sign in
                    </Button>
                </Link>
            </Form>

            <div id='separatorHalfrem' />

            <Link to='/password-recovery'>
                <div className='forgot-password-text'>Forgotten password ?</div>
            </Link>

            <div className='sm-centered-text'>
                Sign in with
            </div>
            <div id='separator1rem' />
            <div className='login-socials-icons'>
                <FcGoogle size={30} title="Google" />
                <TiSocialFacebookCircular title="Facebook" size={38} style={{ color: 'blue' }} />
                <BsGithub title="Github" size={30} style={{ color: '#242124' }} />
            </div>
        </div>
    )
}

export default LoginForm