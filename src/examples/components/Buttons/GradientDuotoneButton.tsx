import React from 'react';

const GradientDuotoneButton = () => {
	return (
		<section className="flex flex-wrap gap-2">
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md bg-gradient-to-br from-blue-400 via-indigo-500 to-indigo-800  text-white hover:bg-gradient-to-tl  focus:ring-4 focus:ring-blue-300 `}
			>
				Default
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  focus:ring-4 bg-gradient-to-br from-slate-300 via-slate-600 to-slate-900 hover:bg-gradient-to-tl  border border-slate-400 text-white 
         `}
			>
				Slate
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md focus:ring-4    border border-yellow-300 bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-500 hover:bg-gradient-to-tl  focus:ring-yellow-400 text-white dark:border-yellow-500 `}
			>
				Sunrise
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md    text-white border border-red-700 bg-gradient-to-br from-red-500 via-yellow-700 to-orange-900 hover:bg-gradient-to-tl  focus:ring-4 focus:ring-red-400 dark:text-white dark:focus:ring-red-900 `}
			>
				Sunset
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  text-white bg-gradient-to-br   border border-green-400 from-lime-300 via-lime-600 to-green-900 hover:bg-gradient-to-tl focus:ring-4 focus:ring-green-400 dark:border-green-600 dark:focus:ring-green-900 `}
			>
				Jungle
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md text-black   border border-emerald-600  bg-gradient-to-br from-emerald-200 via-green-400 to-teal-900 hover:bg-gradient-to-tl  focus:ring-4 focus:ring-emerald-400  `}
			>
				Emerald
			</button>

			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  text-white   border border-neutral-500 bg-gradient-to-br from-neutral-800 via-pink-700 to-sky-700 hover:bg-gradient-to-tl focus:ring-4 focus:ring-neutral-800`}
			>
				Red moon
			</button>
			<button
				className={`outline-none px-4 py-2 font-medium rounded-md  text-white border border-indigo-500 bg-gradient-to-br from-fuchsia-700 via-rose-400 to-indigo-700 hover:bg-gradient-to-tl  focus:ring-4 focus:ring-indigo-400 `}
			>
				Indigo
			</button>
		</section>
	);
};

export default GradientDuotoneButton;
