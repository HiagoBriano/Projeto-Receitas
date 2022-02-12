import React from 'react';

function Choice({ history }) {
  const limp = () => {
    console.log('ola');
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <h1>Escolha, comida ou bebida</h1>
      <p>e programe uma deliciosa receita</p>
      <button onClick={() => limp()}>
        Clique aqui para voltar a pagina inicial
      </button>
    </div>
  );
}

export default Choice;
