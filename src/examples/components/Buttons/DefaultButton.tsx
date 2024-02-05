const DefaultButton = (): JSX.Element => {
	return (
		<section className="flex flex-wrap gap-2">
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md bg-blue-600  text-white hover:bg-blue-700  focus:ring-4 focus:ring-blue-900 `}
			>
				Default
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  bg-gray-200  text-stone-800 border border-gray-400 hover:bg-stone-300  focus:ring-4 focus:ring-stone-500 dark:bg-stone-800 dark:text-white dark:hover:bg-stone-900 dark:border-stone-600 dark:focus:ring-stone-700 `}
			>
				Second
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  bg-yellow-400 border border-yellow-300 hover:bg-yellow-300  focus:ring-4 focus:ring-yellow-400 dark:bg-yellow-600 dark:text-white dark:hover:bg-yellow-700 dark:border-yellow-600 dark:focus:ring-yellow-700 `}
			>
				Warning
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  bg-red-600  text-white border border-red-700 hover:bg-red-700  focus:ring-4 focus:ring-red-400 dark:bg-red-700 dark:text-white dark:hover:bg-red-800 dark:border-red-600 dark:focus:ring-red-900 `}
			>
				Danger
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  bg-green-600  text-white border border-green-400 hover:bg-green-700  focus:ring-4 focus:ring-green-400 dark:bg-green-700 dark:text-white dark:hover:bg-green-800 dark:border-green-600 dark:focus:ring-green-900 `}
			>
				Completed
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  bg-stone-50  text-black border border-stone-100 hover:bg-stone-200  focus:ring-4 focus:ring-stone-300  `}
			>
				Light
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  bg-neutral-900  text-white border border-neutral-500 hover:bg-neutral-950  focus:ring-4 focus:ring-neutral-700`}
			>
				Dark
			</button>
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  bg-indigo-600  text-white border border-indigo-500 hover:bg-indigo-700  focus:ring-4 focus:ring-indigo-400 bg-`}
			>
				Indigo
			</button>
		</section>
	);
};

export default DefaultButton;
