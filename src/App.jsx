import { useEffect, useState } from 'react';
import './App.css';
import { getPokemones } from './helpers/getPokemon';

const random = Math.floor(Math.random() * 4);

function App() {
	const [pokemones, setPokemones] = useState([]);

	useEffect(() => {
		getPokemones().then((listaPokemon) =>
			setPokemones(listaPokemon)
		);
	}, []);

	if (pokemones.length > 0) {
		return (
			<div className='App'>
				<header className='App-header'>
					<h2>¿ Quién es este Pókemon ?</h2>
				</header>
				<main className='App-body'>
					<div className='picture'>
						<img
							src={pokemones[random].img}
							alt='pokemon'
						/>
					</div>
					<div className='list'>
						<ul>
							{pokemones.map((pokemon) => (
								<li
									className='pokemon-item'
									key={pokemon.id}
								>
									{pokemon.name}
								</li>
							))}
						</ul>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
