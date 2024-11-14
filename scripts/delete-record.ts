export default function deleteRecord(bookId: string | number) {
	/* const endpoint = `http://localhost:9080/books/${bookId}`; */
	const endpoint = `https://bookstore-indol-ten.vercel.app/books/${bookId}`;

	fetch(endpoint, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then(({ success, error }) => {
			if (success) {
				/*  */
			} else {
				alert("Failed to delete, Try again!");
			}
		})
		.catch((error) => {
			alert("Failed to delete, Try again!");
			console.error("Error:", error);
		});
}
