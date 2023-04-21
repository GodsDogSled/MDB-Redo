import React from "react";
import styled from "styled-components"
import Logo  from "../logo/index.js";
import NavLinks from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion"

const NavBarContainer = styled.div`
    position:sticky;
    background-color:black;
    top:0;
    z-index:999;
    margin-left: 15px;
    margin-right: 15px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:0;
    margin-top:0;
`;

const LeftSection = styled.div`
  display: flex;
  height:100%;
  
`;
const MiddleSection = styled.div`
  display: flex;
  height:100%;
`;
const RightSection = styled.div`
  display:flex;
  height:100%;
`;

export default function NavBar(props) {

  const isMobile = useMediaQuery({
    query: '(max-width: 700px)'
  })

  return <NavBarContainer >
    <LeftSection>
      <Logo />
    </LeftSection>
    <MiddleSection>
     {!isMobile &&  <NavLinks />}
    </MiddleSection>
    <RightSection>
      {isMobile && <MobileNav />}
    </RightSection>
  </NavBarContainer>
}