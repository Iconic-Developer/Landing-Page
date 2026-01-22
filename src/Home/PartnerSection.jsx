import React from "react";

const PrtnerSection = ({children}) => {
  return (
    <>
      <div className="container-fluid my-4 Scrolled ">
        <div className="row  shadow-none p-3   bg-white rounded  ">
          <div className="col text-center my-3 ">
            <h1 className="fw-bold fs-1">
              Trusted by <span className="text-warning">Indrustry Leaders</span>
            </h1>
            <p>
              We're proud to work with India's most respected companies,
              delivering exceptional workforce solutions across diverse projects
              and industries.
            </p>
          </div>
          {children}
        </div>
      </div>

      
    </>
  );
};

export default PrtnerSection;
