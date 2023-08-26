const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      imagen: {
        type: DataTypes.STRING,
      },
      vida: {
        type: DataTypes.INTEGER,
      },
      ataque: {
        type: DataTypes.INTEGER,
      },
      defensa: {
        type: DataTypes.INTEGER,
      },
      velocidad: {
        type: DataTypes.INTEGER,
      },
      altura: {
        type: DataTypes.INTEGER,
      },
      peso: {
        type: DataTypes.INTEGER,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
