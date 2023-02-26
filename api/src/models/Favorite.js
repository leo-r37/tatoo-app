const { DataTypes } = require("sequelize");
const { Design, User } = require('../db');


module.exports = (sequelize) => {
  sequelize.define(
    "favorite",
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      designId: {
        type: DataTypes.INTEGER,
        references: {
          model: Design, 
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
