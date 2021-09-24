import { NavLink as Link } from 'react-router-dom';
import styled from '../../../node_modules/styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  display: flex;
  margin-top: -80px;
  justify-content: center;
  position: sticky;
  font-size: 1.2rem !important;
  top: 0;
  padding: 0.5rem calc((100vw - 1100px) / 2);
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavbarConainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1000px;
`;

export const NavLink = styled(Link)`
  color: #a3a3a3;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  text-decoration: none !important;
  padding: 0 1rem;
  height: 100%;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &.active {
    transition: all 0.3s ease-in-out;
    color: #ff2b06;
  } 

  &:before{
  content: '';
  color: #fff;
  top: 80%;
  left: 0px;
  width: 100%;
  height: 2px;
  display: block;
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  -webkit-transform: scale(0, 1);
  -ms-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
  transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
  }

  &:hover{
    color: #fff;
    -webkit-transform-origin: left top;
	-ms-transform-origin: left top;
	transform-origin: left top;
	-webkit-transform: scale(1, 1);
	-ms-transform: scale(1, 1);
	transform: scale(1, 1);
  } 
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none !important;
  margin-left: 24px;
  font-family: 'Roboto';
  


  &:hover {
    
    transition: all 0.2s ease-in-out;
    background: #fff;
    box-shadow: ;
    color: #ff2b06;
  }
`;