import React, { useRef,useLayoutEffect,useEffect } from "react";
import KeyPoints from "../Home/KeyPoints";
import { motion } from "framer-motion";





const Services = () => {




  return (
    <>
      <div  className="container-fluid mt-5 ">

         <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear" }}
      viewport={{ once: true, amount: 0.3 }}
    >
        <div   className="row ref" >
          <div className="col text-center ">
            <h1 className="fw-bold fs-1 ref ">
              Our <span className="text-warning">Services</span>
            </h1>
            <p className="fs-5 mt-3">
              LABOUR BRIDGES India offers a comprehensive range of manpower
              services tailored to the infrastructure, engineering,
              construction, and manufacturing sectors.
            </p>
          </div>
        </div>
      
    </motion.div>
      
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
