
import React from "react";
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        
    
    <footer className="text-center text-lg-start bg-light text-muted">
        
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            
            <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
                       <div>
                <NavLink to="/" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                </NavLink>
                <NavLink to="/" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink to="/" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                </NavLink>
                <NavLink to="/" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink to="/" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                </NavLink>
                <NavLink to="/" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                </NavLink>
            </div>
            
        </section>
        

        
        <section className="">
            <div className="container text-center text-md-start mt-5">
                
                <div className="row mt-3">
                    
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>BuddIt
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus, culpa ipsa dolor
                            explicabo maiores quidem omnis dolorum velit, similique maxime aspernatur nihil id
                            voluptatibus animi. Veritatis sapiente cumque maiores!
                        </p>
                    </div>
                    

                    
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4 f-ml-170" >
                            Products
                        </h6>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for Employers</NavLink>
                        </p>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for EAPs</NavLink>
                        </p>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for Universities</NavLink>
                        </p>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for non-profits</NavLink>
                        </p>
                    </div>
                    

                    
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                        <br/>
                        <br/>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for Brokers and Consultants</NavLink>
                        </p>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for Cities and Commmunities</NavLink>
                        </p>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for your children</NavLink>
                        </p>
                        <p>
                            <NavLink to="/" className="nav-link text-reset">BetterHelp for family</NavLink>
                        </p>
                    </div>
                    

                    
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        
                        <h6 className="text-uppercase fw-bold mb-4">
                            Contact
                        </h6>
                        <p><i className="fas fa-home me-3"></i> Our Head Office Shahdol, M.P., India</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            sonih8085@gmail.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i>+91234567890</p>
                        <p><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
                    </div>
                    
                </div>
                
            </div>
        </section>
        

        
        <div className="text-center p-4 f-bg" >
            © 2022 Copyright:
            <NavLink className="text-reset fw-bold" to="/">BuddIt</NavLink>
        </div>
        
    </footer>
    

    );
}

export default Footer;
