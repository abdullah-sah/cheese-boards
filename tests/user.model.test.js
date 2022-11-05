const { Board, User } = require("../models");
const seed = require("../db/seed");
let testUser;

beforeEach(async () => {
	await seed();
	testUser = await User.findByPk(1);
});

describe("Testing User class", () => {
	test("should have a name and an email", async () => {
		const userKeys = Object.keys(testUser.toJSON());
		await expect(userKeys).toContain("name", "email");
	});

	test("should be able to load a user with their boards (eager loading)", async () => {
		const board1 = await Board.findByPk(1);
		const board2 = await Board.findByPk(2);
		await testUser.setBoards([board1, board2]);
		const check = await testUser.getBoards();
		await expect(check.length).toBe(2);
	});
});
