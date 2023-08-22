import React from 'react'
import './style.css'

const Button = ({ title, margin, onClick, borderRadius, className, backgroundColor, borderColor, type, width, color }) => {
    return (
        <button
            style={{ borderRadius, margin, backgroundColor, borderColor, width, color }}
            className={`btn ${className}`}
            onClick={onClick}
            type={type}>
            {title}
        </button>
    )
}

export default Button
