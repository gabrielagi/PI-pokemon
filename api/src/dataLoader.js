const { getTypes } = require("./controllers/typeController");

// Función para cargar tipos y pokemons en la base de datos
const loadTypes = async () => {
  try {
    // Carga los tipos en la base de datos
    const types = await getTypes();

    console.log("Tipos de pokemones cargados exitosamente.");
  } catch (error) {
    console.error("Error al cargar los tipos o pokemones:", error.message);
  }
};

module.exports = { loadTypes };
