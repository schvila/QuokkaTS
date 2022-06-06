const fetch = require('node-fetch');

// https://pokeapi.co/api/v2/pokemon/ditto

const fetchPokemon = async (id) => {
  try {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  console.log(data);
  } catch(err) {
    console.error(err);
  }
};

fetchPokemon(1);



