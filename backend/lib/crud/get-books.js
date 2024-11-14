const initDB = require("../db-driver");

async function getBooks() {
	const client = await initDB();

	const db = client.db("bookstore-db");
	const collection = db.collection("bookstore");
	const docs = await collection.find().toArray(); // Ensure await here

	//close mdb connection
	client.close();

	return docs ?? [];
}

module.exports = getBooks;

/* getBooks().then(console.log); */
