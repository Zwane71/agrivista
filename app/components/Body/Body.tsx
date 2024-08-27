import React from "react";
import Image from "next/image";
import Link from "next/link";

const Body = () => {
	return (
		<div className='bg-[rgb(240,240,240)] flex md:flex-wrap lg:flex-row w-full py-8'>
			<div className='   lg:flex flex-row md:flex-row lg:flex-row mx-4 sm:mx-3 md:mx-6 lg:mx-10 p-4 sm:p-2 md:p-4 lg:p-10'>
				<div className='flex-1 p-0 sm:p-1 md:p-2 lg:p-4'>
					<h1 className='text-[rgb(32,78,81)] text-[28px] sm:text-[38px] md:text-[36px] lg:text-[48px] xl:text-[72px]  font-bold'>
						Our Passion for Agriculture Nurturing Growth and Sustaining the
						Future
					</h1>
					<div className='text-[rgb(30,30,30)] flex flex-col mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] lg:font-[400] font-[Raleway]'>
						<p>
							Li Europan lingues es membres del sam familie. Lor separat
							existentie es un myth.
						</p>
						<p>
							Por scientie, musica, sport etc, litot Europa usa li sam
							vocabular.
						</p>
					</div>
					<Link
						href={"/"}
						className='text-center bg-[rgb(32,78,81)] border-2 border-[rgb(32,78,81)] p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-[8px] w-24 sm:w-28 md:w-32 lg:w-36 xl:w-[176px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white inline-block mt-4'>
						Get Started
					</Link>
				</div>

				<div className=' justify-center items-center relative    '>
					<div className='relative rounded-lg '>
						<Image
							src='/field.png'
							alt='field'
							width={550}
							height={544}
							className='rounded-[25px]'
						/>
						<div className=' text-[36px] absolute bottom-[-30px] md:bottom-[-30px] lg:bottom-[-30px] xl:bottom-[-30px] ml-[10px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-2 text-teal-900 font-bold  text-center shadow-lg z-10 w-[220px] '>
							Since 1976
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Body;
