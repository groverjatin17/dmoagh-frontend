import React from 'react';
import { useTranslation } from 'react-i18next';
import Spine from '../../assets/images/spine-back.jpg';
import Disease1 from '../../assets/images/disease01.jpg';
import Disease2 from '../../assets/images/disease02.jpg';
import Disease3 from '../../assets/images/disease03.jpg';
import Disease4 from '../../assets/images/disease04.jpg';

const diseasesData = [
  {
    diseaseType: 'injuries',
    diseases: [
      {
        itemId: 0,
        itemValue: 'sportsInjury',
      },
      {
        itemId: 1,
        itemValue: 'jointPain',
      },
      {
        itemId: 2,
        itemValue: 'fracture',
      },
      {
        itemId: 3,
        itemValue: 'disorders',
      },
    ],
  },
  {
    diseaseType: 'bodyParts',
    diseases: [
      {
        itemId: 4,
        itemValue: 'osteoporosis',
      },
      {
        itemId: 5,
        itemValue: 'hipKnee',
      },
      {
        itemId: 6,
        itemValue: 'delivery',
      },
      {
        itemId: 7,
        itemValue: 'spineInjury',
      },
    ],
  },
];
export default function DiseasesSection() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 ">
        <div
          className="lg:col-span-1 bg-no-repeat relative"
          style={{ backgroundImage: `url(${Spine}` }}
        >
          <div className="mx-10 mt-10 lg:pl-24 lg:pr-10 lg:mr-5">
            <h1 className="text-4xl text-white font-serif mb-3">
              {t(`diseases.header`)}
            </h1>
            <p className="text-#b2d7ff text-base font-openSans leading-loose mb-6">
              {t(`diseases.description`)}
            </p>
            <div className="grid grid-cols-2 mb-6">
              <div className="col-span-1">
                <ul className="text-#b2d7ff list-disc list-inside lg:pl-10">
                  {diseasesData.map((item) => {
                    if (item.diseaseType === 'injuries') {
                      return item.diseases.map((disease) => (
                        <li key={disease.itemId} className="mb-2">
                          {t(`diseases.${disease.itemValue}`)}
                        </li>
                      ));
                    }
                    return null;
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="text-#b2d7ff list-disc list-inside lg:pl-10">
                  {diseasesData.map((item) => {
                    if (item.diseaseType === 'bodyParts') {
                      return item.diseases.map((disease) => (
                        <li key={disease.itemId} className="mb-2">
                          {t(`diseases.${disease.itemValue}`)}
                        </li>
                      ));
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="border-solid border-2 rounded-3xl py-2 px-10 text-white text-lg border-blue-700 focus:outline-none transform hover:scale-95 mb-3"
            >
              {t('diseases.learnMore')}
            </button>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="lg:grid grid-flow-col grid-cols-2 grid-rows-2">
            <div
              className=" p-8.7rem bg-cover bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease1}` }}
            >
              <p className="absolute bottom-20px right-20px text-white w-24">
              {t('injuries.shoulderLimb')}
              </p>
            </div>
            <div
              className=" p-8.7rem bg-cover bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease2}` }}
            >
              <p className="absolute bottom-20px right-20px text-white  w-24">
              {t('injuries.bones')}
              </p>
            </div>
            <div
              className=" p-8.7rem bg-cover bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease3}` }}
            >
              <p className="absolute bottom-20px right-20px text-white w-24">
              {t('injuries.sportsInjury')}
              </p>
            </div>
            <div
              className=" p-8.7rem bg-cover bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease4}` }}
            >
              <p className="absolute bottom-20px right-20px text-white w-24">
              {t('injuries.jointPain')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
