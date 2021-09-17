import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import $ from 'jquery';
import logo from '../../images/tedx2.png'
const Navbar = () => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    // $(".hori-selector").css({
    //   "top": itemPosNewAnimTop.top + "px",
    //   "left": itemPosNewAnimLeft.left + "px",
    //   "height": activeWidthNewAnimHeight + "px",
    //   "width": activeWidthNewAnimWidth + "px"
    // });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    // $(window).on('resize', function () {
    //   setTimeout(function () { animation(); }, 100);
    // });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg sticky-top">

      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <img src={logo} style={{ height: "35px", width: "100%", padding: "0!important" }} />
      </NavLink>



      <GiHamburgerMenu className="navbar-toggler" size={50}
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" color="black" />


      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/" exact>
              <i
                className="fas fa-tachometer-alt">
              </i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i
                className="far fa-address-book">
              </i>About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/speakers" exact>
              <i
                className="far fa-clone">
              </i>Speakers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/team" exact>
              <i
                className="far fa-chart-bar">
              </i>Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sponsors" exact>
              <i
                className="far fa-chart-bar">
              </i>Partners
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register" exact>
              <i
                className="far fa-copy">
              </i>Register
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
