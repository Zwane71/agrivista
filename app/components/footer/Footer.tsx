import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<div className='bg-[#204E51] sm: md: lg: xl:h-[500px] text-white mt-20'>
			<div className='container justify-evenly p-6 mt-20'>
				<div className='grid mt-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-56 ml-24'>
					<div>
						<h5 className='text-[25px] font-bold mb-4'>AgriVista Farms</h5>
						<p className='text-[20px] font-extralight'>
							Li Europan lingues es membres del sam familie. Lor separat
							existentie
						</p>
						<div className='flex gap-4 mt-5 '>
							<Image
								src={"/insta.png"}
								alt={"not found"}
								width={30}
								height={30}
							/>
							<Image
								src={"/b-ball.png"}
								alt={"not found"}
								width={30}
								height={30}
							/>
							<Image src={"/Fb.png"} alt={"not found"} width={30} height={30} />
							<Image src={"/Be.png"} alt={"not found"} width={30} height={30} />
						</div>
					</div>

					<div className='space-x-4'>
						<h5 className='text-xl font-bold mb-4 ml-3'>Pages</h5>
						<ul className='list-none space-y-2'>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									Home
								</Link>
							</li>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									About
								</Link>
							</li>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									Product
								</Link>
							</li>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h5 className='text-xl font-semibold mb-4'>About</h5>
						<ul className='list-none space-y-2'>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									Testimonials
								</Link>
							</li>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									Our Service
								</Link>
							</li>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									Contact Us
								</Link>
							</li>
							<li>
								<Link href='#!' className='text-white hover:underline'>
									Benefit
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
