const CardWithFormInputs = () => {
	return (
		<article
			className={`w-sm   border border-neutral-200 
      hover:border-neutral-300 dark:border-neutral-800 rounded-lg  dark:bg-neutral-950 dark:hover:border-neutral-700 transition-all ease-in-out  dark:text-white  `}
		>
			<main className="text-neutral-800 dark:text-neutral-100 font-medium">
				<form className="p-3">
					<h4 className="text-2xl font-bold tracking-tighter mb-7 text-neutral-800 dark:text-neutral-100 text-pretty">
						Sign in to your account 🚀
					</h4>
					<ul className="flex flex-col gap-2 ">
						<li>
							<label
								htmlFor="email"
								className="block text-neutral-700 dark:text-neutral-400 text-balance text-sm font-medium pt-0.5"
							>
								Email address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="outline-none transition-all ease-in-out w-full border-b  p-1  
                bg-transparent
                border-neutral-300 
                hover:border-b-neutral-400
                focus:border-neutral-500 
                dark:bg-neutral-950 
                dark:border-neutral-700 
                dark:hover:border-b-neutral-600 dark:focus:border-neutral-500
                dark:text-neutral-100"
								placeholder="name@email.com"
								required
							/>
						</li>
						<li>
							<label
								htmlFor="password"
								className="block text-neutral-700 dark:text-neutral-400 text-balance text-sm font-medium pt-0.5"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="outline-none transition-all ease-in-out w-full border-b  p-1  
                bg-transparent
                border-neutral-300 
                hover:border-b-neutral-400
                focus:border-neutral-500 
                dark:bg-neutral-950 
                dark:border-neutral-700 
                dark:hover:border-b-neutral-600 dark:focus:border-neutral-500
                dark:text-neutral-100"
								placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
								required
							/>
						</li>
						<li className="flex justify-between text-sm mt-2">
							<section className="flex justify-center items-center gap-1">
								<input
									id="rememberMe"
									name="rememberMe"
									type="checkbox"
									value=""
									className="outline-none transition-all ease-in-out w-4 h-4 border border-neutral-300 hover:border-neutral-400/50 focus:ring-4 focus:ring-neutral-300
                  dark:bg-neutral-700 dark:border-neutral-700 dark:focus:ring-neutral-800/80 dark:hover:bg-neutral-800"
								/>
								<label htmlFor="rememberMe">Remember me</label>
							</section>
							<section>
								<a
									href="#"
									className=" text-blue-600 hover:underline  dark:text-blue-500  "
								>
									Forgot Password?
								</a>
							</section>
						</li>
						<li>
							<button
								className={`outline-none px-4 py-2 transition-all ease-in-out font-medium rounded-lg  bg-inherit text-black border border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400/50  focus:ring-4 focus:ring-stone-300 dark:text-white dark:border-neutral-700  dark:focus:ring-neutral-800/80 dark:hover:bg-neutral-800
                mt-4 w-full
                `}
							>
								Login to your account
							</button>
						</li>
					</ul>
				</form>
				<footer className={`my-2`}>
					<p className="text-center text-neutral-700 dark:text-neutral-300 text-sm">
						Don't have an account?{' '}
						<a
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-500"
						>
							Sign up
						</a>
					</p>
				</footer>
			</main>
		</article>
	);
};

export default CardWithFormInputs;
