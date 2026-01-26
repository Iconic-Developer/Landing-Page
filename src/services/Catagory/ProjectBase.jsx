import React from 'react'
import Endline from '../Endline'
import ServiceHeading from "../ServiceHeading";
import Templates from "../Templates";
import { PiLightningBold } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { LuBuilding } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FiCreditCard } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";


import { motion } from "framer-motion";


const ProjectBase = () => {
  return  <>
    <div className="container-fluid">

          <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="row">
          <div className="col">
            <ServiceHeading
              title="Project-Based Staffing"
              description="Customized workforce solutions for specific project needs"
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
        <div className="col-6 col-md-3 col-lg-2   mb-4">
          <Templates title="Short-term Projects" icon={<IoMdTime />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Long-term Installations" icon={<LuBuilding />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Timeline-specific Deployment" icon={<SlCalender />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Budget-optimized Solutions" icon={<FiCreditCard />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2   mb-4">
          <Templates title="Skill-matched Staffing" icon={<FiUserCheck />} />
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

export default ProjectBase