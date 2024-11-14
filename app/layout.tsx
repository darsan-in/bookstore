import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.scss";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<MantineProvider>
					<Header />
					{children}
					<Footer />
				</MantineProvider>
			</body>
		</html>
	);
}
