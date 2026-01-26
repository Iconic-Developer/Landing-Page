import React from "react";
import "./Templates.css";

const Templates = ({title,icon}) => {
  return (
    <>
      <div className="template pt-3 d-flex flex-column service-template">
        <div className="icons h2 mb-4">
         {icon}
        </div>
        <p className="h6 text-center  mb-3">{title}</p>
      </div>
    </>
  );
};

export default Templates;
