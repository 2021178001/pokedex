import React from 'react';

function SearchBar({setPokemonInfo, pokemonInfo}) {

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for a pokemon" />
            <i className="fas fa-search"  />
          </div>
    )
}

export default SearchBar
