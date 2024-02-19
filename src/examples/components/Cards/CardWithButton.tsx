const CardWithButton = () => {
	return (
		<article
			className={`max-w-sm border border-neutral-200 
      hover:border-neutral-300 dark:border-neutral-800 rounded-md p-3 dark:bg-neutral-950 
    dark:hover:border-neutral-600 transition-all ease-in-out  dark:text-white  `}
		>
			<h2 className="text-2xl font-bold tracking-tighter mb-2 text-neutral-800 dark:text-neutral-100 text-pretty">
				This is a title example
			</h2>
			<p className="text-neutral-700 dark:text-neutral-400 text-balance">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
				quibusdam ab repellendus amet, quisquam repellat?
			</p>
			<footer className={`my-2`}>
				<button
					className={`outline-none px-4 py-2 transition-all ease-in-out font-medium rounded-lg  bg-inherit text-black border border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300  focus:ring-4 focus:ring-stone-300 dark:text-white dark:border-neutral-700  dark:focus:ring-neutral-700 dark:hover:bg-neutral-800`}
				>
					Card button
				</button>
			</footer>
		</article>
	);
};

export default CardWithButton;
