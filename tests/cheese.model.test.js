const { Board, Cheese, User } = require("../models");
const db = require("../db/db");
const cheeses = require("../db/cheeses.json");
let boards, users, cheese1, cheese2;

beforeEach(async () => {
	await db.sync({ force: true });
	boards = await Board.create({
		type: "Rectangular",
		description: "A regular rectangular cheese board.",
		rating: 5,
	});

	cheese1 = await Cheese.create({
		title: "Parmesan",
		description: cheeses["Parmesan"],
	});
	cheese2 = await Cheese.create({
		title: "Pecorino",
		description: cheeses["Pecorino"],
	});

	users = await User.create({
		name: "Bobby",
		email: "bobby.zamora@gmail.com",
	});
});

describe("testing Cheese class", () => {
	test("should have an id, a title, and a description", async () => {
		const cheese1 = await Cheese.findByPk(1);
		const cheeseKeys = Object.keys(cheese1.toJSON());
		await expect(cheeseKeys).toContain("id", "title", "description");
	});

	test("should be able to load a cheese with it's board data (eager loading)", async () => {
		const setBoards = await cheese1.setBoards(boards);
		const getBoards = await cheese1.getBoards();
		await expect(getBoards.length).toBe(1);
	});
});
