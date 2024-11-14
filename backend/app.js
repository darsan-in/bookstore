const createError = require("http-errors");
const express = require("express");
const cors = require("cors");

const bookRouter = require("./routes/books");

const app = express();

// Enable CORS for all routes
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: ["GET", "POST", "DELETE"],
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", bookRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({ error: err });
});

module.exports = app;
