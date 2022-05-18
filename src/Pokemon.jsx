const Pokemon = ({ pokemones, random }) => {
	return (
		<>
			<header className='App-header'>
				<h2>¿ Quién es este Pókemon ?</h2>
			</header>
			<main className='App-body'>
				<div className='picture'>
					<img
						className='is-hidden'
						src={pokemones[random].img}
						alt='pokemon'
					/>
				</div>
				<div className='list'>
					<ul>
						{pokemones.map((pokemon) => (
							<li className='pokemon-item' key={pokemon.id}>
								{pokemon.name}
							</li>
						))}
					</ul>
				</div>
			</main>
		</>
	);
};

export default Pokemon;
