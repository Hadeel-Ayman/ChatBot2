import React from 'react'
import Social from '../../../components/social'
import './style.css'
import { FaFacebookF } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'
import { SiMessenger } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { fadeIn, staggerChildren } from '../../../utils/motion'
import { motion } from 'framer-motion'

const SocialSection = () => {
    return (
        <motion.section className='counter'
            id='SocialSection'
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.div className='container' variants={fadeIn("down", "tween", .7, .6)}>
                <div className='counter_wrapper'>
                    <Social title={'Facebook'} path={'https://www.facebook.com/Iraqaq.marketing?mibextid=D4KYlr'} src={<FaFacebookF />} />
                    <Social title={'Instagram'} path={'https://instagram.com/iraq_between_hands?igshid=MmU2YjMzNjRlOQ=='} src={<LuInstagram />} />
                    <Social title={'Messanger'} path={'https://www.facebook.com/Iraqaq.marketing?mibextid=D4KYlr'} src={<SiMessenger />} />
                    <Social title={'Whatsapp'} path={'https://api.whatsapp.com/send/?phone=9647808031115'} src={<BsWhatsapp />} />
                </div>
            </motion.div>
        </motion.section>
    )
}

export default SocialSection

