import { Code, Briefcase, Heart, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

function Profile() {
	const skills = ["JavaScript", "React.js", "Node.js", "HTML/CSS", "Tailwind CSS", "Git", "RESTful APIs", "MongoDB"];



	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300 min-h-screen">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="order-2 lg:order-1">
					<h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
						Hi, I'm <span className="text-blue-600 dark:text-blue-400">Donthireddy Lokesh Reddy</span>
					</h1>
					<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Full Stack Developer</h2>
					<p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
						I'm passionate about creating elegant, efficient, and user-friendly web applications. With a strong
						foundation in both front-end and back-end technologies, I enjoy tackling complex problems and turning ideas
						into reality.
					</p>

					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
							<Code className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
							Technical Skills
						</h3>
						<div className="flex flex-wrap gap-2">
							{skills.map((skill) => (
								<span
									key={skill}
									className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
							<Briefcase className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
							Experience
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							5+ years of experience in web development, working with startups and established companies to deliver
							high-quality software solutions.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
							<Heart className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
							Passions
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							I'm passionate about open source, teaching coding to beginners, and building tools that make developers'
							lives easier. When I'm not coding, you can find me hiking or reading science fiction.
						</p>
					</div>
				</div>

				<div className="order-1 lg:order-2 flex justify-center">
					<div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
						<img
							src="/placeholder.svg?height=320&width=320"
							alt="Profile"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Profile;