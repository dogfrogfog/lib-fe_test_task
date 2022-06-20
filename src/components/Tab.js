import React from 'react';

export const Tab = ({ name, activeStep }) => (
  <div
    style={{
      width: '49%',
      backgroundColor: 'lightgreen',
      textAlign: 'center',
      lineHeight: '50px',
      ...(activeStep === name && { textDecoration: 'underline' })
    }}
    >
      {name}
  </div>
);