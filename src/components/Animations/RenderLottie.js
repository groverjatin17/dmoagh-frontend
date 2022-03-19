import React from 'react';
import Lottie from 'react-lottie';

export default function Doctor({ animationData, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieHeight = height || 400;
  const lottieWidth = width || 400;

  return (
    <div>
      <Lottie options={defaultOptions} height={lottieHeight} width={lottieWidth} />
    </div>
  );
}
