import React from 'react'
import '../CSS/Team.css'
import Slide from 'react-reveal/Slide';

const TeamView = () => {
   return (
       <>
       <h1 className="text-center" style={{color:"#FF2B06", paddingTop:"50px"}}>Our Team</h1>
      
       <div className="fluid-container container-team">
      
      <Slide to bottom>
      <div className="card">
        <div className="imgBx">
          <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>ASHUTOSH <br /><span>Web Developer</span></h3>
          </div>
          <ul className="sci">
            <li>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>   
      </div>
      </Slide>

      <Slide to bottom>
      <div className="card">
        <div className="imgBx">
          <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>ISHAN <br /><span>Web Developer</span></h3>
          </div>
          <ul className="sci">
            <li>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>   
      </div>
      </Slide>

      <Slide to bottom>
      <div className="card">
        <div className="imgBx">
          <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>ASIF <br /><span>Web Developer</span></h3>
          </div>
          <ul className="sci">
            <li>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>   
      </div>
      </Slide>

        <Slide to bottom>
       <div className="card">
        <div className="imgBx">
          <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>KUSHAL <br /><span>Web Developer</span></h3>
          </div>
          <ul className="sci">
            <li>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>   
      </div>
      </Slide>
      
       <Slide to bottom>
       <div className="card">
        <div className="imgBx">
          <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>RAHUL <br /><span>Web Developer</span></h3>
          </div>
          <ul className="sci">
            <li>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>   
      </div>
      </Slide>
    </div>
       </>
   )
}

export default TeamView