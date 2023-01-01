const { Sequelize, DataTypes, Model } = require("sequelize");
const { status } = require("../../utils/constants");
const sequelize = require("../DbConnection");

class Adunit extends Model {
	setPublisherId(id) {
		this.publisherId = id;
	}
	setPlatfrom (platform) {
		this.platform = platform;
	}
	setPlatfomId(id) {
		this.platformId = id;
	}
}

Adunit.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
        name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
        publisherId : {
            type: DataTypes.INTEGER,
			allowNull: false
        },
        platform: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
        platformId : {
            type: DataTypes.INTEGER,
			allowNull: false
        },
		width: {
			type: DataTypes.INTEGER,
            allowNull: false,
		},
		height: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			defaultValue : status.ACTIVE
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		modelName: "Adunit",
		tableName: "adunit",
		timestamps: true,
		updatedAt: "updated_at",
		createdAt: "created_at",
	}
);



module.exports = Adunit;
