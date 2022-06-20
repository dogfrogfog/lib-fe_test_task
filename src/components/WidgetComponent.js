import React, { useState } from 'react';

import { Tab } from './Tab';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { STEPS } from '../constants';

export const WidgetComponent = ({
  placeholder,
  placeholder_text,
  attributes,
  image,
  setModalOpenStatus,
  select_attribute,
}) => {
  const [activeStep, setActiveStep] = useState(STEPS.step1);
  const [selectedAttribute, setSelectedAttribute] = useState();

  return (
    <div
      style={{ 
        height: '100vh',
        width: '100vw',
        background: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9999
      }}>
      <div style={{ width: 700, margin: '0 auto' }}>
        <header
          style={{
            width: '100%',
            height: 50,
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid light-grey',
            marginBottom: 30
          }}
        >
          <Tab name={STEPS.step1} activeStep={activeStep} />
          <Tab name={STEPS.step2} activeStep={activeStep} />
        </header>
        {activeStep === STEPS.step1
          ? <StepOne
              setActiveStep={setActiveStep}
              setSelectedAttribute={setSelectedAttribute}
              placeholder={placeholder}
              placeholder_text={placeholder_text}
              attributes={attributes}
              image={image}
            />
          : <StepTwo
              setModalOpenStatus={setModalOpenStatus}
              attributes={attributes}
              placeholder={placeholder}
              selectedAttribute={selectedAttribute}
              select_attribute={select_attribute}
            />
        }
      </div>
    </div>
  );
}