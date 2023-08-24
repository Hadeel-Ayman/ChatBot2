import { SubscriptionItem } from './subscriptionItem'
import dahb from '../../../assets/images/dahb.png'
import fada from '../../../assets/images/fada.png'
import bronz from '../../../assets/images/bronz.png'
import React, { useState } from 'react';
import './style.css';
import Button from '../../../components/button'
import SubItem from './item';
import Titles from '../../../components/titles'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../../utils/motion';
import { useTranslation } from 'react-i18next';
import PaymentType from '../../../components/paymentType';
import PaymentModal from '../../../components/payment';

const Subscription = () => {
    const { t } = useTranslation()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <motion.div
            id='Subscription'
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <Titles title={t('packages')} />
            <motion.div className="pricing-page" variants={fadeIn('up', "tween", .2, .5)}>
                <p className='princing-p'>{t('choise')}</p>
                <div className='payment-container'>
                    <a href='https://www.facebook.com/Iraqaq.marketing?mibextid=D4KYlr' target='_blank' rel="noreferrer">
                        <PaymentType title='Facebook' />
                    </a>
                    <a href='https://instagram.com/iraq_between_hands?igshid=MmU2YjMzNjRlOQ==' target='_blank' rel="noreferrer">
                        <PaymentType title='Instagram' />
                    </a>
                    <a href='https://www.facebook.com/Iraqaq.marketing?mibextid=D4KYlr' target='_blank' rel="noreferrer">
                        <PaymentType title='Messenger' />
                    </a>
                    <a href='https://api.whatsapp.com/send/?phone=9647808031115' target='_blank' rel="noreferrer">
                        <PaymentType title='Whatsapp' backgroundColor={'rgba(15, 73, 204, 1)'} />
                    </a>
                </div>
                <div className="pricing-container">
                    <div className="pricing-card">
                        <SubscriptionItem title={t("dhab")} price="199.99 $" src={dahb} />
                        <SubItem />
                        <Button
                            width={"100%"}
                            title={t("subscription")}
                            color={"#0F49CC"}
                            onClick={handleShow}
                            backgroundColor={"#0F49CC14"}
                        />

                    </div>
                    <PaymentModal show={show} handleClose={handleClose} />

                    <div className="pricing-card caard">
                        <SubscriptionItem
                            title={t('fada')}
                            price='177.99 $'
                            src={fada}

                        />
                        <SubItem />
                        <Button
                            width={'100%'}
                            title={t('subscription')}
                            color={'#ffffff'}
                            backgroundColor={'#0F49CC'}
                            onClick={handleShow}
                        />
                    </div>
                    <div className="pricing-card">
                        <SubscriptionItem
                            title={t('bronz')}
                            price='000.00 $'
                            src={bronz}
                        />
                        <SubItem />
                        <Button
                            width={'100%'}
                            title={t('subscription')}
                            color={'#0F49CC'}
                            onClick={handleShow}
                            backgroundColor={'#0F49CC14'} />
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
};

export default Subscription;
