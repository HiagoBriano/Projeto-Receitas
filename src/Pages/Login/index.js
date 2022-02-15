import React, { useContext, useEffect, useState } from 'react';
import context from '../../Context/Context';
import barbecue from '../../images/teste.gif';
import fetchPhoto from '../../Requests/GravatarAPI';
import './Login.css';

function Login({ history }) {
  const [password, setPassword] = useState('');
  const [doubtPassword, setDoubtPassword] = useState(false);
  const [doubtEmail, setDoubtEmail] = useState(false);

  const { recoverLocalStorage, setPhoto, setName, email, setEmail } =
    useContext(context);

  useEffect(() => {
    const Logged = JSON.parse(localStorage.getItem('user'));
    if (Logged) {
      recoverLocalStorage();
      history.push('/choice');
    }
  }, [history]);

  const btnCheck = () => {
    // Referência do Regex: https://regexr.com/3e48o
    const regexValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minPassword = 7;

    if (password.length >= minPassword && regexValidation.test(email)) {
      return false;
    }
    return true;
  };

  const passwordDoubt = () => {
    setDoubtPassword(!doubtPassword);
    if (doubtEmail) {
      setDoubtEmail(false);
    }
  };

  const emailDoubt = () => {
    setDoubtEmail(!doubtEmail);
    if (doubtPassword) {
      setDoubtPassword(false);
    }
  };

  const onButton = async () => {
    const gravatar = await fetchPhoto(email);

    if (gravatar !== 'User not found') {
      const { displayName, thumbnailUrl } = gravatar.entry[0];

      setPhoto(thumbnailUrl);
      setName(displayName);
    }

    history.push('/choice');
  };

  return (
    <div className="main-login">
      <section className="left-login">
        <div className="card-descrition">
          {/* imagem retirada do site https://storyset.com/illustration/barbecue/amico */}
          <img src={barbecue} alt="" className="img-login" />
        </div>
      </section>
      <section className="right-login">
        <div className="card-login">
          <label htmlFor="email-login" className="textfield">
            {doubtEmail ? (
              <p className="login-doubt-text">
                Se o seu email estiver cadastrado no site Gravatar vai aparecer
                sua foto ao clicar em perfil 😀
              </p>
            ) : null}
            <p>
              E-mail:
              <button className="login-doubt" onClick={() => emailDoubt()}>
                ❓
              </button>
            </p>
            <input
              type="text"
              id="email-login"
              name="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>

          <label htmlFor="email-login" className="textfield">
            {doubtPassword ? (
              <p className="login-doubt-text">
                Digite uma senha com pelo menos 7 caracteres 😉
              </p>
            ) : null}
            <p>
              Senha:
              <button className="login-doubt" onClick={() => passwordDoubt()}>
                ❓
              </button>
            </p>
            <input
              type="password"
              id="senha-login"
              name="senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
          <button
            className={
              btnCheck() ? 'login-bnt-off login-bnt' : 'login-bnt-on login-bnt'
            }
            type="button"
            data-testid="login-submit-btn"
            disabled={btnCheck()}
            onClick={() => onButton()}
          >
            Entrar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Login;
