import { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../shared/Button";
import Section from "../shared/Section";
import "../../styles/sections/Booking.css";

export default function Booking() {
	useEffect(() => {
		if (window.location.hash === "#booking") {
			const bookingElement = document.getElementById("booking");
			if (bookingElement) {
				setTimeout(() => {
					bookingElement.scrollIntoView({ behavior: "auto" });
				}, 0);
			}
		}
	}, []);

	return (
		<Section sectionId={"booking"} heading={""}>
			<div className="booking-container">
				<h2>Booking</h2>
				<iframe
					id="booking-iframe"
					title="Booking Widget"
					sandbox="allow-top-navigation allow-scripts allow-same-origin"
					style={{
						width: "min(320px, 100%)",
						height: "660px",
						border: "0",
						backgroundColor: "#fff",
						borderRadius: "8px",
					}}
					src="https://booking.hospitable.com/widget/a10db67b-a685-4b8b-b52d-6141874eb678/2042356"
				/>
				<Link to="/terms-and-conditions">
					<Button style="normal">Terms and conditions</Button>
				</Link>
			</div>
		</Section>
	);
}
