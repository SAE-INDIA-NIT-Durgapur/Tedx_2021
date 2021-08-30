import React from 'react'
import '../CSS/Speaker.css'
import Slide from 'react-reveal/Slide'


const Speakers = () => {
    return (
        
          <div className="speakers-all">
             {/* <div className="quote">
                <span className="sub-quote">Why to choose</span> TED
             </div>  */}
<Slide right>
             <div className="container contain">
             <div className="col-10 ted-para" >
              <h2 className="p1">
                Why to choose<span className="p2">   TED</span>
              </h2>
              
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
                volutpat odio facilisis mauris sit amet massa. Quam nulla
                porttitor massa id neque aliquam. Amet aliquam id diam maecenas
                ultricies. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper
                sit amet. Id nibh tortor id aliquet lectus proin nibh. Ac odio
                tempor orci dapibus ultrices in iaculis. Ut porttitor leo a diam
                sollicitudin tempor. adipiscing elit ut aliquam. Tristique
                senectus et netus et malesuada fames. Consequat nisl vel pretium
                lectus quam id leo in. Ultricies tristique nulla aliquet enim
                tortor. Varius vel pharetra vel turpis nunc eget lorem. Mauris
                in aliquam sem fringilla ut morbi tincidunt. Proin libero nunc
                
              </p>
              
            </div>
               </div> 
               </Slide>
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
            <div className="text--head">Dreams</div>
            <div className="text--quote">“All our dreams can come true, if we have the courage to pursue them.”</div>
            <div className="text--person">Walt Disney</div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Never Give Up</div>
            <div className="text--quote">“It’s hard to beat a person who never gives up.”</div>
            <div className="text--person">Babe Ruth</div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Do it</div>
            <div className="text--quote">“Do one thing every day that scares you.”</div>
            <div className="text--person">Eleanor Roosevelt</div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Dreams</div>
            <div className="text--quote">“All our dreams can come true, if we have the courage to pursue them.”</div>
            <div className="text--person">Walt Disney</div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Never Give Up</div>
            <div className="text--quote">“It’s hard to beat a person who never gives up.”</div>
            <div className="text--person">Babe Ruth</div>
          </div>
        </div>
        <div className="block">
          <div className="overlay" />
          <div className="block--text">
            <div className="text--head">Do it</div>
            <div className="text--quote">“Do one thing every day that scares you.”</div>
            <div className="text--person">Eleanor Roosevelt</div>
          </div>
        </div>
      </div>
      </Slide>
         </div>  
        
    )
}

export default Speakers
