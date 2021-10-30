import React from 'react'
import '../CSS/Speaker.css'
import Slide from 'react-reveal/Slide'


const Speakers = () => {
  return (

    <div className="speakers-all">

      <Slide to right>
      </Slide>
      <div className="fluid-container register-main">
        <div className="speaker"><h1
        className="text-center speaker-heading"
        style={{ color: "#FF2B06", paddingTop: "50px" }}
      >
        OUR SPEAKERS
        <hr />
      </h1></div>
        
      </div>
      {/* <div className="fluid-container register-main">
        <div className="row container register">
          <p
            className="Coming_Soon">
            To Be Announced soon
          </p>
        </div>
      </div> */}
      
      <Slide to bottom>
        <div className="fluid-container">
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head"></div>
             <div className="text--quote style={{ color:white }}">“ 
             A research intern at Harvard, Mr. Mahore’s ingenious brainchild, Oxyserve,
              a device to monitor and optimize the use of oxygen during the COVID-19 pandemic, was selected for the CERN - Entrepreneurship Program 2021.”</div>
            <div className="text--person"></div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head"></div>
            <div className="text--quote">“The best-selling author of over 30 novels and the Diva Magazine Author of the year award nominee for 2020 and 2021”</div>
            <div className="text--person"></div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head"></div>
            <div className="text--quote">“
            Head of the Department of Mental Health and Behavioral Sciences at Fortis Healthcare, A clinical psychologist by profession, with an impressive reputation.
            ”</div>
            <div className="text--person"></div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head"></div>
            <div className="text--quote">“
            A fine cook who integrated the dynamic Bengali spices with the seasoned western palette, she presented the far eastern delicacies to the world on MasterChef Australia”</div>
            <div className="text--person"></div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head"></div>
            <div className="text--quote">“Founder of one of the world’s fastest-growing tech company, Global Inc., became the youngest leader in the history of the World Economic Forum”</div>
            <div className="text--person"></div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head"></div>
            <div className="text--quote">"Founder of startups MENTORx Global and HoverRobotix. He has been awarded the prestigious "Karmveer Chakra" by United Nations. He is also the Noble Asian of the Year 2018"</div>
            <div className="text--person"></div>
          </div>
        </div>
        </div>
      </Slide>
    </div>

  )
}

export default Speakers