import React, {useState} from 'react';

function SearchBar(props) {
    const [pokemon, setPokemon] = useState(props.pokemonInfo);
    function handleClick(e) {
        e.preventDefault();
        props.loadPokemon(pokemon);
      }
    
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for a pokemon" value={pokemon} onChange={e=>setPokemon(e.target.value)} />
            <a href="#" onClick={handleClick}><i className="fas fa-search"/></a>
          </div>
    )
}

export default SearchBar
