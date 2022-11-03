const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class User extends Model {}

User.init(
	{
		name: DataTypes.STRING,
		email: DataTypes.STRING,
	},
	{
		sequelize: db,
	}
);

module.exports = User;
