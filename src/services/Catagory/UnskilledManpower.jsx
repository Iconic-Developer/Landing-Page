import React from 'react';
import Endline from '../Endline'
import ServiceHeading from "../ServiceHeading";
import Templates from "../Templates";
import { PiLightningBold } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { IoBrushOutline } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { LuHardHat } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { motion } from "framer-motion";




const UnskilledManpower = () => {
  return <>
    <div className="container-fluid">

          <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
          <div className="row">
          <div className="col">
            <ServiceHeading
              title="Unskilled Manpower Supply"
              description="Expert professionals for specialized construction roles"
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
          <Templates title="Helpers" icon={<LuUsers />
} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Cleaners" icon={<IoBrushOutline />
} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Loaders" icon={<FiPackage />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Site Assistants" icon={<LuHardHat />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Fitters' Helpers" icon={<LuWrench />} />
        </div>
        <div className="col-6 col-md-3 col-lg-2  mb-4">
          <Templates title="Housekeeping Labour" icon={<LuHouse />} />
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

export default UnskilledManpower