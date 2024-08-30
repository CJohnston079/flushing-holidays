import PropTypes from "prop-types";
import "../../styles/shared/CopyWithBento.css";

export default function CopyWithBento({ children, imgSrc, imgAltText }) {
	return (
		<div className="col-bento-container">
			<div className="copy">{children}</div>
			<img src={imgSrc} alt={imgAltText} />
		</div>
	);
}

CopyWithBento.propTypes = {
	children: PropTypes.node,
	imgSrc: PropTypes.string.isRequired,
	imgAltText: PropTypes.string,
};
