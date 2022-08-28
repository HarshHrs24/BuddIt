

import React from "react";
import { NavLink } from "react-router-dom";
import s2 from '../img/h-1.png';
import s3 from '../img/h-2.png';
import s1 from '../img/h-3.png';
import s4 from '../img/h-4.png';
import s5 from '../img/h-5.png';
import s6 from '../img/h-6.png';


function Howitworks() {
  return (

    <>
      <div className="service">
        <div className="container">
          <div className="container text-center">

            <div className="row">
              <div className="col-md-112">
                <div className="title">
                  <h2 className="titleText">How it <span>W</span>orks</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src={s1} alt="Icon" />
                <h3>4 modalities to communicate</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src={s2} alt="Icon" />
                <h3>Dynamic member management</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src={s3} alt="Icon" />
                <h3>Quick implementation</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src={s4} alt="Icon" />
                <h3>Groupinars</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src={s5} alt="Icon" />
                <h3>Robust reporting</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src={s6} alt="Icon" />
                <h3>Largest and most diverse provider network</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>

  );
}

export default Howitworks;
