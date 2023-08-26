const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("type", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
