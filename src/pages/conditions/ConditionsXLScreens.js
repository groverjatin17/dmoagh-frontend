import React from 'react';
import MuscularSystem from '../../assets/images/muscular-system.jpg';

const conditionsXL = (conditionsObject, t) => {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${MuscularSystem})`,
        }}
        className="object-cover bg-no-repeat bg-center hidden lg:block"
      >
        <div className="grid grid-cols-2 mt-32">
          <div className="grid grid-rows-3 ml-20">
            <div className="row-span-1 mb-6">
              <h1 className="font-serif text-4xl text-black mb-6 w-64">
                Shoulder and Upper Limb
                {t(`bodyPart.shoulder`)}
              </h1>
              <ul className="list-disc list-inside">
                {conditionsObject &&
                  conditionsObject.shoulder &&
                  conditionsObject.shoulder.map((condition) => (
                    <li key={condition} className="mb-2">
                      {t(`shoulder.${condition}`)}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="row-span-1 mb-6">
              <h1 className="font-serif text-4xl text-black mb-6 w-64">{t(`bodyPart.knee`)}</h1>
              <ul className="list-disc list-inside">
                {conditionsObject &&
                  conditionsObject.knee &&
                  conditionsObject.knee.map((condition) => (
                    <li key={condition} className="mb-2">
                      {t(`knee.${condition}`)}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-rows-3">
            <div className="row-span-1 mb-2 ml-64">
              <h1 className="font-serif text-4xl text-black mb-6 w-64">
              {t(`bodyPart.trauma`)}
              </h1>
              <ul className="list-disc list-inside ">
                {conditionsObject &&
                  conditionsObject.trauma &&
                  conditionsObject.trauma.map((condition) => (
                    <li key={condition} className="mb-2">
                      {t(`trauma.${condition}`)}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="row-span-1 mb-6 ml-64">
              <h1 className="font-serif text-4xl text-black mb-6 w-64">{t(`bodyPart.hip`)}</h1>
              <ul className="list-disc list-inside ">
                {conditionsObject &&
                  conditionsObject.hip &&
                  conditionsObject.hip.map((condition) => (
                    <li key={condition} className="mb-2">
                      {t(`hip.${condition}`)}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="row-span-1 mb-6  ml-48">
              <h1 className="font-serif text-4xl text-black mb-6 w-64">
              {t(`bodyPart.ankle`)}
              </h1>
              <ul className="list-disc list-inside ">
                {conditionsObject &&
                  conditionsObject.ankle &&
                  conditionsObject.ankle.map((condition) => (
                    <li key={condition} className="mb-2">
                      {t(`ankle.${condition}`)}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conditionsXL;
