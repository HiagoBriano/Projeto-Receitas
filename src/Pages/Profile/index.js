import React, { useContext, useEffect } from 'react';
import Maintenance from '../../Components/Maintenance';
import context from '../../Context/Context';
import './Profile.css';

function Profile({ history }) {
  const {
    photo,
    name,
    email,
    recoverLocalStorage,
    logoff,
    maintenanceOn,
    setMaintenanceOn,
  } = useContext(context);

  useEffect(() => {
    recoverLocalStorage();
  }, []);

  return (
    <>
      {maintenanceOn ? (
        <Maintenance history={history} back={'Voltar a tela de perfil'} />
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
            <button type="button" onClick={() => setMaintenanceOn(true)}>
              Receita finalizadas
            </button>
            <button type="button" onClick={() => setMaintenanceOn(true)}>
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
