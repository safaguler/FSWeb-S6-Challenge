import React, { useEffect, useState } from 'react';

import Karakter from "./components/Karakter.js";

import axios from 'axios';

import { ContainerKarakterler } from './components/styled.js';

const App = () => {
  const [karakterler, setKarakterler] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
    

  useEffect(() => {
      axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
          console.log(response.data);
          setKarakterler(response.data);
      })
      .catch((error) => {
          console.log("Error!" + error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Karaterleri</h1>
      <ContainerKarakterler>
            {karakterler ? (
                karakterler.map((karakter) => (
                  <Karakter karakter={karakter}/>
                  ))
            ) : (
                <h3>Yükleniyor...</h3>
            )}
        </ContainerKarakterler>
      
    </div>
  );
}

export default App;
