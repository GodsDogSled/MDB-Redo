import React from "react";
import styled from "styled-components" 

const NavLinksContainer =  styled.div`
  height:100%;
  display:flex;
  align-items:center;
`;

const LinksWrapper = styled.ul`
  margin:0;
  padding:0;
  display:flex;
  
  list-style:none;
 
`;

const LinkItem = styled.li`
  height:100%;
  padding: 0 1.1em;
  font-weight:500;
  color:white;
  font-size:14px;
  font-family:shapiro;
  border-top: 2px solid transparent;

  &:hover{
    border-top:2px solid blue;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color:inherit;
  font-size:inherit;
`;



export default function NavLinks(props){
 return <NavLinksContainer>
    <LinksWrapper>
      <LinkItem><Link to="/">Home</Link></LinkItem>
      <LinkItem><Link to="/favourites">Favourites</Link></LinkItem>
      <LinkItem><Link to="/about">About</Link></LinkItem>
    </LinksWrapper>
  </NavLinksContainer>
}