const { Board, Cheese } = require("../models");
const seed = require("../db/seed");

beforeEach(async () => {
	await seed();
});

describe("testing Board class", () => {
	test("should have an id, a type, a description and a rating", async () => {
		let board1 = await Board.findByPk(1);
		board1 = await board1.toJSON();
		const boardKeys = Object.keys(board1);
		await expect(boardKeys).toContain("id", "type", "description");
		await expect(typeof board1["type"]).toBe("string");
	});

	test("should be able to load a board with it's cheeses (eager loading)", async () => {
		let board1 = await Board.findByPk(1);
		let cheese1 = await Cheese.findByPk(1);
		let cheese2 = await Cheese.findByPk(2);
		let cheese3 = await Cheese.findByPk(3);
		await board1.setCheeses([cheese1, cheese2, cheese3]);
		const check = await board1.getCheeses();
		await expect(check.length).toBe(3);
	});
});
