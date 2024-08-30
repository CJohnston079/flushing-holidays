import CopyWithImg from "../shared/CopyWithImg";
import Section from "../shared/Section";
import "../../styles/sections/Amenities.css";

import cen17 from "../../assets/images/history-pendennis-castle.jpg";
import cen18 from "../../assets/images/history-packet-ship.jpg";
import cen19 from "../../assets/images/history-trefusis-point.jpg";

export default function History() {
	return (
		<Section sectionId="dogs-welcome" heading="History">
			<CopyWithImg imgSrc={cen17} imgAltText="Pendennis Castle">
				<h3>17th Century</h3>
				<p>
					Henry VIII intended to build a castle on Trefusis Point, to accompany those built at
					Pendennis and St. Mawes, but due to the expensive wars of the time was unable to finance
					it.
				</p>
				<p>
					The village was certainly founded before 1653, but there is disagreement about whether any
					houses exist from the late 17th century. Nankersey, meaning valley of the reed swamp was,
					and continued to be, a separate dwelling on the road into the village of Flushing.
				</p>
				<p>
					The village was given its name by Dutch engineers, probably directed by Cornelius
					Vermuyden the elder, who built the two main quays in the village. The grand houses on St
					Peter&apos;s Hill, the road that leads into the village, were owned by captains of the
					packet ships (mail-boats) that docked in nearby Falmouth.
				</p>
			</CopyWithImg>
			<CopyWithImg imgSrc={cen18} imgAltText="18th Century packet ship">
				<h3>18th Century</h3>
				<p>
					James Silk Buckingham (1786–1855) spent his childhood here and writes that most of the
					packet captains and officers, and their families, as well as the crews, lived in the
					village.
				</p>
				<p>
					Dinners, balls and evening parties were held most evenings at some of the captains&apos;
					houses and there were dances for the sailors at the humbler places. Much of it paid for by
					prize money and the profits from the contraband carried by the packet ships (The
					forerunner of the post office or UPS out to the British Colonies).
				</p>
			</CopyWithImg>
			<CopyWithImg imgSrc={cen19} imgAltText="Trefusis Point">
				<h3>19th & 20th Century</h3>
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
			</CopyWithImg>
		</Section>
	);
}
