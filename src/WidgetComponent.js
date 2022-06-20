import React, { useState } from 'react';

import { Tab } from './components/Tab';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';
import { STEPS } from './constants';

export const WidgetComponent = ({
  placeholder_text,
  attributes,
}) => {
  const [activeStep, setActiveStep] = useState(STEPS.step1);
  const [selectedAttribute, setSelectedAttribute] = useState();

  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
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
        <Tab name={STEPS.step2} activeStep={activeStep}>wdwdwdwdw2222</Tab>
      </header>
      {activeStep === STEPS.step1
        ? <StepOne
            setActiveStep={setActiveStep}
            setSelectedAttribute={setSelectedAttribute}
            buttonText={placeholder_text}
            attributes={attributes}
          />
        : <StepTwo
            attributes={attributes}
            selectedAttribute={selectedAttribute}
          />
      }
    </div>
  );
}