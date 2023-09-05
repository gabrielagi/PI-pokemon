const axios = require("axios");
const { Type } = require("../db");
const API_TYPE_URL = "https://pokeapi.co/api/v2/type";

const getTypes = async () => {
  try {
    const typesFromDb = await Type.findAll({ raw: true });
    console.log("TYPES FROM DB");
    console.log("typesDB", typesFromDb);
    if (typesFromDb.length) {
      return typesFromDb;
    } else {
      console.log("No hay Tipos en la DB", typesFromDb);
      const response = await axios.get(API_TYPE_URL);
      const types = response.data.results;
      await Type.bulkCreate(types);
      return await Type.findAll({ raw: true });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTypes,
};

