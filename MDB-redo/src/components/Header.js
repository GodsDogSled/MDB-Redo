import { Link } from "react-router-dom";
import SearchBar from "./SerachBar";

function Header({appTitle}) {
    return (
        <header>
          
        <nav className="nav-header">
          
          <div id="hamburger-1" class="mobile-show">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
          <Link className="home-icon-src" to="/">
          <img className="homeicon" src={require('../images/icon.png')} alt="logo" />  
          </Link>
          
          <Link to="/" >
            Home
          </Link> 
          
          <Link to="/about" >
            About
          </Link>
         
          <Link to="/favourites">
            Favourites
          </Link>
          
        </nav>
           
          <SearchBar/>
          
        
        
      </header>
        )
}

export default Header;