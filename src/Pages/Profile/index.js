import React, { useContext, useEffect, useState } from 'react';
import context from '../../Context/Context';
import Construction from '../../images/Construction.png';
import './Profile.css';

function Profile({ history }) {
  const [popup, setPopup] = useState(false);

  const { photo, name, email, recoverLocalStorage, logoff } =
    useContext(context);

  const clickPopup = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    recoverLocalStorage();
  }, []);

  // const logoff = () => {
  //   localStorage.clear();
  //   history.push('/');
  // };

  return (
    <>
      {popup ? (
        <div className="Profile-popup-up">
          <div className="Profile-popup">
            <img src={Construction} alt="comida" />
            <button
              className="Profile-popup-btn"
              type="button"
              data-testid="login-submit-btn"
              onClick={() => clickPopup()}
            >
              Voltar a tela de Perfil
            </button>
            <button
              className="Profile-popup-btn"
              type="button"
              data-testid="login-submit-btn"
              onClick={() => logoff(history)}
            >
              Ir para a tela inicial
            </button>
          </div>
        </div>
      ) : (
        <div className="Profile">
          <div className="Profile-img">
            <img
              src={
                photo
                  ? `${photo}?s=700`
                  : 'https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156?k=20&m=587805156&s=612x612&w=0&h=Ok_jDFC5J1NgH20plEgbQZ46XheiAF8sVUKPvocne6Y='
              }
              alt="Foto"
            />
          </div>
          <div className="Profile-contents">
            <h2>Bem vindo 😃</h2>

            <h1>{name ? `${name}` : 'É bom ter você aqui'}</h1>

            <h3>{email}</h3>
            <button type="button" onClick={() => clickPopup()}>
              Receita finalizadas
            </button>
            <button type="button" onClick={() => clickPopup()}>
              Receita favoritas
            </button>
            <button type="button" onClick={() => history.push('/choice')}>
              Voltar ao menu
            </button>
            <button type="button" onClick={() => logoff(history)}>
              Fazer logoff
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
