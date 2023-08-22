import React from 'react'
import './style.css'
import Heading from '../../Heading'
import footer from '../../../assets/images/footer.svg'
import location from '../../../assets/images/location.svg'
import insta from '../../../assets/images/location.svg'
import facebook from '../../../assets/images/insta.svg'
import email from '../../../assets/images/email.svg'
import telegram from '../../../assets/images/telegram.svg'
import whatsup from '../../../assets/images/whatsup.svg'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from '../../../utils/motion'
import { useTranslation } from 'react-i18next'


const Footer = () => {
    const { t } = useTranslation()

    const openEmail = () => {
        window.open('mailto:iraqakmarketing@gmail.com', '_blank');
    };

    const handleLocation = () => {
        const latitude = 32.6068464; // خط العرض
        const longitude = 44.0103922; // خط الطول
        const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

        window.open(mapUrl);
    };

    return (
        <>
            <motion.section
                className='footer'
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <div className='footer_container flex' >
                    <>
                        <div className='leftt' data-aos='fade-down-right' >
                            <img src={footer} alt='' className='footer_img' />
                        </div>
                        <motion.div className='right' data-aos='fade-down-left' variants={footerVariants}>
                            <Heading title={t('boss')} />
                            <p className='desc'>{t('bossBio')}</p>
                            <div className='paragraph'>
                                <img className='footer-icon' src={location} alt='' />
                                <p className='desc2 '>{t('location')}</p>
                            </div>
                            <div className='paragraph paragraph2'>
                                <a onClick={openEmail}>
                                    <img className='footer-icon' src={email} alt='' />
                                </a>
                                <a href='https://instagram.com/iraq_between_hands?igshid=MmU2YjMzNjRlOQ==' target='_blank' rel="noreferrer">
                                    <img className='footer-icon' src={facebook} alt='' />
                                </a>
                                <a onClick={handleLocation}>
                                    <img className='footer-icon' src={insta} alt='' />
                                </a>
                                <a href='https://t.me/iraqbot' target='_blank' rel="noreferrer">
                                    <img className='footer-icon' src={telegram} alt='' />
                                </a>
                                <a href='https://api.whatsapp.com/send/?phone=9647808031115' target='_blank' rel="noreferrer">
                                    <img className='footer-icon' src={whatsup} alt='' />
                                </a>
                            </div>
                        </motion.div>
                    </>
                </div>
                <div className='ss'>
                    <div className='footter'>
                        <p>{t('rights')}</p>
                        <p>Copyright © 2023</p>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Footer