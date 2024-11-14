"use client";

import Form from "./form";

export default () => {
	const Brand = () => (
		<div className="flex items-center justify-between py-5 md:block">
			<a
				href="/"
				className="font-black tracking-widest text-3xl text-primary">
				BOOK STORE
			</a>
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
};
