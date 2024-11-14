const express = require("express");
const router = express.Router();

const getBooks = require("../lib/crud/get-books");
const addBook = require("../lib/crud/add-book");
const deleteBook = require("../lib/crud/delete.book");

//GET
router.get("/books", async function (req, res, next) {
	try {
		const booksData = await getBooks();
		res.status(200).json({ records: booksData, success: true });
	} catch (err) {
		res.status(500).json({ success: false, error: err });
	}
});

//POST
router.post("/books", async function (req, res, next) {
	const { title, author, desc, thumbnail } = req.body;

	try {
		const result = await addBook(title, author, desc, thumbnail);

		if (result) {
			res.status(200).json({ success: result });
		} else {
			res.status(500).json({ success: result });
		}
	} catch (err) {
		res.status(500).json({ success: false, error: err });
	}
});

//DELETE
router.delete("/books/:id", async function (req, res, next) {
	const bookId = req.params.id;

	try {
		const deleted = await deleteBook(bookId);

		if (deleted) {
			res.status(200).json({ success: deleted });
		} else {
			res
				.status(500)
				.json({ success: deleted, error: "Failed to delete" });
		}
	} catch (err) {
		res.status(500).json({ success: false, error: err });
	}
});

module.exports = router;
