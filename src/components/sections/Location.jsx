import CopyWithBento from "../shared/CopyWithBento";
import Section from "../shared/Section";
import "../../styles/sections/Location.css";

import bentoImgA1 from "../../assets/images/location-kiln-quay.jpg";
import bentoImgA2 from "../../assets/images/location-mylor-church.jpg";
import bentoImgB1 from "../../assets/images/location-mylor-harbour.jpg";
import bentoImgB2 from "../../assets/images/location-st-anthonys-lighthouse.jpg";
import bentoImgC1 from "../../assets/images/location-truro.jpg";
import bentoImgC2 from "../../assets/images/location-st-mawes-castle.jpg";

export default function Location() {
	const images = [
		{ src: bentoImgA1, alt: "Kiln Quay" },
		{ src: bentoImgA2, alt: "Mylor Church" },
		{ src: bentoImgB1, alt: "Mylor Harbour" },
		{ src: bentoImgB2, alt: "St Anothony's Lighthouse" },
		{ src: bentoImgC1, alt: "Truro Cathedral" },
		{ src: bentoImgC2, alt: "St Mawes Castle" },
	];

	return (
		<Section sectionId="location">
			<CopyWithBento bentoImages={images}>
				<h3>Location</h3>
				<p>
					Flushing is a beautiful fishing village, steeped in history and just across the water from
					the south coast port of Falmouth. Our lovely house is set in the centre of this vibrant
					community, which boasts a thriving school, yacht club and gig sailing club, along with its
					pubs, restaurant and shop. Due to its protected position, Flushing is said to be one of
					the warmest villages in the United Kingdom!
				</p>
				<p>
					Discover Kiln Quay with its quiet beaches (a lovely 15-minute walk) and enjoy a walk
					through the village and around Trefusis Point enjoying great views of Falmouth, the Docks
					and Carrick Roads with all its sailing activity, before arriving in Mylor Harbour for a
					quayside drink or a visit to St Mylor Church, boasting one of the oldest Celtic crosses in
					the country.
				</p>
				<p>
					From Trefusis Point your eye is drawn to the other side of the water and the entrance to
					St Mawes, protected by St Mawes Castle and out to St. Anthony lighthouse, Falmouth Bay and
					black rock which marks the entrance to Falmouth harbour.
				</p>
				<p>
					The village gives easy access to the rest of Cornwall and its beautiful beaches. The
					county town of Truro is 10 miles to the north with St. Ives, Penznace and Padstow all
					around a 45-minute drive.
				</p>
			</CopyWithBento>
		</Section>
	);
}
