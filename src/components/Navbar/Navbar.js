import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavbarConainer
} from './element.js';
// import $ from 'jquery';
import logo from '../../images/tedxnitdgp.png'
import './Navbar.css'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Nav>
      <NavbarConainer>
        <NavLink className="nav_logo" to='/'>
          <img src={logo} className="nav_logo" style={{ height: "35px", width: "100%", padding: "0!important" }} alt='logo' />
        </NavLink>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/speakers' activeStyle>
            Speakers
          </NavLink>
          <NavLink to='/team' activeStyle>
            Team
          </NavLink>
          <NavLink to='/sponsors' activeStyle>
            Partners
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/register' >Register</NavBtnLink>
        </NavBtn>
      </NavbarConainer>
    </Nav>
  )
}
export default Navbar;
