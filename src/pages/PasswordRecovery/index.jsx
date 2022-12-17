import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { GrBitcoin } from 'react-icons/gr'
import logo from '../../assets/ethereum.png'

import InfiniteSlide from '../../components/InfiniteSlide'
import ConfirmationCode from '../../components/ConfirmationCode'
import PasswordRecoveryForm from '../../components/PasswordRecoveryForm'


const PasswordRecovery = () => {
    const [getCode, setGetCode] = useState(false);

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
                        <PasswordRecoveryForm setGetCode={setGetCode} />
                        :
                        <ConfirmationCode to={'/new-password'} />
                    }
                </div>
            </div>

            <div className="bottom-icon">
                <GrBitcoin size={120} />
            </div>

            <InfiniteSlide />
        </div>
    )
}

export default PasswordRecovery