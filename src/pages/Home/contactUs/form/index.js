import React from 'react'
import Button from '../../../../components/button'
import './style.css'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../../../utils/motion'
import { useTranslation } from 'react-i18next'

const handleSubmit = (e) => {
    e.preventDefault()
}

const Form = () => {
    const { t } = useTranslation()

    return (
        <motion.div className='rr'
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

        >
            <motion.p className='d'
                variants={fadeIn("up", "tween", .7, .6)}>{t('contact')}</motion.p>
            <form onSubmit={handleSubmit} className='form_contact'>
                <div>
                    <label>{t('name')}</label>
                    <input placeholder={t('name')} />
                </div>
                <div>
                    <label>{t('email')}</label>
                    <input placeholder='sameerrshams95@gmail.com' />
                </div>
                <div>
                    <label>{t('phone')}</label>
                    <input placeholder='+9025588' />
                </div>
                <div>
                    <label>{t('message')}</label>
                    <input placeholder={t('enterMessage')} />
                </div>
                <div className='btn_div'>
                    <Button
                        title={t('send')}
                        width='90%'
                        color={'#fff'}
                        margin={'auto'}
                        backgroundColor={'#0F49CC'}
                        type={'submit'} />
                </div>
            </form>
        </motion.div >
    )
}

export default Form
