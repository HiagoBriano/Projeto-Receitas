import React, { useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [maintenanceOn, setMaintenanceOn] = useState(false);

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

  const logoff = (history) => {
    setEmail('');
    setName('');
    setPhoto('');
    setMaintenanceOn(false);

    localStorage.clear();
    history.push('/');
  };

  const contextValue = {
    updadeLocalStorage,
    recoverLocalStorage,
    logoff,
    photo,
    setPhoto,
    email,
    setEmail,
    name,
    setName,
    maintenanceOn,
    setMaintenanceOn,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export default Provider;
