import React from 'react'
import './style.css'
import FItem from './featuresItem'
import dollar from '../../../assets/images/dollar.png'
import messagee from '../../../assets/images/messagee.png'
import img24 from '../../../assets/images/24.png'
import persons from '../../../assets/images/persons.png'
import { motion } from 'framer-motion';
import Titles from '../../../components/titles'
import Paragraph from '../../../components/paragraph'
import { useTranslation } from 'react-i18next'
import { fadeIn, staggerChildren } from '../../../utils/motion'


const Features = () => {
    const { t } = useTranslation()
    return (
        <motion.div id='Features'
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <Titles title={t('features')} />
            <Paragraph desc={t('featuresTitle')} />
            <Paragraph desc={t('featuresDesc')} />
            <motion.section className='Features'
                variants={fadeIn("down", "tween", .6, .3)}
            >
                <div className='Features_section'>
                    <FItem src={messagee} backgroundColor={'#0F38B21A'} title={t('featuresItem1')} />
                    <FItem src={dollar} backgroundColor={'#29A71A1A'} title={t('featuresItem2')} />
                    <FItem src={img24} backgroundColor={'#F8B9101A'} title={t('featuresItem3')} />
                    <FItem src={persons} backgroundColor={'#643DCE1A'} title={t('featuresItem3')} />
                </div>
            </motion.section>
        </motion.div>
    )
}

export default Features
