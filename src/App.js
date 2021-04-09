import './App.css';
import SearchBar from "./components/SearchBar";
import Illustration from "./components/Illustration";
import Statistics from './components/Statistics';
import Pictures from './components/Pictures';
import Abilities from './components/Abilities';

import {useState} from 'react';

function App() {

  const [pokemonInfo, setPokemonInfo] = useState(null)

  return (
    <div className="wrapper">
        <nav>
        </nav>
        <div className="flex column main-wrapper">
          <SearchBar />
          {pokemonInfo == null ? 

            <h1 style={{marginBottom: '40rem'}}>Busca un pokemón</h1>
            :

            <div className="grid">
              <Illustration />
              <Statistics />
              <Pictures />
              <Abilities />
            </div>
          }    
        </div>
      </div>
  );
}

export default App;
