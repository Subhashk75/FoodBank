import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const Logo = ()=> (
    <div key={"logo"} className="logo">
        <img src="src\assets\Designer (3).png" width="100px" height="100px"></img>
    </div>
    
) 
const Header=()=>{
 return (
    <>
    <header className="header-container">
      <div className="header">
        <div className="header-logo">
          <Logo />
        </div>
        <nav className="nav-list">
          <ul className="ul-header">
            <li>
              <Button variant="contained" component={Link} to="/home">
                Home
              </Button>
            </li>
            <li>
              <Button variant="contained" component={Link} to="/about">
                About
              </Button>
            </li>
            <li>
              <Button variant="contained" component={Link} to="/contact">
                Contact
              </Button>
            </li>
            <li>
              <Button variant="contained" component={Link} to="/profile">
                Profile
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
 );
}
export default Header;