import React from 'react'
import './style.css'
import { pricing } from '../../../../mock/data';
import { useTranslation } from 'react-i18next';


const SubItem = () => {
    const { t } = useTranslation()
    return (
        <div className='SubItem'>
            {
                pricing.map((item) => (
                    <div className='flexxx'>
                        <img src={item.img} alt='' />
                        <p>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SubItem
