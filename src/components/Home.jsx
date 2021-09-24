import React from 'react'
import * as THREE from 'three';
import Slide from 'react-reveal/Slide';
import { useState, useEffect, useRef } from 'react'
import BIRDS from '../../node_modules/vanta/dist/vanta.waves.min'
import Countdown from "./Countdown"
import logo from "../images/tedxnitdgp.png"


const Home = () => {

    return (
        <div className="top-main">
            <section className="home ">
                <div className="container-fluid justify-content-center align-items-center">
                    <div className="row  vh-100  justify-content-center align-items-center" >
                        <Slide to bottom>
                            <div className="col-md-6" style={{ marginTop: "0px" }}>
                                <img src={logo} style={{ position: "center", width: "100%" }} />
                                <br />
                                <br />
                                <br />


                                {/* <p
                                    className="Coming_Soon">
                                    Coming soon...
                                </p> */}


                                <Countdown />
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
