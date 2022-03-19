import React from 'react';
import { useTranslation } from 'react-i18next';
import Physio from '../../assets/images/physio.jpg';
import Ultrasound from '../../assets/images/ultrasound.jpg';
import xray from '../../assets/images/xray.jpg';

export default function Facilities() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="lg:w-80 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={Physio} alt="physio" className="rounded-3xl" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {t('facilities.facility1.name')}
              </h2>
              <p className="leading-relaxed text-base">
                {t('facilities.facility1.description')}
              </p>
              <a
                href="https://www.google.com/search?q=physiotherpy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                {t('facilities.learnMore')}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {t('facilities.facility2.name')}
              </h2>
              <p className="leading-relaxed text-base">
                {t('facilities.facility2.description')}
              </p>
              <a
                href="#asff"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                {t('facilities.learnMore')}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="lg:w-80 sm:order-none order-first sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={xray} alt="xray" className="rounded-3xl" />
            </div>
          </div>
          <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
            <div className="lg:w-80 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={Ultrasound} alt="Ultrasound" className="rounded-3xl" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {t('facilities.facility3.name')}
              </h2>
              <p className="leading-relaxed text-base">
                {t('facilities.facility3.description')}
              </p>
              <a
                href="https://www.google.com/search?q=physiotherpy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                {t('facilities.learnMore')}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
