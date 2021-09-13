
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import img from './tedxnitdgp.png' 
import {AiFillFacebook,AiFillInstagram} from "react-icons/ai"

const Footer = () => {

    return (
        <div>
        <footer className="footer-section">    
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find Us</h4>
                                <span>Mahatma Gandhi Rd, A-Zone, Durgapur, West Bengal 713209</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9874700937-Chetan Gupta</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>admin@TEDxNITDurgapur.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a><img src={img} className="img-fluid" alt="logo" /></a>
                            </div>
                            <div className="footer-text">
                                {/* <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p> */}
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/SAENITD/"><AiFillFacebook size={32}/></a>
                                <a href="#"><AiFillInstagram size={32}/></a>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><NavLink to="/" exact>Home</NavLink></li>
                                <li><NavLink to="/about" exact>About Us</NavLink></li>                                                              
                                <li><NavLink to="/speakers" exact>Speakers</NavLink></li>
                                <li><NavLink to="/sponsors" exact>Sponsors</NavLink></li> 
                                <li><NavLink to="/team" exact>Team</NavLink></li>
                                <li><NavLink to="/register" exact>Register</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved</p>
                        </div>
                    </div>
                    {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer
