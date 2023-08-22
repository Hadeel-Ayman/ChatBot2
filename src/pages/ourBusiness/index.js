import React from 'react'
import Ads from '../../components/ads'
import Hello from '../../components/Hello'
import './style.css'
import Our from '../../components/Our'
import work1 from "../../assets/images/work1.svg"
import work2 from "../../assets/images/work2.svg"
import work3 from "../../assets/images/work3.svg"
import work4 from "../../assets/images/work4.svg"
import { useTranslation } from 'react-i18next';
import RubberBand from 'react-reveal/RubberBand';
import HeadShake from 'react-reveal/HeadShake'

const OurBusiness = () => {
    const { t } = useTranslation();

    return (
        <div className='conditions-sections'>
            <HeadShake>
                <Ads title={t('business')} desc={t('AdsBusniess')} />
            </HeadShake>
            <div className='containerr container'>
                <div className='content'>
                    <Hello title={t('greeting')} title2={t('withYou')} />
                    <div className='box-container box'>
                        <RubberBand>
                            <div className='item1'>
                                <Our Image={work1} title={t('Ads')} description={'t.m/iraqbetweenhands'} description2={'t.m/iraqbetweenhands'} />
                            </div>
                        </RubberBand>
                        <RubberBand>
                            <div className='item2'>
                                <Our Image={work3} title={t('logos')} description={'.....RRyeiqHWSzNHVmmfLZe3SgORc3UBgylhgqhC5PusbVgjpFs_jlAH4aAo83EALw_wcB'} description2={'.....RRyeiqHWSzNHVmmfLZe3SgORc3UBgylhgqhC5PusbVgjpFs_jlAH4aAo83EALw_wcB'} />
                            </div>
                        </RubberBand>
                    </div>
                    <div className='box-container'>
                        <RubberBand>
                            <div className='item4'>
                                <Our Image={work2} title={t('ecommerce')} description={'.....RRyeiqHWSzNHVmmfLZe3SgORc3UBgylhgqhC5PusbVgjpFs_jlAH4aAo83EALw_wcB'} description2={'.....RRyeiqHWSzNHVmmfLZe3SgORc3UBgylhgqhC5PusbVgjpFs_jlAH4aAo83EALw_wcB'} />
                            </div>
                        </RubberBand>
                        <RubberBand>
                            <div className='item3'>
                                <Our Image={work4} title={t('chatBot')} description={'t.m/iraqbetweenhands'} description2={'t.m/iraqbetweenhands'} />
                            </div>
                        </RubberBand>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBusiness
