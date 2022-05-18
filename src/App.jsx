import { useEffect, useState } from 'react';
import './App.css';
import { getPokemones } from './helpers/getPokemon';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    getPokemones().then((listaPokemon) => setPokemones(listaPokemon));
  }, []);

  const cambiaClass = (id, result) => {
    const newArray = [...pokemones];
    const pokemonOk = newArray.find((p) => p.id === id);
    pokemonOk.status = result ? 'is-ok' : 'is-not-ok';
    setPokemones(newArray);
  };

  if (pokemones.length > 0) {
    return (
      <div className='App'>
        <Pokemon
          pokemones={pokemones}
          setPokemones={setPokemones}
          cambiaClass={cambiaClass}
        />
      </div>
    );
  }
}

export default App;
