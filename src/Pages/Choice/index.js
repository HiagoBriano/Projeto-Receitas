import React, { useState } from 'react';
import Construction from '../../images/Construction.png';
import Drink from '../../images/Drink.gif';
import Favorite from '../../images/Favorite.gif';
import Meal from '../../images/Meal.gif';
import Profile from '../../images/Profile.gif';
import './Choice.css';

function Choice({ history }) {
  const [popup, setPopup] = useState(false);

  const limp = () => {
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
            onClick={() => limp()}
          >
            Ir para a tela inicial
          </button>
        </div>
      ) : (
        <>
          <div class="choice-cards-single" onClick={() => clickPopup()}>
            <div class="choice-cards-single-childen">
              <img src={Meal} alt="comida" />
              <span>comida</span>
            </div>
          </div>
          <div class="choice-cards-single" onClick={() => clickPopup()}>
            <div class="choice-cards-single-childen">
              <img src={Drink} alt="comida" />
              <span>Bebida</span>
            </div>
          </div>
          <div class="choice-cards-single" onClick={() => clickPopup()}>
            <div class="choice-cards-single-childen">
              <img src={Favorite} alt="comida" />
              <span>Receitas favoritas</span>
            </div>
          </div>
          <div class="choice-cards-single" onClick={() => clickPopup()}>
            <div class="choice-cards-single-childen">
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
