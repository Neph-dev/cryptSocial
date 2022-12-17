import React from 'react'

import '../../styles/priceFeedStyles.css'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'


const PriceFeed = () => {
    return (
        <div id='priceFeed'>
            <div id='separator1rem' />

            <div className='priceFeed-content'>
                <FaBitcoin size={25} color='#ff9f00' className='priceFeed-content-img' />
                <div>
                    <div className='priceFeed-content-name'>
                        Bitcoin
                    </div>
                    <div className='priceFeed-content-price'>
                        $ 17,500
                    </div>
                </div>
            </div>

            <div className='priceFeed-content'>
                <FaEthereum size={25} color='#3b3c36' className='priceFeed-content-img' />
                <div>
                    <div className='priceFeed-content-name'>
                        Ethereum
                    </div>
                    <div className='priceFeed-content-price'>
                        $ 1,300
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceFeed