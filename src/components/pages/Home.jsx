import About from "../sections/About.jsx";
import History from "../sections/History.jsx";
import Booking from "../sections/Booking.jsx";
import Faq from "../sections/Faq.jsx";
import Hero from "../sections/Hero.jsx";
import Location from "../sections/Location.jsx";
import NavBar from "../nav/NavBar.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Footer from "../sections/Footer.jsx";

import "../../styles/pages/Home.css";

function Home() {
	return (
		<>
			<NavBar links={["home", "about", "history", "location", "faq", "testimonials", "booking"]} />
			<Hero />
			<About />
			<History />
			<Location />
			<Testimonials />
			<Faq />
			<Booking />
			<Footer />
		</>
	);
}

export default Home;
