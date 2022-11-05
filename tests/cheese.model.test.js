const { Board, Cheese } = require("../models");
const seed = require("../db/seed");
let cheese1;
let board1, board2, board3;
beforeEach(async () => {
	await seed();
	cheese1 = await Cheese.findByPk(1);
	board1 = await Board.findByPk(1);
});

describe("testing Cheese class", () => {
	test("should have an id, a title & a description", async () => {
		cheeseKeys1 = Object.keys(cheese1.toJSON());
		await expect(cheeseKeys1).toContain("id", "title", "description");
	});

	test("should be able to load a cheese with it's board data (eager loading)", async () => {
		await cheese1.setBoards(board1);
		const check = await cheese1.getBoards();
		await expect(check.length).toBe(1);
	});
});
