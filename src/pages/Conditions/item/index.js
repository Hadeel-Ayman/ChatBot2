import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const Item = ({ description }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.8, ease: "backOut" } }}
            viewport={{ once: true }}
        >
            <div className='ItemSection'>
                <span className='rounded-circle'></span>
                <p>{description}</p>
            </div>
        </motion.li>
    )
}

export default Item
