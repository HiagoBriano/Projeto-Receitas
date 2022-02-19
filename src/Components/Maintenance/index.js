import React, { useContext } from 'react';
import context from '../../Context/Context';
import Construction from '../../images/Construction.png';
import './Maintenance.css';

function Maintenance({ history, back }) {
  const { logoff, setMaintenanceOn } = useContext(context);

  return (
    <div className="popup-up">
      <div className="popup">
        <img src={Construction} alt="comida" />
        <button
          className="popup-btn"
          type="button"
          data-testid="login-submit-btn"
          onClick={() => setMaintenanceOn(false)}
        >
          {back}
        </button>
        <button
          className="popup-btn"
          type="button"
          data-testid="login-submit-btn"
          onClick={() => logoff(history)}
        >
          Ir para a tela inicial
        </button>
      </div>
    </div>
  );
}

export default Maintenance;
