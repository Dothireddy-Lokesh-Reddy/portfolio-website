import { Code, Briefcase, Heart } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
function Profile() {
	const skills = ["JavaScript", "React.js", "Node.js", "HTML/CSS", "Tailwind CSS", "Git", "RESTful APIs", "MongoDB", "Python"];

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300 min-h-screen">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="order-2 lg:order-1">
					<h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
						Hi, I'm <span className="text-blue-600 dark:text-blue-400">Donthireddy Lokesh Reddy</span>
					</h1>
					<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
						<Typewriter
							words={["Frontend Developer", "React Enthusiast", "Backend Explorer"]}
							loop={true}
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={2000}
						/>
					</h2>
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
					<div className="relative w-80 h-full sm:w-96 sm:h-full rounded-full overflow-hidden  dark:border-gray-800 shadow-[1px_1px_5px_rgba(0,0,0,0.3)]  border-[10px] border-gray-300 ">
						<img
							src="lokesh-image-edited.jpg?height=320&width=320"
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