import React from 'react'
import './style.css'
import { useTranslation } from 'react-i18next';
import robot from '../../assets/images/robot.png'

const SignupModal = () => {
    const { t } = useTranslation();
    return (
        <div className="modal fade" id="ModalForm" tabIndex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialogj sign blow-up-animation">
                <div className='closeAndTitle'>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 className="text-right text-light">{t('sign')}</h5>
                </div>
                <div className="modal-content">
                    <div className='imgAndForm'>
                        <div className="form-area">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label">{t('FullName')}</label>
                                    <input type="text" className="form-control" id="fullname" placeholder='kkkkkkkk' />
                                </div>
                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">{t('email')}</label>
                                    <input type="email" className="form-control" id="" placeholder='شركة كلير تاج انترناشيونال' aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">{t('password')}</label>
                                    <input type="password" className="form-control" placeholder='**********' id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn mt-3">{t('sign')}</button>
                            </form>
                        </div>
                        <div className='div_robot'>
                            <img src={robot} alt='div_robot' loading='lazy'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default SignupModal
