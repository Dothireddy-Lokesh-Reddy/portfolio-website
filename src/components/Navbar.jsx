import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { isDarkMode, toggleTheme } = useTheme()

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const navItems = [
		{ name: "Profile", path: "/" },
		{ name: "Interview Problems", path: "/problems" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact", path: "/contact" },
		{ name: "Certificates", path: "/certificates" },
	]
	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<NavLink to="/" className="flex-shrink-0 flex items-center">
							<span className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</span>
						</NavLink>
					</div>

					{/* Desktop menu */}
					<div className="hidden md:flex md:items-center md:space-x-8">
						{navItems.map((item) => (
							<NavLink
								key={item.name}
								to={item.path}
								className={({ isActive }) =>
									`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
										? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-gray-800"
										: "text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
									}`
								}
							>
								{item.name}
							</NavLink>
						))}

						<button
							onClick={toggleTheme}
							className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200"
							aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
						>
							{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
						</button>
						{/* <button
							onClick={toggleTheme}
							className=" rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
							aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
						>
							{isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
						</button> */}
					</div>

					{/* Mobile menu button */}
					<div className="flex md:hidden items-center space-x-2">
						<button
							onClick={toggleTheme}
							className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200"
							aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
						>
							{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
						</button>

						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-200"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
						{navItems.map((item) => (
							<NavLink
								key={item.name}
								to={item.path}
								className={({ isActive }) =>
									`block px-3 py-2 rounded-md text-base font-medium ${isActive
										? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-gray-800"
										: "text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
									}`
								}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</NavLink>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
