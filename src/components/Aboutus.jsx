import React from "react";
import Slide from 'react-reveal/Slide';
import "../CSS/AboutUs.css";


const Aboutus = () => {
  return (

    <div className="container-fluid container-fluid-aboutus">
      <Slide to bottom>
        <section className="breadcrumps-section">
          <div className="container p-1 p-sm-3">
            <div className="row">
              <div className="col-12">
                {/* <h2>About TED<sup>x</sup></h2> */}
              </div>
            </div>
          </div>
        </section>
      </Slide>

      <section className="about-company-section">
        <div className="container p-1 p-sm-3">
          <div className="row">

            <Slide to bottom>
              <div className="col-md-8 order-sm-0 order-last">
                <h2 className="MuiTypography-root jss241 MuiTypography-h2">
                  About<span className="jss244">NIT Durgapur</span>
                </h2>
                <hr />
                <p className="mb-0">
                  Established in 1960, National Institute of Technology Durgapur is a premier engineering institute within the country, which since its inception has trained proficient engineers and leaders, whose achievements are awe inspiring. Our institute is home to a formidable talent pool, exhibiting remarkable skills in a multitude of domains. Ranked 29th for engineering and 6th ong NITs, according to the National Institutional Ranking Framework (NIRF), the excellence displayed by the institute in every academic year is a testament to its promising years ahead.

                </p>
                <hr />
              </div>
            </Slide>
            <Slide to bottom>
              <div className="col-md-4 ">
                <img
                  className="img-fluid"
                  src="https://learn.g2.com/hubfs/TED-talk-2016.jpg"
                  alt="tedimg1"
                />
                <hr />
              </div>
            </Slide>
          </div>
        </div>
        <div className="container p-1 p-sm-3">
          <div className="row">
            <Slide to bottom>
              <div className="col-md-4 ">
                <img
                  className="img-fluid"
                  src="https://learn.g2.com/hubfs/TED-talk-2016.jpg"
                  alt="tedimg1"
                />
                <hr />
              </div>
            </Slide>
            <Slide to bottom>
              <div className="col-md-8 order-sm-3">
                <h2 className="MuiTypography-root jss241 MuiTypography-h2">
                  What is<span className="jss244"> TED</span>
                </h2>
                <hr />
                <p className="mb-0">
                  Founded in 1984, TED is a nonprofit devoted to spreading ideas, usually in the form of short powerful talks. A global community, wherein people regardless of their discipline or culture can seek a deeper understanding of the world, TED believes vehemently in the power of ideas to alter attitudes, lives and ultimately the world, for the better. TED Conferences are dedicated to the organization’s global mission of researching and sharing meaningful new ideas, in order to assist in amplifying ideas and innovations that matter. TED’s initiatives are a winning formula of brilliant, curious minds and groundbreaking content in an immersive and educational environment.
                </p>
                <hr />
              </div>
            </Slide>
          </div>
        </div>
        <div className="container p-1 p-sm-3">
          <div className="row">

            <Slide to bottom>
              <div className="col-md-8 order-sm-0 order-last">
                <h2 className="MuiTypography-root jss241 MuiTypography-h2">
                  What is<span className="jss244"> TEDx</span>
                </h2>
                <hr />
                <p className="mb-0">

                  TEDx is an independently organized equivalent to its international counterpart, TED. Resonating with TED’s mission of researching and discovering “ideas worth spreading”, TEDx aims to provide a credible platform to an emerging pool of talent at the grassroots, subsequently sparking constructive discussions locally.

                </p>
                <hr />
              </div>
            </Slide>
            <Slide to bottom>
              <div className="col-md-4 order-sm-0 ">
                <img
                  className="img-fluid"
                  src="https://learn.g2.com/hubfs/TED-talk-2016.jpg"
                  alt="tedimg1"
                />
                <hr />
              </div>
            </Slide>
          </div>
        </div>
        <div className="container p-1 p-sm-3">
          <div className="row">
            <Slide to bottom>
              <div className="col-md-4 ">
                <img
                  className="img-fluid"
                  src="https://learn.g2.com/hubfs/TED-talk-2016.jpg"
                  alt="tedimg1"
                />
                <hr />
              </div>
            </Slide>
            <Slide to bottom>
              <div className="col-md-8 ">
                <h2 className="MuiTypography-root jss241 MuiTypography-h2">
                  What is<span className="jss244"> TEDxNITDurgapur</span>
                </h2>
                <hr />
                <p className="mb-0">
                  TEDxNITDurgapur is an independently organized event under an official license granted by TED. An event which will provide a reputable platform to a diverse assemblage of voices from a plethora of spheres to propagate ingenious ideas and thoughts, consequently propelling rational thought and original thinking amongst the audience. Scheduled to be held on the 31st of October, TEDxNITDurgapur would feature a series of talks, focusing on the theme –“A Beautiful Mind”.
                  Keeping in accordance with the precautionary measures owing to the raging pandemic, the event will be held on an online platform. Regardless of the circumstances, the team of TEDxNITDurgapur, reassures to deliver efficiently and ensures to conduct a riveting event, one that inspires and evokes prudent thought.

                </p>
                <hr />
              </div>
            </Slide>

          </div>
        </div>
      </section>


    </div>

  );
};

export default Aboutus;

