import React, { useState } from 'react';
import { WidgetComponent } from './WidgetComponent';

export const App = (config) => {
  const [isModalOpen, setModalOpenStatus] = useState(false);

  const handleModalOpen = () => {
    setModalOpenStatus(true);
  };

  return (
    <>
      {isModalOpen
        ? <WidgetComponent {...config} setModalOpenStatus={setModalOpenStatus} />
        : <button onClick={handleModalOpen}>Open selection modal</button>
      }
    </>
  );
}