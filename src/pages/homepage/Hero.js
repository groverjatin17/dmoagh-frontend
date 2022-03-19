import React from 'react'
import {useTranslation} from 'react-i18next';
import Athlete from '../../assets/images/athlete.png';

export default function Hero() {
  const {t} = useTranslation();

    return (
        <div className="w-full h-full inline-block bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
        <div className="inline-block lg:h-365px max-w-lg absolute mt-48 lg:mt-24 mb-24 lg:ml-40">
          <h1 className="font-serif leading-tight lg:text-6xl text-3xl ml-40 lg:ml-0 text-blue-800 text-opacity-90 mb-6">
            {t('hero.title')}
          </h1>
          <h1 className="font-serif text-xl text-blue-900 ml-32 lg:ml-0 float-right">
          {t('hero.subTitle')}
          </h1>
        </div>
        <img src={Athlete} alt="athlete" className="max-w-xl float-right mr-32 lg:mb-24" />
      </div>
    )
}
