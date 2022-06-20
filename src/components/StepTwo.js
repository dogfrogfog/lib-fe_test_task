import React from 'react';

export const StepTwo = ({ attributes, selectedAttribute, setModalOpenStatus }) => {
  const handleSelectClick = () => {
    const oldColorElement = document.querySelector('.product-color input[checked]');
    oldColorElement.removeAttribute('checked');

    const newColorElement = document.querySelector(`input[name="color"][data-image="${selectedAttribute}"]`);
    newColorElement.setAttribute('checked', true);

    setModalOpenStatus(false);
  };  

  return (
    <>
      {attributes.map((attr) => (
        <input
          key={attr}
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