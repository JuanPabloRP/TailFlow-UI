import React from 'react';

const SkeletonWithImage = () => {
	return (
		<article className="max-w-sm animate animate-pulse">
			<div className="h-48 bg-neutral-400 dark:bg-neutral-700 w-full mb-4 rounded-md"></div>
			<div className="h-3 bg-neutral-400 dark:bg-neutral-700 w-32 mb-4 rounded-md mx-auto"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-48 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-36 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-48 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-56 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-40 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-12 mb-4 rounded-md"></div>

			<div className="h-8 bg-neutral-400 dark:bg-neutral-700 w-32 mb-4 rounded-md grid place-items-center text-neutral-500 mx-auto cursor-pointer">
				Button
			</div>
		</article>
	);
};

export default SkeletonWithImage;
