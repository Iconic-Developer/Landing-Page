import React from 'react';
import styles from './NeedWorkforce.module.css';

const NeedWorkforce = () => {
  return  <>
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
    </>
}

export default NeedWorkforce