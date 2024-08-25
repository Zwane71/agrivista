"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='flex flex-row items-center justify-between bg-white text-black p-4 shadow-md'>
			<div className='text-2xl font-extrabold ml-16'>Agrivista Farms</div>

			{/* Hamburger Icon for Small and Medium Screens */}
			<div className='md:hidden'>
				<button onClick={toggleMenu} className='text-2xl'>
					{isOpen ? <FiX /> : <FiMenu />}
				</button>
			</div>

			{/* Links for Large Screens */}
			<div className='hidden md:flex space-x-6'>
				<Link href='/' className='hover:text-gray-700'>
					Home
				</Link>
				<Link href='/about' className='hover:text-gray-700'>
					About Us
				</Link>
				<Link href='/pages' className='hover:text-gray-700'>
					Pages
				</Link>
			</div>

			{/* Login/Register Links */}
			<div className='hidden md:flex space-x-4 mr-16'>
				<Link href='/login' className='hover:text-gray-700'>
					<h1 className='bg-[rgb(32,78,81)] border-2 border-[rgb(32,78,81)] p-2 rounded-xl w-24 text-center text-white'>
						Login
					</h1>
				</Link>
				<Link href='/register' className='hover:text-gray-700'>
					<h1 className='bg-white border-2 border-[rgb(32,78,81)] p-2 rounded-xl w-24 text-center'>
						SignUp
					</h1>
				</Link>
			</div>

			{/* Dropdown Menu for Small and Medium Screens */}
			{isOpen && (
				<div className='absolute top-16 left-0 w-full bg-white flex flex-col items-center md:hidden'>
					<Link href='/' className='py-2 hover:text-gray-700'>
						Home
					</Link>
					<Link href='/about' className='py-2 hover:text-gray-700'>
						About Us
					</Link>
					<Link href='/pages' className='py-2 hover:text-gray-700'>
						Pages
					</Link>
					<Link href='/login' className='py-2 hover:text-gray-700'>
						Login
					</Link>
					<Link href='/SignUp' className='py-2 hover:text-gray-700'>
						SignUp
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
