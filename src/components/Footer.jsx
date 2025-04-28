import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-8 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
							Portfolio
						</Link>
						<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
							&copy; {currentYear} lokesh reddy. All rights reserved.
						</p>
					</div>

					<div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
						<nav className="flex space-x-6">
							<Link
								to="/"
								className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
							>
								Profile
							</Link>
							<Link
								to="/problems"
								className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
							>
								Interview Problems
							</Link>
							<Link
								to="/projects"
								className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
							>
								Projects
							</Link>
							<Link
								to="/contact"
								className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
							>
								Contact
							</Link>
						</nav>

						<div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
							<span>Made with</span>
							<Heart className="h-4 w-4 mx-1 text-red-500" />
							<span>using React & Tailwind</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
