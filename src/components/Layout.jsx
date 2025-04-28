import { Outlet } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

function Layout() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<Navbar />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
