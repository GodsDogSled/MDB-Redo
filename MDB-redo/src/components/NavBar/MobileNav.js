import React from "react";
import styled from "styled-components" 
import { useEffect, useState } from "react";
import MenuToggle from "./menuToggle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchWidget from "./SearchWidget";
// import SearchBar from "./SerachBar";

const NavLinksContainer =  styled.div`
  height:100%;
  
  display:flex;
  align-items:center;
  justify-content:center;
  transition: 0.5s;
  transition: width 2s, height 4s; 
`;

const LinksWrapper = styled.ul`
  margin:0;
  padding:0;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height:10%;
  width:100%;
  list-style:none;
  background-color: #fff;
  z-index:999;
  
  position: fixed;
  top: 100px;
  left: 0;

  transition:  1s;
  
 
`;

const LinkItem = styled.li`
  padding: 0 1.1em;
  font-weight:500;
  color:black;
  font-size:14px;
  font-family:shapiro;
  border-top: 2px solid transparent;
  margin:0 auto;
  transition: 0.5s;
`;

const SearchContainer =  styled.div`
  position: fixed;
  bottom:15%;
  right:0;
  background-color:white;
  border-radius:10px 0px 0px 10px;
  padding:1rem;
  height:25px;
  width:25px;
`

export default function MobileNav(props){
  const [isOpen, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(()=>{
    let myTO=null;
    const toggle = () => {
      if(myTO){
        clearTimeout(myTO);
      }
      setIsScrolling(true);
      myTO = setTimeout(() => {
        setIsScrolling(false);
      }, "800")
    }
    window.addEventListener("scroll", toggle);
  });
 return<>
 <NavLinksContainer >
    <MenuToggle isOpen = {isOpen} toggle={()=> setOpen(!isOpen)}/>
    {isOpen && <motion.ul animate={{height:100}} transition={{duration:.00001}} className = "mobileAnimation">
        <LinkItem><Link onClick={()=> setOpen(false)} to="/">Home</Link></LinkItem>
        <LinkItem><Link onClick={()=> setOpen(false)} to="/favourites">Favourites</Link></LinkItem>
        <LinkItem><Link onClick={()=> setOpen(false)} to="/about">About</Link></LinkItem>
    </motion.ul>}
</NavLinksContainer>
{!isScrolling && <SearchContainer className="search-widget"><SearchWidget /></SearchContainer>}
</> 
}