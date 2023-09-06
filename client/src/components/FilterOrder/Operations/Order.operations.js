export const pokemonsOrdered = ({ allPokemons, order }) => {
  let ordered = [];
  switch (order) {
    case "A":
      ordered = allPokemons
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      return ordered;
    case "D":
      ordered = allPokemons
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
      return ordered;
    case "AA":
      ordered = allPokemons.sort((a, b) => a.attack - b.attack);
      return ordered;
    case "AD":
      ordered = allPokemons.sort((a, b) => b.attack - a.attack);
      return ordered;
    default:
      return allPokemons;
  }
};
