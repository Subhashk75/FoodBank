import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
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
        <h2 className="header-title" style={{display:"none" ,height:"0px" ,width:"0px"}}>Food Donate</h2>   
        <Logo/>
        </div>
     <div key={"nav-bar"} className="nav-list">
        <ul className="ul-header">
            {/* <li>Home</li>
            <li>About</li>
            <li>Contact</li> */}
            <Button variant="contained" ><Link to="/" style={{textDecoration :'none'}}>Home</Link></Button>
            <Button variant="contained"><Link to="/about" style={{textDecoration :'none'}}>About</Link></Button>
            <Button variant="contained"><Link to="/contact" style={{textDecoration :'none'}}>Contact</Link></Button>
            <Button variant="contained"><Link to="/profile" style={{textDecoration :'none'}}>Profile</Link></Button>
           
        </ul>
        </div> 
        </div>
        </div>
    </>
 );
}
export default Header;