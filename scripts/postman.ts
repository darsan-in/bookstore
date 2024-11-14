import { FormEvent } from "react";

export default function postman(
	event: FormEvent<HTMLFormElement>,
	callback: () => void = () => {},
) {
	event.preventDefault();

	const formData = new FormData(event.currentTarget);

	const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

	/* const endpoint = "http://localhost:9080/books"; */
	const endpoint = `https://bookstore-indol-ten.vercel.app/books`;

	fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then(({ success }) => {
			if (success) {
				callback();
			} else {
				alert("Try again!");
			}
		})
		.catch((error) => {
			alert("Try again!");
			console.error("Error:", error);
		});
}
