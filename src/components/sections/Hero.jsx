import Button from "../shared/Button";
import "../../styles/sections/Hero.css";

export default function Hero() {
	return (
		<section id="home" className="hero">
			<div className="hero-container">
				<h1 className="hero-heading">Flushing Holidays</h1>
				<p className="hero-text">
					Delightful, dog-friendly cottage in the heart of Flushing - close to the Falmouth ferry,
					two pubs, a brilliant village shop and just a stone&apos;s throw from the water&apos;s
					edge.
				</p>
				<Button style={"hero"}>
					<a href="#booking">Book your stay</a>
				</Button>
			</div>
		</section>
	);
}
