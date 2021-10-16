import React from 'react';
import { SidebarConatainer,Icon, CloseIcon, SidebarWrapper,SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SidebarElements';



const Sidebar = ({ isOpen, toggle }) => {
    return (
    <SidebarConatainer isOpen={isOpen} onClick={toggle}>

        <Icon onClick  = {toggle}>
            <CloseIcon />
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/'  onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to='/about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='/speakers'  onClick={toggle}>
                    Speakers
                </SidebarLink>
                <SidebarLink to='/team'  onClick={toggle}>
                    Team
                </SidebarLink>
                <SidebarLink to='/partners'  onClick={toggle}>
                    Partners
                </SidebarLink>
                {/* <SidebarLink to='/merchandise'  onClick={toggle}>
                    Merchandise
                </SidebarLink> */}

            </SidebarMenu>
             {/* <SideBtnWrap>
                <SidebarRoute to='/register'  onClick={toggle}>Register</SidebarRoute>
            </SideBtnWrap> */}
            <br/>

        </SidebarWrapper>
    </SidebarConatainer>
    );
};

export default Sidebar;