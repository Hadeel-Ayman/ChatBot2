
import React from 'react';
import './style.css';
// import pauseImage from '../../../assets/images/puase.png'
// import musicImage from '../../../assets/images/music.png'
import service1 from "../../../assets/images/service1.svg"
import service2 from "../../../assets/images/service2.svg"
import service3 from "../../../assets/images/service3.svg"
// import pauseImage from '../../../assets/images/puase.png'
import Titles from '../../../components/titles';
import Paragraph from '../../../components/paragraph';
import { fadeIn, staggerChildren } from '../../../utils/motion'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Services = () => {
    const { t } = useTranslation()
    const array = t('data', { returnObjects: true });

    return (
        <motion.section className="services container section" id="services"
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <Titles title={t('service')} />
            <Paragraph desc={t('descService')} />
            <div className="services_container grid">
                {array.map((item, index) => {
                    return (
                        <motion.div variants={fadeIn("up", "tween", .7, .6)}>
                            <div className="services_card bounce" key={index}>
                                <div className="image">
                                    <img src={item.Image === 'img1' ? service1 : item.Image === 'img2' ? service2 : item.Image === 'img3' ? service3 : ''} alt='' className='services_img' />
                                </div>
                                <h3 className='services_title'>{t(item.serviceItem1 || item.serviceItem2 || item.serviceItem3)}</h3>
                                <p className='services_description'>{t(item.serviceItem1Desc || item.serviceItem2Desc || item.serviceItem3Desc)}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Services;

