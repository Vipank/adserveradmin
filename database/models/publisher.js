const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../DbConnection");

class Publisher extends Model {}

Publisher.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pancard: {
      type: DataTypes.STRING(15),
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    meta : {
        type: DataTypes.JSON
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Publisher",
    tableName: "publisher",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

module.exports = Publisher;
