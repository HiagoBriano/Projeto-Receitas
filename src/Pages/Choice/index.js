import React, { useContext, useEffect, useState } from 'react';
import context from '../../Context/Context';
import Construction from '../../images/Construction.png';
import Drink from '../../images/Drink.gif';
import Favorite from '../../images/Favorite.gif';
import Meal from '../../images/Meal.gif';
import Profile from '../../images/Profile.gif';
import './Choice.css';

function Choice({ history }) {
  const [popup, setPopup] = useState(false);

  const { updadeLocalStorage } = useContext(context);

  useEffect(() => {
    updadeLocalStorage();
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  const clickPopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="choice-cards">
      {popup ? (
        <div className="choice-popup">
          <img src={Construction} alt="comida" />
          <button
            className="choice-popup-btn"
            type="button"
            data-testid="login-submit-btn"
            onClick={() => clickPopup()}
          >
            Voltar ao menu
          </button>
          <button
            className="choice-popup-btn"
            type="button"
            data-testid="login-submit-btn"
            onClick={() => clearLocalStorage()}
          >
            Ir para a tela inicial
          </button>
        </div>
      ) : (
        <>
          <div className="choice-cards-single" onClick={() => clickPopup()}>
            <div className="choice-cards-single-childen">
              <img src={Meal} alt="comida" />
              <span>comida</span>
            </div>
          </div>
          <div className="choice-cards-single" onClick={() => clickPopup()}>
            <div className="choice-cards-single-childen">
              <img src={Drink} alt="comida" />
              <span>Bebida</span>
            </div>
          </div>
          <div
            className="choice-cards-single  choice-cards-down"
            onClick={() => clickPopup()}
          >
            <div className="choice-cards-single-childen">
              <img src={Favorite} alt="comida" />
              <span>Favoritas</span>
            </div>
          </div>
          <div
            className="choice-cards-single choice-cards-down"
            onClick={() => history.push('/Profile')}
          >
            <div className="choice-cards-single-childen">
              <img src={Profile} alt="comida" />
              <span>Perfil</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Choice;
