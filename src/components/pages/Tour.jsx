import ImgThumb from "../shared/ImgThumb";
import NavBar from "../nav/NavBar.jsx";
import Button from "../shared/Button.jsx";
import Footer from "../sections/Footer.jsx";
import { Link } from "react-router-dom";

import Section from "../shared/Section";
import "../../styles/pages/Tour.css";

import exterior1 from "../../assets/images/kitchen-1.jpg";
import kitchen1 from "../../assets/images/kitchen-1.jpg";
import living1 from "../../assets/images/kitchen-1.jpg";
import bedroom1 from "../../assets/images/kitchen-1.jpg";
import exterior2 from "../../assets/images/kitchen-1.jpg";
import living2 from "../../assets/images/kitchen-1.jpg";
import living3 from "../../assets/images/kitchen-1.jpg";
import bedroom2 from "../../assets/images/kitchen-1.jpg";
import living4 from "../../assets/images/kitchen-1.jpg";
import kitchen2 from "../../assets/images/kitchen-1.jpg";
import kitchen3 from "../../assets/images/kitchen-1.jpg";
import kitchen4 from "../../assets/images/kitchen-1.jpg";
import kitchen5 from "../../assets/images/kitchen-1.jpg";
import kitchen6 from "../../assets/images/kitchen-1.jpg";
import kitchen7 from "../../assets/images/kitchen-1.jpg";
import kitchen8 from "../../assets/images/kitchen-1.jpg";
import kitchen9 from "../../assets/images/kitchen-1.jpg";
import kitchen10 from "../../assets/images/kitchen-1.jpg";
import bedroom3 from "../../assets/images/kitchen-1.jpg";
import bedroom4 from "../../assets/images/kitchen-1.jpg";
import bedroom5 from "../../assets/images/kitchen-1.jpg";
import bedroom6 from "../../assets/images/kitchen-1.jpg";
import bedroom7 from "../../assets/images/kitchen-1.jpg";
import bedroom8 from "../../assets/images/kitchen-1.jpg";
import bedroom9 from "../../assets/images/kitchen-1.jpg";
import bedroom10 from "../../assets/images/kitchen-1.jpg";
import bedroom11 from "../../assets/images/kitchen-1.jpg";
import bedroom12 from "../../assets/images/kitchen-1.jpg";
import bedroom13 from "../../assets/images/kitchen-1.jpg";
import bathroom1 from "../../assets/images/kitchen-1.jpg";
import bathroom2 from "../../assets/images/kitchen-1.jpg";
import exterior3 from "../../assets/images/kitchen-1.jpg";
import exterior4 from "../../assets/images/kitchen-1.jpg";
import exterior5 from "../../assets/images/kitchen-1.jpg";

const livingRoomImages = [living1, living3, living2, living4];
const kitchenImages = [
	kitchen4,
	kitchen1,
	kitchen3,
	kitchen2,
	kitchen5,
	kitchen6,
	kitchen8,
	kitchen9,
	kitchen7,
	kitchen10,
];
const bedroomImages = [
	bedroom1,
	bedroom3,
	bedroom4,
	bedroom5,
	bedroom9,
	bedroom7,
	bedroom6,
	bedroom8,
	bedroom11,
	bedroom10,
	bedroom12,
	bedroom13,
	bedroom2,
];
const bathroomImages = [bathroom1, bathroom2];
const exteriorImages = [exterior4, exterior1, exterior2, exterior5, exterior3];

export default function Tour() {
	const livingRoomPhotos = livingRoomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const kitchenPhotos = kitchenImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const BedroomPhotos = bedroomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const BathroomPhotos = bathroomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const exteriorPhotos = exteriorImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));

	return (
		<>
			<NavBar links={["living", "kitchen", "bedrooms", "bathrooms", "exterior"]}>
				<Link to="/">
					<Button style="emphasis">
						<span style={{ display: "inline-block", rotate: "180deg" }}>➞</span> Back
					</Button>
				</Link>
			</NavBar>
			<Section sectionId="living" heading="Living room">
				<div className="photos">{livingRoomPhotos}</div>
			</Section>
			<Section sectionId="kitchen" heading="Kitchen and dining area">
				<div className="photos">{kitchenPhotos}</div>
			</Section>
			<Section sectionId="bedrooms" heading="Bedrooms">
				<div className="photos">{BedroomPhotos}</div>
			</Section>
			<Section sectionId="bathrooms" heading="Bathrooms">
				<div className="photos">{BathroomPhotos}</div>
			</Section>
			<Section sectionId="exterior" heading="Exterior">
				<div className="photos">{exteriorPhotos}</div>
			</Section>
			<Footer />
		</>
	);
}
