import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const PokeAPI = () => {
  const [randomPokemonID, setRandomPokemonID] = useState(0);

  const generateRandomID = () => {
    let randomNumber = Math.floor(Math.random() * 1008) + 1;
    setRandomPokemonID(randomNumber);
  };

  useEffect(() => {
    generateRandomID();
  }, []);

  const { data: pokemonData, isLoading } = useQuery(
    ["pokemon", randomPokemonID],
    () => {
      return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonID}`)
        .then((response) => response.data);
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Random pokemon</h1>
      <button onClick={generateRandomID}>Click</button>

      {pokemonData && (
        <>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>{`Pokemon type: ${pokemonData.types[0].type.name}`}</p>
        </>
      )}
    </>
  );
};

export default PokeAPI;
