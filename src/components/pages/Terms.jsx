import Button from "../shared/Button.jsx";
import NavBar from "../nav/NavBar.jsx";
import { Link } from "react-router-dom";
import Section from "../shared/Section.jsx";
import Footer from "../sections/Footer.jsx";

import "../../styles/pages/Terms.css";

export default function Terms() {
	return (
		<>
			<NavBar links={[]}>
				<Link to="/#booking">
					<Button style="emphasis">
						<span style={{ display: "inline-block", rotate: "180deg" }}>➞</span> Back
					</Button>
				</Link>
			</NavBar>
			<Section sectionId="terms" heading="Terms and Conditions">
				<p>
					<b>
						By paying the 50% booking deposit (or entire rental in case of a late booking) the
						renter confirms that they have read and agreed with these terms & conditions.
					</b>
				</p>
				<ul>
					<li>
						By paying the 50% booking deposit (or entire rental in case of a late booking) the
						renter confirms that they have read and agreed with these terms & conditions.
					</li>
					<li>
						All bookings are provisional until confirmed by email and your deposit/full payment has
						been received.
					</li>
					<li>
						We reserve the right to refuse any booking we consider to be unsuitable for our
						property.
					</li>
					<li>Prices are as quoted, but we reserve the right to correct any error.</li>
					<li>
						The payment of a 50% non-refundable deposit ensures reservation and is subject to
						acceptance of these terms & conditions.
					</li>
					<li>The balance is payable no later than one month before the arrival date.</li>
					<li>
						In the event of excessive damage caused during a guests’ stay, the owners of Owl Cottage
						reserves the right to claim compensation.
					</li>
					<li>
						Period of rental commences at 16:00 on day of arrival, and ends at 10:00 on day of
						departure. Alterations to arrival and departure times are by prior arrangement only. We
						will endeavour to accommodate these requests, but it may not always be possible.
					</li>
					<li>
						On departure the property is to be left in the same state of tidiness and cleanliness
						that was accepted on arrival.
					</li>
					<li>
						If upon your departure the cottage requires excess cleaning, a charge of £100 will be
						required.
					</li>
					<li>
						Dogs are very welcome at our Flushing House, but must be included in the booking at a
						fee of £15 per dog per week. We do not accept other pets. Please note that the rear
						courtyard must not be used for dogs to do their business. There are ample spots around
						the village, which are better suited.
					</li>
					<li>
						We understand that accidents happen and not all will result in you being charged, but
						please report breakages and damages, so that they may be replaced / rectified in time
						for our next guests.
					</li>
					<li>
						Your booking is for a maximum of six people, including children. Additional guests
						cannot be accommodated.
					</li>
					<li>
						Parents remain responsible for the behaviour of their children throughout their stay.
					</li>
					<li>
						We regret we cannot be held responsible for interruption in services e.g. electricity,
						water. In the unlikely event that these occur please inform us immediately and we will
						endeavour to do our best to resolve the problem as soon as possible.
					</li>
					<li>
						The owners shall not be liable to you or any member of your party for any loss or damage
						to you, your property or vehicle however caused. We strongly advise holiday insurance,
						which covers you for all accidents. We cannot be held responsible for conditions outside
						our control where you are unable to arrive at the property during the period that it is
						booked.
					</li>
					<li>
						The owners reserve the right to terminate your stay if you or members of your party are
						believed to be causing a nuisance or are not treating the property with due respect. In
						this event no refund will be made for the unused portion of the holiday.
					</li>
					<li>
						The owners respect your right to privacy whilst staying in the property, but reserve the
						right to enter the property should this be necessary to carry out urgent repairs.
					</li>
					<li>
						Once the balance has been paid one month prior to your arrival, the total becomes
						non-refundable.
					</li>
				</ul>
			</Section>
			<Footer />
		</>
	);
}
