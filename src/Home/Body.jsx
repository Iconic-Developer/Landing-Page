import React from "react";
import "./Body.css";
import "./Animation.css";
import logo from "../images/labour.jpg";
import { PiMedalFill } from "react-icons/pi";
import { useRef, useState, useEffect } from "react";

const Body = () => {
  return (
    <>
      <main>
        <div className="container-fluid my-2 body">
          <div className="row flex-wrap-reverse my-5 p-3">
            <div className="col-12 col-md-8 mt-5 animated ">
              <h1 className=" fw-bold mt-4">
                Building India's{" "}
                <span className="text-warning">Infrastructure</span>,
              </h1>
              <h1 className="mb-3 fw-bold">One Workforce at a Time</h1>
              <p className="para my-4 fs-5">
                India's most trusted manpower outsourcing company, connecting
                skilled professionals with industry leaders across construction,
                manufacturing, and infrastructure sectors.
              </p>
              <div className="my-5">
                <div className="row buttons">
                  <div className="col-12 col-sm-5 gap-3 d-flex flex-wrap">
                    <button className="btn btn-lg btn-warning  quote-btn">
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
                  <div className="col-2">
                    <div className="media-icon">
                      <i class="bi bi-facebook"></i>{" "}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="media-icon">
                      <i class="bi bi-whatsapp "></i>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="media-icon">
         <i class="bi bi-instagram"></i>{" "}
                    </div>
                   
                  </div>
                  <div className="col-2">
                    <div className="media-icon">
                    <i class="bi bi-twitter"></i>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center body-img  ">
              <img src={logo} alt="" height={500} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="ruler"></div>
            </div>
          </div>
          {/* counter */}

          <div className="container my-4 ">
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
