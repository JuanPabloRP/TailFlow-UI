import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const isDarkMode = localStorage.getItem('darkMode') === 'true';
		setDarkMode(isDarkMode);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
		localStorage.setItem('darkMode', darkMode.toString());

		if(darkMode) {
			document.documentElement.classList.add('dark');
		}else{
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};
	return (
		<button
			className="bg-blue-500 p-1 m-2 rounded-sm outline-none  fixed top-0 right-0"
			onClick={toggleDarkMode}
		>
			{darkMode ? '🌙' : '☀'}
		</button>
	);
};

export default DarkModeToggle;
