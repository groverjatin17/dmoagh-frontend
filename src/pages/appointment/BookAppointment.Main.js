import React from 'react';
import Lottie from '../../components/Animations/RenderLottie';
import LOTTIE_MAPPING from '../../common/global-constants/LottieMapping';
import AppointmentForm from './AppointmentForm';

export default function BookAppointment() {

  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" block lg:hidden lg:m-24">
        <Lottie animationData={LOTTIE_MAPPING.APPOINTMENT} height={350} width={350} />
      </div>
      <div className="m-24 hidden lg:block">
        <Lottie animationData={LOTTIE_MAPPING.APPOINTMENT} width={600} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <AppointmentForm />
      </div>
    </div>
  );
}
