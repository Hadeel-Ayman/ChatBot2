import React from 'react'
import './style.css'
import starleft from '../../assets/images/starleft.svg';
import starright from '../../assets/images/starright.svg';

const Titles = ({ title }) => {
    return (
        <div className='Titles_div'>
            <hr className='hr' />
            <img src={starleft} alt='starleft' loading='lazy'/>
            <h4>{title}</h4>
            <img src={starright} alt='starright' loading='lazy'/>
            <hr className='hr' />

        </div>
    )
}

export default Titles
