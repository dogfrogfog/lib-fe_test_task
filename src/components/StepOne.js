import React, { useState } from 'react';

import { STEPS } from '../constants';

const randomAttributes = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const StepOne = ({
  setActiveStep,
  setSelectedAttribute,
  placeholder_text,
  attributes,
  image
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
      <img width='200' src={image} />
      <button
        disabled={isLoading}
        onClick={handleButtonClick}
        style={{ margin: '10px 0', display: 'block' }}
      >
        {placeholder_text}
      </button>
      {isLoading && <img width='300' src="https://c.tenor.com/GNoM45eC-t4AAAAM/mr-bean-rowan-atkinson.gif"  />}
    </>
  );
};