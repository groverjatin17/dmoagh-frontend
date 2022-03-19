import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import CustomDatePicker from './Datepicker';
import CustomTimePicker from './Timepicker';
import axios from 'axios';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import Lottie from '../../components/Animations/RenderLottie';
import LOTTIE_MAPPING from '../../common/global-constants/LottieMapping';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function AppointmentForm() {
  const { t } = useTranslation();
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isAppointmentConfirmed, setAppointmentConfirmed] = useState(false);

  return (
    <>
      {isAppointmentConfirmed && (
        <Backdrop
          className={classes.backdrop}
          open={isAppointmentConfirmed}
          onClick={() => setAppointmentConfirmed(false)}
        >
          <Lottie animationData={LOTTIE_MAPPING.SUCCESS} />
        </Backdrop>
      )}
      <>
        <h1 className="text-2xl text-blue-800 underline uppercase w-full text-center">
          {t('bookAppointmentPage.enterDetails')}
        </h1>
        <form
          className="w-full"
          onSubmit={handleSubmit(async (formData) => {
            const { name, email } = formData;
            setSubmitting(true);
            if (selectedDate && selectedTime) {
              const weekday = format(selectedDate, 'EEEE');
              const date = format(selectedDate, 'do');
              const month = format(selectedDate, 'MMMM');
              const time = format(selectedDate, 'hh:mm a');
              const dateString = `${time} on ${date} ${month} (${weekday})`;
              try {
                //TODO: call api
                toast.promise(
                  axios
                    .post('https://dmoagh.herokuapp.com/api/sendMail', {
                      name,
                      email,
                      message: dateString,
                    })
                    .then((response) => setAppointmentConfirmed(true))
                    .then(() => {
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      console.error('Error sending mail ', error);
                    }),
                  {
                    loading: 'Checking for slot...',
                    success: 'Appointment Confirmed 😇',
                    error: 'No Slot, Try helpline!!!',
                  },
                );
              } catch (error) {
                console.log('Error logging in', error);
              }
            } else {
              toast.error('Have you selected both Date and Time📅');
            }
            setSubmitting(false);
          })}
        >
          <div className="flex flex-col justify-center items-center w-full py-2">
            <div className="flex justify-center items-center">
              <label htmlFor="name" className="text-indigo-800 text-xl">
              {t('bookAppointmentPage.name')}
              </label>
              <input
                className="ml-2 border-b-2 border-blue-700 focus:border-red-600 focus:outline-none rounded-sm"
                placeholder={t('bookAppointmentPage.namePlaceholder')}
                type="text"
                name="name"
                id="name"
                ref={register({
                  required: 'Please enter your Name',
                })}
              />
            </div>
            {errors.name && (
              <div className="text-sm text-red-700">{errors.name.message}</div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center py-2">
            <div className="flex justify-center items-center">
              <label htmlFor="email" className="text-indigo-800 text-xl">
              {t('bookAppointmentPage.email')}
              </label>
              <input
                className="ml-2 border-b-2 border-blue-700 focus:border-red-600 focus:outline-none rounded-sm"
                placeholder={t('bookAppointmentPage.emailPlaceholder')}
                type="text"
                name="email"
                id="email"
                ref={register({
                  required: 'Please Enter your Email Address',
                })}
              />
            </div>
            {errors.email && (
              <div className="text-sm text-red-700">{errors.email.message}</div>
            )}
          </div>
          <div className="flex justify-center items-center py-2">
            <span className="mr-3 text-indigo-800 text-xl">{t('bookAppointmentPage.date')}</span>
            <CustomDatePicker callback={(date) => setSelectedDate(date)} />
          </div>
          <div className="flex justify-center items-center py-2">
            <span className="mr-3 text-indigo-800 text-xl">{t('bookAppointmentPage.time')}</span>
            <CustomTimePicker callback={(date) => setSelectedTime(date)} />
          </div>
          {selectedDate && selectedTime && (
            <div className="px-10 text-red-700">
              {t('bookAppointmentPage.confirm', {
                selectedDate: selectedDate.toDateString(),
                selectedTime: selectedTime,
              })}
            </div>
          )}
          <div className="flex justify-center items-center py-4">
            <button
              className="text-xl font-semibold text-blue-700 rounded-2xl border-2 border-blue-600
            px-4 py-1 focus:outline-none transform hover:scale-90"
              type="submit"
              disabled={submitting}
            >
          {t('bookAppointmentPage.bookIt')}
            </button>
          </div>
        </form>
      </>
    </>
  );
}
