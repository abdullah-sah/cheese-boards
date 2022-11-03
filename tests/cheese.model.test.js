const { Cheese } = require("../models");
let testCheese;
beforeEach(() => {
	testCheese = new Cheese();
});

describe("testing Cheese class", () => {
	test("should be a class", () => {
		expect(testCheese instanceof Cheese).toBe(true);
	});
});
