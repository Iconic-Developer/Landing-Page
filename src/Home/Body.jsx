import React from "react";
import "./Body.css";
import './Animation.css';
import logo from "../images/construction-workers.jpg";
import { PiMedalFill } from "react-icons/pi";
import { useRef, useState,useEffect } from "react";



const Body = () => {
  return (
    <>
    
    <main>
      <div className="container-fluid  body">

        <div className="row my-4">

          <div className="col-12 col-lg-6 mt-5 animated ">
            <h1 className=" fw-bold">
              Building India's{" "}
              <span className="text-warning">Infrastructure</span>, 
            </h1>
            <h1 className="mb-3 fw-bold">One
              Workforce at a Time</h1>
            <p className="para my-4 fs-5">
              India's most trusted manpower outsourcing company, connecting
              skilled professionals with industry leaders across construction,
              manufacturing, and infrastructure sectors.
            </p>
            <div className="my-5">
            <button className="btn btn-lg btn-warning  quote-btn">Get a Quote <i className="bi bi-arrow-right"></i></button>
            <button type="button" className="btn btn-lg mx-3  service-btn ">Our Services</button>
            </div>
          </div>

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

    <div className="row animated">
        <div className="col overview position-relative text-center my-4 ">
            <h1>Overview</h1>
        </div>
    </div>

    <div className="container my-4 ">
        <div className="row">
            <div className="col text-center">
                <span><i className="bi bi-people-fill text-warning fs-1"></i></span>
                <div className="people-count fw-bold fs-3"><Counter target={35000}  />+</div>
                <div className="text-secondary fs-6">Active Workers</div>
            </div>
            <div className="col text-center">
                <span><i className="bi bi-buildings-fill text-warning fs-1"></i></span>
                <div className="people-count fw-bold fs-3"><Counter target={500}  />+</div>
                <div className="text-secondary fs-6">Projects Completed</div>
            </div>
            <div className="col text-center">
                <span className="fs-1 text-warning">   <PiMedalFill /></span>
                <div className="people-count fw-bold fs-3"><Counter target={50}  />+</div>
                <div className="text-secondary fs-6">Trusted Clients</div>
             
            </div>
        </div>
    </div>

      </div>
      </main>
    </>
  );
};

export default Body;

function Counter({ target, duration = 2000 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const current = Math.floor(progress * target);

            setValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
    </span>
  );
}

