"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		console.log("Toggle Menu clicked, isOpen:", !isOpen); // For debugging
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 left-0 w-full flex flex-row items-center justify-between bg-white text-black p-4 shadow-md z-50'>
			<div className='text-2xl font-extrabold ml-16'>Agrivista Farms</div>

			{/* Hamburger Icon for Small and Medium Screens */}
			<div className='md:hidden'>
				<button onClick={toggleMenu} className='text-2xl p-2'>
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
			<div
				className={`absolute top-full left-0 w-full bg-white flex flex-col items-center md:hidden transition-transform duration-300 ${
					isOpen ? "block" : "hidden"
				}`}>
				<Link
					href='/'
					className='py-2 px-4 w-full text-center hover:bg-gray-200'>
					Home
				</Link>
				<Link
					href='/about'
					className='py-2 px-4 w-full text-center hover:bg-gray-200'>
					About Us
				</Link>
				<Link
					href='/pages'
					className='py-2 px-4 w-full text-center hover:bg-gray-200'>
					Pages
				</Link>
				<Link
					href='/login'
					className='py-2 px-4 w-full text-center hover:bg-gray-200'>
					Login
				</Link>
				<Link
					href='/register'
					className='py-2 px-4 w-full text-center hover:bg-gray-200'>
					SignUp
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
