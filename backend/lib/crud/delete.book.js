const { ObjectId } = require("mongodb");
const initDB = require("../db-driver");

async function deleteBook(id) {
	const client = await initDB();

	const db = client.db("bookstore-db");
	const collection = db.collection("bookstore");
	const { deletedCount } = await collection.deleteOne({
		_id: { $eq: new ObjectId(id) },
	});

	//close mdb connection
	client.close();

	return Boolean(deletedCount);
}

module.exports = deleteBook;
/* deleteBook("67350dc43e42014f0d759dc8").then(console.log); */
