import React, { useState } from 'react';

export const StepTwo = ({ attributes, selectedAttribute }) => {
  const handleSelectClick = () => {
    console.log('shoud do smth onthe page')
  };

  return (
    <>
      {attributes.map((attr) => (
        <input
          disabled
          style={{
            height: 50,
            width: 50,
            backgroundColor: attr,
            marginRight: 20,
            ...(attr === selectedAttribute && { transform: 'scale(1.2)' })
          }}
        />
      ))}
      <button
        style={{
          display: 'block',
          marginTop: 20
        }}
        onClick={handleSelectClick}
      >
        Select me
      </button>
    </>
  );
};