import React from 'react'
import * as THREE from 'three';
import Slide from 'react-reveal/Slide';
import { useState, useEffect, useRef } from 'react'
import BIRDS from '../../node_modules/vanta/dist/vanta.waves.min'
import Countdown from "./Countdown"
import logo from "../images/tedxnitdgp.png"


const Home = () => {
    // const [vantaEffect, setVantaEffect] = useState(0)
    // const myRef = useRef(null)
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(BIRDS({
    //             el: myRef.current,
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             color: 0x0
    //         }))
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy()
    //     }
    // }, [vantaEffect])
    return (
        <div className="top-main">
            <section className="home ">
                <div className="container-fluid justify-content-center align-items-center">
                    <div className="row  vh-100  justify-content-center align-items-center" >
                        <Slide to bottom>
                            <div className="col-md-6" style={{ marginTop: "0px" }}>
                                <img src={logo} style={{ position: "center", width: "100%" }} />
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
