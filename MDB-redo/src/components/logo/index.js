import React from "react";
import styled from "styled-components";
import logo from "../../images/&Chill_Logo.png"

const LogoWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  

`;

const LogoImg = styled.div`
  height:35px;

  img{
    width:100%;
    height:100%;
  }
`;

export default function Logo(props){
  return <LogoWrapper>
          <LogoImg><img src={logo} alt="&chill logo" /></LogoImg>
         </LogoWrapper>
}