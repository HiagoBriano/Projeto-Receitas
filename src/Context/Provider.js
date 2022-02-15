import React, { useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const updadeLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify({ email, name, photo }));
  };

  const recoverLocalStorage = () => {
    const Logged = JSON.parse(localStorage.getItem('user'));

    const { email, name, photo } = Logged;

    setEmail(email);
    setName(name);
    setPhoto(photo);
  };

  const contextValue = {
    updadeLocalStorage,
    recoverLocalStorage,
    photo,
    setPhoto,
    email,
    setEmail,
    name,
    setName,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export default Provider;
