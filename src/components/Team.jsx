import React from 'react'
import '../CSS/Team.css'
import Slide from 'react-reveal/Slide';
import chetan from '../images/profile_pics/Chetan Gupta Grayscale.jpg'
import vishesh from '../images/profile_pics/v vishesh.png'
import shubham from '../images/profile_pics/subham_agarwall.png'
import soumik from '../images/profile_pics/Soumik Hazra.png'
import sukanya from '../images/profile_pics/sukanya_dutta.png'
import anurag from '../images/profile_pics/anurag singh.png'
import divas from '../images/profile_pics/Divas Gupta.png'
import suryadip from '../images/profile_pics/suryadip mondal.png'
import satyam from '../images/profile_pics/Satyam Shorya Grayscale.jpg'
import hemanth from '../images/profile_pics/hemanth.png'
import aniket from '../images/profile_pics/aniketpanigrahi.png'
import abhishek from '../images/profile_pics/abhisekh_singh.png'
import rounak from '../images/profile_pics/Raunak Das Grayscale.jpg'
import shubham_w from '../images/profile_pics/subham_gupta.png'
import ankita from '../images/profile_pics/Ankita Mandal GrayScale.jpeg'
import gaurav from '../images/profile_pics/kr. gaurav.png'
import samriddho from '../images/profile_pics/samriddha_saha.png'
import shubhangee from '../images/profile_pics/subhangee.png'
import ayush_kujur from '../images/profile_pics/Ayush Kujur Grayscale.jpg'
import Ayush_t from '../images/profile_pics/Ayush Tiwari.png'
import dyuti from '../images/profile_pics/Dyuti Mitra.png'
import sammanita from '../images/profile_pics/Sammanita Singh.png'
import vishal from '../images/profile_pics/vishal jaiswal.png'
import sivaji from '../images/profile_pics/SIVAJI GANESH NAIDU.png'
import anwesha from '../images/profile_pics/Anwesha Dan.png'
import tilak from '../images/profile_pics/Tilak Raj.png'
import jissu from '../images/profile_pics/jissnu_kundu.png'
import anshika from '../images/profile_pics/anshikachoudhary.png'
import ambika from '../images/profile_pics/ambikaneela.png'
import arunava from '../images/profile_pics/arunava_sarkar.png'
const TeamView = () => {
   return (
       <>
       <h1 className="text-center heading-team" style={{color:"#FF2B06", paddingTop:"50px"}}>OUR TEAM
       <hr/></h1>
      <h1 className="text-center heading-team" style={{color:"#FF2B06", paddingTop:"50px", fontFamily:"Montserrat"}}>ORGANIZERS</h1>
       <div className="fluid-container container-team">
      
      <Slide to bottom>
      <div className="card">
        <div className="imgBx">
          <img
            src= {chetan}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Chetan Gupta <br /><span>Licensee</span></h3>
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
            src={shubham}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Shubham Agarwal <br /><span>Co-Organiser</span></h3>
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
            src={vishesh}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>V Vishesh <br /><span>Cheif Curator</span></h3>
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
            src={rounak}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Rounak Das <br /><span>Executive Producer</span></h3>
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
            src={shubhangee}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Shubhangee <br /><span>Director of Operations</span></h3>
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
            src={ambika}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Ambika Biswas Neela <br /><span>Assistant Director of Operations</span></h3>
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
            src={ayush_kujur}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Ayush Abhishek Kujur  <br /><span>Director of Public Relation</span></h3>
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
            src={soumik}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Director of Finance <br /><span>Soumik Hazra</span></h3>
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
            <h3>Amit Tiwari <br /><span>Associate Director of Finance</span></h3>
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
            src={arunava}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Arunava Sarkar <br /><span>Director of Communication & Marketing</span></h3>
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
            src={abhishek}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Abhishek Singh <br /><span>Associate Director of Communication & Marketing</span></h3>
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
            src={gaurav}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Kumar Gaurav <br /><span>Webmaster</span></h3>
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
            src={jissu}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Jissu <br /><span>Video & Production Lead</span></h3>
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
            src={samriddho}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Samridho Saha <br /><span>cheif Designer</span></h3>
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
    <h1 className="text-center heading-team" style={{color:"#FF2B06", paddingTop:"50px", fontFamily:"Montserrat"}}>EXECUTIVES<hr/></h1>
    <div className="fluid-container container-team">
      
      <Slide to bottom>
       <div className="card">
        <div className="imgBx">
          <img
            src={divas}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Divas <br /><span></span></h3>
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
            src={satyam}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Satyam <br /><span></span></h3>
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
            src={shubham_w}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Shubham <br /><span></span></h3>
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
            src={anurag}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Anurag <br /><span></span></h3>
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
            src={hemanth}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Hemanth <br /><span></span></h3>
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
            src={ankita}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Aniket <br /><span></span></h3>
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
            src={sukanya}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Sukanya <br /><span></span></h3>
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
            src={suryadip}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Suryadip <br /><span></span></h3>
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
            src={anshika}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Anshika <br /><span></span></h3>
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
            src={vishal}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Vishal <br /><span></span></h3>
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
            src={sivaji}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Sivaji <br /><span></span></h3>
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
            src={Ayush_t}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Ayush tiwari <br /><span></span></h3>
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
            src={tilak}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Tilakraj <br /><span></span></h3>
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
            src={anwesha}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Anwesha Dan <br /><span></span></h3>
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
            src={sammanita}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Sammanita <br /><span></span></h3>
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
            src={dyuti}
            alt=""
          />
        </div>
        <div className="content">
          <div className="contentBx">
            <h3>Dyuti <br /><span></span></h3>
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