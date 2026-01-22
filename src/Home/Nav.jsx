import React, { useRef,useState } from "react";
import logo from '../images/logo.jpg';
import './Nav.css';
import {NavLink,Link} from 'react-router-dom'
const Nav = () => {

    const [open, setOpen] = useState(false);
  

  return (

    
    <>

 {/* Menu Icon */}
      

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <ul className="menu-list">
             <li><NavLink >Home </NavLink></li>
                <li><NavLink >About Us </NavLink></li>
                <li><NavLink >Services </NavLink></li>
                <li><NavLink >Projects </NavLink></li>
                <li><NavLink >Milestones </NavLink></li>
                <li><NavLink >Contact Us </NavLink></li>
                <li><NavLink >Career </NavLink></li>
        </ul>
      </div>











      <header className=" mw-100 animated">

       


        <nav className="navbar d-flex justify-content-between align-items-center">

            <div className="navbar-brand ms-4  d-flex  align-items-center">
                <img src={logo} alt="" height={30} className="" />
                <h1 className="d-inline ms-2 fs-5">LABOUR BRIDGES India</h1>
            </div>

            <ul className="d-lg-flex gap-4 me-5 mt-2 fs-6 align-items-baseline d-none ">
                <li><Link >Home </Link></li>
                <li><Link >About Us </Link></li>
                <li><Link >Services </Link></li>
                <li><Link >Projects </Link></li>
                <li><Link >Milestones </Link></li>
                <li><Link >Contact Us </Link></li>
                <li><Link >Career </Link></li>
                
               
            </ul>

      
        
        </nav>
    


      </header>
                  <div className="d-block d-lg-none">
        <button className="menu-btn d-block d-lg-none" onClick={() => setOpen(true)}>
        ☰
      </button>
       </div>
    </>
  );
};

export default Nav;
