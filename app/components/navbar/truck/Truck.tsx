import React from "react";
import Image from "next/image";
import Link from "next/link";

const Truck = () => {
	return (
		<div className='relative'>
			<Image src={"/truck.png"} alt={"truck"} height={10000} width={10000} />
			<div className='absolute inset-0 bg-[rgba(26,26,26,0.6)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10'>
				<div className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-8xl xl:text-9xl font-bold text-center space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5'>
					<h1>The Role of Technology</h1>
					<h1>in Revolutionizing</h1>
					<h1>Agriculture</h1>
				</div>
				<div className='text-white text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5'>
					<p>
						Li Europan lingues es membres del sam familie. Lor separat
						existentie es
					</p>
					<p>
						un myth. Por scientie, musica, sport etc, litot Europa usa li sam
						vocabular.
					</p>
				</div>
				<div className='flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 mt-4'>
					<Link
						href={"/"}
						className='bg-[rgb(32,78,81)] border-2 border-[rgb(32,78,81)] p-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3 rounded-md sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white'>
						Get Started
					</Link>
					<Link
						href={"/"}
						className='border-2 border-white p-1 text-white sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3 rounded-md sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold'>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Truck;
