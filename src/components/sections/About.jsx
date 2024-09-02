import AmenitiesList from "./amenities/AmenitiesList";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import CopyWithBento from "../shared/CopyWithBento";
import CopyWithImg from "../shared/CopyWithImg";
import Section from "../shared/Section";
import "../../styles/sections/About.css";
import "../../styles/sections/Amenities.css";

import bentoImgA1 from "../../assets/images/living-room-1.jpg";
import bentoImgA2 from "../../assets/images/bedroom-one-en-suite-3.jpg";
import bentoImgB1 from "../../assets/images/kitchen-coffee-machine-1.jpg";
import bentoImgB2 from "../../assets/images/kitchen-2.jpg";
import bentoImgC1 from "../../assets/images/bedroom-one-1.jpg";
import bentoImgC2 from "../../assets/images/living-room-fireplace-1.jpg";

import spaceImg from "../../assets/images/living-room-3.jpg";
import facilitiesImg from "../../assets/images/kitchen-1.jpg";
import diningImg from "../../assets/images/local-harbour-house-pub-2.jpg";

export default function About() {
	const images = [
		{ src: bentoImgA1, alt: "Bedroom 1" },
		{ src: bentoImgA2, alt: "Bedroom 1 en suite" },
		{ src: bentoImgB1, alt: "Coffee machine" },
		{ src: bentoImgB2, alt: "Kitchen" },
		{ src: bentoImgC1, alt: "Living room" },
		{ src: bentoImgC2, alt: "View of fireplace from a table with a vase on" },
	];

	return (
		<Section sectionId="about">
			<CopyWithBento bentoImages={images}>
				<h3>The House</h3>
				<p className="intro-text">
					Unwind and relax in this calm, stylish space set just 6 metres from the water&apos;s edge.
					Whether you&apos;re a beach-goer or a thrill-seeker, you will love coming home to this
					polished, comfortable place.
				</p>
				<p>
					Our 3-storey Edwardian home, complete with 3 bedrooms and 2.5 bathrooms, comes with a
					180-degree view over the rooftops to Falmouth and the water from the top floor.
				</p>
				<p>
					Perfect for families, board games, playing cards & puzzles are in the living room, just
					what&apos;s needed for a night in with a glass of wine.
				</p>
				<p></p>
				<Modal buttonText="Full list of amenities ➞" heading="Amenities" showCloseButton={true}>
					{() => <AmenitiesList />}
				</Modal>
			</CopyWithBento>
			<CopyWithImg imgSrc={spaceImg} alt="View of living area" reverse={true} emphasis={true}>
				<h3>The Space</h3>
				<p>
					Providing plenty of space for guests throughout their stay, the property is arranged over
					three floors. On the ground floor you will find the airy open plan living/dining room,
					well-stocked kitchen, utility and a convenient downstairs toilet.
				</p>
				<p>
					The first floor features a spacious master bedroom with king size bed, a twin bedroom and
					a family bathroom with shower. On the second floor, there is a double bedroom with king
					size bed, plus an en-suite bathroom with shower and a fabulous view. Please be advised
					that the second flight of stairs leading up to the top floor is very steep and may be
					unsuitable for some.
				</p>
				<p>
					Outside, the private courtyard to the rear is decked, complete with an outdoor dining
					table large enough to accommodate everyone comfortably. Access to the courtyard is
					available from the kitchen or through a gate to the rear.
				</p>
			</CopyWithImg>
			<CopyWithImg
				imgSrc={facilitiesImg}
				alt="Looking through the kitchen to the back door"
				emphasis={true}
			>
				<h3>Facilities</h3>
				<p>
					The property offers central heating with instant hot water on demand, along with a cosy
					log burner in the living area.
				</p>
				<p>
					The kitchen boasts double electric ovens, a hob, full-size dishwasher, spacious fridge,
					Nespresso compatible coffee machine and Nutribullet.
				</p>
				<p>
					Next door, in the utility, you will find a washing machine, freezer, microwave, Magimix
					and juice extractor. Additionally, guests can enjoy amenities such as superfast fibre
					WiFi, a BOSE music system and a smart TV with Amazon Fire Stick.
				</p>
				<p>
					For leisure activities, a selection of board games, cards and puzzles are neatly stored
					under the TV for your entertainment. There are also lots of books and magazines dotted
					around the house with your own little reading nook on the first floor landing.
				</p>
			</CopyWithImg>
			<CopyWithImg imgSrc={diningImg} alt="Harbour House pub" emphasis={true} reverse={true}>
				<h3>Eat & Drink</h3>
				<p>
					Craving a delicious meal or a local brew? Look no further than Harbour House, The Royal
					Standard and The Waterside Restaurant, all just a stone&apos;s throw away... plus,
					there&apos;s a delightful village shop around the corner (Their hot pasties are a must at
					lunchtime – delicious!).
				</p>
				<p>
					Falmouth is packed with great eateries to suit every taste and pocket, but ask if you
					would like any recommendations for on the doorstep or a little further afield.
				</p>
				<ul className="button-list">
					<li>
						<a target="_blank" href="https://harbourhouseflushing.co.uk/">
							<Button style="emphasis">Harbour House Pub ➞</Button>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://royalstandardflushing.co.uk/">
							<Button style="emphasis">The Royal Standard Pub ➞</Button>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://thewatersideflushing.com/">
							<Button style="emphasis">The Waterside Restaurant ➞</Button>
						</a>
					</li>
				</ul>
			</CopyWithImg>
			<h3>Other information</h3>
			<div className="other-info-container">
				<div className="other-info">
					<h4>Family essentials</h4>
					<p>
						We have your family&apos;s needs covered with readily available amenities including a
						travel cot, baby bath, changing mat and highchair. We also provide both indoor and
						outdoor clothes drying racks, along with an iron and ironing board for any last-minute
						touch-ups.
					</p>
				</div>
				<div className="other-info">
					<h4>Parking</h4>
					<p>
						Convenient on-street parking is available directly across from the house on the road
						leading down to the property, but feel free to park up outside the house to offload your
						luggage.
					</p>
				</div>
				<div className="other-info">
					<h4>Getting around</h4>
					<p>
						Situated in the heart of the village, the bus stop is conveniently located right
						outside. And hey, if you spot some fellow holidaymakers or locals huddled under the
						front porch, don&apos;t worry, they&apos;re not lost - they&apos;re just taking shelter
						from the sun/rain while waiting for the bus. It&apos;s like our own little holiday
						hideout!
					</p>
					<p>
						The buses operate hourly, offering a practically private shuttle service to Falmouth.
						Alternatively, ferries depart from Flushing Quay to Falmouth and run every 30 minutes
						(every hour off season), all year-round. For a unique travel experience, consider the
						Falmouth Water Taxi, providing a delightful journey from Flushing Quay directly to
						Falmouth - a perfect way to explore the area.
					</p>
				</div>
				<div className="other-info">
					<h4>Property access</h4>
					<p>
						Guests will have exclusive access to the entire property and private courtyard. We leave
						one key in the lockbox and a useful second in the long basket on the shelf by the
						kitchen. Kindly note that a fee of £100 will be applied for any lost keys. We kindly ask
						that you handle them with care. For added security and convenience, we recommend leaving
						the keys in the lockbox whenever you depart the house.
					</p>
				</div>
			</div>
		</Section>
	);
}
