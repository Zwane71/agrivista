import React from "react";
import Image from "next/image";
import styles from "@/app/components/Services/services.module.css";
import Link from "next/link";

const Services = () => {
	return (
		<div>
			<div className='text-center '>
				<h1 className='text-[30px] sm:text-[34px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-bold text-[#204E51]'>
					Our service
				</h1>
				<p className='sm:mx-[103px] md:mx-[206px] lg:mx-[309px] xl:mx-[412px] font-light sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px]'>
					Li Europan lingues es membres del sam familie. Lor separat existentie
					es un myth Por scientie, musica.{" "}
				</p>
			</div>
			<div className='flex flex-col md:flex-row flex-wrap mx-6 lg:mx-24'>
				<div
					className='bg-white w-full sm:w-[168px] sm:h-[168px] md:w-[196px] md:h-[196px] lg:w-[225px] lg:h-[225px] xl:w-[281px] xl:h-[281px] p-4 rounded-[25px] shadow-md mx-auto flex flex-col items-center mt-4'
					style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
					<Image
						src={"/icon.png"}
						alt={"Blog"}
						width={80}
						height={80}
						className='mt-4 sm:w-[28px] md:w-[40px] lg:w-[60px] xl:w-[80px] h-auto'
					/>
					<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-[30px] text-center mt-6'>
						Blog and Article Writing
					</h1>
				</div>

				<div
					className='bg-white w-full sm:w-[168px] sm:h-[168px] md:w-[196px] md:h-[196px] lg:w-[225px] lg:h-[225px] xl:w-[281px] xl:h-[281px] p-4 rounded-[25px] shadow-md mx-auto flex flex-col items-center mt-4'
					style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
					<Image
						src={"/intern.png"}
						alt={"Website Content"}
						width={80}
						height={80}
						className='mt-4 sm:w-[28px] md:w-[40px] lg:w-[60px] xl:w-[80px] h-auto'
					/>
					<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-[30px] text-center mt-6'>
						Website Content
					</h1>
				</div>

				<div
					className='bg-white w-full sm:w-[168px] sm:h-[168px] md:w-[196px] md:h-[196px] lg:w-[225px] lg:h-[225px] xl:w-[281px] xl:h-[281px] p-4 rounded-[25px] shadow-md mx-auto flex flex-col items-center mt-4'
					style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
					<Image
						src={"/Graph.png"}
						alt={"Content Strategy"}
						width={80}
						height={80}
						className='mt-4 sm:w-[28px] md:w-[40px] lg:w-[60px] xl:w-[80px] h-auto'
					/>
					<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-[30px] text-center mt-6'>
						Content Strategy and Consulting
					</h1>
				</div>

				<div
					className='bg-white w-full sm:w-[168px] sm:h-[168px] md:w-[196px] md:h-[196px] lg:w-[225px] lg:h-[225px] xl:w-[281px] xl:h-[281px] p-4 rounded-[25px] shadow-md mx-auto flex flex-col items-center mt-4'
					style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
					<Image
						src={"/internet.png"}
						alt={"Social Media Management"}
						width={80}
						height={80}
						className='mt-4 sm:w-[28px] md:w-[40px] lg:w-[60px] xl:w-[80px] h-auto'
					/>
					<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-[30px] text-center mt-6'>
						Social Media Management
					</h1>
				</div>
			</div>
			<div className='text-center mt-32'>
				<h1 className='text-[30px] sm:text-[34px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-bold text-[#204E51] text-center'>
					Our Featured Products
				</h1>
				<p className='sm:mx-[103px] md:mx-[206px] lg:mx-[309px] xl:mx-[412px] font-light sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px]'>
					Li Europan lingues es membres del sam familie. Lor separat existentie
					es un myth Por scientie, musica.
				</p>
				<div className='flex flex-col lg:flex-row flex-wrap mx-6 lg:mx-24'>
					<div
						className='bg-white relative w-full sm:w-[168px] md:w-[196px] lg:w-[225px] xl:w-[281px] h-auto rounded-[25px] mx-auto flex flex-col items-center mt-4'
						style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
						<div className={styles.imageWrapper}>
							<Image
								src={"/rice.png"}
								alt={"not found"}
								layout='fill'
								className={styles.image}
							/>
						</div>

						<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-6 text-center mt-6'>
							Rice
						</h1>
						<p className='mt-10 font-light sm:text-xs md:text-xs lg:text-sm xl:text-[16px] sm:leading-3 md:leading-4 lg:leading-5 xl:leading-7 text-center mx-6'>
							Li Europan lingues es membres del sam familie. Lor separat
							existentie es un myth.
						</p>
					</div>

					<div
						className='bg-white relative w-full sm:w-[168px] md:w-[196px] lg:w-[225px] xl:w-[281px] h-auto rounded-[25px] mx-auto flex flex-col items-center mt-4 p-5'
						style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
						<div className={styles.imageWrapper}>
							<Image
								src={"/wheat.png"}
								alt={"not found"}
								layout='fill'
								className={styles.image}
							/>
						</div>

						<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-6 text-center mt-6 p-5'>
							Wheat
						</h1>
						<p className='mt-10 font-light sm:text-xs md:text-xs lg:text-sm xl:text-[16px] sm:leading-3 md:leading-4 lg:leading-5 xl:leading-7 text-center mx-6 p-5'>
							Li Europan lingues es membres del sam familie. Lor separat
							existentie es un myth.
						</p>
					</div>

					<div
						className='bg-white relative w-full sm:w-[168px] md:w-[196px] lg:w-[225px] xl:w-[281px] h-auto rounded-[25px] mx-auto flex flex-col items-center mt-4 p-5'
						style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
						<div className={styles.imageWrapper}>
							<Image
								src={"/pumpkin.png"}
								alt={"not found"}
								layout='fill'
								className={styles.image}
							/>
						</div>

						<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-6 text-center mt-6'>
							Pumpkin
						</h1>
						<p className='mt-10 font-light sm:text-xs md:text-xs lg:text-sm xl:text-[16px] sm:leading-3 md:leading-4 lg:leading-5 xl:leading-7 text-center mx-6'>
							Li Europan lingues es membres del sam familie. Lor separat
							existentie es un myth.
						</p>
					</div>

					<div
						className='bg-white relative w-full sm:w-[168px] md:w-[196px] lg:w-[225px] xl:w-[281px] h-auto rounded-[25px] mx-auto flex flex-col items-center mt-4 p-5'
						style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>
						<div className={styles.imageWrapper}>
							<Image
								src={"/cabbage.png"}
								alt={"not found"}
								layout='fill'
								className={styles.image}
							/>
						</div>

						<h1 className='text-[#204E51] font-montserrat sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] font-medium leading-6 text-center mt-6'>
							Cabbage
						</h1>
						<p className='mt-10 font-light sm:text-xs md:text-xs lg:text-sm xl:text-[16px] sm:leading-3 md:leading-4 lg:leading-5 xl:leading-7 text-center mx-6'>
							Li Europan lingues es membres del sam familie. Lor separat
							existentie es un myth
						</p>
					</div>
				</div>
			</div>
			<div className='text-center mt-16 '>
				<div>
					<Link
						href={"/"}
						className='text-[#204E51] font-bold text-[20px] underline hover:bg-[#204E51] hover:text-white hover:rounded-md hover:p-2 transition-all duration-300'>
						See all products
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Services;
