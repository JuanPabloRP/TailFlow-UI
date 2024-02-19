const OutlineButton = () => {
	return (
		<section className="flex flex-wrap gap-2">
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-blue-600  dark:border-blue-600  text-blue-600 hover:text-white dark:text-blue-500  dark:hover:text-white hover:bg-blue-600 focus:ring-blue-700/50  `}
			>
				Default
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-zinc-500 dark:border-zinc-600  text-zinc-600 hover:text-white dark:text-zinc-500  dark:hover:text-white hover:bg-zinc-600 focus:ring-zinc-700/50 `}
			>
				Second
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-yellow-600  dark:border-yellow-600  text-yellow-600 hover:text-white dark:text-yellow-500  dark:hover:text-white hover:bg-yellow-600 focus:ring-yellow-700/50  `}
			>
				Warning
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-red-600  dark:border-red-600  text-red-500 hover:text-white dark:text-red-500  dark:hover:text-white hover:bg-red-600 focus:ring-red-700/50  `}
			>
				Danger
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-green-600  dark:border-green-600  text-green-600 hover:text-white dark:text-green-500  dark:hover:text-white hover:bg-green-600 focus:ring-green-700/50  `}
			>
				Completed
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-pink-600  dark:border-pink-600  text-pink-600 hover:text-white dark:text-pink-500  dark:hover:text-white hover:bg-pink-600 focus:ring-pink-700/50  `}
			>
				Pink
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-emerald-600  dark:border-emerald-600  text-emerald-500 hover:text-white dark:text-emerald-500  dark:hover:text-white hover:bg-emerald-600 focus:ring-emerald-700/50 `}
			>
				Emerald
			</button>
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md border focus:ring-4  text-center border-indigo-600  dark:border-indigo-600  text-indigo-600 hover:text-white dark:text-indigo-500  dark:hover:text-white hover:bg-indigo-600 focus:ring-indigo-700/50 `}
			>
				Indigo
			</button>
		</section>
	);
};

export default OutlineButton;
