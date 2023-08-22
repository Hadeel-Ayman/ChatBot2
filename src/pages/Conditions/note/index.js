import React from 'react'
import './style.css'
import { useTranslation } from 'react-i18next';

const Note = () => {
    const { t } = useTranslation();
    return (
        <div className='note_component'>
            <span className='note'>
                {t('note1')}
            </span>
            <span className='span'>{t('note')}</span>
        </div>
    )
}

export default Note
