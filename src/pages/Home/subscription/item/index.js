import React from 'react'
import './style.css'
import { useTranslation } from 'react-i18next';
import check from '../../../../assets/images/check1.png'
import falsee from '../../../../assets/images/false.png'


const SubItem = () => {
    const { t } = useTranslation()
    const examples = t('examples', { returnObjects: true });
    return (
        <div className='SubItem'>
            {
                examples.map((item) => (
                    <div className='flexxx'>
                        <img src={item.img === 'check' ? check : item.img === 'falsec' ? falsee : ''} alt='' loading='lazy' />
                        <p>{t(item.example)}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SubItem
