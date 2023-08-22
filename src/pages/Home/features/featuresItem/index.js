import React from 'react'
import './style.css'

const FItem = ({ src, title, backgroundColor }) => {
    return (
        <div className='FItem_item'>
            <div className='img_div' style={{ backgroundColor }}>
                <img src={src} alt='' />
            </div>
            <h5>{title}</h5>
        </div>
    )
}

export default FItem
