const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
	"mongodb://localhost:27017/" ||
	`mongodb+srv://darsan:${"0yrVtQfOiHVK16D9"}@cresteem.hikzg.mongodb.net/?retryWrites=true&w=majority&appName=cresteem`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function InitDB() {
	try {
		await client.connect();
		return client;
	} catch (err) {
		console.error(err);
	}
}

module.exports = InitDB;
