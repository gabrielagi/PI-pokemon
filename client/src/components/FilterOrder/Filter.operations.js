export const pokemonsByTypes = ({ allPokemons, type }) => {
  const allPokemonsFiltered = allPokemons.filter((pokemon) =>
    pokemon.types.some((t) => t.name === type)
  );

  console.log("allPokemonsFiltered:", allPokemonsFiltered);
  return allPokemonsFiltered;
};

export const pokemonsByOrigin = ({ allPokemons, origin }) => {
  if (origin === "db") {
    const allPokemonsFiltered = allPokemons.filter(
      (pokemon) => pokemon.createdInDb === true
    );
    console.log("allPokemonsOriginDb:", allPokemonsFiltered);
    return allPokemonsFiltered;
  } else {
    const allPokemonsFiltered = allPokemons.filter(
      (pokemon) => !pokemon.hasOwnProperty("createdInDb")
    )
    console.log("allPokemonsOriginByApi:", allPokemonsFiltered);
    return allPokemonsFiltered;
  }
};

