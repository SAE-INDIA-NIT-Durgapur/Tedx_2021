import React from 'react'
import '../CSS/Speaker.css'
import Slide from 'react-reveal/Slide'
import rupesh from "../images/rupesh.jpeg"


const Speakers = () => {
  return (

    <div className="speakers-all">

      <Slide to right>

      </Slide>
      <div className="fluid-container register-main">
        <div className="row container register">

          <p
            className="Coming_Soon">
            {/* To be announced soon... */}
          </p>

        </div>
      </div>
      {/* <p className="container ans">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil ea sapiente pariatur iste dignissimos deleniti eaque
                   aspernatur qui modi deserunt inventore temporibus officiis
                    fugit excepturi incidunt, animi explicabo alias! Deserunt.
                    </p> */}
      <Slide to bottom>
        <div className="fluid-container">
          <div className="block">
            <div className="overlay" />
            <div className="block--text">
              {/* <div className="text--head">Dreams</div>
              <div className="text--quote">“All our dreams can come true, if we have the courage to pursue them.”</div>
              <div className="text--person">Walt Disney</div> */}
            </div>
          </div>
          <div className="block">
            <div className="overlay" />
            <div className="block--text">
              {/* <div className="text--head">Never Give Up</div>
              <div className="text--quote">“It’s hard to beat a person who never gives up.”</div>
              <div className="text--person">Babe Ruth</div> */}
            </div>
          </div>
          <div className="block">
            <div className="overlay" />
            <div className="block--text">
              {/* <div className="text--head">Do it</div>
              <div className="text--quote">“Do one thing every day that scares you.”</div>
              <div className="text--person">Eleanor Roosevelt</div> */}
            </div>
          </div>
          <div className="block">
            <div className="overlay" />
            <div className="block--text">
              {/* <div className="text--head"></div>
              <div className="text--quote">A fine cook who integrated the dynamic Bengali spices with the seasoned western palette,she presented the far eastern delicacies to the world on MasterChef Australia.</div>
              <div className="text--person  text-danger" style={{ color: "orangered" }}>Kishwar Chowdhury</div> */}
            </div>
          </div>
          <div className="block">
            <div className="overlay" />
            <div className="block--text">
              {/* <div className="text--head">Never Give Up</div>
              <div className="text--quote">“It’s hard to beat a person who never gives up.”</div>
              <div className="text--person">Babe Ruth</div> */}
            </div>
          </div>

        </div>
      </Slide>
    </div>

  )
}

export default Speakers
