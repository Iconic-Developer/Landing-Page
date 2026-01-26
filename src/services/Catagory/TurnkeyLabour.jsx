import React from 'react';
import Endline from '../Endline'
import ServiceHeading from "../ServiceHeading";
import Templates from "../Templates";
import { PiLightningBold } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { LuHouse } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { motion } from "framer-motion";





const TurnkeyLabour = () => {
  return  <>
    <div className="container-fluid">

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
       <div className="row">
          <div className="col">
            <ServiceHeading
              title="Turnkey Labour Solutions"
              description="Complete end-to-end workforce management"
            />
          </div>
        </div>
    </motion.div>


      
      <div className="row d-flex justify-content-center mt-4">
       
           <motion.div
     initial={{ opacity: 0, y: 100,scale:0 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      transition={{ duration: .5, ease: "linear" }}
      viewport={{ once: true, amount: 0.3 }}
    >
        
        <div className="row d-flex justify-content-center">
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Recruitment & Onboarding" icon={<GoPeople />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Accommodation Management" icon={<LuHouse />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Compliance Handling" icon={<FiFileText />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Complete Project Staffing" icon={<LuBriefcase />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Single-point Contact" icon={<FiUserCheck />} />
        </div>
 




      </div>
    </motion.div>
      
        <div className="row">
            <div className="col">
                <Endline />
            </div>
        </div>
      </div>
      </div>
    </>
}

export default TurnkeyLabour