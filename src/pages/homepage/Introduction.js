import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo1 from '../../assets/images/home-icon-img-01.png';
import Logo2 from '../../assets/images/home-icon-img-02.png';
import Logo3 from '../../assets/images/home-icon-img-03.png';
import Logo4 from '../../assets/images/home-icon-img-04.png';

const cardData = [
  {
    cardId: '0',
    cardLogoLink: Logo1,
    cardLogoAlt: 'family',
    value: 'understandExpats',
  },
  {
    cardId: '1',
    cardLogoLink: Logo2,
    cardLogoAlt: 'patient',
    value: 'fullTreatment',
  },
  {
    cardId: '2',
    cardLogoLink: Logo3,
    cardLogoAlt: 'doctor',
    value: 'dedicatedDoctor',
  },
  {
    cardId: '3',
    cardLogoLink: Logo4,
    cardLogoAlt: 'services',
    value: 'emergencyService',
  },
];

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="lg:relative lg:h-32">
        <div className="flex justify-center items-center w-full lg:absolute lg:bottom-50px">
          <div className="w-full lg:w-3/4 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900">
            <div className="grid lg:grid-cols-4 grid-cols-1">
              {cardData.map((item) => (
                <div
                  key={item.cardId}
                  className="col-span-1 lg:border-r-2 py-12"
                >
                  <div className="flex flex-col justify-center items-center">
                    <img src={item.cardLogoLink} alt={item.cardLogoAlt} />
                    <span className="text-lg text-white pt-2">{t(`features.${item.value}`)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center mb-20">
        <div className="lg:w-3/4">
          <h1 className="text-4xl text-indigo-900 font-serif mb-4 p-6 lg:p-0">
          {t(`introduction.title`)}
          </h1>
          <p className="font-openSans leading-normal mb-5 p-6 lg:p-0">
          {t(`introduction.description`)}
          </p>
          <div className="flex items-center">
            <a href="#blah" className="text-lg font-bold py-6 pl-6 lg:p-0">
              {t('introduction.readMore')}
            </a>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2 "
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
