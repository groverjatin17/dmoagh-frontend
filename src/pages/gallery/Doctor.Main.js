import React from 'react';
import { useTranslation } from 'react-i18next';
import DoctorImage from '../../assets/images/ishan.jpg';

export default function Doctor(props) {
  const { path } = props;
  const { t } = useTranslation();

  const renderDoctor = (doctorType) => {
    return (
      <div>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <img
              className="xl:w-80% lg:w-1/3 md:w-1/2 w-90% block mx-auto mb-10 object-cover object-center rounded"
              alt="doctor"
              src={DoctorImage}
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                {t(`${doctorType}.name`)}
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {t(`${doctorType}.description`)}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <>
      {path === '/obstetrician'
        ? renderDoctor('obstetrician')
        : renderDoctor('orthopedist')}
    </>
  );
}
