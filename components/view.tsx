"use client";
import BookSchema from "@/backend/lib/db-schema";
import getRecords from "@/scripts/get-records";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import BookCard from "./book-card";

export default () => {
	const [bookRecords, setBookRecords] = useState<BookSchema[]>(
		[] as BookSchema[],
	);

	useEffect(() => {
		getRecords(setBookRecords);
	});

	return (
		<div className="relative">
			<div
				className="absolute inset-0 blur-xl h-[580px]"
				style={{
					background:
						"linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
				}}></div>
			<div className="relative">
				<section className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 px-8 flex">
					<Grid>
						{bookRecords.length > 0
							? bookRecords.map((record, idx) => (
									<Grid.Col
										span={{ base: 12, xs: 4, xl: 2 }}
										key={idx}>
										<BookCard
											imageLink={record.imageLink}
											title={record.title}
											author={record.author}
											description={record.description}
											_id={record._id}
										/>
									</Grid.Col>
							  ))
							: null}
					</Grid>
				</section>
			</div>
		</div>
	);
};
