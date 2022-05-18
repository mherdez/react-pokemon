import { useState } from 'react';

const random = Math.floor(Math.random() * 4);

const Pokemon = ({ pokemones, cambiaClass }) => {
  const [ok, setOk] = useState(false);
  const [mensaje, setMensaje] = useState({});

  const verificarOpcion = (id) => {
    if (id === pokemones[random].id) {
      cambiaClass(id, true);
      setOk(true);
      setMensaje({ dos: '¡ Correcto !' });
    } else {
      cambiaClass(id, false);
      // document.querySelector('ul').classList.add('is-disabled');
      document.querySelector('img').classList.remove('is-hidden');
      const $li = document.querySelectorAll('li');
      console.log($li);
      $li.forEach((li) => li.classList.add('is-disabled'));
      const namePokemon =
        pokemones[random].name[0].toUpperCase() +
        pokemones[random].name.substring(1).toLowerCase();
      setMensaje({ uno: `Fallaste... es  `, dos: `${namePokemon}` });
    }
  };

  return (
    <>
      <header className='App-header'>
        <h2>¿ Quién es este Pókemon ?</h2>
      </header>
      <main className='App-body'>
        <div className='picture'>
          <img
            className={ok ? '' : 'is-hidden'}
            src={pokemones[random].img}
            alt='pokemon'
          />
        </div>
        <div className='list'>
          <ul>
            {pokemones.map((pokemon) => (
              <li
                className={`pokemon-item ${pokemon.status}`}
                key={pokemon.id}
                onClick={() => {
                  verificarOpcion(pokemon.id);
                }}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <h3>{mensaje.uno}</h3>
        <h4>{mensaje.dos}</h4>
      </footer>
    </>
  );
};

export default Pokemon;
