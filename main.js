const { Board, Cheese, User } = require("./models");
const seed = require("./db/seed");

const main = async () => {
	await seed();
};

main();
