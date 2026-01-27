import React from 'react'
import './KeyPoints.css';
import logo from '../images/construction-workers.jpg'
import { motion } from "framer-motion";

const KeyPoints = () => {
  return <>
  
<div className="container mt-4 p-4">

  

    
      <div className="row">
      <div className="col-12 col-sm-6 mb-3   main-img">
             <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut",delay:.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img src={logo}  alt="" />
       </motion.div>
            
        </div>
    
        
          

      
        <div className="col-12 col-sm-6 d-flex flex-column align-items-center mb-3 ">
             <motion.div
     initial={{ opacity: 0, x: 200, }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut",delay:0.3 }}
      viewport={{ once: true, amount: 0.3 }}
    >
        <h3 className='text-center'>Seamlessly Providing</h3>
       </motion.div>
        
          <ul className='mt-2 key'>
            <li>          <motion.div
      initial={{ opacity: 0, x: 200, }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut",delay:0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <i class="bi bi-check-circle-fill text-success me-2"></i> Skilled & Reliable Workforce
       </motion.div></li>


            <li>           <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay:0.7}}
      viewport={{ once: true, amount: 0.3 }}
    >
      <i class="bi bi-check-circle-fill text-success me-2" /> Quick Labour Deployment
       </motion.div></li>
            <li>
              <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut",delay:0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <i class="bi bi-check-circle-fill text-success me-2" /> Verified & Safety-Trained Staff
       </motion.div></li>
            <li>              <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut",delay:0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <i class="bi bi-check-circle-fill text-success me-2" /> Flexible Hiring Solutions
       </motion.div>
</li>
            <li>        <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut",delay:0.9 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <i class="bi bi-check-circle-fill text-success me-2" /> Legal & Regulatory Compliance
       </motion.div></li>
            <li><motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut",delay:1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <i class="bi bi-check-circle-fill text-success me-2" /> Multi-Sector Project Support
       </motion.div></li>
          </ul>
        </div>
        </div>
       
    
</div>
  
  
  </>
}

export default KeyPoints