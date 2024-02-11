import React from 'react';

const DefaultSkeleton = () => {
	return (
		<article className="max-w-sm animate animate-pulse">
			<div className="h-3 bg-neutral-400 dark:bg-neutral-700 w-32 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-48 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-36 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-48 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-56 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-40 mb-4 rounded-md"></div>
			<div className="h-2 bg-neutral-400 dark:bg-neutral-700 w-12 mb-4 rounded-md"></div>
		</article>
	);
};

export default DefaultSkeleton;
