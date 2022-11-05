const { Board, Cheese, User } = require("../models");
const db = require("../db/db");
const cheeses = require("../db/cheeses.json");
let boards, users;

beforeEach(async () => {
	await db.sync({ force: true });
	boards = await Board.create({
		type: "Rectangular",
		description: "A regular rectangular cheese board.",
		rating: 5,
	});

	await Cheese.create({ title: "Parmesan", description: cheeses["Parmesan"] });
	await Cheese.create({ title: "Pecorino", description: cheeses["Pecorino"] });

	users = await User.create({
		name: "Bobby",
		email: "bobby.zamora@gmail.com",
	});
});

describe("Testing User class", () => {
	test("should have a name and an email", async () => {
		const userKeys = Object.keys(users.toJSON());
		await expect(userKeys).toContain("name", "email");
	});

	test("should be able to load a user with their boards (eager loading)", async () => {
		const setBoards = await users.setBoards(boards);
		const getBoards = await users.getBoards();
		await expect(getBoards.length).toBe(1);
	});
});
