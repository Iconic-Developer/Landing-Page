import React from "react";
import { motion } from "framer-motion";

const PrtnerSection = ({children}) => {
  return (
    <>
        <motion.div
      initial={{ opacity: 0, scale:0 }}
      whileInView={{ opacity: 1,scale:1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
        <div className="container-fluid my-4  ">
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
    </motion.div>
    
 
      
    </>
  );
};

export default PrtnerSection;
