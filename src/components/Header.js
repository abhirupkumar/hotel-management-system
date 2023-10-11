import { UserButton, useClerk, useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { SwipeableDrawer } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Header = () => {
	const { isLoaded, isSignedIn, user } = useUser();
	const [showPopup, setshowPopup] = useState(false);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const { signOut } = useClerk();

	useEffect(() => {
		setOpen(false);
	}, [navigate])


	return (
		<header className="px-2 dark:bg-gray-800 bg-white font-mono shadow-md">
			<div className="container flex justify-between mx-auto">
				<div className="flex space-x-2">
					<Link rel="noopener noreferrer" to="" aria-label="Back to homepage" className="hidden md:flex items-center">
						<img className='w-[4.5rem] object-contain' src="/logo.png" alt="icon" />
					</Link>
					<ul className="items-stretch hidden space-x-3 md:flex">
						<li className="flex">
							<Link rel="noopener noreferrer" to="hotels" className="flex hover:bg-gray-100  font-semibold items-center px-4">Our Hotels</Link>
						</li>
						<li className="flex">
							<Link rel="noopener noreferrer" to="rooms" className="flex hover:bg-gray-100  font-semibold items-center px-4">Our Rooms</Link>
						</li>
						<li className="flex">
							<Link rel="noopener noreferrer" to="about" className="flex hover:bg-gray-100  font-semibold items-center px-4">About</Link>
						</li>
						<li className="flex">
							<Link rel="noopener noreferrer" to="contact" className="flex hover:bg-gray-100  font-semibold items-center px-4">Contact</Link>
						</li>
					</ul>
				</div>
				<div className='flex items-center'>
					{!isSignedIn && <Link rel="noopener noreferrer" to="sign-in" className='hidden md:flex mr-2 border-0 py-5 px-3 font-semibold hover:bg-gray-100 focus:outline-none text-base'>Login</Link>}
					{isSignedIn && <div className='hidden md:flex mr-5'>
						<UserButton afterSignOutUrl={process.env.REACT_APP_HOST} /></div>}
					<button onClick={() => setshowPopup(true)} className='md:flex hidden mr-2 text-white border-0 py-2 px-3 focus:outline-none bg-[#1a4ffd] hover:bg-[#1440d3] rounded text-base font-medium'>Book A Stay</button>
				</div>
				<Link rel="noopener noreferrer" to="" aria-label="Back to homepage" className="md:hidden flex items-center mx-auto">
					<img className='w-[4.5rem] object-contain' src="/logo.png" alt="icon" />
				</Link>
				<button className="absolute right-4 p-4 md:hidden" onClick={() => setOpen(true)} >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
				<Popup
					isVisible={showPopup}
					onClose={() => {
						setshowPopup(false);
					}}
				/>
				<SwipeableDrawer
					anchor="right"
					open={open}
					onClose={() => {
						setOpen(false);
					}}
					onOpen={() => {
						setOpen(true);
					}}
					className="block md:hidden"
				>
					<div className='flex flex-col bg-white  h-full m-6 space-y-10'>
						<button onClick={() => {
							setOpen(false);
						}} className="mr-auto"><CloseRoundedIcon className='!text-4xl' /></button>
						<div className='flex flex-col h-full my-8'>
							<ul className="space-y-6 text-2xl flex flex-col">
								{!isSignedIn && <Link rel="noopener noreferrer" to="sign-in" className='flex font-semibold items-center px-4'>Login</Link>}
								{isSignedIn && <div className='mx-auto drawer-userbutton'>
									<UserButton afterSignOutUrl={process.env.REACT_APP_HOST} /></div>}
								<button onClick={() => {
									setOpen(false);
									setshowPopup(true)
								}} className="flex  font-semibold items-center px-4">Book A Stay</button>
								<li className="flex">
									<Link rel="noopener noreferrer" to="hotels" className="flex font-semibold items-center px-4">Our Hotels</Link>
								</li>
								<li className="flex">
									<Link rel="noopener noreferrer" to="rooms" className="flex font-semibold items-center px-4">Our Rooms</Link>
								</li>
								<li className="flex">
									<Link rel="noopener noreferrer" to="about" className="flex font-semibold items-center px-4">About</Link>
								</li>
								<li className="flex">
									<Link rel="noopener noreferrer" to="contact" className="flex font-semibold items-center px-4">Contact</Link>
								</li>
								{isSignedIn && <button className='flex font-semibold items-center px-4' onClick={() => {
									signOut()
									setOpen(false);
								}} >
									Sign Out
								</button>}
							</ul>
						</div>
					</div>
				</SwipeableDrawer>
			</div>
		</header>
	)
}

export default Header
