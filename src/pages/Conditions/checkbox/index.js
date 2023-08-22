import React from 'react'
import './style.css'

const Check = ({ title }) => {
    return (
        <div className='CheckSection'>
            <input type='checkbox' className='check' />
            <p>{title}</p>
        </div>
    )
}

export default Check
