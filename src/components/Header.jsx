import React from "react";
import Button from '@mui/material/Button';
const Logo = ()=> (
    <div key={"logo"} className="logo">
        <img src="src\assets\logo img.jpeg"></img>
    </div>
    
) 
const Header=()=>{
 return (
    <>
   <div className="header-container">
    <div key={"header"} className="header">
        <div className="header-logo" >
        <Logo/>
        </div>
     <div key={"nav-bar"} className="nav-list">
        <ul className="ul-header">
            {/* <li>Home</li>
            <li>About</li>
            <li>Contact</li> */}
            <Button variant="contained" >Home</Button>
            <Button variant="contained">About</Button>
            <Button variant="contained">Contact</Button>
            <Button variant="contained">Profile</Button>
           
        </ul>
        </div> 
        </div>
        </div>
    </>
 );
}
export default Header;