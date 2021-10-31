import React from "react";
import "../CSS/sponsor.css";
import  AsnaGarments from "../images/sponsors/1.jpg"
import GFG from "../images/sponsors/2.jpg"
import D2C from "../images/sponsors/3.jpg"
import CTP from "../images/sponsors/4.jpg"
import ELM from "../images/sponsors/5.jpg"
import CD from "../images/sponsors/6.jpg"
import NB from "../images/sponsors/7.jpg"
import TB from "../images/sponsors/8.jpg"
import SAE from "../images/sponsors/9.png"

const Sponsors = () => {
  return (
    <>
    {/* <div className="container sponsors">
      <hr />
      <div className="heading-sponsors">
        Why partner with
        <span>
          {" "}
          TED<sup>x</sup>
          <pull>NITDurgapur?</pull>
        </span>
      </div>
       <div className="content-sponsors">
       <p>
          TED<sup>x</sup>NITDurgapur being a prolific coalition, has a //promising
          range of audiences from the domains of technology, innovation,
          research, sociology and humanities. This collaboration will have a
          vital impact on innumerable masses through its brand value and rage.
          This diverse network is easily accessible and hence attracts a
          considerable population. The additional upshot of the combo is its
          outstanding theme "Ideas Worth Sharing". As a cherry on top is the
          precise theme " The Beautiful Mind" which is as fabulous as it sounds.
          The event not only surpasses the social standards but also wins an
          emotional aspect of the audience. TED<sup>x</sup>NITDurgapur has its
          mention for acclaim on social media like Facebook, Instagram and
          YouTube. This professes tremendous reach to communities across the
          globe.
        </p>
        <br />

        <div className="fluid-container register-main">
          <div className="row container register">
            <p className="Coming_Soon">
              Partners
              <br /> Coming soon
            </p>
          </div>
        </div>
      </div>
    </div> */}

    <div className="sponsors">
        <div className="container container-sponsors text-center">
            <div className="row row-sponsors">
                <div className="col-md-12 col-sm-12" text-align="center">
                    <h1 style={{ color: 'red' }}>Merchandise Partner</h1><br />
                    <div className="column-sponsors">
                        <img src={ AsnaGarments } classname="sponsors-img" alt="first" />.
                        {/* <img src={img1} classname="sponsors-img" alt="first" />
                        <img src={img1} classname="sponsors-img" alt="first" />
                        <img src={img1} classname="sponsors-img" alt="first" />
                        <img src={img1} classname="sponsors-img" alt="first" />
                        <img src={img1} classname="sponsors-img" alt="first" /> */}

                    </div>
                    <br/>
                    <h1 style={{ color: 'red' }}>Associate Sponsor</h1><br />
                    <div className="column-sponsors">
                         <img src={GFG} classname="sponsors-img" alt="second" />
                        {/*<img src={img1} classname="sponsors-img" alt="second2" />
                        <img src={img1} classname="sponsors-img" alt="second3" /> */}
                    </div>
                    <br/>
                    <h1 style={{ color: 'red' }}>Platform Partner</h1><br />
                    <div className="column-sponsors">
                         <img src={D2C} classname="sponsors-img" alt="second" />
                        {/*<img src={img1} classname="sponsors-img" alt="second" />
                        <img src={img1} classname="sponsors-img" alt="second" />
                        <img src={img1} classname="sponsors-img" alt="second" />
                        <img src={img1} classname="sponsors-img" alt="second" /> */}
                    </div>
                    <br/>
                    <h1 style={{ color: 'red' }}>Education Partner</h1><br />
                    <div className="column-sponsors">
                         <img src={ELM} classname="sponsors-img" alt="second" />
                        {/*<img src={img1} classname="sponsors-img" alt="second2" />
                        <img src={img1} classname="sponsors-img" alt="second3" /> */}
                    </div>
                    <br/>
                    <h1 style={{ color: 'red' }}>Media Partner</h1><br />
                    <div className="column-sponsors">
                         <img src={CTP} classname="sponsors-img" alt="second" />
                        <img src={CD} classname="sponsors-img" alt="second2" />
                        <img src={NB} classname="sponsors-img" alt="second3" />
                        {/*<img src={img1} classname="sponsors-img" alt="second" />
                        <img src={img1} classname="sponsors-img" alt="second2" />
                        <img src={img1} classname="sponsors-img" alt="second3" /> */}
                    </div>
                    <br/>
                    <h1 style={{ color: 'red' }}>Learning Partner</h1><br />
                    <div className="column-sponsors">
                         <img src={TB} classname="sponsors-img" alt="second" />
                        {/*<img src={img1} classname="sponsors-img" alt="second2" />
                        <img src={img1} classname="sponsors-img" alt="second3" />
                        <img src={img1} classname="sponsors-img" alt="second" />
                        <img src={img1} classname="sponsors-img" alt="second2" />
                        <img src={img1} classname="sponsors-img" alt="second3" /> */}
                    </div>
                    <br/>
                    <h1 style={{ color: 'red' }}>Associate Partner</h1><br />
                    <div className="column-sponsors">
                        <img src={SAE} classname="sponsors-img" alt="second" />
                        {/* <img src={img1} classname="sponsors-img" alt="second2" />
                        <img src={img1} classname="sponsors-img" alt="second3" />
                        <img src={img1} classname="sponsors-img" alt="second" />
                        <img src={img1} classname="sponsors-img" alt="second2" />
                        <img src={img1} classname="sponsors-img" alt="second3" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Sponsors;
