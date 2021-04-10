import './App.css';
import React, {useState} from 'react';
import SearchBar from "./components/SearchBar";
import Illustration from "./components/Illustration";
import Statistics from './components/Statistics';
import Pictures from './components/Pictures';
import Abilities from './components/Abilities';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {

  const [open, setOpen] = useState(false);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);

async function loadPokemon(pokemon){
  console.log('estado: ',pokemon);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if(response.status === 404){
    setOpen(true);
  } else {
    let json = await response.json();
    setPokemonName(pokemon);
    setPokemonInfo(json);
  }
}

const handleClose = () => {
  setOpen(false);
};

  return (
    <div className="wrapper">
        <nav>
        </nav>
        <div className="flex column main-wrapper">
        <Dialog
        open={open}
        TransitionComponent={Transition}
        fullWidth="lg"
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">No se encontró ese Pokémon.</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Pokémon no encontrado. Quizás esté mal escrito o no se encuentra en tu región.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
          <SearchBar 
          pokemonInfo={pokemonName}
          loadPokemon={loadPokemon}
          />
          {pokemonInfo == null ? 

            <h1 style={{marginBottom: '40rem'}}>Busca un pokemón</h1>
            :

            <div className="grid">
              <Illustration 
              pokemonName={pokemonInfo.name}
              pokemonType={pokemonInfo.types[0].type.name}
              imgUrl={pokemonInfo.sprites.other['official-artwork'].front_default}
              />
              <Statistics 
              statistics={pokemonInfo.stats}
              />
              <Pictures 
              pictures={pokemonInfo.sprites}
              />
              <Abilities 
              abilities={pokemonInfo.abilities}
              />
            </div>
          }    
        </div>
      </div>
  );
}

export default App;
