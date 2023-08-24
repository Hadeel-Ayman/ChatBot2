import React from 'react'
import './style.css'

export const SubscriptionItem = ({ price, src, title }) => {
    return (
        <div className='SubscriptionItem'>
            <p>{title}</p>
            <div className='flexx'>
                <h4>{price}</h4>
                <img src={src} alt='' loading='lazy'/>
            </div>
        </div>
    )
}

