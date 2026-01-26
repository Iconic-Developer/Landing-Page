import React from "react";

const ServiceCard = ({title,description,children}) => {

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row ">
          <div className="col text-center ">
            <h1 className="fs-2 fw-bold">{title}</h1>
            <p className="fs-5 mt-4">{description}</p>
          </div>
        </div>

     

        </div>
        

  


      
    </>
  );
};

export default ServiceCard;
