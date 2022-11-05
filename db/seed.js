const { Board, Cheese, User } = require("../models");
const cheeses = require("./cheeses.json");
const db = require("./db");

const seed = async () => {
	await db.sync({ force: true });

	// populating Cheeses table with cheeses from cheeses.json (that's a lot of cheeses)
	const cheeseKeys = Object.keys(cheeses);

	for (let i = 0; i < cheeseKeys.length; i++) {
		const title = cheeseKeys[i];
		const description = cheeses[cheeseKeys[i]];
		await Cheese.create({ title, description });
	}

	await Board.bulkCreate([
		{
			type: "Rectangular",
			description: "A regular rectangular cheese board.",
			rating: 5,
		},
		{
			type: "Round",
			description:
				"A round cheese board. Like a rectangular cheese board. Just round.",
			rating: 2,
		},
		{
			type: "Square",
			description:
				"A square cheese board. I guess it's probably more like a square prism cos it's 3D (we hope).",
			rating: 4,
		},
		{
			type: "Oval",
			description:
				"An oval cheese board. Bears a striking resemblance to the round cheese board.",
			rating: 3,
		},
		{
			type: "Random",
			description:
				"A random cheese board. For those daredevils who like to live life on the edge.",
			rating: 99,
		},
	]);

	await User.bulkCreate([
		{
			name: "Bobby",
			email: "bobby.zamora@gmail.com",
		},
		{
			name: "Barry",
			email: "barry.allen@gmail.com",
		},
		{
			name: "Steve",
			email: "steve.jobs@gmail.com",
		},
		{
			name: "Barry",
			email: "barry.snotter@gmail.com",
		},
		{
			name: "Tom",
			email: "tom.sneazely@gmail.com",
		},
	]);
};

seed();

module.exports = seed;
