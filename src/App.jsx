import { useEffect, useState } from 'react';
import './App.css';
import { getPokemones } from './helpers/getPokemon';
import Pokemon from './Pokemon';

function App() {
	const [pokemones, setPokemones] = useState([]);
	const random = Math.floor(Math.random() * 4);

	useEffect(() => {
		getPokemones().then((listaPokemon) =>
			setPokemones(listaPokemon)
		);
	}, []);

	if (pokemones.length > 0) {
		return (
			<div className='App'>
				<Pokemon pokemones={pokemones} random={random} />
			</div>
		);
	}
}

export default App;
