import React from 'react'
import * as THREE from 'three';
import Slide from 'react-reveal/Slide';
import { useState, useEffect, useRef } from 'react'
import WAVES from '../../node_modules/vanta/dist/vanta.net.min'
import Countdown from "./Countdown"


const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            window.THREE = THREE;
            setVantaEffect(WAVES({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xff2b06,
                backgroundColor: 0x1b1b1b,
                THREE: window.THREE
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    
    return (
        <div className="top-main" ref={myRef}>
            <section className="home ">
                <div className="container-fluid justify-content-center align-items-center">
                    <div className="row  vh-100  justify-content-center align-items-center" >
                        <Slide to bottom>
                            <div className="col-md-6" style={{ marginTop: "-80px" }}>
                                <h1 className="tedx1 text-center text-light"><span style={{color:"#FF2B06"}}>TED</span><sup style={{color:"#FF2B06"}}><sup><sub>x</sub></sup></sup><span>NITDurgapur</span></h1>
                                <h4 className=" tedx2 text-center text-light"> <span style={{color:"#FF2B06"}}>x</span> = independently organized TED event </h4>
                                <Countdown/>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </div> 
    )
}

export default Home
