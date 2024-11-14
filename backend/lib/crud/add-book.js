const initDB = require("../db-driver");

async function addBook(title, author, description, imageLink) {
	const client = await initDB();

	const db = client.db("bookstore-db");
	const collection = db.collection("bookstore");
	const { insertedId } = await collection.insertOne({
		title: title,
		author: author,
		description: description,
		imageLink: imageLink,
	});

	//close mdb connection
	client.close();

	return Boolean(insertedId);
}

module.exports = addBook;

/* addBook(
	"12 Rules for Life",
	"Jordan B. Peterson",
	"A self-help book on finding meaning and purpose in life.",
	"https://example.com/jordan-peterson.jpg",
).then(console.log); */
