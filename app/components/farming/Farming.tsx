import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/farming/Farming.module.css";

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
			<div className='flex space-y-5 sm:flex-col md:flex-col lg:flex-row flex-col p-3 '>
				<h1 className={styles.heading}>
					<p className=' mt-28 sm:mt-28 md:mt-44 lg:mt-52 xl:mt-64 text-[30px] sm:text-[30px] md:text-[36px] lg:text-[54px] xl:text-[72px] leading-[22px] sm:leading-[21.56px] md:leading-[41.04px] lg:leading-[61.56px] xl:leading-[82.08px] font-bold text-[#204E51]'>
						The Benefits Of Choosing Our Expertise
					</p>
					<p className='mt-4 font-light sm:text-xs md:text-xs lg:text-sm xl:text-[20px] sm:leading-3 md:leading-4 lg:leading-5 xl:leading-7  ml-5'>
						Li Europan lingues es membres del sam familie. Lor separat
						existentie es un myth. Por scientie, musica, sport etc, litot Europa
						usa li sam vocabular.{" "}
					</p>
					<div className=' mt-20 bg-[#204E51] rounded-lg w-[200px] h-[60px] flex items-center justify-center text-center'>
						<Link
							href={"/"}
							className='text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[23px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] font-normal w-full flex items-center justify-center h-full'>
							Learn More <BsArrowRight className='ml-3 size-7' />
						</Link>
					</div>
				</h1>

				<div className='  relative bg-[#204E51] text-white w-[450px] sm:w-[450px] md:w-[500px] lg:w-[580px] xl:w-[670px] p-10 mx-24 sm:mx-24 md:mx-32 lg:mx-32 xl:mx-36 rounded-2xl sm:space-x-5 mt-16'>
					<div className='flex flex-col space-y-8'>
						<div className='flex flex-row items-center'>
							<div className={styles.imageWrapper}>
								<Image
									className={styles.responsiveImage}
									src='/Rating.png'
									alt='Rating'
									layout='responsive'
									width={125}
									height={125}
								/>
							</div>
							<div className='flex flex-col ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 space-y-4'>
								<div className='flex items-baseline'>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										1
									</h1>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										5+
									</h1>
								</div>
								<p className='text-base font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
									Years of experience
								</p>
							</div>
						</div>

						<div className='flex flex-row items-center'>
							<div className={styles.imageWrapper}>
								<Image
									className={styles.responsiveImage}
									src='/Product.png'
									alt='Product'
									layout='responsive'
									width={125}
									height={125}
								/>
							</div>
							<div className='flex flex-col ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 space-y-4'>
								<div className='flex items-baseline'>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										4
									</h1>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										0+
									</h1>
								</div>
								<p className='text-base font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
									Product
								</p>
							</div>
						</div>

						<div className='flex flex-row items-center'>
							<div className={styles.imageWrapper}>
								<Image
									className={styles.responsiveImage}
									src='/tick.png'
									alt='Tick'
									layout='responsive'
									width={125}
									height={125}
								/>
							</div>
							<div className='flex flex-col ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 space-y-4'>
								<div className='flex items-baseline'>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										2
									</h1>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										,458+
									</h1>
								</div>
								<p className='text-base font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
									Satisfied Clients
								</p>
							</div>
						</div>

						<div className='flex flex-row items-center'>
							<div className={styles.imageWrapper}>
								<Image
									className={styles.responsiveImage}
									src='/Local-team.png'
									alt='Local Team'
									layout='responsive'
									width={125}
									height={125}
								/>
							</div>
							<div className='flex flex-col ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 space-y-4'>
								<div className='flex items-baseline'>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										2
									</h1>
									<h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl'>
										0
									</h1>
								</div>
								<p className='text-base font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
									Local Team Members
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Farming;
