import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarConatainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  overflow: hidden;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px)
  {
    grid-template-rows: repeat(6,60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  text-decoration: none !important;
  list-styled: none;
  transition: 0.2s ease-in-out;
  color: #ff2b06 !important;
  cursor: pointer;

  &:hover{
    color: #fff !important;
    letter-spacing: 5px;
    transition: 0.5s ease-in-out;
  }
` ;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 30px;
  white-space: nowrap;
  padding: 16px 64px;
  color: #ff2b06;
  background: #fff;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.0.6s ease-in-out;
  text-decoration: none !important;

  &:hover{
    transition: all 0.6s ease-in-out;
    color: #ff2b06;
    
    border-radius: 50px;
  }
`;