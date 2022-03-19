import React from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, makeStyles } from '@material-ui/core';
import { doctorsList } from './constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function DoctorsInfoSection() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      {doctorsList.map((doctor) => (
        <section key={doctor.doctorId} className="text-gray-700 body-font">
          <div className="container px-5 mx-auto">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <Avatar
                      src={doctor.imageURL}
                      alt="Doc"
                      className={classes.large}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">
                      {t(doctor.name)}
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                    <div className="text-xl capitalize font-openSans text-blue-900">
                      {t(doctor.position)}
                    </div>
                    <div className="text-base uppercase font-openSans text-gray-500 ">
                      {t(doctor.qualification)}
                    </div>
                    <p className="text-base text-gray-600">5+ Years</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    {t(doctor.description)}
                  </p>
                  <a
                    className="text-indigo-500 inline-flex items-center"
                    href="#bleh"
                  >
                    {t('doctor1.learnMore')}
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
          </div>
        </section>
      ))}
    </div>
  );
}
