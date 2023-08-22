import React from 'react'
import './style.css'

const Ads = ({ title, desc }) => {
    return (
        <div className='Ads_div'>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default Ads
