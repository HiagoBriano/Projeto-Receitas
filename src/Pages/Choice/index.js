import React, { useContext, useEffect } from 'react';
import Maintenance from '../../Components/Maintenance';
import context from '../../Context/Context';
import Drink from '../../images/Drink.gif';
import Favorite from '../../images/Favorite.gif';
import Meal from '../../images/Meal.gif';
import Profile from '../../images/Profile.gif';
import './Choice.css';

function Choice({ history }) {
  const { updadeLocalStorage, maintenanceOn, setMaintenanceOn } =
    useContext(context);

  useEffect(() => {
    updadeLocalStorage();
  }, []);

  return (
    <div className="choice-cards">
      {maintenanceOn ? (
        <Maintenance history={history} back={'Voltar ao menu'} />
      ) : (
        <>
          <div
            className="choice-cards-single"
            onClick={() => setMaintenanceOn(true)}
          >
            <div className="choice-cards-single-childen">
              <img src={Meal} alt="comida" />
              <span>comida</span>
            </div>
          </div>
          <div
            className="choice-cards-single"
            onClick={() => setMaintenanceOn(true)}
          >
            <div className="choice-cards-single-childen">
              <img src={Drink} alt="comida" />
              <span>Bebida</span>
            </div>
          </div>
          <div
            className="choice-cards-single  choice-cards-down"
            onClick={() => setMaintenanceOn(true)}
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
