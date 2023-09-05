export const pokemonsByTypes = ({ allPokemons, type }) => {
  const allPokemonsFiltered = allPokemons.filter((pokemon) =>
    pokemon.types.some((t) => t.name === type)
  );

  console.log("allPokemonsFiltered:", allPokemonsFiltered);
  return allPokemonsFiltered;
};
