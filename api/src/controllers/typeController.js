const axios = require("axios");
const { Type } = require("../db");
const API_TYPE_URL = "https://pokeapi.co/api/v2/type";

const getTypes = async () => {
  const typesFromDb = await Type.findAll();

  if (typesFromDb.length) {
    return typesFromDb;
  } else {
    const response = await axios.get(API_TYPE_URL);
    const types = response.data.results;

    await Type.bulkCreate(types);
    return await Type.findAll();
  }
};

module.exports = getTypes;
