"use client";

import React from "react";
import Image from "next/image";
import styles from "./image.module.css";
import { Carousel } from "react-bootstrap";
import Link from "next/link";

const Testimonial = () => {
	return (
		<div>
			<div className='text-center mt-20-'>
				<h1 className='text-[rgb(32,78,81)] mt-16 text-[28px] sm:text-[38px] md:text-[36px] lg:text-[48px] xl:text-[72px] leading-[74.88px] font-bold'>
					Testimonial
				</h1>
				<div className='text-[rgb(30,30,30)]  flex flex-col mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] lg:font-[400] font-[Raleway]'>
					<p className='mx-14 sm:mx-14 md:mx-20'>
						Li Europan lingues es membres del sam familie. Lor separat
						existentie es un myth. Por scientie, musica, sport etc, litot Europa
						usa li sam vocabular.
					</p>
				</div>
			</div>
			<div className='mt-10'>
				<h1 className='text-[rgb(32,78,81)] mt-16 text-[28px] sm:text-[38px] md:text-[36px] lg:text-[48px] xl:text-[72px] leading-[74.88px] font-bold text-center'>
					Our Blog
				</h1>
				<div className='text-[rgb(30,30,30)] flex flex-col mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] lg:font-[400] font-[Raleway]'>
					<p className='mx-6 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40'>
						Li Europan lingues es membres del sam familie. Lor separat
						existentie es un myth.
					</p>
				</div>

				<div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly mt-8 gap-10 lg:gap-14 xl:gap-20'>
					{/* Blog Card 1 */}
					<div className='flex flex-col justify-evenly mb-10 md:mb-0'>
						<div className={styles.imageWrapper}>
							<Image src={"/future.png"} alt={"not found"} fill />
						</div>
						<h1
							className={`text-[#204E51] text-left ml-4 mt-9 ${styles.headings}`}>
							Innovation for a Greener Future
						</h1>
						<div className='flex flex-col mt-4 text-[12px] md:text-[14px] lg:text-[16px] font-[Raleway]'>
							<p className='mx-6 md:mx-10 lg:mx-14'>
								Li Europan lingues es membres del sam familie. Lor separat
								existentie es un myth. Por scientie, musica.
							</p>
							<div className='text-[#204E51] flex items-center underline mt-4 text-[12px] md:text-[14px] lg:text-[16px] font-[Raleway]'>
								<Link href={""} className='ml-14'>
									Read More
								</Link>
							</div>
						</div>
					</div>

					{/* Blog Card 2 */}
					<div className='flex flex-col justify-evenly items-center mb-10 md:mb-0'>
						<div className={styles.imageWrapper}>
							<Image src={"/smart.png"} alt={"not found"} fill />
						</div>
						<h1
							className={`text-[#204E51] text-left ml-4 mt-9 ${styles.headings}`}>
							The Power Agricultural Analytics
						</h1>
						<div className='flex flex-col mt-4 text-[12px] md:text-[14px] lg:text-[16px] font-[Raleway]'>
							<p className='mx-6 md:mx-10 lg:mx-14'>
								Li Europan lingues es membres del sam familie. Lor separat
								existentie es un myth. Por scientie, musica.
							</p>
							<div className='text-[#204E51] flex items-center underline mt-4 text-[12px] md:text-[14px] lg:text-[16px] font-[Raleway]'>
								<Link href={""} className='ml-14'>
									Read More
								</Link>
							</div>
						</div>
					</div>

					{/* Blog Card 3 */}
					<div className='flex flex-col justify-evenly items-center'>
						<div className={styles.imageWrapper}>
							<Image src={"/tracker.png"} alt={"not found"} fill />
						</div>
						<h1
							className={`text-[#204E51] text-left ml-4 mt-9 mr-4 ${styles.headings}`}>
							Cultivating Sustainable and Resilient Farms
						</h1>
						<div className='flex flex-col mt-4 text-[12px] md:text-[14px] lg:text-[16px] font-[Raleway]'>
							<p className='mx-6 md:mx-10 lg:mx-14 mr-6'>
								Li Europan lingues es membres del sam familie. Lor separat
								existentie es un myth. Por scientie, musica.
							</p>
							<div className='text-[#204E51] flex items-center underline mt-4 text-[12px] md:text-[14px] lg:text-[16px] font-[Raleway]'>
								<Link href={""} className='ml-14'>
									Read More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
