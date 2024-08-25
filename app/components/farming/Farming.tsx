import React from "react";
import Image from "next/image";
import Link from "next/link";

const Farming = () => {
	return (
		<div>
			<div className='relative mt-36'>
				<Image
					src={"/farming.png"}
					alt={"not found"}
					height={600}
					width={3000}
				/>
				<div className='absolute inset-0 bg-[rgba(0,0,0,0.6)] flex  p-8'>
					<div className='text-left'>
						<h1 className='text-white sm:mt-32 md:mt-44 lg:mt-52 xl:mt-64 font-bold text-[20px] sm:text-[32px] md:text-[36px] lg:text-[54px] xl:text-[72px] leading-[24px] sm:leading-[30px] md:leading-[42px] lg:leading-[60px] xl:leading-[74.88px]'>
							Sustainable Farming
							<br />
							Meets Technology:
							<br />
							Building a Greener Future
						</h1>
						<div className='mt-28 flex '>
							<ul className='flex flex-row space-x-4 md:space-x-8 lg:space-x-12'>
								<li className='bg-[#204E51] rounded-lg w-[150px] h-[40px] flex items-center justify-center text-center'>
									<Link
										href={"/"}
										className='text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] font-semibold w-full flex items-center justify-center h-full'>
										Learn More
									</Link>
								</li>
								<li className='border-2 border-white rounded-lg w-[150px] h-[40px] flex items-center justify-center text-center'>
									<Link
										href={"/"}
										className='text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] font-semibold w-full flex items-center justify-center h-full'>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Farming;
