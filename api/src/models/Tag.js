const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "tag",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 15],
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
