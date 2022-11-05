const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");

Board.belongsToMany(Cheese, { through: "Board_Cheese" });
Cheese.belongsToMany(Board, { through: "Board_Cheese" });

User.hasMany(Board);
Board.belongsTo(User);

module.exports = { Board, Cheese, User };
