import React from 'react';

import RenderLottie from '../../components/Animations/RenderLottie';
import LOTTIE_MAPPING from '../../common/global-constants/LottieMapping';
import ContactUsForm from './ContactUsForm';

export default function ContactUs() {
  return (
    <div>
      <div className="grid grid-rows-2">
        <div className="row-span-1">
          <RenderLottie animationData={LOTTIE_MAPPING.DOCTOR} />
        </div>
        <div className="row-span-1">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
