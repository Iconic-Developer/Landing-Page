import React from "react";
import logo from '../images/logo.jpg';
import './Nav.css';
import {NavLink} from 'react-router-dom';
import BurgerMenu from "./BurgerMenu";






const Nav = () => {

  

  return (

    
    <>




      <header className=" mw-100 ">

       


        <nav className="navbar d-flex justify-content-between align-items-center">

            <div className="navbar-brand ms-4  d-flex  align-items-center">
                <img src={logo} alt="" height={30} className="" />
                <h1 className="d-inline ms-2 fs-5">LABOUR BRIDGES India</h1>
            </div>

            <ul className="d-lg-flex gap-4 me-5 mt-2 fs-6 align-items-baseline d-none ">
              <li><NavLink >Home </NavLink></li>
                <li><NavLink >About Us </NavLink></li>
                <li><NavLink >Services </NavLink></li>
                <li><NavLink >Projects </NavLink></li>
                <li><NavLink >Milestones </NavLink></li>
                <li><NavLink >Contact Us </NavLink></li>
                <li><NavLink >Career </NavLink></li>
                
               
            </ul>
              
            <div className="burger d-block d-lg-none me-2">
          <BurgerMenu />
        </div>
        
        </nav>

      


      </header>
    
    </>
  );
};

export default Nav;
