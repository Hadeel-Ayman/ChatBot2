
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style.css';

const Social = ({ path, title, src }) => {
    return (
        <motion.div className='counter-item' whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h4 className='counter-title' initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                {title}
            </motion.h4>
            <motion.span className='rounded-circle' whileHover={{ scale: 1.1 }}>
                <Link to={path} target='_blank'>
                    <motion.i whileHover={{ scale: 1.2 }}>{src}</motion.i>
                </Link>
            </motion.span>
        </motion.div>
    );
};

export default Social;

