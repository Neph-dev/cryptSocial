import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/headerStyles.css'
import logo from '../../assets/ethereum.png'
import { CgLogOff } from 'react-icons/cg'


const Header = () => {

    const navigate = useNavigate()

    const onLogoff = () => {
        navigate('/')
    }
    const onGoToHome = () => {
        navigate('/home')
    }

    return (
        <div id='header'>
            <img
                onClick={onGoToHome}
                src={logo} alt=''
                style={{ width: 40, height: 40 }} />

            <CgLogOff
                id='CgLogOff'
                onClick={onLogoff}
                size={35} color='red' />
        </div>
    )
}

export default Header