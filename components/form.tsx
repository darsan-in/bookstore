import { Button, Fieldset, Group, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LuPlus } from "react-icons/lu";

import postman from "@/scripts/postman";
import { Modal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Form() {
	const [opened, { open, close }] = useDisclosure(false);
	const isMobile = useMediaQuery("(max-width: 50em)");

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				fullScreen={isMobile}
				transitionProps={{ transition: "fade", duration: 200 }}
				radius={"xl"}>
				<form
					method="post"
					onSubmit={(event) => {
						postman(event, close);
					}}>
					<Fieldset legend="Enter book details here">
						<TextInput
							required
							placeholder="Book title"
							label="Title"
							style={{ flex: 1 }}
							type="text"
							name="title"
						/>
						<TextInput
							mt={"sm"}
							required
							label="Author"
							placeholder="Author name"
							style={{ flex: 1 }}
							type="text"
							name="author"
						/>
						<TextInput
							required
							mt={"sm"}
							label="Description"
							placeholder="Brief description"
							name="desc"
							type="text"
							style={{ flex: 1 }}
						/>
						<TextInput
							mt={"sm"}
							required
							label="Thumbnail link"
							placeholder="Cover image link"
							name="thumbnail"
							type="url"
							style={{ flex: 1 }}
						/>
					</Fieldset>
					<Group
						justify="flex-end"
						mt="md">
						<Button
							color="#f00"
							type="submit">
							Submit
						</Button>
					</Group>
				</form>
			</Modal>

			<Button
				color="#f00"
				onClick={open}
				radius={"xl"}>
				<span className="hidden sm:inline">Add Book</span>{" "}
				<LuPlus className="w-7 h-7 sm:w-5 sm:h-5" />
			</Button>
		</>
	);
}
