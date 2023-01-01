const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../DbConnection");
const Publisher = require("./publisher");

class Website extends Model {
  setPublisherId(id) {
    this.publisherId = id;
  }
}

Website.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey : true
    },
    baseUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      isUrl: true,
    },
    publisherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    meta: {
      type: DataTypes.JSON
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Website",
    tableName: "website",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

Publisher.hasMany(Website,{
  //Foreign key will be defined in Website table
  foreignKey: 'publisherId',
  allowNull: false //Website must have a publisher
})

module.exports = Website;
