const { Board } = require("../models");
let testBoard;

beforeEach(() => {
	testBoard = new Board();
});

describe("testing Board class", () => {
	test("should be a class", () => {
		expect(testBoard instanceof Board).toBe(true);
	});
});
