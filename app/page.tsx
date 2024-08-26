import Image from "next/image";
import Truck from "./components/navbar/truck/Truck";
import Body from "./components/Body/Body";
import Services from "./components/Services/Services";
import Farming from "./components/farming/Farming";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
	return (
		<main>
			<div>
				<Truck />
				<Body />
				<Services />
				<Farming />
				<Testimonial />
			</div>
		</main>
	);
}
