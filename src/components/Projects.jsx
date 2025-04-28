import { useState } from "react"
import { Github, ExternalLink, X } from "lucide-react"

function Projects() {
	const [selectedProject, setSelectedProject] = useState(null)

	const projects = [
		{
			id: 1,
			title: "Calculator App",
			description:
				"A sleek and functional calculator app built with React, featuring basic arithmetic operations, clear and backspace functionality, and responsive design.",
			image: "/calc.png?height=400&width=600", // <-- Replace after uploading screenshot
			technologies: ["React", "TailwindCSS"],
			github: "https://github.com/Dothireddy-Lokesh-Reddy/CalculatorApp",
			demo: "https://calculator-app-sepia-one.vercel.app/",
			details:
				"This project is a modern calculator application that supports addition, subtraction, multiplication, division, and decimal operations. It features a clean, responsive UI with TailwindCSS and React state management. Users can easily clear inputs, delete the last entry, and perform calculations with a simple and interactive layout."
		}
		,
		{
			id: 2,
			title: "Todo App",
			description:
				"A modern and responsive Todo application built with React, featuring local storage persistence, task management, dark/light theme support, and animated UI elements.",
			image: "/todoapp.png?height=400&width=600",
			technologies: ["React", "TailwindCSS", "Lucide-React", "LocalStorage"],
			github: "https://github.com/Dothireddy-Lokesh-Reddy/todoapplication",
			demo: "https://todoapplication-seven.vercel.app/",
			details:
				"This project allows users to manage daily tasks with an intuitive and clean UI. Features include adding, completing, and deleting tasks, as well as automatic saving via LocalStorage. Built with React functional components, hooks like useState and useEffect, and TailwindCSS for styling."
		},
		{
			id: 3,
			title: "Weather Application",
			description:
				"A simple and responsive weather app built with React that allows users to search for any city and view real-time weather information using the OpenWeather API.",
			image: "weatherapp.png?height=400&width=600", // <- Upload your app screenshot and replace this path
			technologies: ["React", "TailwindCSS", "OpenWeather API"],
			github: "https://github.com/Dothireddy-Lokesh-Reddy/weather-app",
			demo: "https://weather-app-gray-rho-31.vercel.app/",
			details:
				"This application enables users to search for any city worldwide and displays live weather information including temperature, humidity, wind speed, and condition icons. It utilizes the OpenWeatherMap API for fetching weather data. The app features a stylish UI with a gradient background, loading and error handling states, and responsive design optimized for mobile and desktop."
		}
		,
		{
			id: 4,
			title: "Recipe Finder",
			description:
				"A recipe search application that allows users to find recipes based on ingredients, dietary restrictions, and meal types.",
			image: "/placeholder.svg?height=400&width=600",
			technologies: ["React", "Context API", "Spoonacular API", "CSS Modules"],
			github: "https://github.com/yourusername/recipe-finder",
			demo: "https://recipes.yourdomain.com",
			details:
				"This recipe finder helps users discover new meals based on what they have in their kitchen. Users can search by ingredients, filter by dietary needs (vegetarian, gluten-free, etc.), and save favorite recipes. The app uses the Spoonacular API for recipe data and features detailed nutritional information, step-by-step instructions, and cooking times. The UI is built with CSS Modules for component-scoped styling.",
		},
	]

	const openModal = (project) => {
		setSelectedProject(project)
		document.body.style.overflow = "hidden"
	}

	const closeModal = () => {
		setSelectedProject(null)
		document.body.style.overflow = "auto"
	}

	return (
		<section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300 min-h-screen">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
				<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					A showcase of my recent work, including web applications and development projects.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-white dark:bg-gray-800 rounded-xl shadow-[1px_1px_5px_rgba(0,0,0,0.3)] overflow-hidden hover:shadow-lg transition-shadow duration-300"
					>
						<div className="h-48 overflow-hidden">
							<img
								src={project.image || "/placeholder.svg"}
								alt={project.title}
								className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex justify-between items-center">
								<div className="flex space-x-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
										aria-label={`GitHub repository for ${project.title}`}
									>
										<Github size={20} />
									</a>
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
										aria-label={`Live demo for ${project.title}`}
									>
										<ExternalLink size={20} />
									</a>
								</div>
								<button
									onClick={() => openModal(project)}
									className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
								>
									View Details
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Project Details Modal */}
			{selectedProject && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6">
							<div className="flex justify-between items-center mb-4">
								<h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedProject.title}</h3>
								<button
									onClick={closeModal}
									className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
									aria-label="Close modal"
								>
									<X size={24} />
								</button>
							</div>

							<div className="mb-6">
								<img
									src={selectedProject.image || "/placeholder.svg"}
									alt={selectedProject.title}
									className="w-full h-auto rounded-lg"
								/>
							</div>

							<div className="mb-4">
								<h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">About the Project</h4>
								<p className="text-gray-600 dark:text-gray-400">{selectedProject.details}</p>
							</div>

							<div className="mb-6">
								<h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Technologies Used</h4>
								<div className="flex flex-wrap gap-2">
									{selectedProject.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="flex space-x-4">
								<a
									href={selectedProject.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
								>
									<Github size={18} className="mr-2" />
									View Code
								</a>
								<a
									href={selectedProject.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
								>
									<ExternalLink size={18} className="mr-2" />
									Live Demo
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}

export default Projects
