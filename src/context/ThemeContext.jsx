import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false)

	// Initialize theme from localStorage or system preference 
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			setIsDarkMode(true)
			document.documentElement.classList.add("dark")
		} else {
			setIsDarkMode(false)
			document.documentElement.classList.remove("dark")
		}
	}, [])

	// Update localStorage and document class when theme changes
	const toggleTheme = () => {
		setIsDarkMode((prev) => {
			const newTheme = !prev
			localStorage.setItem("theme", newTheme ? "dark" : "light")

			if (newTheme) {
				document.documentElement.classList.add("dark")
			} else {
				document.documentElement.classList.remove("dark")
			}

			return newTheme
		})
	}

	return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider")
	}
	return context
}
