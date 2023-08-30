const { getTypes } = require("../controllers/typeController");

const getTypesHandler = async () => {
  try {
    const types = await getTypes();
    console.log("types en handler", types);
    return types;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getTypesHandler,
};
