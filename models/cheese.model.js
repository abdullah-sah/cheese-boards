const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Cheese extends Model {}

Cheese.init(
	{
		title: DataTypes.STRING,
		description: DataTypes.STRING,
	},
	{
		sequelize: db,
	}
);

module.exports = Cheese;
