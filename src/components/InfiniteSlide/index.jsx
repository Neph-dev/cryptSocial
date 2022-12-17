import React from 'react'

import { IoMdArrowDropup } from 'react-icons/io'
import '../../styles/infiniteSlideStyles.css'


const InfiniteSlide = () => {
    return (
        <div id='InfiniteSlide'>
            <div className='InfiniteSlide-container'>
                <div className='InfiniteSlide-content'>
                    <div>Bitcoin</div>
                    <div style={{ color: 'green', marginLeft: '.5rem', width: '4rem' }} >+5,24 %</div>
                    <IoMdArrowDropup size={30} style={{ color: 'green' }} />
                </div>
                <div className='InfiniteSlide-content'>
                    <div>Bitcoin</div>
                    <div style={{ color: 'green', marginLeft: '.5rem', width: '4rem' }} >+5,24 %</div>
                    <IoMdArrowDropup size={30} style={{ color: 'green' }} />
                </div>
                <div className='InfiniteSlide-content'>
                    <div>Bitcoin</div>
                    <div style={{ color: 'green', marginLeft: '.5rem', width: '4rem' }} >+5,24 %</div>
                    <IoMdArrowDropup size={30} style={{ color: 'green' }} />
                </div>
                <div className='InfiniteSlide-content'>
                    <div>Bitcoin</div>
                    <div style={{ color: 'green', marginLeft: '.5rem', width: '4rem' }} >+5,24 %</div>
                    <IoMdArrowDropup size={30} style={{ color: 'green' }} />
                </div>
            </div>
        </div>
    )
}

export default InfiniteSlide