import React from "react";

import propTypes from "prop-types";

//create your first component
const Card = ({ number, textSize }) => {
	return (
		<div className="card bg-dark m-2 text-white" style={{ width: "100px", height: "200px" }}>
			<div className="d-flex align-items-center justify-content-center text-white" style={{ fontSize: `${textSize}`, height: "100%" }}>{number}</div>
		</div>
	);
};

Card.propTypes = {
	number: propTypes.string,
	textSize: propTypes.string
}

export default Card;