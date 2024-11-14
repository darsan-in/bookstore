"use client";

import Link from "next/link";
import Form from "./form";

export default function Header() {
	const Brand = () => (
		<div className="flex items-center justify-between py-5 md:block">
			<Link
				href="/"
				className="font-black tracking-widest text-3xl text-primary">
				BOOK STORE
			</Link>
		</div>
	);

	return (
		<header>
			<nav className={`pb-5 md:text-sm`}>
				<div className="gap-x-14 items-center justify-center max-w-screen-xl mx-auto px-4 flex md:px-8">
					<Brand />
					<div className={`items-center flex`}>
						<div className="items-center justify-end space-y-6 flex">
							<Form />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
