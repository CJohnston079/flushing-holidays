import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Button from "../shared/Button";
import Section from "../shared/Section";
import "../../styles/sections/Booking.css";

export default function Booking() {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash === "#booking") {
			const bookingElement = document.getElementById("booking");
			if (bookingElement) {
				bookingElement.scrollIntoView({ behavior: "instant" });
			}
		}
	}, [hash]);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://d2n64sniz4ei2k.cloudfront.net/property-search-795f5869.js";
		script.type = "text/javascript";
		script.async = true;

		document.body.appendChild(script);

		script.onload = () => {
			if (window.uplistingSearchWidget) {
				window.uplistingSearchWidget.init({
					baseUrl: "https://book.guesteduk.com/flushing/waterside-house-with-sea-views/c736d6?",
					showLocation: false,
					locationText: "All cities",
					locations: ["Flushing, Cornwall"],
					color: "#000",
					insertAt: ".uplisting-widget",
					guestsMin: 1,
					guestsMax: 6,
					textColor: "#fff",
					backgroundColor: "#000",
					buttonText: "Confirm your booking ➞",
				});
			}
		};

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<Section sectionId={"booking"} heading={""}>
			<div className="booking-container">
				<h2>Booking</h2>
				<div className="uplisting-widget"></div>
				<Link to="/terms-and-conditions">
					<Button style="normal">Terms and conditions</Button>
				</Link>
			</div>
		</Section>
	);
}
