"use client";
import BookSchema from "@/backend/lib/db-schema";
import deleteRecord from "@/scripts/delete-record";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

export default function BookCard({
	imageLink,
	title,
	_id,
	author,
	description,
}: BookSchema) {
	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder>
			<Card.Section component="div">
				<Image
					src={imageLink}
					height={160}
					alt=""
				/>
			</Card.Section>

			<Group
				justify="space-between"
				mt="md"
				mb="xs">
				<Text fw={500}>{title}</Text>
				<Badge color="pink">{author}</Badge>
			</Group>

			<Text
				size="sm"
				c="dimmed">
				{description}
			</Text>

			<Button
				color="red"
				fullWidth
				mt="md"
				radius="md"
				size="compact-md"
				onClick={() => {
					deleteRecord(_id ?? "0");
				}}>
				Delete
			</Button>
		</Card>
	);
}
