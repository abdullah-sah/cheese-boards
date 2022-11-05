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

describe("testing Board class", () => {
	test("should have an id, a type, a description and a rating", async () => {
		let board1 = boards.toJSON();

		let board1Keys = Object.keys(board1);
		await expect(board1Keys).toContain("id", "type", "description");
		await expect(typeof board1["type"]).toBe("string");
	});

	test("should be able to load a board with it's cheeses (eager loading)", async () => {
		let board1 = boards;
		let cheese1 = await Cheese.findByPk(1);
		let cheese2 = await Cheese.findByPk(2);
		await board1.setCheeses([cheese1, cheese2]);
		const check = await board1.getCheeses();
		await expect(check.length).toBe(2);
		await expect(typeof check[0]).toBe("object");
	});
});
