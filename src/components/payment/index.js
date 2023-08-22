import React, { useState } from 'react'
import './style.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next'
import PaymentType from '../paymentType'
// import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


const PaymentModal = ({ handleClose, show }) => {
    const { t } = useTranslation()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };
    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div className='PaymentModall'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                    <div className='closeAndTitle'>
                        <h5 className="text-right text-light">{t('pay')} : 177.99 $</h5>
                    </div>
                </Modal.Header>

                <div className='payment'>
                    <PaymentType title={'credit card'} />
                    <PaymentType title={'depit card'} />
                    <PaymentType title={'paypal'} backgroundColor={'#0f49cc'} />
                </div>
                <Modal.Body>
                    <div className="modal-content">
                        <div className="form-area">
                            <form>
                                <div className='names'>
                                    <div className="named mb-3">
                                        <label htmlFor="fullname" className="form-label">{t('first')}</label>
                                        <input type="text" className="form-control" id="fullname" placeholder='شمس' />
                                    </div>
                                    <div className="named mb-3">
                                        <label htmlFor="secondName" className="form-label">{t('second')}</label>
                                        <input type="text" className="form-control" id="secondName" placeholder='حسان' />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">{t('company')}</label>
                                    <input type="text" className="form-control" placeholder='شركة كلير تاج انترناشيونال' id="companyName" />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="form-label">
                                        {t('phone')}</label>

                                    <PhoneInput
                                        country={'pa'}
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        className='flag-dropdown'
                                        inputProps={{
                                            required: true,
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">{t('email')}</label>
                                    <input type="email" className="form-control" id="email" placeholder='sameerrshams95@gmails.com' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ZIP" className="form-label">{t('Mail')}</label>
                                    <input type="text" className="form-control" id="ZIP" placeholder='1234567890' />
                                </div>

                                <button type="submit" className="btn mt-3">{t('pay')}</button>
                            </form>
                        </div>
                    </div>

                </Modal.Body >
            </Modal >
        </div>

    )
}


export default PaymentModal
