const { User } = require("../models");
let testUser;

beforeEach(() => {
	testUser = new User();
});

describe("Testing User class", () => {
	test("should be a class", () => {
		expect(testUser instanceof User).toBe(true);
	});
});
