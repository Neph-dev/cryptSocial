import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { GrBitcoin } from 'react-icons/gr'
import { FaEthereum } from 'react-icons/fa'
import { SiBinance, SiLitecoin, SiDogecoin, SiStellar } from 'react-icons/si'

import '../../styles/loginStyles.css'

import InfiniteSlide from '../../components/InfiniteSlide'
import LoginForm from '../../components/LoginForm'


const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <div id='login'>

            <section className='login-description-section'>
                <h2>Welcome to CryptSocial.com</h2>
                <div id='separator1rem' />

                <div className='md-text-bold'>
                    The social media that connects people around the world about crypto.
                </div>

                <div className='md-text'>
                    <Link to='/sign-up'>Create</Link> your free account.
                </div>

                <div id='separator1rem' />
                <div>
                    <div className='md-text' style={{ textAlign: 'center', textDecoration: 'underline' }}>
                        All united around crypto
                    </div>
                    <div id='separator1rem' />
                    <div className='login-icons-featured'>
                        <GrBitcoin size={40} style={{ color: 'orange' }} />
                        <FaEthereum size={40} style={{ color: '#3b3c36' }} />
                        <SiBinance size={40} style={{ color: '#ff9f00' }} />
                        <SiLitecoin size={40} style={{ color: 'blue' }} />
                        <SiDogecoin size={40} style={{ color: '#ff9f00' }} />
                        <SiStellar size={40} style={{ color: '#3b3c36' }} />
                    </div>
                </div>
            </section>

            <LoginForm />

            <div className='login-bottom-icon'>
                <GrBitcoin size={120} />
            </div>

            <InfiniteSlide />
        </div>
    )
}

export default Login