import React from "react";
import Image from "next/image";
import Link from "next/link";

const Body = () => {
	return (
		<div className='bg-[rgb(240,240,240)] w-full py-8'>
			<div className='flex flex-col sm:flex-row md:flex-grow lg:flex-row mx-4 sm:mx-3 md:mx-6 lg:mx-10 p-4 sm:p-2 md:p-4 lg:p-10'>
				<div className='flex-1 p-0 sm:p-1 md:p-2 lg:p-4'>
					<h1 className='text-[rgb(32,78,81)] text-[28px] sm:text-[38px] md:text-[36px] lg:text-[48px] xl:text-[72px] leading-[74.88px] font-bold'>
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

				<div className='relative flex-1 mt-4 lg:mt-0'>
					<div className='relative w-full h-full sm:pb-[35.34%] md:pb-[75.23%] lg:pb-[85.12%] xl:pb-[90.9%]'>
						<Image
							src={"/field.png"}
							alt={"field"}
							layout='fill'
							objectFit='cover'
							className='rounded-[25px] shadow-custom'
							style={{
								boxShadow: "20px 19px 66px 0px rgba(0, 0, 0, 0.08)",
							}}
						/>
						<h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-montserrat sm:text-[10px] md:text-[18px] lg:text-[27px] xl:text-[36px] font-bold bg-white p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-11 rounded-md sm:rounded-[7.5px] md:rounded-[15px] lg:rounded-[22.4px] xl:rounded-[30px] w-[20px] sm:w-[40px] md:w-[60px] lg:w-[80px] xl:w-96 text-[rgb(32,78,81)] text-center'>
							Since 1976
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Body;
