import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageBar() {
  const { i18n, t } = useTranslation();

  return (
    <div className="lg:w-full lg:h-10 bg-blue-800 flex justify-end items-center lg:pr-24 pr-4 text-white">
      <p className="flex items-center justify-center">{t('selectLanguage')}</p>
      <button
        className="p-1"
        type="button"
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
      <button
        className="p-1"
        type="button"
        onClick={() => i18n.changeLanguage('hi')}
      >
        HI
      </button>
      <button
        className="p-1"
        type="button"
        onClick={() => i18n.changeLanguage('pa')}
      >
        PA
      </button>
    </div>
  );
}
