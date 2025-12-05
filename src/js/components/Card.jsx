import React from "react";


//create your first component
const Card = (props) => {
	return (
		<div className="card bg-dark m-2 text-white" style={{ width: "100px", height: "200px" }}>
			<div className="d-flex align-items-center justify-content-center text-white" style={{ fontSize: "180px", height: "100%" }}>{props.num}</div>
		</div>
	);
};

export default Card;