import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pokemon = ({ name }) => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const pokemonNameOrId = name || id;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos del Pokémon', error);
        setPokemonData(null);
      });
  }, [name, id]);

  if (!pokemonData) return <div>Loading...</div>;
  if (!pokemonData.name) return <div>El nombre del Pokémon no se encontró</div>;

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
    </div>
  );
};

export default Pokemon;
