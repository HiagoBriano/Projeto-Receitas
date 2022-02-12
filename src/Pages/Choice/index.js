import React from 'react';
import Drink from '../../images/Drink.gif';
import Favorite from '../../images/Favorite.gif';
import Meal from '../../images/Meal.gif';
import Profile from '../../images/Profile.gif';
import './Choice.css';

function Choice({ history }) {
  // const limp = () => {
  //   console.log('ola');
  //   localStorage.clear();
  //   history.push('/');
  // };

  return (
    <>
      <div className="choice-cards">
        <div class="card">
          <div class="card-body">
            <img className="img-drinks" src={Meal} alt="comida" />
            <span class="btn">comida</span>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img className="img-drinks" src={Drink} alt="comida" />
            <span class="btn">Bebida</span>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img className="img-drinks" src={Favorite} alt="comida" />
            <span class="btn">Receitas favoritas</span>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img className="img-drinks" src={Profile} alt="comida" />
            <span class="btn">Perfil</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choice;
