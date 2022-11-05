const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Board extends Model {}

Board.init(
	{
		type: DataTypes.STRING,
		description: DataTypes.STRING,
		rating: DataTypes.NUMBER,
	},
	{
		sequelize: db,
	}
);

module.exports = Board;
