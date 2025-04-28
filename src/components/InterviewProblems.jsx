"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

function InterviewProblems() {
	const [expandedId, setExpandedId] = useState(null)

	const toggleExpand = (id) => {
		setExpandedId(expandedId === id ? null : id)
	}

	const problems = [
		{
			id: 1,
			title: "Two Sum",
			difficulty: "Easy",
			category: "Arrays & Hashing",
			description:
				"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
			approach:
				"Used a hash map to store previously seen values and their indices. For each number, check if target - current number exists in the hash map.",
			link: "https://github.com/yourusername/coding-problems/two-sum",
		},
		{
			id: 2,
			title: "Valid Parentheses",
			difficulty: "Easy",
			category: "Stack",
			description:
				"Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
			approach: "Used a stack to keep track of opening brackets and ensure they are closed in the correct order.",
			link: "https://github.com/yourusername/coding-problems/valid-parentheses",
		},
		{
			id: 3,
			title: "Merge Intervals",
			difficulty: "Medium",
			category: "Arrays",
			description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
			approach: "Sort intervals by start time, then iterate through and merge overlapping intervals.",
			link: "https://github.com/yourusername/coding-problems/merge-intervals",
		},
		{
			id: 4,
			title: "LRU Cache",
			difficulty: "Medium",
			category: "Design",
			description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
			approach:
				"Used a combination of a hash map and a doubly linked list to achieve O(1) time complexity for both get and put operations.",
			link: "https://github.com/yourusername/coding-problems/lru-cache",
		},
		{
			id: 5,
			title: "Word Search II",
			difficulty: "Hard",
			category: "Trie & Backtracking",
			description: "Given an m x n board of characters and a list of strings words, return all words on the board.",
			approach:
				"Built a trie from the word list, then used backtracking with the trie to efficiently find all words on the board.",
			link: "https://github.com/yourusername/coding-problems/word-search-ii",
		},
	]

	const difficultyColors = {
		Easy: {
			light: "bg-green-100 text-green-800",
			dark: "bg-green-900 text-green-300",
		},
		Medium: {
			light: "bg-yellow-100 text-yellow-800",
			dark: "bg-yellow-900 text-yellow-300",
		},
		Hard: {
			light: "bg-red-100 text-red-800",
			dark: "bg-red-900 text-red-300",
		},
	}

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300 min-h-screen">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Interview Problems</h2>
				<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					A collection of coding problems I've solved, focusing on common interview questions and algorithmic
					challenges.
				</p>
			</div>

			<div className="grid gap-6">
				{problems.map((problem) => (
					<div
						key={problem.id}
						className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300"
					>
						<div
							className="p-6 cursor-pointer flex justify-between items-center"
							onClick={() => toggleExpand(problem.id)}
						>
							<div>
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white">{problem.title}</h3>
								<div className="flex items-center mt-2 space-x-2">
									<span
										className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[problem.difficulty].light
											} dark:${difficultyColors[problem.difficulty].dark}`}
									>
										{problem.difficulty}
									</span>
									<span className="text-gray-500 dark:text-gray-400 text-sm">{problem.category}</span>
								</div>
							</div>
							<div>
								{expandedId === problem.id ? (
									<ChevronUp className="text-gray-500 dark:text-gray-400" />
								) : (
									<ChevronDown className="text-gray-500 dark:text-gray-400" />
								)}
							</div>
						</div>

						{expandedId === problem.id && (
							<div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
								<div className="mb-4">
									<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem:</h4>
									<p className="text-gray-600 dark:text-gray-400">{problem.description}</p>
								</div>
								<div className="mb-4">
									<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">My Approach:</h4>
									<p className="text-gray-600 dark:text-gray-400">{problem.approach}</p>
								</div>
								<a
									href={problem.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
								>
									View Solution
									<ExternalLink className="ml-1" size={16} />
								</a>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	)
}

export default InterviewProblems
