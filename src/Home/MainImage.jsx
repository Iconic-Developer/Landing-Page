import React from 'react'

const MainImage = () => {
  return (
    <div>
             <div className="col-12 col-xl-6 mt-5 position-relative  animated">
            <div className="img">
              <img src={logo} alt=""   />
                
            </div>

            <div className="div">
               <div className="safety">
                <div className="">Safety First</div>
                <div>100% Compliance</div>
               </div>

               <div className="certified">
                <div className="">Certified</div>
                <div>Professional Workers</div>
               </div>
           
            </div>
             
          </div>
    </div>
  )
}

export default MainImage