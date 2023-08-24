import React, { useEffect, useRef } from 'react'
import './style.css'
import puase from '../../../assets/images/puase.png'
import music from '../../../assets/images/music.png';
import run from '../../../assets/images/run.png'
import img2 from '../../../assets/images/img2.png'

import 'swiper/css'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import Titles from '../../../components/titles'
import { staggerChildren, zoomIn } from '../../../utils/motion';
import { useTranslation } from 'react-i18next';
import { IQData } from '../../../mock/data';


const IqService = () => {
    const { t } = useTranslation()
    const translatedArray = t('names', { returnObjects: true });
    const settings = {
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            750: {
                slidesPerView: 3
            },
            1100: {
                slidesPerView: 4
            },
        }
    };

    const sectionRef = useRef(null);
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    useEffect(() => {
        const section = sectionRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <>
            <Titles title={t('sayOfService')} />
            <motion.section
                className='IqService_section relative r-wrapper'
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div
                    variants={zoomIn(0, 0.5)
                    }
                    className='paddings innerWidth r-container'>
                    <Swiper {...settings}>
                        {
                            translatedArray.map((item, index) => (
                                <SwiperSlide key={index} className='slide-in'>
                                    <div className='flexColStart r-card IqItem'>
                                        <h3 className='services_title'>{t(item.shams || item.Ahmed || item.Eman || item.Randa)}</h3>
                                        <p>{t(item.job)}</p>
                                        <div className='IQ_flex'>
                                            <img src={item.src === 'pause' ? puase : item.src === 'run' ? run : ''} alt='' loading='lazy' />
                                            <img src={item.music === 'img2' ? img2 : item.music === 'music' ? music : ''} alt='' loading='lazy' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <SliderButtons />
                    </Swiper>
                </motion.div>
            </motion.section>
        </>

    )
}

export default IqService


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='r-button fade-in'>
            <button onClick={() => swiper.slidePrev()}><AiOutlineArrowRight /></button>
            <button onClick={() => swiper.slideNext()}><AiOutlineArrowRight /></button>
        </div>
    );
}