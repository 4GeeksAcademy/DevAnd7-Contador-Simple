import React from "react";

const Cardreloj = () => {
  return (
    <div
      className="card bg-dark m-2 text-white"
      style={{ width: "100px", height: "200px" }}>
		
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
        <i className="bi bi-stopwatch" style={{ fontSize: "90px" }}></i>
      </div>
    </div>
  );
};

export default Cardreloj;