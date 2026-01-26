import React from "react";
import "./Body.css";
import "./Animation.css";
import logo from "../images/labour.jpg";
import { PiMedalFill } from "react-icons/pi";
import { useRef, useState, useLayoutEffect,useEffect } from "react";
import gsap  from "gsap";

const Body = () => {


  let heading =useRef();
  let quote =useRef();
  let twitter = useRef();
  let insta = useRef();
  let whatsapp = useRef();
  let fb = useRef();
  let counter = useRef();

   useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heading.current, {
        x: -100,
        opacity:0,
        duration: 1,
        delay:.5,
        
        ease: "linear"
      });
    }, heading);

    return () => ctx.revert(); 
  }, []);

   useLayoutEffect(() => {
    const btn = gsap.context(() => {
      gsap.from(quote.current, {
        x: -200,
        opacity:0,
        duration: 1,
        delay:1,
      
        ease: "linear"
      });
    }, quote);

    return () => btn.revert(); 
  }, []);


   useLayoutEffect(() => {
    const twt = gsap.context(() => {
      gsap.from(twitter.current, {
        x: -100,
        opacity:0,
        duration: .5,
        delay:2,
      
        ease: "linear"
      });
    }, twitter);

    return () => twt.revert(); 
  }, []);


   useLayoutEffect(() => {
    const ist = gsap.context(() => {
      gsap.from(insta.current, {
        x: -200,
        opacity:0,
        duration: .5,
        delay:2.5,
      
        ease: "linear"
      });
    }, insta);

    return () => ist.revert(); 
  }, []);
   useLayoutEffect(() => {
    const wht = gsap.context(() => {
      gsap.from(whatsapp.current, {
        x: -200,
        opacity:0,
        duration: .5,
        delay:3,
      
        ease: "linear"
      });
    }, whatsapp);

    return () => wht.revert(); 
  }, []);
   useLayoutEffect(() => {
    const fcb = gsap.context(() => {
      gsap.from(fb.current, {
        x: -200,
        opacity:0,
        duration: .5,
        delay:3.5,
      
        ease: "linear"
      });
    }, fb);

    return () => fcb.revert(); 
  }, []);


   useLayoutEffect(() => {
    const ctr = gsap.context(() => {
      gsap.from(counter.current, {
        scale: 0,
        opacity:0,
        duration: 1,
        delay:1,
      
        ease: "linear"
      });
    }, counter);

    return () => ctr.revert(); 
  }, []);




  
  return (
    <>
      <main>
        <div className="container-fluid my-2 body">
          <div className="row flex-wrap-reverse my-5 p-3">
            <div className="col-12 col-md-8 mt-5  ">

              <div ref={heading}>
              <h1  className=" fw-bold mt-4 ">
                Building India's{" "}
                <span className="text-warning">Infrastructure</span>,
              </h1>
              <h1  className="mb-3 fw-bold ">One Workforce at a Time</h1>
              <p className="para my-4 fs-5 ">
                India's most trusted manpower outsourcing company, connecting
                skilled professionals with industry leaders across construction,
                manufacturing, and infrastructure sectors.
              </p>
              </div>



              <div className="my-5">
                <div className="row buttons">
                  <div ref={quote} className="col-12 col-sm-5 gap-3 d-flex flex-wrap">
                    <button  className="btn btn-lg btn-warning  quote-btn ">
                      Get a Quote <i className="bi bi-arrow-right"></i>
                    </button>
                    <button type="button" className="btn btn-lg  service-btn ">
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="row gap-4  social-media">
                  <div ref={fb} className="col-2">
                    <div className="media-icon">
                      <i class="bi bi-facebook"></i>{" "}
                    </div>
                  </div>
                  <div ref={whatsapp} className="col-2">
                    <div className="media-icon">
                      <i class="bi bi-whatsapp "></i>
                    </div>
                  </div>
                  <div ref={insta} className="col-2">
                    <div className="media-icon">
         <i class="bi bi-instagram"></i>{" "}
                    </div>
                   
                  </div>
                  <div ref={twitter} className="col-2">
                    <div className="media-icon">
                    <i class="bi bi-twitter"></i>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div  className="col-12 col-md-4 d-flex justify-content-center align-items-center body-img heading-animation ">
              <img src={logo} alt="" height={500} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="ruler"></div>
            </div>
          </div>
          {/* counter */}

          <div ref={counter} className="container my-4 ">
            <div className="row">
              <div className="col text-center">
                <span>
                  <i className="bi bi-people-fill text-warning fs-1"></i>
                </span>
                <div className="people-count fw-bold fs-3">
                  <Counter target={35000} />+
                </div>
                <div className="text-secondary fs-6">Active Workers</div>
              </div>
              <div className="col text-center">
                <span>
                  <i className="bi bi-buildings-fill text-warning fs-1"></i>
                </span>
                <div className="people-count fw-bold fs-3">
                  <Counter target={500} />+
                </div>
                <div className="text-secondary fs-6">Projects Completed</div>
              </div>
              <div className="col text-center">
                <span className="fs-1 text-warning">
                  {" "}
                  <PiMedalFill />
                </span>
                <div className="people-count fw-bold fs-3">
                  <Counter target={50} />+
                </div>
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
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}
