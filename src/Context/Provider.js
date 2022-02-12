import React, { useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [photo, setPhoto] = useState('');

  const contextValue = {
    photo,
    setPhoto,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export default Provider;
