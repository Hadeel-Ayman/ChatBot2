import React from 'react'
import Ads from '../../components/ads'
import './style.css'
import Item from './item'
import Note from './note'
import Check from './checkbox'
import Button from '../../components/button'
import { useTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom'

const Conditions = () => {
  const { t } = useTranslation();
  const translatedArray = t('TermsConditions', { returnObjects: true });

  return (
    <div className='conditions-section'>
      <Zoom top>
        <Ads title={t('conditions')} desc={t('AdsTerms')} />
      </Zoom >
      <div className='content'>
        {translatedArray.map((item, index) => (
          <Item description={item} key={index} />
        ))}
        <Note />
        <Check title={t('acceptTerms')} />
        <div className='btns'>
          <Button title={t('accept')}
            width={'300px'}
            borderRadius={'8px'}
            backgroundColor={'#0f49cc'}
            borderColor={'#0f49cc'} />

          <Button title={t('reject')}
            backgroundColor={'#3e4148'}
            borderRadius={'8px'}
            width={'300px'}
            borderColor={'#3e4148'} />
        </div>
      </div>
    </div>
  )
}

export default Conditions
