import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className="px-2 dark:bg-gray-800 dark:text-gray-100">
			<div className="container flex justify-between h-16 mx-auto">
				<div className="flex space-x-2">
					<Link rel="noopener noreferrer" to="" aria-label="Back to homepage" className="flex items-center p-2">
						<img className='w-[4.5rem] object-contain' src="https://www.tajhotels.com/content/dam/tajhotels/icons/style-icons/logo--Taj.png" alt="icon" />
					</Link>
					<ul className="items-stretch hidden space-x-3 lg:flex">
						<li className="flex">
							<Link rel="noopener noreferrer" to="hotels" className="flex font-semibold items-center px-4">Hotels</Link>
						</li>
						<li className="flex">
							<Link rel="noopener noreferrer" to="about" className="flex font-semibold items-center px-4">About</Link>
						</li>
						<li className="flex">
							<Link rel="noopener noreferrer" to="contact" className="flex font-semibold items-center px-4">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="items-center flex-shrink-0 hidden lg:flex">
					<button className='md:flex hidden mr-2 text-white border-0 py-2 px-3 focus:outline-none bg-[#1a4ffd] hover:bg-[#1440d3] rounded text-base font-medium' >Login</button>
				</div>
				<button className="p-4 lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</header>
	)
}

export default Header
