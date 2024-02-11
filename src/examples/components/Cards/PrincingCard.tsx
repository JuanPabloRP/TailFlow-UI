const PrincingCard = () => {
	return (
		<article
			className={`min-w-sm   border border-neutral-200 
      hover:border-neutral-300 dark:border-neutral-800 rounded-lg  dark:bg-neutral-950 dark:hover:border-neutral-700 transition-all ease-in-out  dark:text-white  `}
		>
			<main className="text-neutral-800 dark:text-neutral-100 font-medium max-w-sm py-2 px-4">
				<h3 className="text-3xl font-bold  ">Standar Plan</h3>
				<p className="text-xl font-bold text-neutral-400">$7.99/month</p>

				<ul className="flex flex-col gap-2 items-start  py-2">
					<li className="text-pretty gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline text-blue-500 w-5 h-5 mr-1"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
								stroke-width="0"
								fill="currentColor"
							/>
						</svg>
						<span className="">
							Listening your favorite music without ads and unlimited skips
						</span>
					</li>
					<li className="text-pretty gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline text-blue-500 w-5 h-5 mr-1"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
								stroke-width="0"
								fill="currentColor"
							/>
						</svg>
						<span className="">
							Download your favorite music and listen to it offline
						</span>
					</li>
					<li className="text-pretty gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inline text-neutral-500 w-5 h-5 mr-1"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
								stroke-width="0"
								fill="currentColor"
							/>
						</svg>
						<span className="line-through">
							High quality audio streaming (320kbps)
						</span>
					</li>
				</ul>

				<footer className="flex items-center justify-center">
					<button
						className={`outline-none px-4 py-2 font-medium rounded-md bg-blue-600  text-white hover:bg-blue-700  focus:ring-4 focus:ring-blue-900 w-full `}
					>
						Buy Now
					</button>
				</footer>
			</main>
		</article>
	);
};

export default PrincingCard;
