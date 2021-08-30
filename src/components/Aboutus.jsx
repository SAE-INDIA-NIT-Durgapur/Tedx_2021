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
                <h2>About TED<sup>x</sup></h2>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      
      <section className="about-company-section">
        <div className="container p-1 p-sm-3">
          <div className="row">
          <Slide to bottom>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://learn.g2.com/hubfs/TED-talk-2016.jpg"
                alt="tedimg1"
              />
              <hr />
            </div>
            </Slide>
            <Slide to bottom>
            <div className="col-md-8">
              <h2 className="MuiTypography-root jss241 MuiTypography-h2">
                What is<span className="jss244"> TEDx</span>
              </h2>
              <hr />
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
                volutpat odio facilisis mauris sit amet massa. Quam nulla
                porttitor massa id neque aliquam. Amet aliquam id diam maecenas
                ultricies. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper
                sit amet. Id nibh tortor id aliquet lectus proin nibh. Ac odio
                tempor orci dapibus ultrices in iaculis. Ut porttitor leo a diam
                sollicitudin tempor. In dictum non consectetur a erat nam at
                lectus urna. Sit amet venenatis urna cursus eget. Enim facilisis
                gravida neque convallis. Ut eu sem integer vitae justo. Dolor
                sit amet consectetur adipiscing elit ut aliquam. Tristique
                senectus et netus et malesuada fames. Consequat nisl vel pretium
                lectus quam id leo in. Ultricies tristique nulla aliquet enim
                tortor. Varius vel pharetra vel turpis nunc eget lorem. Mauris
                in aliquam sem fringilla ut morbi tincidunt. Proin libero nunc
                consequat interdum varius sit amet. Sagittis orci a scelerisque
                purus semper eget. Nisi est sit amet facilisis magna etiam.
                Ornare lectus sit amet est placerat. Pharetra vel turpis nunc
                eget lorem dolor sed viverra. Non arcu risus quis varius quam
                quisque id. Vel fringilla est ullamcorper eget. At elementum eu
                facilisis sed. Tempor orci eu lobortis elementum nibh tellus
                molestie nunc non. Netus et malesuada fames ac turpis. Tellus
                molestie nunc non blandit massa enim
              </p>
              <hr />
            </div>
            </Slide>         
          </div>
        </div>
        <div className="container p-1 p-sm-3">
          <div className="row">
          <Slide to bottom>
            <div className="col-12">
              <h2 className="MuiTypography-root jss241 MuiTypography-h2">
                What is<span className="jss244"> TEDx</span>
              </h2>
              <hr />
            </div>
            </Slide>
            <Slide to bottom>
            <div className="col-md-8">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
                volutpat odio facilisis mauris sit amet massa. Quam nulla
                porttitor massa id neque aliquam. Amet aliquam id diam maecenas
                ultricies. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper
                sit amet. Id nibh tortor id aliquet lectus proin nibh. Ac odio
                tempor orci dapibus ultrices in iaculis. Ut porttitor leo a diam
                sollicitudin tempor. In dictum non consectetur a erat nam at
                lectus urna. Sit amet venenatis urna cursus eget. Enim facilisis
                gravida neque convallis. Ut eu sem integer vitae justo. Dolor
                sit amet consectetur adipiscing elit ut aliquam. Tristique
                senectus et netus et malesuada fames. Consequat nisl vel pretium
                lectus quam id leo in. Ultricies tristique nulla aliquet enim
                tortor. Varius vel pharetra vel turpis nunc eget lorem. Mauris
                in aliquam sem fringilla ut morbi tincidunt. Proin libero nunc
                consequat interdum varius sit amet. Sagittis orci a scelerisque
                purus semper eget. Nisi est sit amet facilisis magna etiam.
                Ornare lectus sit amet est placerat. Pharetra vel turpis nunc
                eget lorem dolor sed viverra. Non arcu risus quis varius quam
                quisque id. Vel fringilla est ullamcorper eget. At elementum eu
                facilisis sed. Tempor orci eu lobortis elementum nibh tellus
                molestie nunc non. Netus et malesuada fames ac turpis. Tellus
                molestie nunc non blandit massa enim
              </p>
              <hr />
            </div>
            </Slide>
            <Slide to bottom>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://conferences.ted.com/TED2012/images/carousel/LB_carousel_10_Prism.jpg"
                alt="tedimg2"
              />
              <hr />
            </div>
            </Slide>
          </div>
        </div>
      </section>
  
      <Slide to bottom>
      <section id="faqs">

        <div className="container"></div>
      </section>
      </Slide>
    </div>

  );
};

export default Aboutus;
