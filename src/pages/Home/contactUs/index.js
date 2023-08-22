import React, { useState } from 'react'
import Form from './form'
import { AiOutlineClose } from 'react-icons/ai';
import './style.css'
import { BsWhatsapp } from 'react-icons/bs'
import whatsap from '../../../assets/images/whatsapp.png'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../../utils/motion'
import { Link } from 'react-router-dom'
import customer from '../../../assets/images/customer.jpg'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation()

    const [isWhatsAppClicked, setIsWhatsAppClicked] = useState(false);

    const handleWhatsAppClick = () => {
        setIsWhatsAppClicked(!isWhatsAppClicked);
    };

    const openWhatsApp = () => {
        window.open(`https://wa.me/+9647808031115`, '_blank');
    };

    return (
        <motion.section className='Contact_section' id='contact'
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.div
                className='images'
                variants={fadeIn("up", "tween", .7, .2)}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </motion.div>
            <Form />
            <div className='whatsap_div'>
                {
                    isWhatsAppClicked ? <AiOutlineClose onClick={handleWhatsAppClick} className='close' /> : <img src={whatsap} alt='' id='whatsap' style={{ cursor: 'pointer' }} onClick={handleWhatsAppClick} />
                }
                <Link> {t('help')} {t('chat')}</Link>
            </div>
            {isWhatsAppClicked && (
                <div className='customer_service' id='customer_service'>
                    <div className='hello_customer'>
                        <div className='customer'>
                            <BsWhatsapp className='whatsap_icon'
                                style={{ width: '35px', height: '35px', marginBottom: '1rem' }}
                            />
                            <div>
                                <h5>مرحبا بك</h5>
                                <p>تواصل معنا الان - نحن في انتظارك للرد عليك</p>
                            </div>
                        </div>
                    </div>
                    <div className='div2'>
                        <div>
                            <img src={customer} alt='' className='customer' />
                            <a style={{ marginTop: '1rem' }} onClick={openWhatsApp}>خدمة العملاء</a>
                        </div>
                        <BsWhatsapp style={{ width: '30px', height: '30px', color: '#73b93f', marginTop: '1rem' }} />
                    </div>
                </div>
            )}
        </motion.section>
    )
}

export default Contact
