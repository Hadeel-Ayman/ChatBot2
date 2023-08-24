import React from 'react'
import './style.css'

const IqServiceItem = ({ name, job, src, music }) => {
    return (
        <div className='IqItem'>
            <h5>{name}</h5>
            <p>{job}</p>
            <div className='flex'>
                <img src={src} alt='src' loading='lazy' />
                <img src={music} alt='music' loading='lazy' />
            </div>
        </div>
    )
}

export default IqServiceItem
