import React from 'react'
import './KeyPoints.css';
import logo from '../images/construction-workers.jpg'
import { motion } from "framer-motion";

const KeyPoints = () => {
  return <>
  
<div className="container mt-4 p-4">

    


         <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="row">
      <div className="col-12 col-sm-6 mb-3   main-img">
            <img src={logo}  alt="" />
        </div>
    
        
          

      
        <div className="col-12 col-sm-6 d-flex flex-column align-items-center mb-3 img-animation">
          <h3 className='text-center'>Seamlessly Providing</h3>
          <ul className='mt-2 key'>
            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Skilled & Reliable Workforce</li>
            <li><i class="bi bi-check-circle-fill text-success me-2" /> Quick Labour Deployment</li>
            <li><i class="bi bi-check-circle-fill text-success me-2" /> Verified & Safety-Trained Staff</li>
            <li><i class="bi bi-check-circle-fill text-success me-2" /> Flexible Hiring Solutions</li>
            <li><i class="bi bi-check-circle-fill text-success me-2" /> Legal & Regulatory Compliance</li>
            <li><i class="bi bi-check-circle-fill text-success me-2" /> Multi-Sector Project Support</li>
          </ul>
        </div>
        </div>
        </motion.div>
    
</div>
  
  
  </>
}

export default KeyPoints