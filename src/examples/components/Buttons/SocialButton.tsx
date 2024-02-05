import React from 'react';

const SocialButton = () => {
	return (
		<>
			<button
				type="button"
				className="text-white bg-blue-700 hover:bg-blue-700/90 focus:ring-4 focus:outline-none focus:ring-blue-700/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-500/55 me-2 mb-2"
			>
				<svg
					className="w-4 h-4 me-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 8 19"
				>
					<path
						fill-rule="evenodd"
						d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
						clip-rule="evenodd"
					/>
				</svg>
				Sign in with Facebook
			</button>

			<button
				type="button"
				className="text-white bg-neutral-950 hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-neutral-950/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
			>
				<svg
					className="w-4 h-4 me-2"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
					<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
				</svg>
				Sign in with X
			</button>

			<button
				type="button"
				className="text-white bg-gray-800 hover:bg-gray-950/85 focus:ring-4 focus:outline-none focus:ring-gray-500/70 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500  me-2 mb-2"
			>
				<svg
					className="w-4 h-4 me-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
						clip-rule="evenodd"
					/>
				</svg>
				Sign in with Github
			</button>

			<button
				type="button"
				className="text-black bg-white hover:bg-neutral-200 focus:ring-4 focus:outline-none focus:ring-neutral-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-white/30 me-2 mb-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-4 h-4 me-2"
					x="0px"
					y="0px"
					width="100"
					height="100"
					viewBox="0 0 48 48"
				>
					<path
						fill="#FFC107"
						d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
					<path
						fill="#FF3D00"
						d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
					></path>
					<path
						fill="#4CAF50"
						d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
					></path>
					<path
						fill="#1976D2"
						d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
				</svg>
				Sign in with Google
			</button>

			<button
				type="button"
				className="text-white bg-neutral-800 hover:bg-neutral-700 focus:ring-4 focus:outline-none focus:ring-neutral-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-neutral-900  me-2 mb-2"
			>
				<svg
					className="w-5 h-5 me-2 -ms-1"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="apple"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 384 512"
				>
					<path
						fill="currentColor"
						d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
					></path>
				</svg>
				Sign in with Apple
			</button>
		</>
	);
};

export default SocialButton;
