import React from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from './constants';

export default function OurGallery() {
  const { t } = useTranslation();

  function renderImage(item) {
    const { title, image, description } = item;
    return (
      <div className="lg:w-1/3 sm:w-1/2 p-4" key={item.title}>
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
            src={image}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {t(title)}
            </h1>
            <p className="leading-relaxed">{t(description)}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {t('gallery.header')}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t('gallery.description')}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {Gallery.map((item) => renderImage(item))}
          </div>
        </div>
      </section>
    </div>
  );
}
