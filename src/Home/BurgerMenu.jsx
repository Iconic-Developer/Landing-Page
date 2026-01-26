import { useState } from "react";
import "./BurgerMenu.css";
import logo from '../images/logo.jpg'
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Burger button */}
      <button className="burger-btn" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Side menu */}
      <div className={`side-menu ${open ? "open" : ""}`}>

        <div className="side-logo d-flex">
          <div className="brand-img">
            <img src={logo} height={35} alt="" />
          </div>
          <div>
            <p className="ms-2 fw-bold">LABOUR BRIDGE </p>
            <p className="text-primary fw-bold india">India</p>
          </div>
        </div>


        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>
        
        <nav>
         <ul className="fs-6">
          <li><Link>Home</Link></li>
          <li><Link>About Us</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>
Projects</Link></li>
          <li><Link>Milestones</Link></li>
          <li><Link>Contact Us
</Link></li>
          <li><Link>Career</Link></li>
         </ul>
        </nav>
      </div>
    </>
  );
}
