import React from 'react';


import Countdown from './Countdown';


import "../CSS/home.css";

const Home = () => {
    return (
        <div>

            {/* What is Tedx */}
            {/* <Slide to bottom> */}
            <section className="pt100 pb100">
                <div className="container">
                    <div className="section_title">
                        <h3 className="title">
                            What is <span style={{ color: "red", fontWeight: "bold" }}>Ted<sup>x</sup></span>
                        </h3>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-12 para">
                                <p>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxNITDurgapur, where x = independently organized TED event. At our TEDxNITDurgapur event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized. For more information, you can check out <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank"><u>TEDx Program Initiative</u></a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </Slide> */}
            <section className="" >

                {/* <UrgeWithPleasureComponent />
                <UrgeWithPleasureComponent />
                <UrgeWithPleasureComponent />
                <UrgeWithPleasureComponent /> */}
                <Countdown />

            </section>





        </div>
    )
}

export default Home;
