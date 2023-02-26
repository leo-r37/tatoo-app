const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "design",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          isUrl: true,
        },
      },
      title: {
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
          len: [1, 30],
        },
      },
      description: {
        type: DataTypes.STRING(),
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
};
