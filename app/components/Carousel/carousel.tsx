import React, { useCallback } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import Image from "next/image";

export default function EmblaCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className={styles.embla}>
			<div className=' flex relative mt-24 mx-auto w-[253px] sm:w-[252.5px] md:w-[510px] lg:w-[757.5px] xl:w-[1010px] rounded-3xl border sm:h-[480px] md:h-[480px] lg:h-[450px] h-[437px] bg-[#204E51]'>
				<button
					type='button'
					className='absolute left-[-120px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4'
					onClick={scrollPrev}
					aria-label='Scroll to previous slide'
					title='Scroll to previous slide'>
					<TbTriangleFilled className='text-[#204E51] -rotate-90' size={24} />
				</button>
				<div className={`h-full ${styles.embla_viewport}`} ref={emblaRef}>
					<div className={styles.embla__container}>
						{/* First Slide */}
						<div
							className={`flex flex-row ml-24 mt-6 justify-evenly space-x-4 ${styles.embla__slide}`}>
							<Image
								src={"/ceo.png"}
								alt={"not found"}
								width={180}
								height={180}
								className='rounded-3xl relative'
							/>
							<div className='gap-5'>
								<div className='mt-8'>
									<div className='flex'>
										{/* Star Ratings */}
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
									</div>
									<h1 className='font-semibold sm:text-[12px] md:text-[16px] lg:text-[25px] xl:text-[32px] text-white'>
										Madeline Williamson
									</h1>
									<h3 className='text-white font-extralight sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
										Forward Creative Manager
									</h3>
									<p className='text-white font-extralight sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[18px] '>
										Li Europan lingues es membres del sam familie. Lor separat
										<p>
											existentie es un myth. Por scientie, musica, sport etc,
										</p>
										<p>litot Europa usa li sam vocabular.</p>
									</p>
								</div>
							</div>
						</div>
						{/* Second Slide */}
						<div
							className={`flex flex-row ml-24 mt-6 justify-evenly space-x-4 space-y-10 gap-4 ${styles.embla__slide}`}>
							<Image
								src={"/dev.jpeg"}
								alt={"not found"}
								width={180}
								height={180}
								className='rounded-3xl'
							/>
							<div className=''>
								<div className='mt-8'>
									<div className='flex'>
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
										<Image
											src={"/star_rate.png"}
											alt={"not found"}
											width={25}
											height={25}
										/>
									</div>
									<h1 className='font-semibold sm:text-[12px] md:text-[16px] lg:text-[25px] xl:text-[32px] text-white'>
										Themba Makhohlisa
									</h1>
									<h3 className='text-white font-extralight sm:text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
										Frontend Developer
									</h3>
									<p className='text-white font-extralight sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[18px] '>
										Facer iste app viver esseva un parte challenging proque io
										esseva expose
										<p>
											a nove cosas como carousels e animations con tailwindcss.
										</p>
									</p>
								</div>
							</div>
						</div>
						{/* Third Slide */}
						{/* <div
							className={`flex items-center justify-center ${styles.embla__slide}`}>
							<Image
								src={"/reviews/pex3.jpg"}
								alt={"not found"}
								width={231}
								height={231}
							/>
						</div> */}
					</div>
				</div>
				{/* Carousel Controls */}
				<div className='relative'>
					<button
						type='button'
						className='absolute right-[-120px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4'
						onClick={scrollNext}
						aria-label='Scroll to next slide'
						title='Scroll to next slide'>
						<TbTriangleFilled className='text-[#204E51] rotate-90' size={24} />
					</button>
				</div>
			</div>
		</div>
	);
}
