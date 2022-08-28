

import React from "react";
import { NavLink } from "react-router-dom";
import s2 from '../img/s2.jpg';
import s3 from '../img/s3.jpg';
import s1 from '../img/s1.jpg';
import s4 from '../img/s4.jpg';
import s5 from '../img/s5.jpg';
import s6 from '../img/s6.jpg';
import s7 from '../img/s7.jpg';
import s8 from '../img/s8.jpg';

function Services() {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="container text-center">

            <div className="row">
              <div className="col-md-112">
                <div className="title">
                  <h2 className="titleText">Our <span>S</span>ervices</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s1} alt="Icon" />
                <h3>BetterHelp for Employers</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s2} alt="Icon" />
                <h3>BetterHelp for EAPs</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s3} alt="Icon" />
                <h3>BetterHelp for Universities</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s4} alt="Icon" />
                <h3>BetterHelp for non-profits</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s5} alt="Icon" />
                <h3>BetterHelp for Brokers and Consultants</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s6} alt="Icon" />
                <h3>BetterHelp for Cities and Commmunities</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s7} alt="Icon" />
                <h3>BetterHelp for your children</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium ornare velit non
                </p>
                <NavLink to="/">Read More</NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src={s8} alt="Icon" />
                <h3>BetterHelp for family</h3>
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

export default Services;
