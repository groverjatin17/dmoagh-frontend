import React from 'react';
import { useTranslation } from 'react-i18next';
import DeliveryImage from '../../assets/images/delivery.jpg';

export default function Delivery() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <img
            className="xl:w-80% w-90% block mx-auto mb-10 object-cover object-center rounded-2xl lg:h-550px"
            alt="laboratory"
            src={DeliveryImage}
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              {t('delivery.header')}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {t('delivery.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
