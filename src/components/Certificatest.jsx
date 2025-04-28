import React from "react";

const certificates = [
	{
		title: "Build Your Own Responsive Website",
		issuer: "CCBP Academy",
		certificateUrl: "https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=BJBKICTKDC",
	},
	{
		title: "Programming Foundations with Python",
		issuer: "CCBP Academy",
		certificateUrl: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=BKFUOBEPIK",
	},
	{
		title: "Introduction to Databases",
		issuer: "CCBP Academy",
		certificateUrl: "https://certificates.ccbp.in/academy/introduction-to-databases?id=ZZIHWTNGGU",
	},
	{
		title: "JavaScript Essentials",
		issuer: "CCBP Academy",
		certificateUrl: "https://certificates.ccbp.in/academy/javascript-essentials?id=OVOIELUKAP",
	},
	{
		title: "Node.js",
		issuer: "CCBP Academy",
		certificateUrl: "https://certificates.ccbp.in/academy/node-js?id=DFHZZSZHFM",
	},
];


const Certificates = () => {
	return (
		<section className="py-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
					Certificates
				</h2>
				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 animate-pulse">
					{certificates.map((certificate, index) => (
						<a
							href={certificate.certificateUrl}
							key={index}
							target="_blank"
							className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-md rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-xl transition-shadow duration-300"
						>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
									{certificate.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-1">
									{certificate.issuer}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certificates;
