const { DataTypes } = require("sequelize");
const { Design, Tag } = require('../db');


module.exports = (sequelize) => {
  sequelize.define(
    "designTag",
    {
      designId: {
        type: DataTypes.INTEGER,
        references: {
          model: Design,
          key: "id",
        },
      },
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: Tag, 
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
