import React from "react";
import "./Footer.css";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row ps-3 pt-5  ">
            <div className="col-12 col-sm-6 col-lg-3 mb-5 ">
              <h1 className="fs-5  fw-bold">Labour Bridges</h1>
              <p className="mt-3">
                India's most trusted manpower outsourcing company, connecting
                skilled talent with industry leaders since 2023.
              </p>
              <div className="contact">
                <i class="bi bi-geo-alt text-warning me-2"></i> Chennai, Tamil
                Nadu
              </div>
              <div className="contact"> 
                <i class="bi bi-telephone text-warning me-2 mt-2"></i>+91 40 4567
                8902
              </div>
              <div className="contact">
                <i class="bi bi-envelope text-warning me-2"></i>
                info@labourbridges.com
              </div>

              <div id="social" className="mt-3">
                <span className="social">
                  <i class="bi bi-instagram"></i>
                </span>
                <span className="social">{<CiTwitter />}</span>
                <span className="social">{<FiFacebook />}</span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <h1 className="fs-6 ms-3">Quick Links</h1>
              <ul className="mt-3" >
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Clients</li>
                <li>Milestons</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h1 className="fs-6 ms-3  ">Our Services</h1>
              <ul className="mt-3" >
                <li>Skilled Manpower Supply</li>
                <li>Unskilled Manpower Supply</li>
                <li>Project-Based Staffing</li>
                <li>Turnkey Workforce Solutions</li>
                <li>NMR & Contract Labour</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h1 className="fs-6 ms-3">Industries We Serve</h1>
              <ul  className="mt-3">
                <li>Construction</li>
                <li>Manufacturing</li>
                <li>Infrastructure</li>
                <li>Real Estate</li>
                <li>Logistics</li>
                <li>EPC Sectors</li>
              </ul>
            </div>
          </div>

          <div className="row d-flex align-items-baseline   pb-2">
            <div className="col-12 col-md-11 go-top-middle">
              <p>
                © 2025 LABOURBridge India. All rights reserved. | Privacy Policy
                | Terms of Service
              </p>
            </div>
            <div className="col-12 col-md-1 go-top-middle">
               <div id="social" >
                
                <span className="social  go-top">
                  <i class="bi bi-arrow-up-short fs-3 fw-bold text-dark "></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
