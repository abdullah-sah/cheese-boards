const db = require("../db/db");
const { Sequelize } = require("sequelize");

describe("Tests for db.js file", () => {
	test("should create a class that extends Sequelize", () => {
		expect(db instanceof Sequelize).toBe(true);
	});
});
