import BookSchema from "@/backend/lib/db-schema";

export default function getRecords(
	callback: (bookRecords: BookSchema[]) => void,
) {
	const endpoint = "http://localhost:9080/books";

	fetch(endpoint, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then(({ success, error, records }) => {
			if (success) {
				callback(records);
			} else {
				alert("Failed to fetch book records");
			}
		})
		.catch((error) => {
			alert("Failed to fetch book records");
			console.error("Error:", error);
		});
}
