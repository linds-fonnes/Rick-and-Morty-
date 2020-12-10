import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import CharacterList from "./components/CharacterList"


function App() {
  const [characters,setCharacters] = useState([]);

  
useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(res => {
    setCharacters(res.data.results)
  })
  .catch(error => {
    console.log(error)
  })
  },[])

  return (
    <div>

      <CharacterList characters={characters}/>
   
    </div>
  );
}

export default App;
