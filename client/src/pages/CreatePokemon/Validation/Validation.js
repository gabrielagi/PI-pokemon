const validation = (pokemonData) => {
  const errors = {};
  const regexString = /^[A-Za-z]+$/;
  // name,img, hp, attack, defense, speed, height, weight, type;
  // Validación para el nombre: name
  if (!regexString.test(pokemonData.name)) {
    errors.name = "The name entered is invalid";
  }
  if (!pokemonData.name) {
    errors.name = "A name is required";
  }
  if (pokemonData.name.length > 20) {
    errors.name = "The name must not exceed 20 characters";
  }
  // Validación por la imagen: img
  if (!pokemonData.img) {
    errors.img = "You must enter a img URL";
  }
  // Validación por el nivel de vida: hp
  if (!pokemonData.hp) {
    errors.hp = "You must enter a life level: hp";
  }
  if (pokemonData.hp < 1 || pokemonData.hp > 150) {
    errors.hp = "The life level of a pokemon must be between 0 and 150";
  }
  // Validación por el ataque: attack
  if (!pokemonData.attack) {
    errors.attack = "You must enter a attack level";
  }
  if (pokemonData.attack < 1 || pokemonData.attack > 200) {
    errors.attack = "The attack level of a pokemon must be between 0 and 200";
  }
  // Validación por la defensa: defense
  if (!pokemonData.defense) {
    errors.defense = "You must enter a attack level";
  }
  if (pokemonData.defense < 1 || pokemonData.defense > 200) {
    errors.defense = "The defense level of a pokemon must be between 0 and 200";
  }
  // Validación por la velocidad: speed
  if (pokemonData.speed < 1 || pokemonData.speed > 100) {
    errors.speed = "The speed of a pokemon must be between 0 and 100";
  }
  // Validación por la velocidad: height
  if (pokemonData.height < 1 || pokemonData.height > 80) {
    errors.height = "The height of a pokemon must be between 0 and 80";
  }
  // Validación por la velocidad: weight
  if (pokemonData.weight < 1 || pokemonData.weight > 1200) {
    errors.weight = "The weight of a pokemon must be between 0 and 1200";
  }
  // Validación por la velocidad: weight
  if (!pokemonData.types.length) {
    errors.types = "You must choose at least one type of pokemon";
  }
  if (pokemonData.types.length < 1 || pokemonData.types.length > 3) {
    errors.types =
      "The types of a pokemon must be greater than zero and less than 3";
  }
  return errors;
};

export default validation;
