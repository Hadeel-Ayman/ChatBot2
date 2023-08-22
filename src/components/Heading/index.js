import React from 'react'
import './style.css'

const Heading = ({ title }) => {
  return (
    <>
      <h2 className='heading' data-aos='zoom-in-down'>
        {title}
      </h2>
    </>
  )
}
export default Heading
