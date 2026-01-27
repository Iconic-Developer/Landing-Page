import React from 'react'
import Endline from '../Endline'
import ServiceHeading from "../ServiceHeading";
import Templates from "../Templates";
import { PiLightningBold } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { LuFileText } from "react-icons/lu";
import { FiCreditCard } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";


const ContractBase = () => {
  return (
    <>
      <div className="container-fluid">
            <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
         <div className="row">
            <div className="col">
              <ServiceHeading
                title="NMR and Contract-Based Labour"
                description="Flexible employment models for construction firms"
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
              <Templates title="Daily Wage Workers" icon={<IoMdTime />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Contract-based Labour" icon={<LuFileText />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Payroll Services" icon={<FiCreditCard />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates
                title="Compliance Management" icon={<FiBriefcase />}
              />
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
  );
}

export default ContractBase