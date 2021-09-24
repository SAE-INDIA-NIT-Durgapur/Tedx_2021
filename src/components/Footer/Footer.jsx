
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import img from './tedxnitdgp.png'
import { AiFillFacebook, AiFillInstagram, AiOutlineArrowUp } from "react-icons/ai"
import { FaArrowCircleUp } from "react-icons/fa"

const Footer = (props) => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
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
                                        <span>{props.data}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>admin@tedxnitdurgapur.com</span>
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

                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="https://www.facebook.com/SAENITD/"><AiFillFacebook size={32} /></a>
                                        <a href="https://instagram.com/tedxnitdurgapur?utm_medium=copy_link"><AiFillInstagram size={32} /></a>

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

                        </div>
                    </div>

                    <div className="">
                        <button className="text-end float-right " onClick={scrollToTop} style={{
                            backgroundColor: "#ff2b06",
                            padding: "10px",
                            border: "none",
                            borderRadius: "10px",
                            marginRight: "10px",
                            fontWeight: "bold"
                        }}>
                            <AiOutlineArrowUp color="white" size={20}
                                style={{ display: visible ? 'inline' : 'none' }} />
                        </button>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer
