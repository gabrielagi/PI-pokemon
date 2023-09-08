const validation = (pokemonData) => {
  const errors = {};
  const regexString = /^[A-Za-z]+$/;
  const regexNumber = /^[0-9]+$/;
  const regexDecimal = /^\d+(\.\d+)?$/;

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
    errors.img = "You must enter an image URL";
  }

  // Validación por el nivel de vida: hp
  if (!regexNumber.test(pokemonData.hp)) {
    errors.hp = "Invalid value for HP";
  }
  if (!pokemonData.hp) {
    errors.hp = "You must enter a life level: HP";
  }
  if (pokemonData.hp < 1 || pokemonData.hp > 150) {
    errors.hp = "HP must be between 1 and 150";
  }

  // Validación por el ataque: attack
  if (!regexNumber.test(pokemonData.attack)) {
    errors.attack = "Invalid value for attack";
  }
  if (!pokemonData.attack) {
    errors.attack = "You must enter an attack level";
  }
  if (pokemonData.attack < 1 || pokemonData.attack > 200) {
    errors.attack = "Attack must be between 1 and 200";
  }

  // Validación por la defensa: defense
  if (!regexNumber.test(pokemonData.defense)) {
    errors.defense = "Invalid value for defense";
  }
  if (!pokemonData.defense) {
    errors.defense = "You must enter a defense level";
  }
  if (pokemonData.defense < 1 || pokemonData.defense > 200) {
    errors.defense = "Defense must be between 1 and 200";
  }

  // Validación por la velocidad: speed
  if (!regexNumber.test(pokemonData.speed)) {
    errors.speed = "Invalid value for speed";
  }
  if (!pokemonData.speed) {
    errors.speed = "You must enter a speed level";
  }
  if (pokemonData.speed < 1 || pokemonData.speed > 100) {
    errors.speed = "Speed must be between 1 and 100";
  }

  // Validación por la velocidad: height
  if (!regexDecimal.test(pokemonData.height)) {
    errors.height = "Invalid value for height";
  }
  if (!pokemonData.height) {
    errors.height = "You must enter a height value";
  }
  if (pokemonData.height < 1 || pokemonData.height > 80) {
    errors.height = "Height must be between 1 and 80";
  }

  // Validación por la velocidad: weight
  if (!regexDecimal.test(pokemonData.weight)) {
    errors.weight = "Invalid value for weight";
  }
  if (!pokemonData.weight) {
    errors.weight = "You must enter a weight value";
  }
  if (pokemonData.weight < 1 || pokemonData.weight > 1200) {
    errors.weight = "Weight must be between 1 and 1200";
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
