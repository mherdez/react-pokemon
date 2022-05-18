import { useState } from 'react';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (id) => {
	const respuesta = await fetch(URL + id);
	const data = await respuesta.json();
	const name = await data.name;
	const img = await data.sprites.other.dream_world
		.front_default;
	return { name, img, id };
};

const array650 = () => {
	const array = [];
	for (let i = 0; i < 650; i++) {
		array.push(i);
	}

	const arrayMix = array
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);
	return arrayMix;
};

export const getPokemones = async () => {
	const [i1, i2, i3, i4] = await Promise.all(
		array650().map((item) => getPokemon(item))
	);
	return [
		{ name: i1.name, img: i1.img, id: i1.id },
		{ name: i2.name, img: i2.img, id: i2.id },
		{ name: i3.name, img: i3.img, id: i3.id },
		{ name: i1.name, img: i4.img, id: i4.id },
	];
};
