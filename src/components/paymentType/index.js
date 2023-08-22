import React from 'react'
import './style.css'

const PaymentType = ({ title, backgroundColor }) => {
    return (
        <button className='payment_div' style={{ backgroundColor }}>
            <span>{title}</span>
        </button>
    )
}

export default PaymentType
