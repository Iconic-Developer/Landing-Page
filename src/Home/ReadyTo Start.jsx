import React from "react";
import "./ReadyToStart.css";

const ReadyToStart = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="excellence-body my-4 p-5">
          <h1 className="fw-bold fs-3 text-white">
            Ready to Start Your Next Project?
          </h1>
          <p className="mt-3 fs-5 ">
            Join these industry leaders and experience the LABOURBridge
            difference. From skilled technicians to project management support,
            we deliver excellence.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <span className="span text-white">
              <i class="bi bi-check2-circle text-warning mx-1"></i>Zero Injury Records
            </span>
            <span className="span text-white ">
              <i class="bi bi-check2-circle text-warning mx-1"></i>On-time Delivery

            </span>
            <span className="span text-white">
              <i class="bi bi-check2-circle text-warning mx-1"></i>Multi-state Operations

            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyToStart;
