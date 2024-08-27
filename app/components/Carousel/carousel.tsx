import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";

export function EmblaCarousel() {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div className='mt-24'>
			<div className={styles.embla} ref={emblaRef}>
				<div className={styles.embla__container}>
					<div className={styles.embla__slide}>Slide 1</div>
					<div className={styles.embla__slide}>Slide 2</div>
					<div className={styles.embla__slide}>Slide 3</div>
				</div>
			</div>
		</div>
	);
}
