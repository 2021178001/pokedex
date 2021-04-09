import React from 'react'

function Illustration({pokemonName, imgUrl, pokemonType}) {
    return (
        <section className="flex column illustration">
        <div className="fire">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="" />
        </div>
        <h1>Ditto<span className="fire" style={{borderRadius: '1rem', padding:'0 1rem', color: 'white'}}>fire</span></h1>
      </section>
    )
}

export default Illustration
