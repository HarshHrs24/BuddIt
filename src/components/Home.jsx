
import React from "react";
import { NavLink } from "react-router-dom";
import About from './About';
import Services from './Services';
import Contact from './Contact';
import himg from '../img/h-bg.jpg'
function Home() {
    return (
        <>
            <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-cente flex-column">
                                    <h1>You deserve to be happy.</h1>
                                    <h2 className="my-3">What type of therapy are you looking for?</h2>
                                    <div className="mt-3">
                                        <NavLink exact={true} to="/about" className="btn-get-started">Get started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={himg} className="img-fluid animated" alt="homeimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Contact />
        </>
    );
}

export default Home;
