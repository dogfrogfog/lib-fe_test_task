import React, { useState } from 'react';

import { STEPS } from '../constants';

const randomAttributes = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const StepOne = ({
  setActiveStep,
  setSelectedAttribute,
  buttonText,
  attributes,
}) => {
  const [isLoading, setLoadingStatus] = useState(false);

  const handleButtonClick = () => {
    setLoadingStatus(true);

    setTimeout(() => {
      const randomedAttributes = randomAttributes(attributes);

      setSelectedAttribute(randomedAttributes);
      setActiveStep(STEPS.step2);
    }, 3000);
  };

  return (
    <>
      <img width='100%' src="https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
      <button
        disabled={isLoading}
        onClick={handleButtonClick}
        style={{ margin: '10px 0', display: 'block' }}
      >
        {buttonText}
      </button>
      {isLoading && <img src="https://c.tenor.com/GNoM45eC-t4AAAAM/mr-bean-rowan-atkinson.gif" width='100%' />}
    </>
  );
};