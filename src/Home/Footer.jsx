import React from "react";
import "./Footer.css";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import {Link} from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });
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
                
                <p className="h6"> <i class="bi bi-geo-alt text-warning me-2 h5"></i>  Chennai, Tamil
                Nadu</p>
              </div>
              <div className="contact"> 
                <p><i class="bi bi-telephone text-warning me-2 mt-2"></i> +91 40 4567
                8902</p>
                
              </div>
              <div className="contact">
                
                <p><i class="bi bi-envelope text-warning me-2"></i> info@labourbridges.com </p>
              </div>

              <div id="social" className="mt-4">
                <span className="social">
                  <i class="bi bi-instagram"></i>
                </span>
                <span className="social">{<CiTwitter />}</span>
                <span className="social">{<FiFacebook />}</span>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <p className="h5 ms-3">Quick Links</p>
              <ul className="mt-3 " >
                <li><Link>Home</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Milestones</Link></li>
                <li><Link>Contact Us</Link></li>
            
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <p className="h5 ms-3">Our Services</p>
             <ul className="mt-3 " >
                <li><Link>Skilled Manpower Supply</Link></li>
                <li><Link>Unskilled Manpower Supply</Link></li>
                <li><Link>Project-Based Staffing</Link></li>
                <li><Link>Turnkey Workforce Solutions</Link></li>
                <li><Link>NMR & Contract Labour</Link></li>
               
            
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <p className="h5 ms-3">Industries We Serve</p>
          <ul className="mt-3 " >
                <li><Link>Construction</Link></li>
                <li><Link>Manufacturing</Link></li>
                <li><Link>Infrastructure</Link></li>
                <li><Link>Real Estate</Link></li>
                <li><Link>Logistics</Link></li>
                <li><Link>EPC Sectors</Link></li>
               
            
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
            <div className="col-12 col-md-1 go-top-middle" onClick={scrollToTop}>
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
