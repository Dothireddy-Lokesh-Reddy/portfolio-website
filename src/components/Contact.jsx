import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitSuccess, setSubmitSuccess] = useState(false)

	const validateForm = () => {
		const newErrors = {}

		if (!formData.name.trim()) {
			newErrors.name = "Name is required"
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required"
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Email is invalid"
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required"
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters"
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: "",
			})
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (validateForm()) {
			setIsSubmitting(true)

			setTimeout(() => {
				setIsSubmitting(false)
				setSubmitSuccess(true)
				setFormData({ name: "", email: "", message: "" })

				setTimeout(() => {
					setSubmitSuccess(false)
				}, 5000)
			}, 1500)
		}
	}

	return (
		<section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300 min-h-screen">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h2>
				<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Have a question or want to work together? Feel free to reach out!
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div>
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[1px_1px_5px_rgba(0,0,0,0.3)] p-6 mb-8 ">
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Get In Touch</h3>

						<div className="space-y-4">
							<div className="flex items-start">
								<Mail className="text-blue-600 dark:text-blue-400 mt-1 mr-4" size={20} />
								<div>
									<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</h4>
									<a
										href="mailto:lokeshreddydonthireddy28@gmail.com"
										className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
									>
										lokeshreddydonthireddy28@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start">
								<Phone className="text-blue-600 dark:text-blue-400 mt-1 mr-4" size={20} />
								<div>
									<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone</h4>
									<a
										href="tel:+91 8522970076"
										className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
									>
										+91 8522970076
									</a>
								</div>
							</div>

							<div className="flex items-start">
								<MapPin className="text-blue-600 dark:text-blue-400 mt-1 mr-4" size={20} />
								<div>
									<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Location</h4>
									<p className="text-gray-600 dark:text-gray-400">Hyderabad,Telangana,India</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[1px_1px_5px_rgba(0,0,0,0.3)] p-6">
						<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Connect With Me</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/Dothireddy-Lokesh-Reddy"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
								aria-label="GitHub"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/lokesh-reddy-donthireddy/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
								aria-label="LinkedIn"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[1px_1px_5px_rgba(0,0,0,0.3)] p-6">
					<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>

					{submitSuccess ? (
						<div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 p-4 rounded-md mb-6">
							Thank you for your message! I'll get back to you as soon as possible.
						</div>
					) : (
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
										}`}
								/>
								{errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
							</div>

							<div className="mb-4">
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
										}`}
								/>
								{errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
							</div>

							<div className="mb-6">
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="5"
									value={formData.message}
									onChange={handleChange}
									className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
										}`}
								></textarea>
								{errors.message && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-blue-600 text-white py-2 px-4  hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 rounded-xl"
							>
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	)
}

export default Contact
