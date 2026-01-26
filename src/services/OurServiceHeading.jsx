import React from "react";
import KeyPoints from "../Home/KeyPoints";



const Services = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col text-center">
            <h1 className="fw-bold fs-1 ">
              Our <span className="text-warning">Services</span>
            </h1>
            <p className="fs-5 mt-3">
              LABOUR BRIDGES India offers a comprehensive range of manpower
              services tailored to the infrastructure, engineering,
              construction, and manufacturing sectors.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <KeyPoints />
          </div>
        </div>

     
      </div>
    </>
  );
};

export default Services;
