import React from 'react';
import styles from './NeedWorkforce.module.css';
import { motion } from "framer-motion";
const NeedWorkforce = () => {
  return  <>

      <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container-fluid text-center">
        <div className={styles['excellence-body'] }  >
          <h1 className="fw-bold fs-3 text-daek">
            Need Custom Workforce Solutions?
          </h1>
          <p className={styles[`excellence-body p`] }>
         Let us create a tailored manpower strategy for your specific project requirements.
          </p>

            <div>
                <button className='btn btn-lg btn-dark text-white'>Get Custom Quote</button>
            </div>
        </div>
      </div>
    </motion.div>
      
    </>
}

export default NeedWorkforce