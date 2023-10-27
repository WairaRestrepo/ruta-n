import { useState, useEffect } from 'react'
import './App.css'
import Card from './compoonents/card';

const url = "https://rickandmortyapi.com/api/character"


function App() {

  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });

  }, [])

  console.log("characters", characters);



  return (
    <>
      <h1>Personajes</h1>

      <div className='characters '>
        {
          characters?.map((cha) => (

            <Card key={cha.id} char={cha} />
          ))}
      </div>

    </>
  );
}

export default App
