import React from "react";
import "./WhyChoose.css";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";
import { motion } from "framer-motion";

const WhyChooseContent = () => {
  return (
    <>
      <div className="container-fluid my-4">

        
        <div className="row ">
              <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
         <div className="col text-center my-3">
            <h1 className="fw-bold fs-2">
              Why Chooce{" "}
              <span className="text-warning">LABOUR BRIDGES India</span>
            </h1>
            <p className="fs-5 mt-3">Our unique selling propositions that set us apart</p>
          </div>
    </motion.div>
       
        </div>

        <div className="row my-3 p-2 ">

          <div className="col-12 col-md-6 col-xl-3 mb-4 ">

              <motion.div
        initial={{ opacity: 0, y: 100,scale:0 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      transition={{ duration: .7, ease: "linear" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="card shadow-lg ">
              <div className="card-body text-center">

                <div className="icon-box">
                     <span className="icon mt-2 h2">
                  {< FaRegStar />}
                </span>
                </div>
             

                <h6 className="card-subtitle mt-4 text-dark h5 fw-bold">
                  Timely Diployment
                </h6>
                <p className="card-text text-secondary  my-3 ">
                  Rapid workforce deployment with 95% on-time delivery rate
                </p>
              </div>
            </div>
    </motion.div>
            
          </div>


 <div className="col-12 col-md-6 col-xl-3 mb-4 ">
    <motion.div
 initial={{ opacity: 0, y: 100,scale:0 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      transition={{ duration: .7, ease: "linear" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="card shadow-lg ">
              <div className="card-body text-center">

                <div className="icon-box">
                     <span className="icon mt-2 h2">
                  {<IoMdTime />
}
                </span>
                </div>
             

                <h6 className="card-subtitle mt-4 text-dark h5 fw-bold">
               Quality Assurance
                </h6>
                <p className="card-text text-secondary  my-3 ">
                 Rigorous screening and training processes ensure top-quality workforce
                </p>
              </div>
            </div>
    </motion.div>
            
          </div>


 <div className="col-12 col-md-6 col-xl-3 mb-4 ">

    <motion.div
  initial={{ opacity: 0, y: 100,scale:0 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      transition={{ duration: .7, ease: "linear" }}
      viewport={{ once: true, amount: 0.1 }}
    >
         <div className="card shadow-lg ">
              <div className="card-body text-center">

                <div className="icon-box">
                     <span className="icon mt-2 h2">
                  {<LuUsers />
}
                </span>
                </div>
             

                <h6 className="card-subtitle mt-4 text-dark h5 fw-bold">
               Skilled Workforce
                </h6>
                <p className="card-text text-secondary  my-3 ">
                 Access to a vast network of skilled and certified professionals
                </p>
              </div>
            </div>
    </motion.div>
         
          </div>

 <div className="col-12 col-md-6 col-xl-3 mb-4 ">

    <motion.div 
     initial={{ opacity: 0, y: 100,scale:0 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      transition={{ duration: .7, ease: "linear" }}
      viewport={{ once: true, amount: 0.1 }}
    >
       <div className="card shadow-lg ">
              <div className="card-body text-center">

                <div className="icon-box">
                     <span className="icon mt-2 h2">
                  {<LuBuilding />
}
                </span>
                </div>
             

                <h6 className="card-subtitle mt-4 text-dark h5 fw-bold">
              Compliance Excellence
                </h6>
                <p className="card-text text-secondary  my-3 ">
                 Full legal compliance and documentation management
                </p>
              </div>
            </div>
    </motion.div>
           
          </div>

         
        </div>
      </div>
    </>
  );
};

export default WhyChooseContent;
