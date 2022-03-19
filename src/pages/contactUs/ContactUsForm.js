import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
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

export default function ContactUsForm() {
  const { register, handleSubmit, errors } = useForm({
    // defaultValues: {
    //   name: 'Jatin Grover',
    //   email: 'bla@gmail.com',
    //   query: 'This is my query sirji',
    // },
  });

  const { t } = useTranslation();
  const classes = useStyles();

  const [submitting, setSubmitting] = useState(false);
  const [isMessageSent, setMessageSent] = useState(false);

  return (
    <>
      {isMessageSent && (
        <Backdrop
          className={classes.backdrop}
          open={isMessageSent}
          onClick={() => setMessageSent(false)}
        >
          <Lottie animationData={LOTTIE_MAPPING.SUCCESS} />
        </Backdrop>
      )}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(async (formData) => {
          const { name, email, query } = formData;
          setSubmitting(true);
          try {
            //TODO: call api
            toast.promise(
              axios
                .post('https://dmoagh.herokuapp.com/api/sendMail', {
                  name,
                  email,
                  message: query,
                })
                .then((response) => setMessageSent(true))
                .then(() => {
                  setSubmitting(false);
                })
                .catch((error) => {
                  console.error('Error sending mail ', error);
                }),
              {
                loading: 'Sending Query...',
                success: 'Message Sent Successfully 😇',
                error: 'Server Issue. Please try again!!!',
              },
            );
          } catch (error) {
            console.log('Error logging in', error);
          }
          setSubmitting(false);
        })}
      >
        <div className="flex flex-col justify-center items-center w-full py-2">
          <div className="flex justify-center items-center">
            <label htmlFor="name" className="text-indigo-800 text-xl">
              {t('contactUs.name')}
            </label>
            <input
              className="ml-2 border-b-2 border-blue-700 focus:border-red-600 focus:outline-none rounded-sm"
              type="text"
              name="name"
              placeholder={t('contactUs.namePlaceholder')}
              id="name"
              ref={register({
                required: 'Please enter your Name',
              })}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-full py-2">
          <div className="flex justify-center items-center">
            <label htmlFor="email" className="text-indigo-800 text-xl">
              {t('contactUs.email')}
            </label>
            <input
              className="ml-2 border-b-2 border-blue-700 focus:border-red-600 focus:outline-none rounded-sm"
              type="text"
              name="email"
              placeholder={t('contactUs.emailPlaceholder')}
              id="email"
              ref={register({
                required: 'Please Enter your Mobile Number',
              })}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-700">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-full py-2">
          <div className="flex justify-center items-center">
            <label htmlFor="query" className="text-indigo-800 text-xl">
              {t('contactUs.query')}
            </label>
            <input
              className="ml-2 border-b-2 border-blue-700 focus:border-red-600 focus:outline-none rounded-sm"
              type="text"
              name="query"
              placeholder={t('contactUs.queryPlaceholder')}
              id="query"
              ref={register({
                required: 'Please Enter your Query here',
              })}
            />
          </div>
          {errors.query && (
            <p className="text-sm text-red-700">{errors.query.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="text-xl font-semibold text-blue-700 rounded-2xl border-2 border-blue-600
                  px-4 py-1 focus:outline-none transform hover:scale-90"
          >
            {t('contactUs.sendMessage')}
          </button>
        </div>
      </form>
    </>
  );
}
