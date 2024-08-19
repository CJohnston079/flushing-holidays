import ContentWithBento from "../shared/ContentWithBento";
import IconCard from "./amenities/IconCard";
import Section from "../shared/Section";
import "../../styles/sections/Amenities.css";

import dogIcon from "../../assets/icons/dog.png";
import bowlIcon from "../../assets/icons/bowl.png";
import petBedIcon from "../../assets/icons/pet-bed.png";
import blanketIcon from "../../assets/icons/blanket.png";
import fenceIcon from "../../assets/icons/fence.png";
import floorIcon from "../../assets/icons/floor.png";

import bella from "../../assets/images/dogs/bella.jpg";
import tilly from "../../assets/images/dogs/tilly.jpg";
import finn from "../../assets/images/dogs/finn.jpg";
import dogsInHallway from "../../assets/images/dogs/dogs-in-hallway.jpg";
import dogsOnBed from "../../assets/images/dogs/dogs-on-bed.jpg";
import dogsOnSofa from "../../assets/images/dogs/dogs-on-sofa.jpg";

export default function DogFriendly() {
	const images = [
		{ src: bella, alt: "Bella" },
		{ src: tilly, alt: "Tilly" },
		{ src: finn, alt: "Finn" },
		{ src: dogsInHallway, alt: "Dogs in hallway" },
		{ src: dogsOnBed, alt: "Dogs on bed" },
		{ src: dogsOnSofa, alt: "Dogs on sofa" },
	];

	const ftAmeneityData = [
		{ iconSrc: dogIcon, heading: "Dogs can access all areas" },
		{ iconSrc: blanketIcon, heading: "Blankets and throws to cover furniture" },
		{ iconSrc: petBedIcon, heading: "Comfy dog bed and large crate available" },
		{ iconSrc: bowlIcon, heading: "Dog bowls, treats and poo bags" },
		{ iconSrc: fenceIcon, heading: "Enclosed garden for doggies to run around" },
		{ iconSrc: floorIcon, heading: "Wooden floors throughout for muddy paws" },
	];

	const cardComponents = ftAmeneityData.map((data, i) => (
		<IconCard key={i} iconSrc={data.iconSrc} heading={data.heading} content={data.content} />
	));

	return (
		<Section sectionId="dogs-welcome" heading="History">
			<ContentWithBento bentoImages={images}>
				<p>
					Henry VIII intended to build a castle on Trefusis Point, to accompany those built at
					Pendennis and St. Mawes, but due to the expensive wars of the time was unable to finance
					it.
				</p>
				<p>
					The village was certainly founded before 1653, but there is disagreement about whether any
					houses exist from the late 17th century. Nankersey, meaning valley of the reed swamp was,
					and continued to be, a separate dwelling on the road into the village of Flushing. The
					village was given its name by Dutch engineers, probably directed by Cornelius Vermuyden
					the elder, who built the two main quays in the village. The grand houses on St
					Peter&apos;s Hill, the road that leads into the village, were owned by captains of the
					packet ships (mail-boats) that docked in nearby Falmouth.
				</p>
				<p>
					James Silk Buckingham (1786–1855) spent his childhood here and writes that most of the
					packet captains and officers, and their families, as well as the crews, lived in the
					village. Dinners, balls and evening parties were held most evenings at some of the
					captains&apos; houses and there were dances for the sailors at the humbler places. Much of
					it paid for by prize money and the profits from the contraband carried by the packet
					ships. (The forerunner of the post office or UPS out to the British Colonies)
				</p>
				<p>
					The naval family of Bartholomew James Sulivan (1810–1890) maintained a house here, as did
					many Royal and merchant Navy officers in the nineteenth century. Sulivan as a young naval
					officer in the 1830&apos;s was a friend and shipmate of Charles Darwin on the historic HMS
					Beagle voyage (which docked in Falmouth on 2 October 1836, an event briefly recorded in
					Darwin&apos;s journal of the voyage).
				</p>
				<p>
					In the 19th and 20th centuries, the village&apos;s economy mainly relied upon fishing, the
					two farms and former manors of Trefusis; the original seat of the Trefusis family, Barons
					Clinton since 1791 and Tregew, together with Falmouth Docks. Wheal Clinton lead mine
					started in 1854 and an engine shaft was sunk to 33 fathoms (198ft or 60m). There was not
					enough ore to make a profit and the mine was wound up in 1858. There was also briefly a
					copper mine on Jericho beach, but extracting the copper proved commercially unviable.
				</p>
				<p>
					Our house was built by the Trefusis family in 1909 on what was then the High Street and
					was leased out until the freehold was sold in the 1950&apos;s.
				</p>
			</ContentWithBento>
			<div className="icard-container">{cardComponents}</div>
		</Section>
	);
}
