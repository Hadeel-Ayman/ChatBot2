import React from 'react'
import './style.css'

const Hello = ({ title, title2 }) => {
    return (
        <div className='Hello_div'>
            <p>{title}</p>
            <p>{title2}</p>
        </div>
    )
}

export default Hello
