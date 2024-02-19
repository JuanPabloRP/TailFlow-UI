import React from 'react';

const GradientButtonV1 = () => {
	return (
		<section className="flex flex-wrap gap-2">
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800  text-white hover:bg-gradient-to-tl  focus:ring-4 focus:ring-blue-300 `}
			>
				Default
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  focus:ring-4 bg-gradient-to-tl from-stone-100 via-stone-200 to-stone-400 hover:bg-gradient-to-br   text-stone-800 border border-gray-400  
        dark:text-white focus:ring-stone-500 dark:from-stone-900 dark:via-stone-800 dark:to-stone-600  `}
			>
				Second
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md focus:ring-4    border border-yellow-300 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-tl  focus:ring-yellow-400 dark:from-yellow-300  dark:via-yellow-600 dark:to-yellow-400 dark:text-white dark:border-yellow-500 dark:focus:ring-yellow-600 `}
			>
				Warning
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md    text-white border border-red-700 bg-gradient-to-br from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-tl  focus:ring-4 focus:ring-red-400 dark:text-white dark:focus:ring-red-900 `}
			>
				Danger
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  text-white bg-gradient-to-br   border border-green-400 from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-tl focus:ring-4 focus:ring-green-400 dark:border-green-600 dark:focus:ring-green-900 `}
			>
				Completed
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md text-black   border border-stone-100  bg-gradient-to-br from-stone-50 via-stone-200 to-stone-300 hover:bg-gradient-to-tl  focus:ring-4 focus:ring-stone-300  `}
			>
				Light
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  text-white    border border-neutral-500 bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-800 hover:bg-gradient-to-tl focus:ring-4 focus:ring-neutral-800`}
			>
				Dark
			</button>
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  text-white border border-indigo-500 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 hover:bg-gradient-to-tl  focus:ring-4 focus:ring-indigo-400 `}
			>
				Indigo
			</button>
		</section>
	);
};

export default GradientButtonV1;
