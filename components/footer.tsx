export default () => {
	const footerNavs = [
		{
			href: "https://github.com/darsan-in/bookstore?tab=Apache-2.0-1-ov-file#readme",
			name: "License",
		},
		{
			href: "https://darsan.in",
			name: "Made 🚀 by Darsan",
		},
	];

	return (
		<footer className="pt-10">
			<div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
				<div className="mt-10 py-10 border-t items-center justify-between sm:flex">
					<a
						href={footerNavs[0].href}
						target="_blank">
						© 2024 PRIYADARSAN S. Licensed under the Apache License,
						Version 2.0.
					</a>
					<ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
						{footerNavs.map((item, idx) => (
							<li
								className="text-gray-800 hover:text-gray-500 duration-150"
								key={idx}>
								<a
									href={item.href}
									target="_blank">
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};
