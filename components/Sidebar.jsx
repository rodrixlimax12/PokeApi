import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <h2>Sidebar</h2>
      <ul>
        <li>
          <Link to="/pokemonFavorito">Mi Pokémon Favorito</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
